---
title: "QField for Cadastral and Land Registry"
slug: "cadastral-and-land-registry"
type: "solutions"
description: "Parcel boundary verification, evidence capture, and registry updates with survey-grade GNSS, QField, QGIS, and QFieldCloud."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "cadastral", "land registry", "parcel mapping", "boundary verification", "cadastral survey", "land administration", "RTK GNSS", "stakeout", "tenure mapping", "open source cadastre"]
categories: ["Government, Public Administration & Municipalities"]
successStoryCategories: ["government-municipalities"]

sitemap:
  priority: 0.69
  changefreq: monthly

hero:
  headline: "Reliable cadastral field verification"
  sub: "Capture boundary evidence, parcel attributes, and photos with survey-grade positioning and a full audit trail."
  ctaText: "Talk to us"
  ctaUrl: "/assistance/"
pains:
  - "Boundary evidence recorded on paper and photographed separately, then reconciled back at the office"
  - "Positioning accuracy that cannot be defended if a boundary is disputed"
  - "Inconsistent parcel attributes and codes between surveyors and across districts"
  - "Complex handover from field data into the registry system of record"
  - "No reliable record of who verified a boundary, when, and with what evidence"
  - "Field teams working in areas with no network coverage for days at a time"
proof:
  - "Used by Finland's National Land Survey for national topographic data production"
  - "Supports external GNSS receivers with RTK corrections for centimetre positioning"
  - "Every edit is attributable and timestamped through QFieldCloud"
  - "Self-hostable, so tenure and parcel data can stay inside national infrastructure"
  - "Open source, with no per-seat licensing for large field teams"
faq:
  - q: "Does QField support survey-grade GNSS for boundary capture?"
    a: "Yes. QField connects to standard NMEA-compatible Bluetooth GNSS receivers and supports RTK corrections, bringing positioning to centimetres. Live accuracy is displayed during capture, so a surveyor knows the quality of every point as it is recorded."
  - q: "Can QField do stakeout to locate an existing boundary corner?"
    a: "Yes. Load the parcel corners into the project and QField will navigate to each one, showing live distance and bearing to the target."
  - q: "How do we standardize parcel attributes across surveyors?"
    a: "Configure value-relation widgets, domains, and constraints in QGIS. QField enforces them on the tablet, so tenure types, land use codes, and parcel identifiers are entered consistently regardless of who is in the field."
  - q: "Is there an audit trail for a disputed boundary?"
    a: "Yes. QFieldCloud records who captured each point and when. Combined with required-photo rules and GNSS accuracy readings stored against the record, this gives a defensible evidence chain."
  - q: "Can boundary evidence photos be tied to a specific parcel corner?"
    a: "Yes. Photos attach directly to the feature using QField's attachment field. The photo, the coordinate, the accuracy reading, and the surveyor are captured against the same record."
  - q: "Can QField data be handed over to our registry system?"
    a: "QField writes to GeoPackage, shapefile, and PostGIS. Most registry systems read at least one of those directly. QFieldCloud also exposes an API for automated handover."
  - q: "Does QField work offline in rural districts with no coverage?"
    a: "Yes. QField runs fully offline by default. The whole survey runs without a network connection, and data syncs when the team returns to coverage."
  - q: "Can we keep parcel and tenure data inside our own infrastructure?"
    a: "Yes. QField and QFieldCloud are open source and self-hostable. Nothing has to leave your network."
---

## Field workflows

Cadastral and land administration teams use QField across the survey chain:

- Boundary verification, corner capture, and evidence documentation
- Parcel attribute checks, updates, and tenure recording
- Stakeout of existing corners from registry coordinates
- Photo documentation with accuracy readings against each point
- Systematic land adjudication and first registration campaigns

## Evidence that holds up when a boundary is contested

A cadastral record is only as strong as the evidence behind it. QField captures the coordinate, the GNSS accuracy at the moment of capture, the photograph, the attributes, and the identity of the surveyor as one record, rather than as four artefacts to be reconciled later. Required-photo rules mean a corner cannot be submitted without its evidence. Constraints keep parcel identifiers and tenure codes in the shape the registry expects.

When a boundary is later disputed, the question is rarely what the coordinate was. It is who recorded it, with what equipment, and on what day. QFieldCloud answers that from the audit trail, without anyone having to find a field notebook.

## One workflow with QGIS and QFieldCloud

Prepare the parcel layer, forms, and coordinate reference system in [QGIS](https://qgis.org). Push the project to every device through [QFieldCloud](https://qfield.cloud). Field teams work offline for as long as the campaign takes, then sync back with conflict-safe merges.

## Land agencies using QField

- [Finland's National Land Survey empowers field mapping with QField](/success-stories/nls/), the first country to adopt fully open-source GIS at national scale
- [Scalable national field operations in Costa Rica](/success-stories/kan-inec-costa-rica/), with KAN and INEC
- [Browse all government success stories →](/success-stories/?filter=government-municipalities)

Looking for the broader picture? See [QField for government and municipalities →](/solutions/government-and-municipalities/).
