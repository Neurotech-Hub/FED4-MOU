(function () {
  "use strict";

  const PACKAGING_COST = 20;
  const NTH_INTERNAL_MARGIN = 0.3;
  const INSTITUTIONAL_GOODS_TAX = 0.2;
  const ENGINEERING_DEBT = 6000;
  const PRE_PRODUCTION_DEBT = 2400;
  const TOTAL_ENGINEERING_DEBT = ENGINEERING_DEBT + PRE_PRODUCTION_DEBT;
  const RESTOCK_BATCH = 100;
  const EXCLUSIVE_UNITS = 1000;

  const currencyFmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const currencyPreciseFmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const sliders = {
    pcb: document.getElementById("pcb-battery-cost"),
    enclosure: document.getElementById("enclosure-cost"),
    assembly: document.getElementById("assembly-programming-cost"),
  };

  const sliderValueEls = {
    pcb: document.getElementById("pcb-battery-cost-value"),
    enclosure: document.getElementById("enclosure-cost-value"),
    assembly: document.getElementById("assembly-programming-cost-value"),
  };

  const summaryEls = {
    baseDeviceCost: document.getElementById("base-device-cost"),
    internalSalePrice: document.getElementById("internal-sale-price"),
    externalSalePrice: document.getElementById("external-sale-price"),
    profitPerUnit: document.getElementById("profit-per-unit"),
    initialPosition: document.getElementById("initial-position"),
    breakEvenUnit: document.getElementById("break-even-unit"),
    finalProfit: document.getElementById("final-profit"),
  };

  function readState() {
    return {
      pcb: Number(sliders.pcb.value),
      enclosure: Number(sliders.enclosure.value),
      assembly: Number(sliders.assembly.value),
    };
  }

  function computeModel(state) {
    const baseDeviceCost =
      state.pcb + state.enclosure + state.assembly + PACKAGING_COST;
    const internalSalePrice = baseDeviceCost * (1 + NTH_INTERNAL_MARGIN);
    const externalSalePrice =
      internalSalePrice * (1 + INSTITUTIONAL_GOODS_TAX);
    const profitPerUnit = baseDeviceCost * NTH_INTERNAL_MARGIN;

    const restockCost = RESTOCK_BATCH * baseDeviceCost;
    const initialPosition = -TOTAL_ENGINEERING_DEBT - restockCost;

    const data = [];
    let position = initialPosition;
    let breakEvenUnit = null;

    data.push({ x: 0, y: position });

    for (
      let batchStart = 0;
      batchStart < EXCLUSIVE_UNITS;
      batchStart += RESTOCK_BATCH
    ) {
      if (breakEvenUnit === null) {
        for (let n = 1; n <= RESTOCK_BATCH; n++) {
          const p = position + n * internalSalePrice;
          if (p >= 0) {
            breakEvenUnit = batchStart + n;
            break;
          }
        }
      }
      const batchEnd = batchStart + RESTOCK_BATCH;
      position += RESTOCK_BATCH * internalSalePrice;
      data.push({ x: batchEnd, y: position });
      if (batchEnd < EXCLUSIVE_UNITS) {
        position -= restockCost;
        data.push({ x: batchEnd, y: position });
      }
    }

    return {
      baseDeviceCost,
      internalSalePrice,
      externalSalePrice,
      profitPerUnit,
      initialPosition,
      finalPosition: position,
      breakEvenUnit,
      data,
    };
  }

  function setSummary(model) {
    summaryEls.baseDeviceCost.textContent = currencyFmt.format(
      model.baseDeviceCost
    );
    summaryEls.internalSalePrice.textContent = currencyPreciseFmt.format(
      model.internalSalePrice
    );
    summaryEls.externalSalePrice.textContent = currencyPreciseFmt.format(
      model.externalSalePrice
    );
    summaryEls.profitPerUnit.textContent = currencyPreciseFmt.format(
      model.profitPerUnit
    );
    summaryEls.initialPosition.textContent = currencyFmt.format(
      model.initialPosition
    );
    summaryEls.breakEvenUnit.textContent =
      model.breakEvenUnit === null ? "—" : `unit ${model.breakEvenUnit}`;
    summaryEls.finalProfit.textContent = currencyFmt.format(
      model.finalPosition
    );

    summaryEls.initialPosition.classList.toggle(
      "negative",
      model.initialPosition < 0
    );
    summaryEls.initialPosition.classList.toggle(
      "positive",
      model.initialPosition > 0
    );
    summaryEls.finalProfit.classList.toggle(
      "negative",
      model.finalPosition < 0
    );
    summaryEls.finalProfit.classList.toggle(
      "positive",
      model.finalPosition > 0
    );
  }

  function updateSliderLabels(state) {
    sliderValueEls.pcb.textContent = currencyFmt.format(state.pcb);
    sliderValueEls.enclosure.textContent = currencyFmt.format(state.enclosure);
    sliderValueEls.assembly.textContent = currencyFmt.format(state.assembly);
  }

  let chart = null;

  function getThemeColors() {
    const styles = getComputedStyle(document.documentElement);
    const read = (name, fallback) =>
      (styles.getPropertyValue(name) || "").trim() || fallback;
    return {
      accent: read("--accent", "#1f5fff"),
      accentSoft: read("--accent-soft", "rgba(31,95,255,0.15)"),
      text: read("--text", "#1f2330"),
      textMuted: read("--text-muted", "#5a6275"),
      border: read("--border", "#e2e4ea"),
      negative: read("--negative", "#b3261e"),
    };
  }

  function initChart(model) {
    const ctx = document.getElementById("profit-chart").getContext("2d");
    const colors = getThemeColors();

    chart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Neurotech Hub cash position",
            data: model.data,
            borderColor: colors.accent,
            backgroundColor: colors.accentSoft,
            borderWidth: 2,
            fill: {
              target: { value: 0 },
              above: colors.accentSoft,
              below: "rgba(179, 38, 30, 0.12)",
            },
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHitRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        parsing: { xAxisKey: "x", yAxisKey: "y" },
        animation: { duration: 250 },
        interaction: { mode: "nearest", axis: "x", intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) =>
                items.length ? `Units sold: ${items[0].parsed.x}` : "",
              label: (item) =>
                `Cash position: ${currencyFmt.format(item.parsed.y)}`,
            },
          },
        },
        scales: {
          x: {
            type: "linear",
            min: 0,
            max: EXCLUSIVE_UNITS,
            title: {
              display: true,
              text: "Units sold (out of EXCLUSIVE_UNITS = 1,000)",
              color: colors.textMuted,
            },
            ticks: {
              color: colors.textMuted,
              stepSize: 100,
              callback: (value) => Number(value).toLocaleString("en-US"),
            },
            grid: { color: colors.border },
          },
          y: {
            title: {
              display: true,
              text: "Cumulative cash position (USD)",
              color: colors.textMuted,
            },
            ticks: {
              color: colors.textMuted,
              callback: (value) => currencyFmt.format(value),
            },
            grid: {
              color: (ctx) =>
                ctx.tick.value === 0 ? colors.textMuted : colors.border,
              lineWidth: (ctx) => (ctx.tick.value === 0 ? 1.5 : 1),
            },
          },
        },
      },
    });
  }

  function updateChart(model) {
    if (!chart) return;
    chart.data.datasets[0].data = model.data;
    chart.update();
  }

  function recompute() {
    const state = readState();
    updateSliderLabels(state);
    const model = computeModel(state);
    setSummary(model);
    if (!chart) {
      initChart(model);
    } else {
      updateChart(model);
    }
  }

  function attachListeners() {
    Object.values(sliders).forEach((input) => {
      input.addEventListener("input", recompute);
      input.addEventListener("change", recompute);
    });
  }

  function start() {
    attachListeners();
    recompute();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!chart) return;
      const colors = getThemeColors();
      chart.data.datasets[0].borderColor = colors.accent;
      chart.data.datasets[0].backgroundColor = colors.accentSoft;
      chart.data.datasets[0].fill.above = colors.accentSoft;
      chart.options.scales.x.title.color = colors.textMuted;
      chart.options.scales.x.ticks.color = colors.textMuted;
      chart.options.scales.x.grid.color = colors.border;
      chart.options.scales.y.title.color = colors.textMuted;
      chart.options.scales.y.ticks.color = colors.textMuted;
      chart.update();
    };
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
    }
  }
})();
