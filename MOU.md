# Memorandum of Understanding

**FED4 Development, Beta Testing, Distribution, and Support**

This Memorandum of Understanding (“MOU”) is entered into by and between **Matthew Gaidica / the Neurotech Hub** (“Neurotech Hub”) and **Alexxai Kravitz / Kravitz Lab** (“Kravitz Lab”). Neurotech Hub and Kravitz Lab may be referred to individually as a “Party” and collectively as the “Parties.”

**Effective Date:** [DATE]

## 1. Key Variables and Financial Assumptions

The Parties intend for the following variables to be easily adjustable without rewriting the structure of this MOU. Concrete values, ranges, and scenario modeling are maintained outside of this document.

| Variable                    |                                                                               Description |
| --------------------------- | ----------------------------------------------------------------------------------------: |
| `BETA_UNITS`                |                                              Maximum number of local beta-test FED4 units |
| `EXCLUSIVE_UNITS`           | Number of FED4 units subject to Neurotech Hub sole distribution rights after beta testing |
| `PCB_BATTERY_COST`          |                           Expected electronics cost per device, including PCB and battery |
| `ENCLOSURE_COST`            |                                                        Expected enclosure cost per device |
| `ASSEMBLY_PROGRAMMING_COST` |                                     Expected routine assembly/programming cost per device |
| `PACKAGING_COST`            |                                                        Expected packaging cost per device |
| `LABOR_RATE`                |                                Neurotech Hub at-cost labor rate for routine/rote services |
| `BASE_DEVICE_COST`          |                               Expected per-device cost before margin or institutional tax |
| `NTH_INTERNAL_MARGIN`       |                                                     Neurotech Hub internal margin (fixed) |
| `INSTITUTIONAL_GOODS_TAX`   |                                       Institutional tax imposed on external sale of goods |
| `INTERNAL_SALE_PRICE`       |                                                                 Internal WashU sale price |
| `EXTERNAL_SALE_PRICE`       |                                                             External non-WashU sale price |

The relationships among these variables are:

`BASE_DEVICE_COST = PCB_BATTERY_COST + ENCLOSURE_COST + ASSEMBLY_PROGRAMMING_COST + PACKAGING_COST`

`INTERNAL_SALE_PRICE = BASE_DEVICE_COST × (1 + NTH_INTERNAL_MARGIN)`

`EXTERNAL_SALE_PRICE = INTERNAL_SALE_PRICE × (1 + INSTITUTIONAL_GOODS_TAX)`

The Parties acknowledge that the values assigned to these variables are estimates and may be revised by mutual written agreement based on actual vendor quotes, fabrication costs, labor effort, supply-chain changes, packaging requirements, institutional requirements, or other material cost changes.

See the [FED4 Financial Calculator](https://neurotech-hub.github.io/FED4-MOU/) for scenario modeling of `BASE_DEVICE_COST` and Neurotech Hub cumulative profit during the `EXCLUSIVE_UNITS` phase.

## 2. Purpose

The purpose of this MOU is to define the Parties’ mutual understanding regarding development, beta testing, distribution, production support, pricing, and post-sale support for **FED4**, a new version of the FED3 device platform.

FED3 is an open-source device platform developed by Kravitz Lab and distributed through open-source and open/maker ecosystems, including Kravitz Lab resources, public repositories, and third-party maker-oriented distributors. The Parties recognize this existing open-source foundation while also recognizing that the Neurotech Hub is contributing substantial engineering effort toward FED4, including electronics, hardware implementation, manufacturability, and production-readiness.

This MOU is intended to provide Neurotech Hub with sole distribution rights for the first `EXCLUSIVE_UNITS` FED4 units sold after the beta-test phase, subject to the terms below.

## 3. FED4 Development Collaboration

The Parties intend to collaborate on development of FED4 in a manner that uses the technical strengths of each Party.

### 3.1 Neurotech Hub Responsibilities

Neurotech Hub will support FED4 development through engineering services related to:

1. Electronic hardware design;
2. PCB implementation and design-for-manufacture considerations;
3. Power architecture and power-control implementation;
4. Sensor integration and related hardware validation;
5. Pin mappings and embedded hardware interfaces;
6. Hardware-related firmware implementation necessary to support sensors, power controls, and board-level function;
7. Manufacturing documentation, assembly guidance, and production-readiness support; and
8. Related hardware troubleshooting and design hardening.

Design and engineering work performed by Neurotech Hub for FED4 under this collaboration is considered part of the collaborative development effort and will be provided at no cost to Kravitz Lab, unless otherwise agreed in writing.

### 3.2 Kravitz Lab Responsibilities

Kravitz Lab will support FED4 development through scientific, behavioral, and user-facing implementation related to:

1. User interface design and implementation;
2. Device controls and end-user workflows;
3. Available experimental programs;
4. Behavioral task logic and protocol implementation;
5. User-facing configuration and data-output expectations;
6. Scientific validation of experimental use cases; and
7. Documentation related to behavioral task use, experimental program selection, and user operation.

### 3.3 Joint Responsibilities

The Parties will jointly coordinate on:

1. Device requirements and specifications;
2. Beta-test feedback and prioritization;
3. Hardware and software issue tracking;
4. Documentation sufficient to support beta testing and later distribution;
5. Production release readiness; and
6. A shared support model for users, as described in Section 8.

## 4. Beta-Test Units

Before sole distribution rights for the `EXCLUSIVE_UNITS` units begin, the Parties intend to produce and evaluate up to `BETA_UNITS` FED4 beta-test units.

### 4.1 Purpose of Beta-Test Units

The purpose of the beta-test units is to harden FED4 software, hardware, assembly practices, documentation, and support procedures with internal testers before broader distribution. The distribution and ownership of the beta-test units shall be determined by the funder of said units. Beta-test units are development and validation units produced for the specific purpose of evaluating and improving FED4.

### 4.2 Local Production and Testing

The beta-test units will be produced and tested locally at Washington University in St. Louis, in collaboration between Neurotech Hub, Kravitz Lab, and participating laboratories. The Neurotech Hub may or may not provide above-and-beyond user support for these units as the owners of these units are not deemed 'customers'. As such, no warranties will be provided.

### 4.3 Beta-Test Cost Treatment

Neurotech Hub will provide collaborative design and engineering support at no cost as described in Section 3.1.

For routine, rote, or production-like services associated with beta-test units, including assembly, programming, packaging, labeling, or other repetitive unit-preparation tasks, Neurotech Hub may charge at-cost labor at the `LABOR_RATE`. The expected routine assembly/programming cost is reflected in `ASSEMBLY_PROGRAMMING_COST`, but actual charges may vary based on actual effort and mutual agreement.

### 4.4 Beta-Test Feedback

Participating laboratories receiving beta-test units will be expected to provide reasonable feedback regarding performance, failure modes, usability, documentation gaps, experimental-program needs, and support issues. The Parties will use this feedback to determine when FED4 is ready for broader distribution.

## 5. Sole Distribution Rights for First `EXCLUSIVE_UNITS` Units

After completion of the beta-test phase, Kravitz Lab agrees that Neurotech Hub will have sole distribution rights for the first `EXCLUSIVE_UNITS` FED4 units sold or otherwise commercially distributed.

### 5.1 Scope of Sole Distribution Rights

During the exclusive distribution period, Neurotech Hub will be the sole authorized distributor for assembled FED4 devices and FED4 device kits intended for sale to internal WashU users or external non-WashU purchasers.

Unless otherwise agreed in writing, Kravitz Lab will not enter into separate distribution arrangements for assembled FED4 devices with other vendors until the first `EXCLUSIVE_UNITS` units have been sold by Neurotech Hub or until this MOU is terminated under Section 14.

### 5.2 Open-Source Foundation

Nothing in this MOU is intended to restrict rights that already exist under the open-source license terms applicable to FED3 or any publicly released materials. The Parties acknowledge that FED3 has an open-source foundation and that this MOU governs the Parties’ collaboration, distribution coordination, production efforts, and sale of assembled FED4 devices or kits, not the underlying public rights in already released open-source FED3 materials.

The Parties will separately coordinate, as needed, regarding timing, scope, licensing, and repository management for FED4-specific design files, firmware, documentation, and software.

### 5.3 Counting Units Toward `EXCLUSIVE_UNITS`

A FED4 unit will count toward `EXCLUSIVE_UNITS` when it is sold, invoiced, or otherwise commercially distributed by Neurotech Hub, excluding beta-test units produced under Section 4 unless the Parties agree otherwise in writing.

### 5.4 Sub-Distribution

Either Party may engage one or more third-party sub-distributors or fulfillment partners (each, a "Sub-Distributor") to support sales of FED4 units to international communities or to communities that are not immediately accessible through Washington University channels.

Engagement of a Sub-Distributor is intended to accommodate international shipping, customs, regional regulatory and tax requirements, currency handling, and regional user support that may be impractical for Neurotech Hub to provide directly.

1. **Hub remains primary distributor.** Neurotech Hub remains the primary, contractual distributor of record under Section 5. A Sub-Distributor acts under Neurotech Hub's distribution rights, not as an independent vendor under Section 11.
2. **Pricing.** Neurotech Hub will sell FED4 units to a Sub-Distributor at a wholesale price not less than `INTERNAL_SALE_PRICE`, preserving Neurotech Hub's `NTH_INTERNAL_MARGIN`. The Sub-Distributor may add a reasonable handling, fulfillment, and regional-support margin on top of that wholesale price. `INSTITUTIONAL_GOODS_TAX` will be applied to the extent required by Washington University or applicable institutional policy for wholesale transactions.
3. **Counting toward `EXCLUSIVE_UNITS`.** FED4 units sold or commercially distributed through a Sub-Distributor count toward `EXCLUSIVE_UNITS` on the same basis as direct Neurotech Hub sales, consistent with Section 5.3.
4. **Selection and notice.** The engaging Party will select a Sub-Distributor in good faith and will notify the other Party in writing before engaging the Sub-Distributor, including the proposed regional scope, pricing structure, and support model. The other Party will have a reasonable opportunity to comment before the arrangement is finalized.
5. **Support.** A Sub-Distributor may serve as the first-line regional point of contact for end-user support, escalating to Neurotech Hub or Kravitz Lab consistent with the support division in Section 8.
6. **Compliance.** All Sub-Distributor arrangements remain subject to applicable Washington University policies, U.S. and destination-country export controls, customs and tax requirements, and the institutional requirements described in Section 16.1.
7. **Term.** A Sub-Distributor arrangement is independent of this MOU's term. Termination or expiration of this MOU under Section 14 does not by itself terminate a properly executed Sub-Distributor arrangement.

## 6. Pricing and Margin

Neurotech Hub will price FED4 units to cover expected hardware costs, assembly/programming time, packaging, operating overhead, risk-of-stock, warranty/support burden, and institutional requirements.

### 6.1 Internal WashU Pricing

For internal WashU purchasers, Neurotech Hub will apply the fixed `NTH_INTERNAL_MARGIN` over expected per-device cost. The internal WashU sale price is calculated as:

`INTERNAL_SALE_PRICE = BASE_DEVICE_COST × (1 + NTH_INTERNAL_MARGIN)`

### 6.2 External Non-WashU Pricing

For external non-WashU purchasers, Neurotech Hub will apply the same cost-plus-margin pricing structure, with the institutional tax imposed on external sales of goods added to the sale price:

`EXTERNAL_SALE_PRICE = INTERNAL_SALE_PRICE × (1 + INSTITUTIONAL_GOODS_TAX)`

If Washington University or applicable institutional policy requires a different method of calculating institutional tax, overhead, or fees on external sales, the Parties will update the pricing formula accordingly.

### 6.3 Price Adjustments

Neurotech Hub may adjust internal and external pricing as needed to account for actual costs, vendor changes, supply-chain variability, assembly time, warranty burden, inventory risk, institutional policy, taxes, or other material changes. Neurotech Hub agrees that its sale price will be set in good faith to cover costs plus a reasonable operating and risk-of-stock margin, rather than to impose an excessive or punitive markup.

### 6.4 Kravitz Lab Internal Access at Cost

Kravitz Lab may receive FED4 devices from Neurotech Hub for Kravitz Lab internal use at `BASE_DEVICE_COST` (i.e., no `NTH_INTERNAL_MARGIN` applied), or may independently produce equivalent devices for Kravitz Lab internal use. Units provided to Kravitz Lab under this clause do not count toward `EXCLUSIVE_UNITS`.

## 7. Production and Fulfillment

Neurotech Hub will be responsible for coordinating production and fulfillment for FED4 units distributed during the exclusive distribution period, including:

1. Vendor coordination and component procurement;
2. PCB ordering, receipt, and inspection;
3. Enclosure sourcing or fabrication coordination;
4. Assembly and programming;
5. Packaging and shipment preparation;
6. Basic outgoing quality-control checks;
7. Order tracking and fulfillment records; and
8. Coordination with Kravitz Lab on production issues that implicate user-interface, experimental-program, or behavioral-task implementation.

The Parties may separately agree to batch sizes, reorder thresholds, lead times, inventory assumptions, minimum order quantities, and handling of backorders.

## 8. Product Support Responsibilities

The Parties intend to share FED4 support responsibilities according to the same general division of effort used during development.

### 8.1 Neurotech Hub Support Scope

Neurotech Hub will serve as the primary support contact for issues related to:

1. Electronic hardware failure or suspected hardware defect;
2. PCB, connector, battery, power, charging, or power-control issues;
3. Sensor function or calibration issues that are hardware-facing;
4. Pin mappings, board-level interfaces, and hardware-related firmware interactions;
5. Assembly defects or packaging-related issues;
6. Production quality-control concerns; and
7. Replacement or repair triage for units sold by Neurotech Hub.

### 8.2 Kravitz Lab Support Scope

Kravitz Lab will serve as the primary support contact for issues related to:

1. User interface behavior;
2. Experimental program selection and operation;
3. Behavioral task logic;
4. User-facing configuration workflows;
5. Interpretation of task-specific settings or device modes;
6. Experimental protocol expectations; and
7. Scientific or behavioral-use documentation.

### 8.3 Shared Support Scope

Some issues may involve both hardware/electronics and user-interface or experimental-program implementation. For such issues, the Parties will coordinate in good faith to identify the root cause, assign responsibility, and provide a reasonable response to the user.

The Parties may establish a shared issue tracker, support email alias, GitHub issue process, knowledge base, or other support workflow. The Parties will also coordinate on recurring support issues that indicate a need for design changes, documentation improvements, software updates, or production process changes.

## 9. Documentation

The Parties will coordinate on documentation sufficient to support beta testing, production, distribution, and support. Documentation may include:

1. User setup instructions;
2. Quick-start guides;
3. Experimental program descriptions;
4. Hardware specifications;
5. Charging and battery-use instructions;
6. Cleaning and handling guidance;
7. Troubleshooting guidance;
8. Firmware/software update procedures;
9. Assembly and quality-control documentation; and
10. Known limitations or validated operating conditions.

## 10. Intellectual Property, Licensing, and Attribution

The Parties acknowledge that FED4 builds on the FED3 open-source foundation while incorporating new engineering, hardware, firmware, software, and documentation contributions.

### 10.1 Existing Rights

Each Party retains ownership of its pre-existing intellectual property, know-how, documentation, code, designs, and related materials.

### 10.2 Collaborative Contributions

The Parties will make reasonable efforts to document major FED4 contributions and to determine, in good faith, appropriate ownership, licensing, attribution, repository structure, and release timing for FED4-specific materials.

### 10.3 Open-Source Compatibility

The Parties will ensure that any FED4 public release, distribution practice, or licensing approach is compatible with applicable FED3 open-source license obligations and any institutional requirements.

### 10.4 FED4 Circuit Design Disclosure and Release Timing

The Parties agree that, during the beta-test phase and exclusive distribution period, the full FED4 circuit design will not be fully released as a complete KiCad project. Neurotech Hub may provide partial circuit information, selected schematic excerpts, interface documentation, pin mappings, functional block diagrams, or other limited technical materials as needed to support collaboration, beta testing, troubleshooting, documentation, and user support.

After Neurotech Hub has sold or commercially distributed the first `EXCLUSIVE_UNITS` FED4 units, the Parties intend for the complete FED4 KiCad project files, including the full schematic and PCB design files, to be publicly released in a manner consistent with applicable open-source license obligations, institutional requirements, and any mutually agreed repository structure.

This staged-release approach is intended to recognize FED4’s open-source lineage while allowing Neurotech Hub to recover its substantial engineering investment through the exclusive distribution period described in this MOU.

### 10.5 Attribution

FED4 documentation, product pages, and related materials should acknowledge the FED3 foundation and Kravitz Lab’s role in originating and advancing the platform. Materials should also acknowledge Neurotech Hub’s engineering and production contributions where appropriate.

### 10.6 Independent vs. Shared Innovation Cases

The Parties acknowledge that FED4 innovations may be developed jointly or, in some cases, by one Party in a manner that is demonstrably unrelated to the other Party’s contributions. The default treatment of any FED4 innovation is that intellectual property is shared between the Parties. A Party may declare an innovation to be independently owned only when it can be reasonably demonstrated that the innovation does not depend on the other Party’s contributions to FED4, the FED4 ecosystem, or the broader collaboration described in this MOU.

The following illustrative cases are intended to guide the Parties when determining whether an innovation is shared or independent. These cases are not exhaustive, and edge cases will be resolved by good-faith discussion.

1. **Shared.** A new sensor, hardware feature, or power-system change whose function relies on changes to user interface, behavioral-task logic, or experimental-program implementation.
2. **Shared.** A new behavioral task, experimental protocol, or user-facing workflow that requires new hardware capability (e.g., a new sensor, faster sampling rate, additional pin assignments, or a custom interface) developed in coordination with Neurotech Hub.
3. **Shared.** A change to firmware that exposes new behavioral, experimental, or user-facing capability and that was developed in coordination between the Parties.
4. **Independent (Neurotech Hub).** A FED4-compatible peripheral or accessory that communicates with FED4 over a documented public interface (e.g., a published serial protocol or connector) and does not modify or depend on FED4 firmware, user interface, behavioral tasks, or experimental programs.
5. **Independent (Neurotech Hub).** A general-purpose electronics module, PCB technique, or manufacturing process developed during FED4 work that has applications beyond FED4 and does not rely on FED4-specific scientific, experimental, or user-interface contributions.
6. **Independent (Kravitz Lab).** A new behavioral task, experimental protocol, or user-facing workflow implemented entirely in user-facing software on existing FED4 hardware, with no hardware or hardware-facing firmware changes.
7. **Independent (Kravitz Lab).** A scientific analysis tool, data-processing library, statistical workflow, or experimental write-up derived from FED4 data outputs but not requiring any FED4 hardware or hardware-facing firmware changes.
8. **Disputed.** Where the Parties cannot agree whether a specific innovation is independent or shared, the Parties will default to joint disclosure and good-faith negotiation before either Party makes a standalone disclosure, publication, or filing.

In all cases, the Parties will use reasonable judgment, document the basis for an independence determination in writing, and continue to honor the attribution expectations described in Section 10.5.

### 10.7 Shared Publication Agreement

The Parties intend to coordinate on FED4-related publications, including posters, manuscripts, preprints, conference abstracts, technical reports, and published protocols.

1. **Initial publications.** The first FED4-related publications in each category (the first poster, the first manuscript or preprint, and the first published protocol) shall be jointly authored by representatives of the Kravitz Lab and the Neurotech Hub. Author order and corresponding-author designation will be determined in good faith based on each Party's relative contribution to the specific publication.
2. **Subsequent publications.** For FED4-related publications after the initial joint publications, the publishing Party will consult the other Party reasonably in advance of submission, share a draft sufficient for meaningful review, and consider the other Party's feedback in good faith.
3. **Areas of expertise.** When consulted on a publication, Kravitz Lab will serve as the scientific and behavioral expert, with primary responsibility for reviewing experimental design, behavioral interpretation, scientific framing, and end-user-facing claims. Neurotech Hub will serve as the technical and methods expert, with primary responsibility for reviewing hardware descriptions, firmware behavior, electronics specifications, manufacturing methods, and other technical/methods sections.
4. **Acknowledgment and authorship.** Even where a publication is led by a single Party, the other Party will be offered authorship or acknowledgment commensurate with its contribution to the work being published, consistent with the attribution expectations in Section 10.5 and applicable journal authorship standards.
5. **Disputes.** Where the Parties disagree on authorship, content accuracy, or release timing of a publication, the Parties will discuss in good faith before submission and will not make claims about the other Party's contributions without that Party's consent.

## 11. After First `EXCLUSIVE_UNITS` Units

### 11.1 Continuation Cost-Share Expectation

The Parties intend that, after the first `EXCLUSIVE_UNITS` units have been sold or commercially distributed by Neurotech Hub, they will negotiate in good faith a successor or renewed agreement structured as a cost-share arrangement between the Parties. The purpose of this successor agreement is to continue the FED4 collaboration described in this MOU on terms that mutually benefit the financial bases of both Parties.

Specific terms — including, without limitation, capital and inventory contribution shares, restock and risk-of-stock funding, fulfillment responsibilities, revenue sharing, ongoing pricing, governance, support obligations, term length, and termination provisions — will be defined in a separate written cost-share agreement executed by the Parties. This MOU does not bind either Party to any particular cost-share terms.

The expectation expressed in this Section 11.1 is in addition to, and does not limit, the alternative distribution arrangements available to Kravitz Lab under Section 11.2.

### 11.2 Alternative Distribution Arrangements

After Neurotech Hub has sold or commercially distributed the first `EXCLUSIVE_UNITS` FED4 units, Kravitz Lab reserves the right to enter distribution terms with other vendors. This right is independent of, and not conditioned on, the cost-share negotiation described in Section 11.1.

### 11.3 Pricing Considerations

If Kravitz Lab enters into distribution terms with another vendor after the exclusive distribution period, Kravitz Lab agrees that the sale price offered by such vendor should remain within 20% of Neurotech Hub’s then-current FED4 sale price for a substantially comparable device configuration, unless otherwise agreed by the Parties in writing.

Neurotech Hub agrees that its FED4 sale price will be set to cover actual costs, reasonable operating costs, reasonable support burden, risk-of-stock margin, and applicable institutional taxes or fees.

## 12. Records and Reporting

Neurotech Hub will maintain reasonable records of FED4 units sold during the exclusive distribution period, including unit counts sufficient to determine progress toward `EXCLUSIVE_UNITS`. Upon reasonable request, Neurotech Hub will provide Kravitz Lab with summary reporting on units sold, general purchaser category, production batches, and major recurring support issues. Reporting will include units sold or distributed through any Sub-Distributor engaged under Section 5.4, broken out by region where reasonably feasible.

## 13. Buyout Option

At any time during the exclusive distribution period, Kravitz Lab may elect to buy out Neurotech Hub’s stake in FED4 under this MOU. The buyout amount equals:

1. Neurotech Hub’s then-current unrecovered engineering and time investment in FED4; plus
2. The at-cost value of all FED4 inventory, components, sub-assemblies, and pre-paid materials held by Neurotech Hub at the time of buyout.

Upon completion of the buyout:

1. Neurotech Hub’s sole distribution rights under Section 5 terminate;
2. Neurotech Hub transfers existing FED4 inventory, components, sub-assemblies, and pre-paid materials to Kravitz Lab; and
3. Neurotech Hub is left in a net-zero, zero-risk position with respect to FED4.

Post-buyout intellectual property, support, and attribution obligations under Sections 8, 10, and 11 remain in effect, unless otherwise agreed by the Parties in writing.

## 14. Term and Termination

This MOU will begin on the Effective Date and will remain in effect until the earliest of:

1. Sale or commercial distribution of the first `EXCLUSIVE_UNITS` FED4 units by Neurotech Hub;
2. Completion of a Kravitz Lab buyout under Section 13;
3. Replacement by a more definitive written agreement between the Parties;
4. Mutual written termination by the Parties; or
5. Termination by either Party upon [30/60/90] days’ written notice if the collaboration becomes impracticable, inactive, or inconsistent with institutional requirements.

Termination will not affect payment obligations already incurred, obligations related to confidentiality, attribution, already-sold units, records, or user support responsibilities for units previously distributed, unless otherwise agreed in writing.

## 15. Binding Effect

The Parties intend this MOU to reflect their good-faith mutual understanding and operating framework. The Parties further intend the following sections to be binding to the extent permitted by applicable institutional policy and law: Section 4.3, Section 5, Section 6, Section 8, Section 10, Section 11, Section 12, Section 13, Section 14, and Section 16.

The Parties may replace this MOU with a more formal agreement if required by Washington University, Kravitz Lab, technology-transfer offices, procurement offices, institutional contracting offices, or other relevant administrative units.

## 16. General Terms

### 16.1 Institutional Requirements

All activities under this MOU are subject to applicable Washington University policies, procurement requirements, technology-transfer requirements, conflict-of-interest policies, tax requirements, and institutional review processes.

### 16.2 No Partnership or Employment Relationship

Nothing in this MOU creates a legal partnership, joint venture, employment relationship, or agency relationship between the Parties.

### 16.3 Warranty and Liability

The Parties will coordinate in good faith to address defects, failures, and support issues. Any formal warranty, return, repair, replacement, or limitation-of-liability terms for FED4 sales should be documented separately or incorporated into purchase terms.

### 16.4 Amendments

This MOU may be amended only by written agreement of the Parties.

### 16.5 Points of Contact

**For Neurotech Hub:**
Name: Matthew Gaidica, PhD
Title: Assistant Professor, Department of Neuroscience; Director, Neurotech Hub
Email: [EMAIL]

**For Kravitz Lab:**
Name: Alexxai Kravitz, PhD
Title: Associate Professor, Department of Psychiatry
Email: [EMAIL]

## 17. Signatures

By signing below, the Parties acknowledge their understanding of and agreement to the terms of this MOU.

**Matthew Gaidica / Neurotech Hub**

Signature: _______________________________
Date: _______________________________

**Allexai Kravitz / Kravitz Lab**

Signature: _______________________________
Date: _______________________________
