---
title: "QField for Health and Epidemiology Fieldwork"
slug: "health-and-epidemiology-fieldwork"
type: "solutions"
description: "Health facility mapping, household surveys, vector and outbreak monitoring, and ground truth data collection with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "health surveys", "epidemiology", "facility assessment", "vector surveillance", "malaria", "outbreak mapping", "household survey", "public health GIS", "ground truth", "offline health mapping"]
categories: ["Humanitarian, Safety & Emergency Response"]
successStoryCategories: ["humanitarian-emergency-response"]

sitemap:
  priority: 0.68
  changefreq: monthly

hero:
  headline: "Collect health data reliably in the field"
  sub: "Map facilities, households, and vector habitats with consistent forms, reliable locations, and control over who sees the data."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "Survey areas with poor roads, poor signal, and long days in the field"
  - "Paper forms and GPS units that have to be matched up again in the office"
  - "Inconsistent coding between enumerators that undermines the analysis"
  - "No easy way to see which areas and households have already been covered"
  - "Personal and health data that must be kept private"
  - "Research budgets that cannot stretch to commercial licences for every surveyor"
proof:
  - "Used by the French Research Institute for Sustainable Development (IRD) to collect ground truth data on malaria mosquito habitats in Burkina Faso and Ivory Coast"
  - "Satellite imagery of 50 square kilometres ran offline on a standard tablet, with no extra storage"
  - "Constrained forms keep coding consistent between enumerators"
  - "QFieldCloud permissions and self-hosting keep sensitive data under your control"
  - "Open source, with no per-seat licensing and no vendor lock-in"
faq:
  - q: "Can we restrict access to personal and health data?"
    a: "Yes. QFieldCloud permissions control who can see and edit each project. For the strictest data protection requirements, QFieldCloud can be self-hosted so data never leaves your infrastructure."
  - q: "Can we see how accurate each location is?"
    a: "Yes. QField shows live positioning accuracy while you capture, and it can store accuracy values with each record. For higher accuracy, pair QField with an external GNSS receiver over Bluetooth."
  - q: "Can we use satellite imagery offline in remote areas?"
    a: "Yes. Imagery can be converted to a GeoPackage raster with pyramids and packaged onto the device. The IRD team used 50 square kilometres of 1.5 metre imagery offline on a standard tablet."
  - q: "Can we track survey progress during fieldwork?"
    a: "Yes. Every record appears on the map as soon as it is captured, so teams can see which households, parcels, or sites are done and which remain. Once synced, coordinators can see the same picture."
  - q: "Do you support multilingual forms?"
    a: "Yes. QGIS projects can be translated, and QField shows the form in the language of the device, which helps when enumerators work in several languages."
  - q: "Can we use QField for household surveys?"
    a: "Yes. Build the questionnaire as a QGIS form with dropdowns, constraints, conditional fields, and required answers. Each household is a point on the map with its survey attached."
---

## Field workflows

Health programmes and research teams use QField to connect health data to place:

- Health facility and service mapping
- Household and community surveys
- Vector surveillance and breeding site mapping
- Outbreak case mapping and contact area monitoring
- Ground truth data collection for land cover and risk models
- Vaccination and distribution campaign tracking

## Location you can trust

Epidemiology depends on knowing where things are. A household survey with bad coordinates, or a land cover sample placed in the wrong field, weakens everything built on top of it.

QField shows the surveyor's position live over the imagery and project layers, together with the accuracy of the fix. When the French Research Institute for Sustainable Development (IRD) mapped the environment of malaria transmitting mosquitoes in Burkina Faso and Ivory Coast, its team moved around by motorbike using satellite imagery in QField to find their way, drew land cover parcels directly on the tablet, and could see at the end of each day which parts of the study area they had covered and how many samples of each class they still needed.

## One workflow with QGIS and QFieldCloud

Prepare the survey in [QGIS](https://qgis.org) with the imagery, reference layers, and questionnaire. Push it to every enumerator through [QFieldCloud](https://qfield.cloud), or to a self-hosted server where data protection rules require it. Teams work offline in the field, and every record comes back with its location, attributes, and photos in one place.

## Health teams using QField

- [Ground truth data on malaria transmitting mosquitoes](/success-stories/malaria-data-collection/), with the French Research Institute for Sustainable Development in Burkina Faso and Ivory Coast
- [Browse all humanitarian and emergency response success stories →](/success-stories/?filter=humanitarian-emergency-response)

Looking for the broader picture? See [QField for humanitarian aid and disaster relief →](/solutions/humanitarian-aid-and-disaster-relief/).
