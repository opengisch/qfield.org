---
title: "QField for Natural Disaster Assessment (Floods, Landslides, Wildfires)"
slug: "natural-disaster-assessment-floods-landslides-wildfires"
type: "solutions"
description: "Rapid damage assessment, hazard and access mapping, and recovery monitoring after floods, landslides, and wildfires with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "disaster assessment", "flood", "landslide", "wildfire", "rapid damage assessment", "post-disaster needs assessment", "flood mapping", "burn area mapping", "offline disaster mapping", "recovery monitoring", "emergency response GIS"]
categories: ["Humanitarian, Safety & Emergency Response"]
successStoryCategories: ["humanitarian-emergency-response"]

sitemap:
  priority: 0.7
  changefreq: monthly

hero:
  headline: "Gather critical data fast in the field"
  sub: "Map damage, hazards, and access routes in the first hours after a disaster, with or without a network, and sync the moment you can."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Mobile networks down or overloaded across the affected area"
  - "Assessors using different damage scales, so results cannot be compared or totalled"
  - "Photos of damage that end up separated from the building or field they show"
  - "No clear picture of which areas have been assessed and which have not"
  - "Pre-disaster reference data that is not available on site"
  - "Recovery that runs for months, with no consistent way to revisit the same sites"
proof:
  - "Used by Tonga's Ministry of Agriculture to map crop damage while the country's internet cable was cut after the 2022 eruption"
  - "Assessment data from Tonga was used to calculate relief payments for affected communities"
  - "Recommended by the UN Open GIS Initiative for field operations in low-connectivity environments"
  - "Works fully offline by default, with basemaps and imagery packaged onto the device"
  - "Open source, runs on Android, iOS, Windows, macOS, and Linux"
faq:
  - q: "Can we run damage assessments with no connectivity at all?"
    a: "Yes. QField runs fully offline by default. Basemaps, imagery, reference layers, and forms are loaded onto the device before teams deploy. Assessments are saved on the device and sync to QFieldCloud or your own server whenever a connection is available."
  - q: "Can we use a standard damage scale across all teams?"
    a: "Yes. Configure the damage categories as a dropdown in QGIS, with constraints and required fields. QField enforces them on the device, so every assessor records damage the same way and the results can be totalled."
  - q: "Can we load pre-disaster imagery and baseline data?"
    a: "Yes. Satellite imagery, drone orthophotos, building footprints, and earlier survey data can all be packaged into the project and used offline as a reference while assessing damage."
  - q: "Can we attach photos to each damage record?"
    a: "Yes. Photos are taken inside the form and stored with the record, alongside its location and attributes. The photo can never become separated from the building or field it documents."
  - q: "Can coordinators see which areas have been covered?"
    a: "Yes. As teams sync, their assessments appear in the shared project. QField can also record a track log of where each team walked, so gaps in coverage are easy to spot."
  - q: "Can we use QField for recovery monitoring after the emergency phase?"
    a: "Yes. The records from the initial assessment load back onto the device, so teams can return to the same sites weeks or months later and record how recovery is progressing."
  - q: "How fast can we deploy a new assessment?"
    a: "If you keep a template project ready, adapting it to a new event takes minutes in QGIS. Push it through QFieldCloud and teams pick it up on their next sync."
---

## Field workflows

Response teams use QField to assess damage and plan recovery after natural hazards:

- Rapid damage assessment of buildings, roads, bridges, and utilities
- Flood extent and high water mark recording
- Landslide and slope failure mapping
- Burn area, fire line, and wildfire impact mapping
- Crop, livestock, and agricultural damage surveys
- Access route and road blockage mapping for logistics
- Recovery monitoring at the same sites over weeks and months

## Built for the first hours after a disaster

The window for a rapid assessment is short, and the conditions are at their worst. Networks are down, roads are cut, and assessors may be local staff or volunteers who have never used the tool before.

QField handles that by doing everything on the device. The project, the forms, and the reference layers travel with the team, so there is nothing to download once they arrive. Forms built in QGIS carry the damage scale, required photos, and value checks onto the device, which means data from twenty different assessors can be combined straight away instead of being cleaned for a week. When any team finds a signal, their records sync and appear on the shared map.

In Tonga, after the Hunga Tonga eruption in 2022, the undersea internet cable was cut. Ministry of Agriculture staff kept mapping crop damage and monitoring recovery in QField regardless, and the results were used to calculate relief payments to affected communities.

## One workflow with QGIS and QFieldCloud

Prepare the assessment project in [QGIS](https://qgis.org) once, with baseline imagery and the damage form. Push it to every device through [QFieldCloud](https://qfield.cloud). Teams work offline across the affected area and sync whenever they can, with conflict-safe merges when two teams have assessed the same site.

## Response teams using QField

- [Tonga crop survey](/success-stories/tonga/), mapping crop damage and monitoring recovery after the Hunga Tonga eruption
- [Emergency data management for cultural heritage rescue](/success-stories/dai/), with Germany's KulturGutRetter project
- [Browse all humanitarian and emergency response success stories →](/success-stories/?filter=humanitarian-emergency-response)

Looking for the broader picture? See [QField for humanitarian aid and disaster relief →](/solutions/humanitarian-aid-and-disaster-relief/).
