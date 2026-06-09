---
title: "QField for Ecology and Biodiversity Monitoring"
slug: "ecology-and-biodiversity-monitoring"
type: "solutions"
description: "Species observations, habitats, and monitoring plots with offline mobile GIS and QGIS."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "biodiversity", "ecology", "species monitoring", "ecological survey", "habitat mapping", "monitoring plots", "offline GIS", "GNSS", "protected areas"]
categories: ["Environment, Agriculture & Natural Resources"]
successStoryCategories: ["ecology-environment"]

sitemap:
  priority: 0.69
  changefreq: monthly

hero:
  headline: "Standardize ecological field surveys"
  sub: "Collect species, habitats, and evidence with forms, domains, and photo capture."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Varied taxonomies and inconsistent forms"
  - "Remote areas without connectivity"
  - "Complex data validation needs"
  - "Species observations recorded on paper that take weeks to digitise"
  - "Photos and evidence separated from the record they belong to"
  - "Volunteer and seasonal surveyors needing a tool they can use correctly on day one"
proof:
  - "Trusted by NGOs, academia, and consultancies"
  - "Conflict-safe sync with QFieldCloud"
  - "Works fully offline by default in remote terrain"
  - "Constrained forms keep taxonomy and protocols consistent across surveyors"
  - "Captures photos, audio, and GPS against each observation"
  - "Open source, runs on Android, iOS, Windows, macOS, and Linux"
faq:
  - q: "Can we load species lists and codes?"
    a: "Yes. Use lookups/domains in QGIS forms to guide entries."
  - q: "Do you support photo proof and geotagging?"
    a: "Yes. Capture media in-app and keep it linked to features."
  - q: "Can surveyors work offline for long periods?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device beforehand, and the whole survey runs without a network connection. Data syncs the next time the device is online."
  - q: "How accurate is positioning, and can I use an external GNSS receiver?"
    a: "Built-in tablet GPS typically gives accuracy of a few metres. For survey-grade positioning, pair QField with a Bluetooth GNSS receiver. RTK corrections bring positioning to centimetres."
  - q: "Can several surveyors work the same area at once?"
    a: "Yes. With QFieldCloud each surveyor gets their own offline copy. Changes merge automatically on sync, so a team can cover a large area without overwriting each other."
  - q: "Can QField record audio for acoustic species?"
    a: "Yes. QField records audio as an attachment field, alongside photos and video, stored against the observation with its location and time."
  - q: "Can we keep sensitive species locations under control?"
    a: "Yes. Your data lives in your own QGIS project and QFieldCloud account, or a server you host yourself. QField and QFieldCloud are open source and self-hostable, so you decide what is captured and what is ever shared."
  - q: "What formats does QField read and write?"
    a: "QField writes to GeoPackage, shapefile, PostGIS, and any other format QGIS supports. Geometry, attributes, and attached media all stay together in the project."
---

## What you can do
- Record species, abundance, and habitats  
- Map plots and transects with accurate GNSS  
- Attach photos and notes for QA
- Capture audio for acoustic species such as birds and amphibians
- Revisit fixed monitoring points to track change over time

## Explore ecology and biodiversity workflows

QField covers the full span of ecological fieldwork. Each area has its own focused workflow:

- [Wildlife tracking and habitat mapping](/solutions/wildlife-tracking-and-habitat-mapping/), for observations, telemetry, and habitat surveys
- [Land restoration and conservation](/solutions/land-restoration-and-conservation/), for restoration planning, monitoring, and stewardship
- [Invasive species control](/solutions/invasive-species-control/), for detection, treatment, and eradication operations
- [Protected area management](/solutions/protected-area-management/), for reserve patrols, assets, and condition monitoring

## Consistent records from every surveyor

Ecological fieldwork rarely happens where the network is. Surveys run along transects in remote terrain, at fixed monitoring plots revisited season after season, and often by volunteers or seasonal staff who joined the project a week ago. Basemaps, layers, and forms are loaded onto the device before anyone leaves the office, so the whole survey runs offline and syncs once the team is back in range.

The harder problem is consistency. Value-relation widgets hold species lists and codes, numeric constraints keep abundance and measurement fields in range, and required-photo rules capture evidence at the moment of observation rather than hours later. Photos, audio, and GPS readings stay attached to the record they belong to. For sensitive species, the data never leaves your own QGIS project and QFieldCloud account, or a server you host yourself.

## Integrated with QGIS and QFieldCloud
Share projects and manage permissions in QFieldCloud. Export to standard formats for analysis. Prepare forms and symbology in [QGIS](https://qgis.org) once, push them to every device through [QFieldCloud](https://qfield.cloud), and run conflict-safe sync at the end of each day.

## See QField in real ecology projects

- [Zero Invasive Predators: eliminating invasive species with QField](/success-stories/zero-invasive-predators/), in the rugged wilderness of New Zealand's South Westland
- [Monitoring fire salamanders in Saxony](/success-stories/fire-salamanders/), tracking a protected amphibian
- [Mapping breeding birds in the Wadden Sea](/success-stories/mapping-breeding-birds/), with Schutzstation Wattenmeer
- [Improving efficiencies in ecological surveying](/success-stories/ecological-surveying/), with Delta-Simons
- [Browse all ecology success stories →](/success-stories/?filter=ecology-environment)
