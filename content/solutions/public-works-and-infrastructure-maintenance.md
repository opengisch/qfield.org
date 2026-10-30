---
title: "QField for Public Works and Infrastructure Maintenance"
slug: "public-works-and-infrastructure-maintenance"
type: "solutions"
description: "Asset registers, condition assessment, and work order documentation in the field with QField, QGIS, and QFieldCloud."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "public works", "infrastructure maintenance", "asset register", "condition assessment", "work orders", "CMMS integration", "municipal assets", "barcode scanning", "offline asset inventory"]
categories: ["Government, Public Administration & Municipalities"]
successStoryCategories: ["government-municipalities"]

sitemap:
  priority: 0.68
  changefreq: monthly

hero:
  headline: "Keep public infrastructure in top shape"
  sub: "Inspect assets, record condition, and close out work orders on a tablet that keeps working when the signal does not."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "Asset registers that were accurate the day they were built and never since"
  - "Condition ratings applied inconsistently by different inspectors"
  - "Work order photos scattered across phones and never attached to the asset"
  - "Crews driving back to the depot to collect a paper job sheet"
  - "No signal along routes, in culverts, in plant rooms, and under bridges"
  - "Field data that never makes it into the asset management system"
proof:
  - "Adopted by public works departments and municipal service providers"
  - "Monitoring a register of 20,000 heritage structures across Germany"
  - "Scans barcodes, QR codes, and NFC tags for assets that already carry an ID"
  - "Condition ratings constrained to your own scale, enforced on the device"
  - "Exports to GeoPackage, shapefile, and PostGIS for handover to asset management systems"
faq:
  - q: "Can QField integrate with our asset management system or CMMS?"
    a: "QField writes to GeoPackage, shapefile, and PostGIS, so any system that reads those formats can consume the data. For tighter integration, QFieldCloud exposes an API for automated import and export."
  - q: "Does QField support barcode, QR, and NFC asset identifiers?"
    a: "Yes. QField scans QR codes and barcodes and reads NFC tags. Where assets already carry an ID, an inspector scans it rather than typing it, which removes the most common source of inventory error."
  - q: "Can we navigate to assets and planned works?"
    a: "Yes. QField provides GNSS guidance to a target feature, showing live distance and bearing. This is the same stakeout capability surveyors use, applied to finding a valve chamber or a signpost."
  - q: "How do we keep condition ratings consistent between inspectors?"
    a: "Configure the rating scale as a constrained dropdown in QGIS. QField enforces it on the tablet. An inspector cannot invent a category, and the register stays comparable across years and across staff."
  - q: "Can work order photos be attached to the asset itself?"
    a: "Yes. Photos attach to the asset record, not to a separate folder. The before photo, the after photo, the condition rating, and the date all live on the same feature."
  - q: "Does QField work with no signal, underground, or inside structures?"
    a: "Yes. QField runs fully offline by default. Maps, forms, and the asset register are on the device. Where GNSS is unavailable, an inspector can place a feature manually on the map."
  - q: "Can several crews work the same district at once?"
    a: "Yes. With QFieldCloud each crew has an offline copy and changes merge on sync. Completed inspections can be colour-coded so nothing is visited twice or missed."
  - q: "What does it cost to add another inspector?"
    a: "Nothing. QField is free and open source with no per-seat licence. Adding the twentieth inspector costs the same as adding the first."
---

## Field workflows

Public works teams use QField across the maintenance cycle:

- Asset inventory and register updates, from street furniture to culverts
- Condition assessment against a constrained, comparable rating scale
- Maintenance inspections, repairs, and work order close-out
- Before and after photo documentation attached to the asset
- Routine route inspections for roads, drainage, signage, and lighting
- Defect and hazard reporting with location and severity

## A register that stays true after the crew leaves

Most asset registers decay for a structural reason: the record is updated somewhere other than where the work happens. A crew replaces a streetlight, notes it on a job sheet, and the register is updated a week later by someone who was not there. QField collapses that loop. The asset is on the map, the crew taps it, records the work, attaches the photo, and the register updates on sync.

Consistency is the other half. Condition ratings only mean something if a "3" means the same thing in two districts and in two different years. Constrained dropdowns configured in QGIS enforce that on the tablet, which is the only place enforcement actually works.

## One workflow with QGIS and QFieldCloud

Build the asset data model and inspection forms in [QGIS](https://qgis.org). Push the project to every crew through [QFieldCloud](https://qfield.cloud). Crews work offline across their routes and sync at the end of the shift, with conflict-safe merges when two crews touched the same asset.

## Public works teams using QField

- [Monitoring 20,000 WWII fortifications across Germany](/success-stories/ww2-fortifications/), a heritage asset register maintained at national scale
- [Building on top of QFieldCloud](/success-stories/building-on-top/), in Italian green infrastructure inventory
- [Operation and maintenance of rural water supply systems in Rwanda](/success-stories/water-supply-rwanda/)
- [Browse all government success stories →](/success-stories/?filter=government-municipalities)

Looking for the broader picture? See [QField for government and municipalities →](/solutions/government-and-municipalities/).
