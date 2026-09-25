---
title: "QField for Water Utilities and Wastewater Management"
slug: "water-utilities-and-wastewater-management"
type: "solutions"
description: "Map and maintain water mains, valves, hydrants, sewers, and manholes with QField, QGIS, and QFieldCloud, fully offline in the field."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "water network", "water utility GIS", "wastewater", "sewer inspection", "manhole survey", "valve and hydrant inspection", "asset register", "utility network mapping", "operation and maintenance", "open source utility GIS", "offline utility mapping"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.68
  changefreq: monthly

hero:
  headline: "Maintain water networks with accurate field data"
  sub: "Map pipes, valves, hydrants, and manholes, record condition and repairs with photos, and keep the asset register current from a tablet that works offline."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Legacy asset registers with missing locations, diameters, and materials"
  - "Inspection and repair records on paper that never make it back into the GIS"
  - "Rural schemes and underground chambers with no mobile signal"
  - "Inconsistent condition codes and asset IDs between crews and contractors"
  - "Photos of a burst or a blocked sewer separated from the asset they document"
  - "Data collected once, then allowed to go out of date because updating is too slow"
proof:
  - "Used by Rwanda's Water and Sanitation Corporation (WASAC) to map rural water supply networks across all 27 districts of the country"
  - "WASAC's QField-maintained database covers 1,000+ rural water supply systems and is used by more than 30 private operators"
  - "Works fully offline by default, with data synced to QFieldCloud or your own server when back online"
  - "Self-hostable for utilities with strict data governance requirements"
  - "Open source, with no per-seat licensing and no vendor lock-in"
  - "2M+ installs of QField across industries"
faq:
  - q: "Does QField work offline in rural areas and underground chambers?"
    a: "Yes. QField runs fully offline by default. Basemaps, network layers, and forms are loaded onto the device in the office, and the whole shift runs without a network connection. Data syncs to QFieldCloud or your own server the next time the device is online."
  - q: "Can we tag assets with barcodes, QR codes, or NFC?"
    a: "Yes. QField scans QR codes and barcodes and reads NFC tags into form fields, so crews can pull up or update the right valve, hydrant, or meter without typing an ID."
  - q: "Can we navigate crews to a buried valve or manhole?"
    a: "Yes. Load the network into the project and QField shows your live GPS position against it, with distance and direction to a selected asset. For survey-grade positioning, pair QField with an external Bluetooth GNSS receiver with RTK corrections."
  - q: "Can we record repeated inspections and repairs against the same asset?"
    a: "Yes. Use related tables in QGIS so each pipe, valve, or manhole keeps its own history of inspections, defects, and interventions. Crews add a new record in QField without touching the asset itself."
  - q: "Can we enforce condition codes and required fields?"
    a: "Yes. Configure value-relation widgets, constraints, and required fields in QGIS. QField enforces them on the tablet, so a crew cannot submit an inspection with a missing condition rating or an invalid material code."
  - q: "Does QField work with our PostGIS asset database?"
    a: "Yes. QField works with GeoPackage and PostGIS, and QFieldCloud can connect to PostGIS directly. WASAC in Rwanda keeps its master network in PostGIS and distributes GeoPackage extracts to district engineers running QField."
  - q: "Can several crews and contractors work on the same network at once?"
    a: "Yes. With QFieldCloud each crew gets its own offline copy. Changes merge automatically on sync, and permissions control who can edit which project."
  - q: "What devices does QField run on?"
    a: "QField runs on Android, iOS, Windows, macOS, and Linux. Many utility teams use standard Android phones and tablets rather than specialist hardware."
---

## Field workflows

QField is used across water, wastewater, and other utility networks. Each network type has its own focused workflow:

- [Power transmission and distribution](/solutions/power-transmission-and-distribution/), for pole and line inventories, patrols, and vegetation encroachment surveys
- [Gas and pipeline networks](/solutions/gas-and-pipeline-networks/), for as-built capture, crossings, and integrity inspections
- [Fibre and telecommunication networks](/solutions/fibre-and-telecommunication-networks/), for route surveys, chambers, and as-built documentation
- [Fibre to the home](/solutions/fibre-to-the-home/), for last-mile build, drops, and construction QA
- [Energy and renewables](/solutions/energy-and-renewables-solar-wind-hydro/), for solar, wind, and hydro site surveys and O&M inspections
- Valve exercising, hydrant inspections, and meter surveys
- Sewer manhole surveys, condition assessments, and leak and repair documentation

## Keeping the asset register alive

Most utilities do not have a data collection problem. They have an updating problem. A network gets mapped once, often at great cost, and then drifts out of date as repairs, replacements, and new connections are recorded on paper or not at all. Within a few years the register cannot be trusted and the survey has to start again.

QField is built for the updating side. The current network loads onto the device, crews find the asset on the map, and each inspection or repair is written back against it with photos, condition codes, and a timestamp. Related tables keep a full history per asset, and forms configured in QGIS carry the same codes and constraints to every crew and contractor. In Rwanda, WASAC's rural water department uses exactly this loop: the master database lives in PostGIS, district extracts go out to engineers as GeoPackages, and updates come back to the centre to be merged, so the data stays in use by operators rather than going stale.

## One workflow with QGIS and QFieldCloud

Prepare network layers, forms, and symbology in [QGIS](https://qgis.org) once. Push the project to every device through [QFieldCloud](https://qfield.cloud), or keep it inside your own infrastructure with a self-hosted instance. Crews work offline across the network and sync when they return to connectivity, with conflict-safe merges when two teams have touched the same asset.

## Utilities and infrastructure teams using QField

- [Data collection for O&M of rural water supply systems in Rwanda](/success-stories/water-supply-rwanda/), where WASAC engineers in 27 districts map and update 1,000+ water supply systems with QGIS and QField
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)
