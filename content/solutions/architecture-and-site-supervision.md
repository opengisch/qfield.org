---
title: "QField for Architecture and Site Supervision"
slug: "architecture-and-site-supervision"
type: "solutions"
description: "Design verification, deviation records, site observations, and supervision reports with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "site supervision", "design verification", "site inspection", "clerk of works", "snagging", "punch list", "deviation records", "construction supervision", "architecture fieldwork", "offline site mapping"]
categories: ["Infrastructure, Construction & Utilities"]
successStoryCategories: ["infrastructure-engineering"]

sitemap:
  priority: 0.65
  changefreq: monthly

hero:
  headline: "Verify designs on site with confidence"
  sub: "Check design intent against site conditions, record deviations and snags with photos, and build supervision reports from structured records rather than notebooks."
  ctaText: "Start now"
  ctaUrl: "/get/"
pains:
  - "Site observations written in notebooks and retyped into reports at the end of the week"
  - "Photos of deviations that cannot be tied back to the element or location they show"
  - "Different supervisors recording the same issue in different ways"
  - "No clear record of when an issue was raised, by whom, and whether it was closed"
  - "Drawings on site that are a revision behind the office"
  - "Basements, cores, and rural sites with no reliable mobile signal"
proof:
  - "Works fully offline by default, with the current design layers packaged onto the device"
  - "Photos attached directly to each observation, with its geometry and attributes"
  - "Every edit is attributable through QFieldCloud, so each observation has an author and a time"
  - "Supports external Bluetooth GNSS receivers with RTK corrections when position matters"
  - "Open source, runs on Android, iOS, Windows, macOS, and Linux"
faq:
  - q: "Can I record observations and deviations against the design on site?"
    a: "Yes. Load the design layers into the QGIS project and capture points, lines, or polygons over them in QField. Each observation carries its own form with attributes, photos, and notes, and syncs back to the office project."
  - q: "Can I keep track of whether an issue has been closed?"
    a: "Yes. Add a status field with a fixed list of values, such as open, in progress, and closed. Related tables let you record each follow-up visit against the original observation, so the history of an issue stays together."
  - q: "Can supervisors check a set-out position on site?"
    a: "Yes. Load the design points into the project and use QField's navigation to guide you to a target, with live distance and bearing. For survey-grade checks, pair QField with an external GNSS receiver with RTK corrections."
  - q: "How do we collaborate across offices, consultants, and sites?"
    a: "QFieldCloud shares one project with every team and lets you set roles, so some users edit and others only view. Each supervisor works on their own offline copy and changes merge automatically on sync."
  - q: "Can we produce supervision reports from the data?"
    a: "Observations sit in the same QGIS project as the rest of your drawings and data. Filter, map, and tabulate them in QGIS, or export them to any format QGIS supports for your reporting templates."
  - q: "Does QField work without mobile coverage on site?"
    a: "Yes. QField runs fully offline by default. Layers and forms are loaded onto the device before the visit, and the data syncs to QFieldCloud or your own server the next time the device is online."
---

## Field workflows

Architects, supervisors, and clerks of works use QField to keep a structured record of what is happening on site:

- Design verification against site conditions
- Deviation and non-conformance records with photos
- Snagging and punch lists with status tracking
- Set-out checks against design points
- Site visit logs with author and date on every record
- Follow-up inspections linked to the original observation

## A record that stands up later

Site supervision produces evidence. When a deviation is disputed months later, what matters is whether the record shows where the issue was, what it looked like, who recorded it, and when. A notebook entry and a photo in someone's camera roll rarely answer all four.

In QField, every observation is a feature with a location, a structured form, attached photos, and a capture time, and QFieldCloud records which user made each edit. Forms configured in QGIS use dropdowns for issue type and trade, required fields for severity and status, and constraints that stop an incomplete record from being saved. The result is a consistent log across every supervisor on the project, ready to filter and map in QGIS rather than retype into a report.

## One workflow with QGIS and QFieldCloud

Set up the supervision project in [QGIS](https://qgis.org) with your design layers and observation forms, then push it to every device through [QFieldCloud](https://qfield.cloud). Supervisors work offline during site visits and sync afterwards, with conflict-safe merges when two people have updated the same record.

## Site supervision teams using QField

- [Browse all infrastructure and engineering success stories →](/success-stories/?filter=infrastructure-engineering)

Looking for the broader picture? See [QField for construction and engineering →](/solutions/construction-and-engineering/).
