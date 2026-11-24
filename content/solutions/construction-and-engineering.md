---
title: "QField for Construction and Engineering"
slug: "construction-and-engineering"
type: "solutions"
description: "Site surveys, stakeout checks, as-built capture, inspections, and asset registers with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "construction surveying", "as-built", "site supervision", "construction progress", "engineering GIS", "infrastructure inspection", "asset management", "stakeout", "RTK GNSS", "open source construction GIS", "offline site mapping"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.7
  changefreq: monthly

hero:
  headline: "Capture and verify construction data on site"
  sub: "Site surveys, stakeout checks, as-builts, inspections, and progress records, captured on a tablet that works with or without a signal and synced straight back to QGIS."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Paper redlines and site diaries that take weeks to turn into an as-built record"
  - "Crews working from outdated plans because the latest version never reached the tablet"
  - "Site photos stored on personal phones, separated from the location and element they document"
  - "No signal in cuttings, tunnels, basements, and remote corridors"
  - "Inspection and snag data entered differently by every engineer and subcontractor"
  - "Per-seat licences that make it expensive to put every foreman and inspector on the same system"
proof:
  - "Works fully offline by default, with sync to QFieldCloud when the device is back online"
  - "Supports external Bluetooth GNSS receivers with RTK corrections for survey-grade positioning"
  - "Used for real-time radiation scanning at US remediation sites, with 4 mm horizontal accuracy using base station corrections"
  - "Every edit is attributable through QFieldCloud, with conflict-safe merges between crews"
  - "Open source and self-hostable, with no per-seat licensing and no vendor lock-in"
  - "2M+ installs of QField across industries"
faq:
  - q: "Does QField work on site without mobile coverage?"
    a: "Yes. QField runs fully offline by default. Plans, basemaps, layers, and forms are loaded onto the device before the shift, and the whole day runs without a network connection. Data syncs to QFieldCloud or your own server the next time the device is online."
  - q: "How accurate is QField for setting out and as-built checks?"
    a: "Built-in tablet GPS typically gives accuracy of a few metres, which is fine for inspections and snagging. For survey-grade work, pair QField with an external Bluetooth GNSS receiver and RTK corrections. Live accuracy is shown during capture."
  - q: "Can crews navigate to a design point to check it on site?"
    a: "Yes. Load the design points or alignment into the project and use QField's navigation to guide the operator to a target, with live distance and bearing to the point. The as-built position can then be recorded against the design feature."
  - q: "Can we attach photos to inspections and snags?"
    a: "Yes. Photos are attached directly to the record, alongside its geometry and attributes. Related tables let you keep several inspections or photo sets against one element over the life of the project."
  - q: "Can main contractors, subcontractors, and consultants share one project?"
    a: "Yes. QFieldCloud lets you share a project with each team and set roles, so some users edit and others only view. Each crew works on its own offline copy, and changes merge automatically on sync."
  - q: "Can we use our existing CAD and GIS data?"
    a: "QField opens the same QGIS project the office uses, so anything QGIS can load and package for the field is available on the tablet. Data captured on site can be exported to any format QGIS supports, or written to PostGIS."
  - q: "Can we keep project data on our own servers?"
    a: "Yes. QField and QFieldCloud are open source and QFieldCloud can be self-hosted, so project data can stay inside your own infrastructure when a client contract or security policy requires it."
  - q: "What devices does QField run on?"
    a: "QField runs on Android, iOS, Windows, macOS, and Linux. Most site teams use rugged Android tablets or standard phones, and Windows tablets where the office prefers them."
---

## Field workflows

QField covers construction and engineering fieldwork from first site survey to handover and operation. Each area has its own focused workflow:

- [Architecture and site supervision](/solutions/architecture-and-site-supervision/), for design verification, deviation records, and supervision reports
- [Construction progress documentation](/solutions/construction-progress-documentation/), for daily progress records, as-built updates, and handover evidence
- [Transportation: roads, rail, airports, and signage](/solutions/transportation-roads-rail-airports-signage/), for corridor asset inventories and condition inspections
- [Facility and asset management](/solutions/facility-and-asset-management/), for asset registers, condition surveys, and maintenance logs
- [Mining and quarrying](/solutions/mining-and-quarrying/), for geological mapping, sampling, and site inspections
- Pre-construction site surveys and existing utility records
- Snagging, punch lists, and defect tracking

## From design to as-built without redrawing

The usual gap on a construction project is not measurement. It is the time between a crew recording something on site and that record reaching the drawing, the register, or the client. Redlines on paper, photos on personal phones, and spreadsheets emailed at the end of the week all have to be redrawn or retyped before anyone can use them, and that is where errors and delays creep in.

QField closes the gap by putting the same QGIS project the office works from onto the tablet. Crews see the current design layers, navigate to points they need to check, and record as-built positions and inspections directly against the relevant feature. Forms configured in QGIS carry dropdowns, constraints, and required fields to site, so a subcontractor's inspector and the client's supervisor produce records in the same structure. When positioning matters, an external GNSS receiver with RTK corrections connects over Bluetooth, and live accuracy is visible before a point is saved.

## One workflow with QGIS and QFieldCloud

Prepare layers, forms, and symbology in [QGIS](https://qgis.org) once. Push the project to every device through [QFieldCloud](https://qfield.cloud). Site teams work offline all day and sync at the end of the shift, with conflict-safe merges when two crews have touched the same record, and the office sees the update in the same QGIS project.

## Infrastructure and engineering projects using QField

- [Real-time radiation detection](/success-stories/radiation-detection/), where remediation crews cut a three-day processing cycle to real time and moved from one backfill a week to two
- [Building on top of QFieldCloud](/success-stories/building-on-top/), where GINVE connected QField to its platform for offline inventory of trees and street furniture
- [Data collection for rural water supply O&M in Rwanda](/success-stories/water-supply-rwanda/), where district engineers keep a national waterworks register up to date
- [Monitoring 20,000 WWII fortifications across Germany](/success-stories/ww2-fortifications/), a register of concrete structures revisited every few years
- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)
