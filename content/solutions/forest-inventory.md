---
title: "QField for Forest Inventory and Plot Sampling"
slug: "forest-inventory"
type: "solutions"
description: "Mobile forest inventory, plot sampling, and tree-level data capture with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["forest inventory", "plot sampling", "tree inventory", "DBH", "stand mapping", "mobile GIS", "QGIS fieldwork", "forest cruising", "offline forest inventory", "species coding", "forestry data collection"]
categories: ["Environment, Agriculture & Natural Resources"]
successStoryCategories: ["forestry"]

sitemap:
  priority: 0.6
  changefreq: monthly

hero:
  headline: "Run forest inventories offline, on any tablet"
  sub: "Capture plot geometry, tree-level attributes, photos, and GPS positions in a single workflow that syncs back to the office."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "Paper plot sheets that need transcribing for weeks after the survey"
  - "Inconsistent species codes between surveyors and across seasons"
  - "DBH values entered in the wrong units or outside plausible ranges"
  - "Lost or mismatched plot photos that cannot be tied back to the right tree"
  - "GPS drift placing trees in the wrong plot under dense canopy"
  - "Volunteer or seasonal crews needing a tool that is safe to put in their hands on day one"
proof:
  - "Used by national land surveys for production-scale forest inventory"
  - "Constrained forms eliminate the transcription step that used to follow every survey"
  - "Photos are captured against the tree and the plot at the same time"
  - "Compatible with external GNSS receivers for survey-grade tree positioning"
  - "Open source, runs on Android, iOS, Windows, macOS, and Linux"
faq:
  - q: "Can QField enforce species codes and DBH ranges during data entry?"
    a: "Yes. Configure value-relation widgets for species lists and numeric constraints for DBH and height in QGIS. QField enforces them on the tablet, so surveyors cannot enter invalid values."
  - q: "Does QField support nested plot geometry, like subplots inside fixed-radius plots?"
    a: "Yes. QField handles arbitrary nesting of geometry layers. Plots, subplots, and individual trees can all live in the same project, related to one another through standard relational fields."
  - q: "How are plot photos linked to specific trees?"
    a: "Photos are attached directly to the tree record using QField's attachment field. The photo, the tree ID, the species, the DBH, and the GPS position are all captured against the same record."
  - q: "How accurate is GPS positioning for individual trees under canopy?"
    a: "Tablet GPS gives accuracy of a few metres. For survey-grade tree positioning, pair QField with a Bluetooth GNSS receiver. RTK corrections bring positioning to centimetres."
  - q: "Can multiple inventory crews work the same forest stand at once?"
    a: "Yes. With QFieldCloud each crew gets their own offline copy. Changes merge automatically on sync. Plot completion status can be colour-coded so no plot is missed and none is sampled twice."
  - q: "Does QField support sampling designs like fixed-radius, variable-radius, and angle-count plots?"
    a: "Plot design is handled in QGIS before fieldwork. The plot layer is loaded into QField, where surveyors capture trees, attributes, and photos against each plot location."
  - q: "What forestry data formats does QField read and write?"
    a: "QField writes to GeoPackage, shapefile, PostGIS, and any other format QGIS supports. Tree-level data, plot geometry, and attached photos all stay together in the project."
  - q: "Can QField record DBH from a Bluetooth caliper or other instrument?"
    a: "QField reads from external Bluetooth sensors that expose their values through standard interfaces. Many forestry teams use a tablet keyboard for DBH and species, with photos and GPS handled automatically."
---

## Field workflows

Forest inventory teams use QField across the full inventory chain:

- Plot location, geometry, and attribute capture, including fixed-radius, variable-radius, and strip sampling
- Tree-level data with species, DBH, height, defects, and per-tree position
- Photo documentation against individual trees and at the plot level
- Regeneration counts, deadwood and snag inventory, and understory observations
- Stand-level attribute capture for inventory polygons

## Designed for crews of mixed experience

Forest inventory often runs on a mix of staff, contractors, and seasonal hires. QField forms can be tuned to the experience level of the crew. Strict dropdowns and numeric constraints make it safe to put a tablet in the hands of a first-week volunteer and trust that the data coming back will be in the same shape as a senior biologist's. The structured frontmatter also means that a crew of twelve produces a single clean dataset, not twelve incompatible notebooks.

## One workflow with QGIS and QFieldCloud

Set up the plot design in [QGIS](https://qgis.org). Push it to every device through [QFieldCloud](https://qfield.cloud). Crews work offline for as long as the survey takes, then sync when they next come into office connectivity. Conflict-safe merges handle the case where two crews edited the same record.

## Forestry teams using QField for inventory

- [Young farmers reduce deforestation by 71% in Ghana](/success-stories/ghana-deforestation/), where community-based monitoring teams use QField in the Tano Offin Forest Reserve
- [Browse all forestry success stories →](/success-stories/?filter=forestry)

Looking for the broader picture? See [QField for forestry and silviculture →](/solutions/forestry-and-silviculture/).
