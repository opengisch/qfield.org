---
title: "QField for Fibre and Telecommunication Networks"
slug: "fibre-and-telecommunication-networks"
type: "solutions"
description: "Survey routes, document chambers, ducts, and cabinets, and capture as-builts for fibre and telecom networks with QField, QGIS, and QFieldCloud, even offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "telecom", "fibre network", "FTTH", "network as-built", "duct and chamber survey", "route survey", "splice documentation", "telecom asset inventory", "mast and tower survey", "open source telecom GIS", "offline network mapping"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.67
  changefreq: monthly

hero:
  headline: "Speed up telecom planning, build, and as-built"
  sub: "Survey routes, document chambers, ducts, and cabinets, and capture as-built geometry with photo evidence for QA."
  ctaText: "See a sample project"
  ctaUrl: "https://docs.qfield.org/get-started/sample-projects/"
pains:
  - "Paper redlines and markups that take weeks to reach the GIS"
  - "Inconsistent chamber, cable, and splice IDs between build crews"
  - "Photo evidence for QA scattered across phones and messaging apps"
  - "Existing duct and pole records that do not match what is on the ground"
  - "Slow handover of as-built data to the network inventory"
  - "Subcontractors working to different standards on the same build"
proof:
  - "Conflict-safe sync with QFieldCloud across multiple build crews"
  - "Forms enforce ID formats, port counts, and splice rules with constraints and value relations"
  - "Scans QR codes and barcodes and reads NFC tags on labelled equipment"
  - "Connects to external Bluetooth GNSS receivers with RTK corrections for accurate as-builts"
  - "Works with PostGIS and GeoPackage, with an API for integration"
  - "Open source, with no per-seat licensing for large or seasonal crews"
faq:
  - q: "Can we guide crews with forms?"
    a: "Yes. Use value-relation widgets, defaults, and constraints in QGIS to enforce ID formats, port counts, and splice rules. QField applies the same rules on every device."
  - q: "Do you support offline maps?"
    a: "Yes. QField runs fully offline by default. Basemaps, network layers, and forms are stored on the device, and data syncs when back online."
  - q: "Can we attach photos for QA sign-off?"
    a: "Yes. Photos are attached to the feature they document, such as a chamber, joint, or cabinet, so QA reviewers see the evidence in its location rather than in a separate folder."
  - q: "Can we model cables, ducts, and chambers with their relationships?"
    a: "Yes. Related tables in QGIS let you link cables to ducts, joints to chambers, or fibres to splice records. QField presents the relations in its forms, so crews can add child records in the field."
  - q: "Can subcontractors use the same project?"
    a: "Yes. QFieldCloud lets you share a project with each crew or subcontractor, control their permissions, and merge everyone's changes on sync."
  - q: "How do we get as-built data into our network inventory?"
    a: "QField writes to GeoPackage, PostGIS, and any format QGIS supports. For tighter integration, QFieldCloud exposes an API."
  - q: "Is there a page for last-mile FTTH work?"
    a: "Yes. See QField for fibre to the home for drop, cabinet, and construction QA workflows, and try the sample project in the QField documentation."
---

## Field workflows

Fibre and telecom teams use QField across the network lifecycle:

- Route surveys and walk-outs for new builds
- Duct, chamber, pole, and cabinet inventories
- As-built capture of cable routes, joints, and equipment
- Splice and port documentation with constrained forms
- Mast, tower, and site surveys
- QA inspections and photo evidence for sign-off

Building out the last mile? See [QField for fibre to the home →](/solutions/fibre-to-the-home/).

## Records that match the network

Telecom records drift from reality quickly. A route gets diverted round an obstruction, a chamber is moved, a joint is added, and the change lives only in a crew member's notebook or a photo on their phone. By the time the network inventory is updated, the detail is lost. QField puts the planned network on the device and lets the crew record what was actually built, where it was built, with photos attached to each feature.

The other half is consistency. Large builds involve many crews and often several subcontractors. Forms configured in QGIS carry the same ID formats, port counts, and splice rules to every device, and QR, barcode, and NFC scanning keep IDs out of the keyboard. QFieldCloud merges everyone's work into one project, so QA can review the as-built as a whole rather than chasing files.

## One workflow with QGIS and QFieldCloud

Plan the network and configure forms in [QGIS](https://qgis.org). Push the project to every crew and subcontractor through [QFieldCloud](https://qfield.cloud). Crews build and record offline, sync at the end of the day, and QA reviews the merged result back in QGIS before handover.

## Infrastructure teams using QField

- [Data collection for O&M of rural water supply systems in Rwanda](/success-stories/water-supply-rwanda/), where 27 district engineers keep a national network database current with QGIS and QField
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for water utilities and wastewater management →](/solutions/water-utilities-and-wastewater-management/).
