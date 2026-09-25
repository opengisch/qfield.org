---
title: "QField for Mining and Quarrying"
slug: "mining-and-quarrying"
type: "solutions"
description: "Geological mapping, sampling, site inspections, and environmental monitoring in mines and quarries with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "mining", "quarry", "geology mapping", "exploration mapping", "sample collection", "structural geology", "mine site inspection", "haul road inspection", "mine environmental monitoring", "RTK GNSS", "offline mine mapping"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.66
  changefreq: monthly

hero:
  headline: "Collect accurate data across mine sites"
  sub: "Map geology, record samples, and document inspections and environmental checks across the site, with or without a signal."
  ctaText: "Talk to us"
  ctaUrl: "/assistance/"
pains:
  - "Remote exploration areas and pits with no mobile coverage"
  - "Field notebooks and paper maps that have to be digitised back at camp"
  - "Structural readings and lithology codes recorded differently by each geologist"
  - "Sample locations and IDs that do not match between the field and the lab"
  - "Inspection photos and notes scattered across devices"
  - "Historic mapping, geophysics, and geochemistry that cannot be checked in the field"
proof:
  - "Terrane Geoscience maps bedrock geology directly into GeoPackage layers in QField, with constraints on structure type, azimuth, and dip"
  - "Terrane Geoscience reports drastically reduced office digitisation time compared with paper mapping"
  - "Supports external Bluetooth GNSS receivers with RTK corrections"
  - "Scans QR codes and barcodes, useful for sample bag and asset IDs"
  - "Works fully offline by default, open source, with no per-seat licensing"
faq:
  - q: "Can we design geology forms in QGIS?"
    a: "Yes. Configure value maps for lithology and structure type, numeric ranges for azimuth and dip, default values for date and coordinates, and required fields in QGIS. QField enforces them on the tablet, so every geologist records data the same way."
  - q: "Can we see historic mapping and geophysics in the field?"
    a: "Yes. Any layer in the QGIS project, including raster geophysics, geochemistry points, and previous mapping, can be packaged onto the device and viewed against your live position. Map themes let you switch between views quickly."
  - q: "Do you support navigation to targets and planned points?"
    a: "Yes. Load planned sample sites, drill collars, or survey points into the project and use QField's navigation to guide you to each target, with live distance and bearing."
  - q: "Can we track sample IDs reliably?"
    a: "Yes. QField scans QR codes and barcodes, so pre-printed sample tags can be scanned into the form. Required fields and constraints stop a sample being saved without an ID."
  - q: "How accurate is positioning?"
    a: "Built-in tablet GPS typically gives accuracy of a few metres. For survey-grade positioning, pair QField with an external Bluetooth GNSS receiver with RTK corrections. Live accuracy is shown during capture."
  - q: "Can several field teams work on the same project?"
    a: "Yes. With QFieldCloud each team works on its own offline copy. Changes merge automatically on sync, and every edit is attributable to the user who made it."
  - q: "Does QField work in remote areas without connectivity?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device before the field campaign, and data syncs the next time the device is online."
---

## Field workflows

Exploration geologists, mine surveyors, and environmental teams use QField across the life of a site:

- Geological and structural mapping with constrained forms
- Sample collection with scanned sample IDs and photos
- Navigation to planned sample sites and survey targets
- Haul road, bench, and safety inspections
- Stockpile, tailings, and disturbance area mapping
- Environmental monitoring, rehabilitation, and compliance records

## Field data that does not need digitising

Geological fieldwork has long depended on a notebook, a paper map, and a compass, followed by days of digitising once the campaign is over. Every transcription is a chance for a reading to be misread or a sample number to be mistyped, and historic data sits in the office where it cannot inform decisions in the field.

QField lets geologists record directly into the project database. Structure types come from a dropdown, azimuth and dip are held to valid ranges, and coordinates and dates fill in automatically. Historic mapping, orthophotos, geophysics, and geochemistry travel on the device, so interpretation can happen at the outcrop. At the end of the day the data syncs back to QGIS for checking, and final maps are built from the field data rather than redrawn from it. For more on survey workflows, see [QField for geological and geophysical surveys](/solutions/geological-and-geophysical-surveys/).

## One workflow with QGIS and QFieldCloud

Prepare the mapping and sampling project in [QGIS](https://qgis.org), including basemaps and reference data, then push it to every field device through [QFieldCloud](https://qfield.cloud). Teams work offline across the site and sync when they are back in coverage, with conflict-safe merges between teams.

## Mining and geology teams using QField

- [Geological mapping by Terrane Geoscience](/success-stories/geological-mapping/), where station, structure, sample, contact, and fault layers are captured in QField with value maps and constraints, and final maps are prepared directly from field data with no need to digitise
- [Real-time radiation detection](/success-stories/radiation-detection/), where crews remediating former uranium processing sites stream detector readings into QField and map sample locations and excavation boundaries
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for construction and engineering →](/solutions/construction-and-engineering/).
