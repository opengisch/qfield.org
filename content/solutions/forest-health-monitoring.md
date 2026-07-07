---
title: "QField for Forest Health Monitoring"
slug: "forest-health-monitoring"
type: "solutions"
description: "Record pest, disease, dieback, and tree-condition observations in the field with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["forest health", "pest monitoring", "tree disease", "dieback", "defoliation", "crown condition", "tree mortality", "forest condition survey", "mobile GIS", "QGIS fieldwork", "offline forestry mapping", "forest health monitoring"]
categories: ["Environment, Agriculture & Natural Resources"]
successStoryCategories: ["forestry"]

sitemap:
  priority: 0.6
  changefreq: monthly

hero:
  headline: "Track forest health from the field, even offline"
  sub: "Record pest, disease, and tree-condition observations with photos and GPS, and revisit the same locations season after season."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "Pest and disease observations recorded on paper that takes weeks to reach the office"
  - "No consistent way to record symptoms, severity, and affected species between surveyors"
  - "Affected trees and stands that are hard to relocate for a follow-up visit"
  - "Condition photos that get separated from the location and the tree they document"
  - "Monitoring data scattered across seasons with no single place to see change over time"
  - "Seasonal or volunteer crews needing a tool they can use correctly on day one"
proof:
  - "Records each observation with geometry, severity, photos, and GPS in a single structured record"
  - "Constrained forms keep symptom, severity, and species coding consistent between surveyors"
  - "Works fully offline by default in remote forest terrain"
  - "Compatible with external GNSS receivers for accurate positioning of affected trees"
  - "Open source, runs on Android, iOS, Windows, macOS, and Linux"
faq:
  - q: "Can QField enforce consistent symptom and severity coding?"
    a: "Yes. Configure value-relation widgets for symptom and species lists and constraints for severity in QGIS. QField enforces them on the tablet, so surveyors cannot enter invalid values."
  - q: "How do I relocate affected trees for a follow-up visit?"
    a: "Load the previous survey records into the project. QField shows your live GPS position against them, so crews can navigate back to the same tree or stand to reassess its condition."
  - q: "Can I attach photos of symptoms to each observation?"
    a: "Yes. Photos are attached directly to the observation using QField's attachment field. The photo, the affected tree, the symptom, and the GPS position are all captured against the same record."
  - q: "Does QField work offline in remote forest?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device in the office, and the whole survey runs without a network connection. Data syncs the next time the device is online."
  - q: "Can I track how forest health changes over time?"
    a: "Each observation is a structured record stamped with its capture time. Repeat surveys accumulate into a time series that you can compare in QGIS to see how condition is changing."
  - q: "How accurate is GPS positioning for individual affected trees?"
    a: "Built-in tablet GPS typically gives accuracy of a few metres. For survey-grade positioning, pair QField with a Bluetooth GNSS receiver. RTK corrections bring positioning to centimetres."
  - q: "Can multiple crews run health surveys at the same time?"
    a: "Yes. With QFieldCloud each crew gets their own offline copy. Changes merge automatically on sync, so several crews can survey the same forest without overwriting each other."
  - q: "What data formats does QField use for forest health data?"
    a: "QField writes to GeoPackage, shapefile, PostGIS, and any other format QGIS supports. Observations, geometry, and attached photos all stay together in the project."
---

## Field workflows

Forest health teams use QField to record and monitor tree condition:

- Pest and disease observations with species, symptom, and severity
- Defoliation, dieback, and crown condition assessment
- Tree mortality and deadwood recording
- Affected-stand delineation as polygons
- Photo documentation against individual trees and stands
- Repeat monitoring at fixed locations to track change over time

## Built for repeat monitoring

Forest health is a question of change over time. A single survey tells you what a stand looks like today, but the value comes from coming back and seeing what has shifted. QField stores each observation as a structured record with its location, attributes, photos, and capture time. On the next visit, the previous records load straight onto the device, and the live GPS position guides crews back to the same trees and stands. The result is a consistent time series rather than a pile of one-off surveys.

## One workflow with QGIS and QFieldCloud

Set up the health-survey project in [QGIS](https://qgis.org) once, push it to every device through [QFieldCloud](https://qfield.cloud), and run conflict-safe sync at the end of each day. Crews work offline for as long as the survey takes, then sync when they next come into office connectivity.

## Forestry teams using QField

- [Young farmers reduce deforestation by 71% in Ghana](/success-stories/ghana-deforestation/), where community-based monitoring teams use QField in the Tano Offin Forest Reserve
- [Browse all forestry success stories →](/success-stories/?filter=forestry)

Looking for the broader picture? See [QField for forestry and silviculture →](/solutions/forestry-and-silviculture/).
