---
title: "QField for Waste Management and Sanitation"
slug: "waste-management-and-sanitation"
type: "solutions"
description: "Container inventories, collection route audits, and sanitation inspections with offline mobile GIS, QField, QGIS, and QFieldCloud."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "waste management", "sanitation", "route audit", "container inventory", "collection routes", "municipal waste", "sanitation inspection", "barcode scanning", "WASH mapping"]
categories: ["Government, Public Administration & Municipalities"]
successStoryCategories: ["government-municipalities"]

sitemap:
  priority: 0.66
  changefreq: monthly

hero:
  headline: "Improve waste and sanitation operations"
  sub: "Inventory every container, audit every route, and record inspections with photo evidence that stays attached to the asset."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "Container registers that do not match what is actually on the street"
  - "Collection routes planned against an inventory nobody has verified in years"
  - "Overflow and contamination reports arriving as photos with no location"
  - "Crews unable to record an issue without stopping to phone the depot"
  - "Dead zones along routes where the network drops out"
  - "Sanitation inspection records that cannot be aggregated because every inspector wrote them differently"
proof:
  - "Used by municipal service providers and utilities"
  - "Scans barcodes, QR codes, and NFC tags already fixed to containers"
  - "Every issue report carries its location, timestamp, and photo"
  - "Works fully offline along routes with no coverage"
  - "Open source, with no per-seat licence for drivers and inspectors"
faq:
  - q: "Can drivers and crews capture route issues as they go?"
    a: "Yes. A crew member records the issue against the container or the location, attaches a photo, and moves on. The report syncs for follow-up without a phone call to the depot."
  - q: "Does QField support barcode and NFC container identifiers?"
    a: "Yes. QField scans QR codes and barcodes and reads NFC tags. Where containers already carry an ID, scanning it is faster and more reliable than typing it, which is what makes a full inventory feasible."
  - q: "Can we audit a collection route against the actual containers on the ground?"
    a: "Yes. Load the planned route and container layer onto the device. A crew verifies each container, flags missing or extra ones, and the corrected inventory syncs back as the basis for route planning."
  - q: "How do we standardize sanitation inspection records?"
    a: "Configure the inspection form in QGIS with constrained dropdowns and required fields. QField enforces them, so records from different inspectors and different districts aggregate cleanly."
  - q: "Does QField work in the dead zones along a route?"
    a: "Yes. QField runs fully offline by default. The route, the container layer, and the forms are on the device. Data syncs when the vehicle returns to coverage."
  - q: "Can overflow or contamination reports include photo evidence?"
    a: "Yes. Photos attach to the container record, along with the location, the timestamp, and the person reporting it."
  - q: "Can this feed our route optimisation software?"
    a: "QField writes to GeoPackage, shapefile, and PostGIS. A verified container inventory in any of those formats is the input most route optimisation tools expect."
  - q: "What does it cost to equip a whole collection fleet?"
    a: "QField is free and open source with no per-seat licence. Equipping fifty drivers costs the same in licensing as equipping one."
---

## Field workflows

Waste and sanitation teams use QField across operations:

- Container and bin inventories, verified by scanning the ID already on the asset
- Collection route audits and inputs to route optimisation
- Overflow, contamination, and illegal dumping reports with photo evidence
- Sanitation facility inspections and condition recording
- Maintenance tracking for containers, transfer stations, and equipment
- Service coverage mapping across a municipality

## An inventory the route plan can actually trust

Route optimisation is only as good as the container inventory underneath it, and that inventory is usually a spreadsheet that has drifted from reality for years. Verifying it by hand is the kind of task that never gets funded, because it means visiting every container in the municipality.

QField makes it a by-product of work already happening. A crew running their normal route taps each container, scans the barcode fixed to it, confirms or corrects the attributes, and moves on. Over a collection cycle the register rebuilds itself from the ground truth. Issues get reported the same way: a photo, a location, a timestamp, attached to the container rather than sent to an inbox.

## One workflow with QGIS and QFieldCloud

Build the container and route model in [QGIS](https://qgis.org). Push it to every vehicle and inspector through [QFieldCloud](https://qfield.cloud). Crews work offline along the route and sync at the end of the shift, with conflict-safe merges when two crews recorded the same asset.

## Municipal service providers using QField

- [Operation and maintenance of rural water supply systems in Rwanda](/success-stories/water-supply-rwanda/), using QGIS and QField
- [Building on top of QFieldCloud](/success-stories/building-on-top/), in Italian green infrastructure inventory
- [Browse all government success stories →](/success-stories/?filter=government-municipalities)

Looking for the broader picture? See [QField for government and municipalities →](/solutions/government-and-municipalities/).
