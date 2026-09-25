---
title: "QField for Fibre to the Home"
slug: "fibre-to-the-home"
type: "solutions"
description: "Stake out routes, capture as-builts for ducts, cabinets, splitters, and drops, and validate construction QA for FTTH networks with QField, QGIS, and QFieldCloud, even offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["FTTH", "fibre to the home", "fibre rollout", "last-mile fibre", "mobile GIS", "field data collection", "QGIS fieldwork", "as-built capture", "stakeout", "drop installation", "splice documentation", "construction QA", "telecom GIS", "offline network mapping"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.7
  changefreq: monthly

hero:
  headline: "Accelerate FTTH rollout"
  sub: "Stake out routes, capture as-built ducts, cabinets, and drops with photo evidence, and validate QA in the field before the crew moves on."
  ctaText: "See a sample project"
  ctaUrl: "https://docs.qfield.org/get-started/sample-projects/"
pains:
  - "Paper redlines that slow construction handover"
  - "GPS drift and inconsistent measurements on as-built positions"
  - "Photo evidence fragmented across phones, folders, and messaging apps"
  - "Port counts and splice records that do not match what was installed"
  - "Many crews and subcontractors working to different standards on the same rollout"
  - "QA issues found after the crew has left the street"
proof:
  - "Forms validate IDs, port counts, and splice rules with constraints and value relations"
  - "Connects to external Bluetooth GNSS receivers with RTK corrections for stakeout and as-builts"
  - "Photos are attached to the feature they document, with geometry and attributes kept together"
  - "Conflict-safe sync with QFieldCloud across build crews and subcontractors"
  - "Exports to PostGIS and GeoPackage for handover to GIS and asset registers"
  - "Open source, with no per-seat licensing for large rollout teams"
faq:
  - q: "Can we capture photos and tie them to features?"
    a: "Yes. Photos are attached directly to features such as chambers, cabinets, and drops. The photo, its geometry, and its attributes stay linked in the same record."
  - q: "Can we stake out planned routes and equipment locations?"
    a: "Yes. Load the planned design into the project and QField shows your live position against it, with distance and direction to a selected target. Pair it with an external GNSS receiver with RTK corrections when positions need to be precise."
  - q: "Can forms enforce port counts and splice rules?"
    a: "Yes. Configure constraints, defaults, and value-relation widgets in QGIS. QField enforces them on the device, so a crew cannot record more drops than a splitter has ports or leave out a required splice detail."
  - q: "Does QField work offline on site?"
    a: "Yes. QField runs fully offline by default. Sync changes to QFieldCloud or your own server when back online."
  - q: "Can we export into our asset system?"
    a: "Yes. QField writes to GeoPackage, PostGIS, and any format QGIS supports. QFieldCloud automates sync, and its API supports tighter integration."
  - q: "Can subcontractors work in the same project?"
    a: "Yes. QFieldCloud lets you share a project with each crew and subcontractor, control their permissions, and merge everyone's work on sync."
  - q: "Is there a sample project we can try?"
    a: "Yes. The QField documentation includes sample projects you can open on your device to see how forms and layers work in the field."
---

## Field workflows

Network planners, construction crews, and QA teams delivering last-mile fibre use QField to keep planning, build, and as-built documentation aligned across office and field:

- Stake out trench routes, cabinets, splitters, and drops from the planned design
- Capture as-built geometries for ducts, cables, chambers, and drops with attributes and photos
- Validate IDs, port counts, and splice rules with constrained forms
- Record OLT and ONT locations and customer premises connections
- Run QA inspections and document defects before handover
- Work offline on site and sync changes when back online

For backbone, duct, and wider network work, see [QField for fibre and telecommunication networks →](/solutions/fibre-and-telecommunication-networks/).

## From plan to as-built in one project

FTTH rollouts move fast, street by street, with many crews and subcontractors working at once. The usual failure point is the gap between what was planned and what was built: a drop routed differently, a splitter with a different port allocation, a chamber moved a few metres. If those changes are recorded on paper redlines, they reach the GIS late and incomplete.

In QField the plan and the as-built live in the same project. Layers for ducts, cables, chambers, cabinets, and OLT and ONT locations are prepared in QGIS with their rules and styles. Crews stake out from the design, record what they actually installed, and attach photo evidence to each feature. Constraints check IDs, port counts, and splice rules at the moment of capture, so QA problems surface while the crew is still on the street rather than weeks later in the office.

## One workflow with QGIS and QFieldCloud

1. **Plan in [QGIS](https://qgis.org):** layers for ducts, cables, chambers, OLT and ONT, with rules and styles
2. **Build with QField:** stake out, capture as-built lines and points, attach photos and notes
3. **QA and handover:** review in [QFieldCloud](https://qfield.cloud), resolve conflicts, and export to PostGIS or GeoPackage

Want to see it on a device first? Try a [QField sample project →](https://docs.qfield.org/get-started/sample-projects/)

## Infrastructure teams using QField

- [Data collection for O&M of rural water supply systems in Rwanda](/success-stories/water-supply-rwanda/), where a national utility network is kept current with GeoPackage extracts from a central PostGIS database
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for water utilities and wastewater management →](/solutions/water-utilities-and-wastewater-management/).
