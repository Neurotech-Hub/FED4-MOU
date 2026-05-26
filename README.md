# Memorandum of Understanding

**FED4 Development, Beta Testing, Distribution, and Support**

This Memorandum of Understanding (“MOU”) is entered into by and between **Washington University in St. Louis, acting through the Neurotech Hub** (“Neurotech Hub”) and **Lex Kravitz / Kravitz Lab** (“Kravitz Lab”). Neurotech Hub and Kravitz Lab may be referred to individually as a “Party” and collectively as the “Parties.”

**Effective Date:** [DATE]

## 1. Key Variables and Financial Assumptions

The Parties intend for the following values to be easily adjustable without rewriting the structure of this MOU.

| Variable                    |                                                                               Description |                                    Initial Value |
| --------------------------- | ----------------------------------------------------------------------------------------: | -----------------------------------------------: |
| `BETA_UNITS`                |                                              Maximum number of local beta-test FED4 units |                                        100 units |
| `EXCLUSIVE_UNITS`           | Number of FED4 units subject to Neurotech Hub sole distribution rights after beta testing |                                      1,000 units |
| `PCB_BATTERY_COST`          |                           Expected electronics cost per device, including PCB and battery |                                             $150 |
| `ENCLOSURE_COST`            |                                                        Expected enclosure cost per device |                                             $100 |
| `ASSEMBLY_PROGRAMMING_COST` |                                     Expected routine assembly/programming cost per device |                                              $60 |
| `PACKAGING_COST`            |                                                        Expected packaging cost per device |                                              $20 |
| `LABOR_RATE`                |                                Neurotech Hub at-cost labor rate for routine/rote services |                                         $60/hour |
| `BASE_DEVICE_COST`          |                               Expected per-device cost before margin or institutional tax |                                             $330 |
| `NTH_INTERNAL_MARGIN`       |                                                    Expected Neurotech Hub internal margin |                            20–30%; initially 25% |
| `INSTITUTIONAL_GOODS_TAX`   |                                       Institutional tax imposed on external sale of goods |                                              20% |
| `INTERNAL_SALE_PRICE`       |                                                         Initial internal WashU sale price |                            $412.50 at 25% margin |
| `EXTERNAL_SALE_PRICE`       |                                                     Initial external non-WashU sale price | $495.00 at 25% margin plus 20% institutional tax |

For the initial assumptions above:

`BASE_DEVICE_COST = PCB_BATTERY_COST + ENCLOSURE_COST + ASSEMBLY_PROGRAMMING_COST + PACKAGING_COST`

`BASE_DEVICE_COST = $150 + $100 + $60 + $20 = $330`

`INTERNAL_SALE_PRICE = BASE_DEVICE_COST × (1 + NTH_INTERNAL_MARGIN)`

`INTERNAL_SALE_PRICE = $330 × 1.25 = $412.50`

`EXTERNAL_SALE_PRICE = INTERNAL_SALE_PRICE × (1 + INSTITUTIONAL_GOODS_TAX)`

`EXTERNAL_SALE_PRICE = $412.50 × 1.20 = $495.00`

The Parties acknowledge that these values are estimates and may be revised by mutual written agreement based on actual vendor quotes, fabrication costs, labor effort, supply-chain changes, packaging requirements, institutional requirements, or other material cost changes.

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

The purpose of the beta-test units is to harden FED4 software, hardware, assembly practices, documentation, and support procedures before broader distribution. The Parties expressly agree that beta-test units are not gifts. Beta-test units are development and validation units produced for the specific purpose of evaluating and improving FED4.

### 4.2 Local Production and Testing

The beta-test units will be produced and tested locally at Washington University in St. Louis, in collaboration between Neurotech Hub, Kravitz Lab, and participating laboratories.

### 4.3 Beta-Test Cost Treatment

Neurotech Hub will provide collaborative design and engineering support at no cost as described in Section 3.1.

For routine, rote, or production-like services associated with beta-test units, including assembly, programming, packaging, labeling, or other repetitive unit-preparation tasks, Neurotech Hub may charge at-cost labor at the `LABOR_RATE`, initially $60/hour. The expected routine assembly/programming cost is reflected in `ASSEMBLY_PROGRAMMING_COST`, initially $60 per unit, but actual charges may vary based on actual effort and mutual agreement.

### 4.4 Beta-Test Feedback

Participating laboratories receiving beta-test units will be expected to provide reasonable feedback regarding performance, failure modes, usability, documentation gaps, experimental-program needs, and support issues. The Parties will use this feedback to determine when FED4 is ready for broader distribution.

## 5. Sole Distribution Rights for First `EXCLUSIVE_UNITS` Units

After completion of the beta-test phase, Kravitz Lab agrees that Neurotech Hub will have sole distribution rights for the first `EXCLUSIVE_UNITS` FED4 units sold or otherwise commercially distributed.

### 5.1 Scope of Sole Distribution Rights

During the exclusive distribution period, Neurotech Hub will be the sole authorized distributor for assembled FED4 devices and FED4 device kits intended for sale to internal WashU users or external non-WashU purchasers.

Unless otherwise agreed in writing, Kravitz Lab will not enter into separate distribution arrangements for assembled FED4 devices with other vendors until the first `EXCLUSIVE_UNITS` units have been sold by Neurotech Hub or until this MOU is terminated under Section 13.

### 5.2 Open-Source Foundation

Nothing in this MOU is intended to restrict rights that already exist under the open-source license terms applicable to FED3 or any publicly released materials. The Parties acknowledge that FED3 has an open-source foundation and that this MOU governs the Parties’ collaboration, distribution coordination, production efforts, and sale of assembled FED4 devices or kits, not the underlying public rights in already released open-source FED3 materials.

The Parties will separately coordinate, as needed, regarding timing, scope, licensing, and repository management for FED4-specific design files, firmware, documentation, and software.

### 5.3 Counting Units Toward `EXCLUSIVE_UNITS`

A FED4 unit will count toward `EXCLUSIVE_UNITS` when it is sold, invoiced, or otherwise commercially distributed by Neurotech Hub, excluding beta-test units produced under Section 4 unless the Parties agree otherwise in writing.

## 6. Pricing and Margin

Neurotech Hub will price FED4 units to cover expected hardware costs, assembly/programming time, packaging, operating overhead, risk-of-stock, warranty/support burden, and institutional requirements.

### 6.1 Internal WashU Pricing

For internal WashU purchasers, Neurotech Hub will apply a reasonable margin of approximately 20–30% over expected per-device cost, initially set at `NTH_INTERNAL_MARGIN` of 25%.

Using the initial assumptions in Section 1, the expected internal WashU sale price is:

`$330 × 1.25 = $412.50 per device`

### 6.2 External Non-WashU Pricing

For external non-WashU purchasers, Neurotech Hub will apply the same cost-plus-margin pricing structure, with the institutional tax imposed on external sales of goods added to the sale price.

Using the initial assumptions in Section 1, the expected external sale price is:

`$412.50 × 1.20 = $495.00 per device`

If Washington University or applicable institutional policy requires a different method of calculating institutional tax, overhead, or fees on external sales, the Parties will update the pricing formula accordingly.

### 6.3 Price Adjustments

Neurotech Hub may adjust internal and external pricing as needed to account for actual costs, vendor changes, supply-chain variability, assembly time, warranty burden, inventory risk, institutional policy, taxes, or other material changes. Neurotech Hub agrees that its sale price will be set in good faith to cover costs plus a reasonable operating and risk-of-stock margin, rather than to impose an excessive or punitive markup.

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

## 11. Future Distribution After First `EXCLUSIVE_UNITS` Units

After Neurotech Hub has sold or commercially distributed the first `EXCLUSIVE_UNITS` FED4 units, Kravitz Lab reserves the right to enter distribution terms with other vendors.

If Kravitz Lab enters into distribution terms with another vendor after the exclusive distribution period, Kravitz Lab agrees that the sale price offered by such vendor should remain within 20% of Neurotech Hub’s then-current FED4 sale price for a substantially comparable device configuration, unless otherwise agreed by the Parties in writing.

Neurotech Hub agrees that its FED4 sale price will be set to cover actual costs, reasonable operating costs, reasonable support burden, risk-of-stock margin, and applicable institutional taxes or fees.

## 12. Records and Reporting

Neurotech Hub will maintain reasonable records of FED4 units sold during the exclusive distribution period, including unit counts sufficient to determine progress toward `EXCLUSIVE_UNITS`. Upon reasonable request, Neurotech Hub will provide Kravitz Lab with summary reporting on units sold, general purchaser category, production batches, and major recurring support issues.

## 13. Term and Termination

This MOU will begin on the Effective Date and will remain in effect until the earlier of:

1. Sale or commercial distribution of the first `EXCLUSIVE_UNITS` FED4 units by Neurotech Hub;
2. Replacement by a more definitive written agreement between the Parties;
3. Mutual written termination by the Parties; or
4. Termination by either Party upon [30/60/90] days’ written notice if the collaboration becomes impracticable, inactive, or inconsistent with institutional requirements.

Termination will not affect payment obligations already incurred, obligations related to confidentiality, attribution, already-sold units, records, or user support responsibilities for units previously distributed, unless otherwise agreed in writing.

## 14. Binding Effect

The Parties intend this MOU to reflect their good-faith mutual understanding and operating framework. The Parties further intend the following sections to be binding to the extent permitted by applicable institutional policy and law: Section 4.3, Section 5, Section 6, Section 8, Section 10, Section 11, Section 12, Section 13, and Section 15.

The Parties may replace this MOU with a more formal agreement if required by Washington University, Kravitz Lab, technology-transfer offices, procurement offices, institutional contracting offices, or other relevant administrative units.

## 15. General Terms

### 15.1 Institutional Requirements

All activities under this MOU are subject to applicable Washington University policies, procurement requirements, technology-transfer requirements, conflict-of-interest policies, tax requirements, and institutional review processes.

### 15.2 No Partnership or Employment Relationship

Nothing in this MOU creates a legal partnership, joint venture, employment relationship, or agency relationship between the Parties.

### 15.3 Warranty and Liability

The Parties will coordinate in good faith to address defects, failures, and support issues. Any formal warranty, return, repair, replacement, or limitation-of-liability terms for FED4 sales should be documented separately or incorporated into purchase terms.

### 15.4 Amendments

This MOU may be amended only by written agreement of the Parties.

### 15.5 Points of Contact

**For Neurotech Hub:**
Name: [NAME]
Title: [TITLE]
Email: [EMAIL]

**For Kravitz Lab:**
Name: [NAME]
Title: [TITLE]
Email: [EMAIL]

## 16. Signatures

By signing below, the Parties acknowledge their understanding of and agreement to the terms of this MOU.

**Washington University in St. Louis / Neurotech Hub**

Signature: _______________________________
Name: _______________________________
Title: _______________________________
Date: _______________________________

**Lex Kravitz / Kravitz Lab**

Signature: _______________________________
Name: _______________________________
Title: _______________________________
Date: _______________________________
