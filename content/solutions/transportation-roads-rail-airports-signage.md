---
title: "QField for Transportation (Roads, Rail, Airports, Signage)"
slug: "transportation-roads-rail-airports-signage"
type: "solutions"
description: "Road, rail, airport, and signage asset inventories and condition inspections with QField, QGIS, and QFieldCloud, fully offline along the corridor."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "transportation mapping", "road inventory", "rail inspections", "airport signage", "road asset management", "sign inventory", "pavement condition survey", "street furniture", "corridor inspection", "offline road mapping", "open source transport GIS"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.7
  changefreq: monthly

hero:
  headline: "Map and maintain transport networks efficiently"
  sub: "Inventory signs, road furniture, rail and airport assets, rate their condition, and keep the register current from the field, with or without a signal."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Thousands of assets spread along long corridors, with no quick way to find the one you need"
  - "Connectivity that drops out in cuttings, tunnels, and rural stretches"
  - "Condition ratings that vary between inspectors and between years"
  - "Sign and furniture registers that fall out of date as soon as the survey ends"
  - "Photos and defect notes that never make it back to the asset record"
  - "Slow handover of inspection data into the asset management system"
proof:
  - "Works fully offline by default, along the whole length of a corridor"
  - "Scans QR codes and barcodes and reads NFC tags to identify tagged assets"
  - "Value relations, constraints, and required fields keep condition ratings consistent between inspectors"
  - "Writes to PostGIS and GeoPackage, and QFieldCloud exposes an API for integration"
  - "Open source, with no per-seat licensing and no vendor lock-in"
faq:
  - q: "Can QField handle a network-wide sign or asset inventory?"
    a: "Yes. The asset layer sits in a QGIS project backed by GeoPackage or PostGIS, and QField works with the same data on the tablet. Crews can search for an asset, open its record, and update it in place rather than creating a duplicate."
  - q: "Can we structure condition ratings and inspections?"
    a: "Yes. Configure dropdowns for asset type and defect category, constraints for condition scores, and required fields in QGIS. QField enforces them on the tablet, so every inspector records the same thing the same way."
  - q: "Can we identify assets by barcode or tag?"
    a: "Yes. QField scans QR codes and barcodes and reads NFC tags, so where signs, cabinets, or other assets already carry an ID, the inspector can scan it straight into the form."
  - q: "Does QField support high-accuracy GNSS?"
    a: "Yes. Pair QField with an external Bluetooth GNSS receiver with RTK corrections for survey-grade positions. Live accuracy is shown during capture, so inspectors can check it before saving a point."
  - q: "Can we record where an inspection crew actually went?"
    a: "Yes. QField can record track logs while the crew moves along the route, so you have a record of the ground covered alongside the assets inspected."
  - q: "How does inspection data reach our asset management system?"
    a: "QField writes to GeoPackage, PostGIS, and any other format QGIS supports, so anything that reads those formats can consume the data. For tighter integration, QFieldCloud exposes an API."
  - q: "Does QField work offline along remote corridors?"
    a: "Yes. QField runs fully offline by default. Basemaps, asset layers, and forms are loaded onto the device before the inspection, and data syncs the next time the device is online."
---

## Field workflows

Transport authorities, contractors, and consultants use QField to keep network assets documented:

- Traffic sign and road marking inventories
- Road furniture, barriers, kerbs, and drainage condition surveys
- Pavement defect recording with photos and severity
- Rail corridor asset inspections and vegetation clearance checks
- Airport signage, lighting, and airside inspections
- Track logs of inspection routes for coverage records

## Keeping a linear network register current

Transport assets are spread thin over long distances. A single road authority can have tens of thousands of signs, posts, and gullies, and the register is only as good as the last time someone walked past each one. Registers go stale not because nobody inspects, but because inspection notes and photos never make it back into the asset record.

QField removes that step. The inspector works directly on the asset layer, finds the asset on the map or by scanning its tag, and updates its condition in the same record. Forms configured in QGIS carry dropdowns and constraints for condition ratings, so scores are comparable between inspectors and from one year to the next. Photos attach to the asset, track logs show the ground covered, and the whole survey runs offline in cuttings, tunnels, and rural stretches without mobile coverage.

## One workflow with QGIS and QFieldCloud

Prepare the asset layers and inspection forms in [QGIS](https://qgis.org) once, then push the project to every crew through [QFieldCloud](https://qfield.cloud). Inspection teams work offline along the route and sync at the end of the day, with conflict-safe merges when two crews have updated the same asset.

## Transport and infrastructure teams using QField

- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for construction and engineering →](/solutions/construction-and-engineering/).
