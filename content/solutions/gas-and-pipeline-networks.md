---
title: "QField for Gas and Pipeline Networks"
slug: "gas-and-pipeline-networks"
type: "solutions"
description: "Capture pipeline as-builts, crossings, markers, and integrity inspections with QField, QGIS, and QFieldCloud, fully offline along remote corridors."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "gas network", "pipeline inspection", "pipeline mapping", "as-built", "integrity management", "leak survey", "district heating", "wayleaves", "pipeline right of way", "offline utility mapping", "open source utility GIS"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.67
  changefreq: monthly

hero:
  headline: "Confidently manage pipeline data in the field"
  sub: "Capture alignments, crossings, markers, and inspection findings with structured forms and photo evidence along corridors with no signal."
  ctaText: "Talk to us"
  ctaUrl: "/assistance/"
pains:
  - "Long corridors and rural routes with no mobile coverage"
  - "Inspection and leak survey records that vary from one crew to the next"
  - "As-built positions recorded after the trench is backfilled, or not at all"
  - "Crossings, markers, and valves documented on paper sketches that are hard to digitise"
  - "Photos of coating damage or exposed pipe that lose their link to a location"
  - "Slow and error-prone handover of field data into the enterprise GIS"
proof:
  - "Works fully offline by default, with network layers and imagery stored on the device"
  - "Connects to external Bluetooth GNSS receivers with RTK corrections for as-built capture before backfill"
  - "Constraints and required fields make every inspection record complete before it can be saved"
  - "Photos are attached directly to the feature they document"
  - "Works with PostGIS and GeoPackage, and self-hostable for strict data governance"
  - "Open source, with no per-seat licensing and no vendor lock-in"
faq:
  - q: "Can we enforce compliance rules in inspection forms?"
    a: "Yes. Configure constraints, value-relation widgets, and required fields in QGIS. QField enforces them on the device, so a crew cannot save an inspection with a missing reading, finding code, or photo."
  - q: "Do you support linear referencing?"
    a: "Chainage and marker references can be stored as attributes and captured in the field. Advanced linear referencing is handled in QGIS on the office side."
  - q: "How accurate is QField for pipeline as-built capture?"
    a: "Built-in device GPS typically gives accuracy of a few metres. For as-built work, connect an external Bluetooth GNSS receiver with RTK corrections. Live accuracy is displayed while capturing, so crews can check the fix before recording a point in an open trench."
  - q: "Can we record leak survey findings?"
    a: "Yes. Record each finding as a point with reading, classification, and photos, and use track logs to show which sections of the route were actually walked."
  - q: "Does QField work in remote corridors without signal?"
    a: "Yes. QField runs fully offline by default. Load basemaps, the pipeline network, and forms onto the device before leaving, and sync when back in coverage."
  - q: "Can our contractors use it without seeing the whole network?"
    a: "Yes. QFieldCloud permissions let you share a project with the crews who need it. You can also prepare separate projects per contract area in QGIS."
  - q: "Can we keep pipeline data on our own servers?"
    a: "Yes. QField and QFieldCloud are open source and QFieldCloud can be self-hosted, so operators with security or data residency requirements can run the whole stack inside their own infrastructure."
---

## Field workflows

Gas, pipeline, and district heating teams use QField for:

- Route surveys and wayleave documentation
- As-built capture of new segments, fittings, and valves before backfill
- Crossings, markers, and third-party infrastructure recording
- Integrity and right-of-way inspections
- Leak surveys and leak reports with photo evidence
- Excavation damage and repair documentation

## Recording the pipe before the trench closes

Pipeline records are only as good as the moment they were captured. Once a trench is backfilled, the only evidence of where the pipe actually went is whatever was recorded while it was open. With an external GNSS receiver on RTK, QField lets a crew capture the as-built alignment, fittings, and depth attributes in the trench, with photos attached to each point and live accuracy on screen, so the record is made at the only time it can be checked.

The same discipline applies to inspections. Forms built in QGIS carry the operator's own finding codes, severity scales, and required fields to every device, so a contractor's leak survey looks the same as an in-house one. Track logs show where the crew walked, and every finding sits on the map with its photos rather than in a separate report.

## One workflow with QGIS and QFieldCloud

Prepare the network, forms, and symbology in [QGIS](https://qgis.org). Share projects with in-house crews and contractors through [QFieldCloud](https://qfield.cloud), or run a self-hosted instance. Crews work offline along the route and sync when back in coverage, with conflict-safe merges and data flowing straight back to PostGIS or GeoPackage.

## Infrastructure teams using QField

- [Data collection for O&M of rural water supply systems in Rwanda](/success-stories/water-supply-rwanda/), a national pipe network mapped and kept current with QGIS and QField
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for water utilities and wastewater management →](/solutions/water-utilities-and-wastewater-management/).
