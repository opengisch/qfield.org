---
title: "QField for Construction Progress Documentation"
slug: "construction-progress-documentation"
type: "solutions"
description: "Daily progress records, geotagged photos, as-built updates, and handover evidence with QField, QGIS, and QFieldCloud, even offline on site."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "construction progress", "as-built", "progress photos", "site diary", "handover documentation", "earthworks tracking", "construction QA", "geotagged photos", "offline site mapping", "open source construction GIS"]
categories: ["Specialized & Emerging Use Cases"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.67
  changefreq: monthly

hero:
  headline: "Keep progress records clear and auditable"
  sub: "Record daily progress, as-built positions, and photo evidence against the part of the site they belong to, and see the whole picture in QGIS the same day."
  ctaText: "Talk to us"
  ctaUrl: "/assistance/"
pains:
  - "Progress photos spread across phones, folders, and email threads"
  - "Site diaries that say what happened but not exactly where"
  - "Several crews updating the same progress sheet and overwriting each other"
  - "Weekly reporting cycles that leave the office days behind the site"
  - "As-built evidence that has to be pieced together at handover"
  - "No signal in parts of the site where the work is happening"
proof:
  - "Photos attached to records with their location, attributes, and capture time"
  - "Conflict-safe sync through QFieldCloud, with every edit attributable to a user"
  - "Used at US remediation sites to map excavation boundaries, with crews moving from one backfill a week to two"
  - "Supports external Bluetooth GNSS receivers with RTK corrections for as-built positions"
  - "Works fully offline by default, open source, with no per-seat licensing"
faq:
  - q: "Can we attach multiple photos to one progress record?"
    a: "Yes. Photos attach directly to the record. Using a related table, you can keep any number of photos or visits against one element, zone, or chainage, so the progress history stays in one place."
  - q: "Can we track progress by zone, element, or activity?"
    a: "Yes. Model zones, elements, or work packages as features in QGIS with a status field and a fixed list of stages. Crews update the status on site, and the office sees the map change after sync."
  - q: "Do you support stakeout and measurement?"
    a: "Yes. QField can navigate to a target point with live distance and bearing, and measure lengths and areas on the map. For survey-grade as-built positions, pair it with an external GNSS receiver with RTK corrections."
  - q: "Can several crews record progress at the same time?"
    a: "Yes. With QFieldCloud each crew works on its own offline copy. Changes merge automatically on sync, and conflict resolution handles the rare case where two crews edit the same record."
  - q: "Is there an audit trail of who recorded what?"
    a: "Yes. QFieldCloud records which user made each change and when, so every progress entry and every photo has an author and a time."
  - q: "Does QField work offline on site?"
    a: "Yes. QField runs fully offline by default. Layers and forms are loaded onto the device before the shift, and records sync the next time the device is online."
---

## Field workflows

Contractors and project teams use QField to build a progress record as the work happens:

- Daily progress records by zone, element, or activity
- Geotagged progress photos linked to the feature they show
- As-built positions for installed elements and services
- Excavation, fill, and earthworks extents as polygons
- QA checks and hold points with required sign-off fields
- Handover documentation assembled from synced records

## Progress you can map, not just describe

A site diary tells you that a slab was poured or a trench was backfilled. It rarely tells you exactly which one, where it ends, and what it looked like at the time. When a claim, a delay analysis, or a handover depends on that detail, teams end up searching phones and email for photos and trying to match them to drawings.

QField records progress as features. A zone, element, or trench run is a geometry with a status, a date, the user who updated it, and the photos that prove it. Crews update the record on site, offline if needed, and QFieldCloud merges everyone's changes so the office sees one current map rather than several spreadsheets. Because the data lives in QGIS, the same records can be filtered by date or status, compared against the programme, and exported for reports and handover packs.

## One workflow with QGIS and QFieldCloud

Set up the progress layers and forms in [QGIS](https://qgis.org) once, then push the project to every site device through [QFieldCloud](https://qfield.cloud). Crews record progress offline through the day and sync at the end of each shift, with conflict-safe merges and an attributable history of every change.

## Site teams using QField

- [Real-time radiation detection](/success-stories/radiation-detection/), where remediation crews map excavation boundaries and sample locations in QField and now complete two backfills a week instead of one
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for construction and engineering →](/solutions/construction-and-engineering/).
