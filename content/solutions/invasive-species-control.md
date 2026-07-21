---
title: "QField for Invasive Species Control"
slug: "invasive-species-control"
type: "solutions"
description: "Detect, treat, and track invasive species in the field with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["invasive species", "pest control", "weed control", "predator control", "bait stations", "trap monitoring", "eradication", "biosecurity", "mobile GIS", "QGIS fieldwork", "offline GIS", "conservation"]
categories: ["Environment, Agriculture & Natural Resources"]
successStoryCategories: ["ecology-environment"]

sitemap:
  priority: 0.6
  changefreq: monthly

hero:
  headline: "Run invasive species control offline, with full coverage"
  sub: "Record detections, treatments, traps, and bait stations with photos and GPS, and see at a glance which ground is covered."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Detection and treatment records scattered across notebooks and devices"
  - "No way to see which areas have been treated and which still need work"
  - "Bait stations, traps, and treatment points that are hard to relocate in the field"
  - "Inconsistent species and method coding between operators and contractors"
  - "Remote operations areas with no signal for days at a time"
  - "Volunteer or seasonal crews needing a tool they can use correctly on day one"
proof:
  - "Used by conservation organisations running landscape-scale predator and weed control"
  - "Records detections, treatments, and device locations with photos and GPS in one record"
  - "Works fully offline by default in remote terrain"
  - "Treatment status can be colour-coded so no area is missed and none is treated twice"
  - "Open source, runs on Android, iOS, Windows, macOS, and Linux"
faq:
  - q: "Can I map bait stations, traps, and treatment points?"
    a: "Yes. Capture each device or treatment as a point with its own form, photos, and GPS position. On later visits the existing records load onto the device, and the live GPS position guides crews back to each one for servicing."
  - q: "Can I see which areas have already been treated?"
    a: "Yes. Colour-code records by status in QGIS symbology, and the same styling shows live in QField. Crews can tell at a glance which ground is covered and what still needs work."
  - q: "Does QField work offline during remote control operations?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device beforehand, and data syncs the next time the device is online."
  - q: "Can I enforce consistent species and method coding?"
    a: "Yes. Configure value-relation widgets for species and method lists and constraints in QGIS. QField enforces them on the tablet, so operators cannot enter invalid values."
  - q: "How accurate is positioning for individual devices and detections?"
    a: "Built-in tablet GPS typically gives accuracy of a few metres. For survey-grade positioning, pair QField with a Bluetooth GNSS receiver. RTK corrections bring positioning to centimetres."
  - q: "Can multiple operators and contractors work at the same time?"
    a: "Yes. With QFieldCloud each operator gets their own offline copy. Changes merge automatically on sync, and records can be filtered by operator, method, or area."
  - q: "Can I track detections and treatments over time?"
    a: "Yes. Each record is stamped with its capture time. Repeat operations accumulate into a history you can compare in QGIS to measure progress toward eradication."
  - q: "What data formats does QField use for control operations?"
    a: "QField writes to GeoPackage, shapefile, PostGIS, and any other format QGIS supports. Records, geometry, and attached photos all stay together in the project."
---

## Field workflows

Invasive species teams use QField across detection and control:

- Detection and sighting records with species and density
- Bait station, trap, and treatment-point placement and servicing
- Treated-area delineation as polygons
- Re-survey and monitoring to confirm results
- Photo documentation against each record
- Operator and date tracking for every treatment

## Built for landscape-scale operations

Invasive species control is a coverage problem as much as a field problem. The hard part is knowing what has been done and what is left, across large and remote areas worked by many people over a long season. QField stores each detection and treatment as a structured record with its location, status, and capture time. Treatment status can be colour-coded in QGIS and seen live in QField, so crews can tell at a glance which ground is covered. Across a season the records build into a complete operational history.

## One workflow with QGIS and QFieldCloud

Prepare the control project in [QGIS](https://qgis.org), push it to every device through [QFieldCloud](https://qfield.cloud), and sync at the end of each day. Crews work offline for as long as the operation takes, and conflict-safe merges keep multiple operators working the same area without overwriting each other.

## Invasive species control with QField

- [Zero Invasive Predators: eliminating invasive species with QField](/success-stories/zero-invasive-predators/), systematically removing possums, rats, and stoats from forest in New Zealand's South Westland
- [Browse all ecology success stories →](/success-stories/?filter=ecology-environment)

Looking for the broader picture? See [QField for ecology and biodiversity monitoring →](/solutions/ecology-and-biodiversity-monitoring/).
