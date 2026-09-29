---
title: "QField for Facility and Asset Management"
slug: "facility-and-asset-management"
type: "solutions"
description: "Asset inventories, condition surveys, inspections, and maintenance logs with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "asset management", "facility inspections", "asset register", "asset inventory", "condition survey", "maintenance log", "barcode asset tracking", "NFC asset tags", "CMMS integration", "open source asset management GIS", "offline asset inspection"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.66
  changefreq: monthly

hero:
  headline: "Keep asset data current and auditable"
  sub: "Inventory assets, rate their condition, and log every inspection and intervention against the asset record, from a tablet that works offline."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Asset registers with missing attributes, wrong locations, and duplicate entries"
  - "Inspection photos that cannot be tied back to the asset they show"
  - "No history of what was done to an asset, when, and by whom"
  - "Condition scores that mean different things to different inspectors"
  - "Registers that go stale because updates rely on someone retyping paper forms"
  - "Sites, plant rooms, and grounds with poor or no mobile coverage"
proof:
  - "Scans QR codes and barcodes and reads NFC tags to identify assets in the field"
  - "Related tables keep every inspection and intervention linked to the asset"
  - "GINVE built its offline green space and street furniture inventory on QField and GeoPackage"
  - "Rwanda's rural water utility keeps its national waterworks register updated through district engineers using QField"
  - "Writes to PostGIS and GeoPackage, and QFieldCloud exposes an API for integration"
  - "Open source and self-hostable, with no per-seat licensing"
faq:
  - q: "Can we import and export to our CMMS or GIS?"
    a: "Yes. QField works with GeoPackage, PostGIS, and any other format QGIS supports, so anything that reads those formats can consume the data. For tighter integration, QFieldCloud exposes an API."
  - q: "Can we keep a maintenance history for each asset?"
    a: "Yes. Set up inspections and interventions as related tables in QGIS. In QField, the inspector opens the asset and adds a new inspection record under it, so the full history stays linked to the asset."
  - q: "Does QField support barcode and NFC asset tags?"
    a: "Yes. QField scans QR codes and barcodes and reads NFC tags, so where assets already carry an ID, it can be scanned straight into the form instead of typed."
  - q: "How do we keep condition ratings consistent?"
    a: "Configure dropdowns, constraints, and required fields in QGIS. QField enforces them on the tablet, so an inspector cannot save a record with a missing or out-of-range condition score."
  - q: "How do we manage teams and contractors?"
    a: "QFieldCloud shares projects with the people who need them and lets you set roles, so some users edit and others only view. Every edit is attributable, and changes from several crews merge automatically on sync."
  - q: "Can we host asset data on our own infrastructure?"
    a: "Yes. QField and QFieldCloud are open source, and QFieldCloud can be self-hosted, so asset data can stay inside your own network."
  - q: "Does QField work offline?"
    a: "Yes. QField runs fully offline by default. Layers and forms are loaded onto the device before the inspection, and records sync the next time the device is online."
---

## Field workflows

Facility managers, asset owners, and maintenance teams use QField to keep registers accurate:

- Asset inventories with barcode, QR code, and NFC identification
- Condition surveys with consistent ratings and photos
- Planned and reactive maintenance logs linked to each asset
- Safety and compliance inspections
- Grounds, green space, and street furniture inventories
- Register clean-up: correcting locations, filling gaps, removing duplicates

## A register that stays current

Most asset registers start accurate and then drift. The inventory is done once, but every repair, replacement, and inspection after that has to be written down and entered by someone, and most of it never is. A few years later the register needs a full resurvey.

QField keeps the register live by making the update happen on the asset itself. The inspector finds the asset on the map or scans its tag, checks the stored attributes, and adds an inspection or intervention record underneath it through a related table. Dropdowns and constraints configured in QGIS keep condition scores and fault categories consistent, photos attach to the record, and QFieldCloud records who made each change. The office sees the update after sync in the same QGIS project and database the register already lives in.

## One workflow with QGIS and QFieldCloud

Design the asset model and forms in [QGIS](https://qgis.org), backed by GeoPackage or PostGIS, then push the project to every device through [QFieldCloud](https://qfield.cloud). Inspectors work offline and sync when they are back online, with conflict-safe merges when two people have updated the same asset.

## Asset management teams using QField

- [Building on top of QFieldCloud](/success-stories/building-on-top/), where GINVE generates GeoPackage-based QField projects from its platform so operators can inventory trees, hedges, turf, and street furniture offline, with conflicts resolved on sync
- [Data collection for rural water supply O&M in Rwanda](/success-stories/water-supply-rwanda/), where engineers in 27 districts collect and update the national rural waterworks register, validated into PostGIS
- [Monitoring 20,000 WWII fortifications across Germany](/success-stories/ww2-fortifications/), where volunteers add condition observations and photos to a register of concrete structures revisited every few years
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for construction and engineering →](/solutions/construction-and-engineering/).
