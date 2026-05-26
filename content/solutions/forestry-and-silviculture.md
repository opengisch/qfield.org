---
title: "QField for Forestry and Silviculture"
slug: "forestry-and-silviculture"
type: "solutions"
description: "Offline forest inventory, plot sampling, silviculture operations, and habitat mapping with QField, QGIS, and QFieldCloud."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "forest inventory", "silviculture", "forest management", "tree inventory", "stand mapping", "forest plot sampling", "DBH", "harvesting operations", "open source forestry GIS", "offline forestry mapping", "habitat mapping"]
categories: ["Environment, Agriculture & Natural Resources"]
successStoryCategories: ["forestry"]

sitemap:
  priority: 0.69
  changefreq: monthly

hero:
  headline: "Survey forests where there is no signal"
  sub: "Plot sampling, tree inventory, silviculture, and habitat mapping from a tablet that runs all day offline."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "No signal in remote forest plots"
  - "GPS drift under dense canopy"
  - "Inconsistent species codes and DBH formats between surveyors"
  - "Reconciling crew data from paper plot sheets back at the office"
  - "Manual merges that create duplicate records and lost photos"
  - "No reliable way to verify silviculture or harvest work after the crew has moved on"
proof:
  - "Used by national land surveys and public and private forest services"
  - "Self-hostable for organisations with strict data governance requirements"
  - "Works fully offline by default, tested in dense canopy and remote terrain"
  - "Supports external GNSS receivers from Trimble, Emlid, u-blox and others"
  - "Open source, with no per-seat licensing and no vendor lock-in"
  - "2M+ installs of QField across industries"
faq:
  - q: "Does QField work offline in dense forest canopy?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device in the office, and the entire fieldwork session runs without a network connection. Data syncs to QFieldCloud or your own server the next time the device is online."
  - q: "How accurate is GPS positioning in QField under tree cover?"
    a: "Built-in tablet GPS typically gives accuracy of a few metres. For survey-grade positioning under canopy, pair QField with an external GNSS receiver over Bluetooth. Live accuracy is displayed during capture."
  - q: "Does QField support external GNSS receivers like Trimble, Emlid, or u-blox?"
    a: "Yes. QField connects to standard NMEA-compatible Bluetooth GNSS receivers and supports RTK corrections. Live position quality is visible in the capture interface."
  - q: "Can I enforce species codes, DBH ranges, and other plot attributes?"
    a: "Yes. Configure value-relation widgets, constraints, and domains in QGIS, and QField will enforce them on the tablet. Field staff cannot enter invalid values."
  - q: "Can multiple forestry crews work in the same project at once?"
    a: "Yes. With QFieldCloud each crew gets their own offline copy. Changes are merged automatically on sync, with conflict resolution available for the rare cases where two crews edit the same record."
  - q: "Is QField free to use for forestry consultancies and government agencies?"
    a: "QField itself is free and open source. QFieldCloud has free, paid, and self-hosted tiers, with options that suit consultancies, agencies, and community organisations alike."
  - q: "Can I export forestry data to shapefile, GeoPackage, or PostGIS?"
    a: "Yes. Data captured in QField sits in the same QGIS project as the rest of your GIS work. Export to any format QGIS supports, or connect directly to a PostGIS database via QFieldCloud."
  - q: "What tablets and phones does QField run on for fieldwork?"
    a: "QField runs on Android, iOS, Windows, macOS, and Linux. Most forestry teams use rugged Android tablets in the field."
  - q: "Can I integrate QField with my existing forest management system?"
    a: "QField writes to standard spatial formats and PostGIS, so anything that reads those formats can consume QField data. For tighter integration, QFieldCloud exposes an API."
---

## Field workflows

QField is used across the full span of forestry fieldwork:

- [Forest inventory and plot sampling](/solutions/forest-inventory/), with structured tree-level forms and plot geometry
- [Silviculture and harvesting operations tracking](/solutions/silviculture-and-harvesting-operations/), from planting blocks to post-harvest verification
- Habitat and biodiversity mapping under forest canopy
- Forest road and infrastructure inventory
- Riparian buffer monitoring and compliance documentation

## Working under canopy

Forest fieldwork sits in the hardest conditions for mobile mapping. Mobile data is unreliable. GPS multipath under dense canopy degrades positioning. Crews spend days at a time out of office contact, often in environments where a paper notebook still feels like the safer bet.

QField is built for those conditions. Basemaps and layers are packaged onto the device before the crew leaves the office, so nothing depends on a network connection. Forms can be tuned to forestry data with value-relation widgets for species codes, numeric constraints for DBH and height, and required-photo rules at any decision point. For survey-grade positioning, external GNSS receivers connect over Bluetooth with live accuracy visible during capture.

## One workflow with QGIS and QFieldCloud

Forestry teams prepare the project in [QGIS](https://qgis.org) once, push it to every device through [QFieldCloud](https://qfield.cloud), and run conflict-safe sync at the end of each day. The same QGIS project that an inventory crew uses in the field is the one the office uses to plan next year's operations.

## See QField in real forestry projects

Look at how QField is being used by forestry and forest-conservation programmes around the world:

- [Young farmers reduce deforestation by 71% in Ghana](/success-stories/ghana-deforestation/), through community-led monitoring in the Tano Offin Forest Reserve
- [Community-led mapping for land rights and forest protection in Sarawak](/success-stories/sarawak/), with the Bruno Manser Fonds
- [Building on top of QFieldCloud](/success-stories/building-on-top/), in Italian green infrastructure inventory
- [Browse all forestry success stories →](/success-stories/?filter=forestry)
