---
title: "QField for Forest Habitat and Biodiversity Mapping"
slug: "forest-habitat-mapping"
type: "solutions"
description: "Map habitats, species observations, and biodiversity features under forest canopy with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["habitat mapping", "biodiversity mapping", "species observation", "forest habitat", "deadwood mapping", "veteran trees", "microhabitat", "ecological survey", "mobile GIS", "QGIS fieldwork", "offline mapping", "protected species"]
categories: ["Environment, Agriculture & Natural Resources"]
successStoryCategories: ["forestry"]

sitemap:
  priority: 0.6
  changefreq: monthly

hero:
  headline: "Map habitats and species under the canopy, offline"
  sub: "Capture habitat polygons, species observations, photos, and audio with GPS, on a tablet that runs all day without signal."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "Habitat boundaries sketched on paper maps that never quite line up back at the office"
  - "Species observations recorded in notebooks with inconsistent names and no precise location"
  - "Sensitive species locations that need to be captured carefully and kept controlled"
  - "Photos and audio recordings separated from the observation they belong to"
  - "GPS drift under dense canopy placing features in the wrong location"
  - "Volunteers and specialists working from different forms and field methods"
proof:
  - "Captures habitat polygons, species points, photos, and audio in one structured record"
  - "Works fully offline by default under dense canopy and in remote terrain"
  - "Constrained forms keep species names and habitat codes consistent across surveyors"
  - "Compatible with external GNSS receivers for accurate feature positioning"
  - "Open source and self-hostable, so sensitive data stays under your control"
faq:
  - q: "Can I record habitat polygons and species points in the same project?"
    a: "Yes. QField handles point, line, and polygon layers in a single project. Habitat polygons, species observations, and features like deadwood can all be captured and related to one another."
  - q: "Does QField capture audio for species like birds or amphibians?"
    a: "Yes. QField records audio as an attachment field, alongside photos and video. The recording is stored against the observation with its location and capture time."
  - q: "How accurate is positioning for habitat features under canopy?"
    a: "Built-in tablet GPS typically gives accuracy of a few metres. For survey-grade positioning under canopy, pair QField with a Bluetooth GNSS receiver. RTK corrections bring positioning to centimetres."
  - q: "Can I keep sensitive species locations under control?"
    a: "Yes. Your data lives in your own QGIS project and QFieldCloud account, or a server you host yourself. QField and QFieldCloud are open source and self-hostable, so you decide what is captured and what is ever shared."
  - q: "Can I enforce consistent species and habitat coding?"
    a: "Yes. Configure value-relation widgets for species and habitat lists and constraints in QGIS. QField enforces them on the tablet, so surveyors cannot enter invalid values."
  - q: "Does QField work offline in remote habitat?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device beforehand, and the whole survey runs without a network connection."
  - q: "Can multiple surveyors map the same area at once?"
    a: "Yes. With QFieldCloud each surveyor gets their own offline copy. Changes merge automatically on sync, so a team can cover a large area without overwriting each other."
  - q: "What data formats does QField use for habitat data?"
    a: "QField writes to GeoPackage, shapefile, PostGIS, and any other format QGIS supports. Habitat geometry, species records, photos, and audio all stay together in the project."
---

## Field workflows

Habitat and biodiversity teams use QField to map:

- Habitat type and condition as polygons
- Species observations with location, count, and photos
- Deadwood, veteran trees, and microhabitat features
- Audio recordings for acoustic species such as birds and amphibians
- Repeat survey points for monitoring over time

## Built for sensitive data

Biodiversity data is often sensitive. The precise location of a protected species is exactly the information that needs to be handled with care. With QField the data lives in your own QGIS project and your own QFieldCloud account, or on a server you host yourself. QField and QFieldCloud are open source and self-hostable, so you decide what is captured, who can see it, and what is ever shared beyond your team.

## One workflow with QGIS and QFieldCloud

Prepare the survey project in [QGIS](https://qgis.org), push it to every device through [QFieldCloud](https://qfield.cloud), and sync at the end of each day. Surveyors work offline for as long as they are in the field, and conflict-safe merges keep a whole team working the same area without losing records.

## Biodiversity and habitat mapping with QField

- [Monitoring fire salamanders in Saxony](/success-stories/fire-salamanders/), a conservation project using QField to track a protected amphibian
- [Mapping breeding birds in the Wadden Sea](/success-stories/mapping-breeding-birds/), with Schutzstation Wattenmeer
- [Browse all forestry success stories →](/success-stories/?filter=forestry)

Looking for the broader picture? See [QField for forestry and silviculture →](/solutions/forestry-and-silviculture/).
