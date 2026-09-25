---
title: "QField for Government and Municipalities"
slug: "government-and-municipalities"
type: "solutions"
description: "Municipal asset inventories, inspections, cadastral verification, and citizen services with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "municipal GIS", "public services", "asset inventory", "government GIS", "local government", "public sector mapping", "field inspections", "open source government GIS", "offline municipal mapping", "cadastre", "public works"]
categories: ["Government, Public Administration & Municipalities"]
successStoryCategories: ["government-municipalities"]

sitemap:
  priority: 0.7
  changefreq: monthly

hero:
  headline: "Modernize municipal fieldwork"
  sub: "Asset inventories, inspections, cadastral checks, and citizen service requests, captured on a tablet that works with or without a signal."
  ctaText: "Get started"
  ctaUrl: "/get/"
pains:
  - "Paper inspection forms that take weeks to transcribe back into the register"
  - "Asset registers that fall out of date the moment a crew leaves the office"
  - "Photos and notes separated from the asset they document"
  - "Coverage gaps where the network drops out across a large territory"
  - "Procurement rules and budgets that rule out per-seat commercial licences"
  - "Data governance requirements that make a foreign cloud service a non-starter"
proof:
  - "Used by Finland's National Land Survey for national topographic data production, the first country to adopt fully open-source GIS at national scale"
  - "Recommended by the UN Open GIS Initiative for peacekeeping field operations"
  - "Deployed for national statistical field operations in Costa Rica"
  - "Self-hostable, so public bodies can keep field data inside their own infrastructure"
  - "Open source, with no per-seat licensing and no vendor lock-in"
  - "2M+ installs of QField across industries"
faq:
  - q: "Can municipal crews work without connectivity?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device in the office, and the whole shift runs without a network connection. Data syncs to QFieldCloud or your own server the next time the device is online."
  - q: "Can we host QField data on our own infrastructure?"
    a: "Yes. QField and QFieldCloud are open source and self-hostable. Public bodies with data residency or governance requirements can run the whole stack inside their own network."
  - q: "How do we manage multiple teams and departments?"
    a: "QFieldCloud permissions let you share a project with the crews who need it and keep the rest read-only. Each crew works on their own offline copy, and changes merge automatically on sync."
  - q: "Is there an audit trail for inspections and asset changes?"
    a: "Yes. QFieldCloud records who changed what and when. Every edit is attributable, which is what most public bodies need for compliance and for defending a decision later."
  - q: "What does QField cost for a city or a national agency?"
    a: "QField itself is free and open source, with no per-seat licence. QFieldCloud has free, paid, and self-hosted tiers. There is no licence cost that scales with the number of field staff."
  - q: "Can QField integrate with our existing asset management or CMMS system?"
    a: "QField writes to GeoPackage, shapefile, and PostGIS, so anything that reads those formats can consume the data. For tighter integration, QFieldCloud exposes an API."
  - q: "Can we enforce data quality on forms filled in by field staff?"
    a: "Yes. Configure value-relation widgets, constraints, and required fields in QGIS. QField enforces them on the tablet, so an inspector cannot submit an incomplete or invalid record."
  - q: "Does QField support barcode and NFC asset identifiers?"
    a: "Yes. QField scans QR codes and barcodes and reads NFC tags, which speeds up inventories where assets already carry an ID."
  - q: "What devices does QField run on?"
    a: "QField runs on Android, iOS, Windows, macOS, and Linux. Most municipal teams use standard Android tablets rather than specialist hardware."
---

## Field workflows

QField covers the breadth of public sector fieldwork. Each area has its own focused workflow:

- [Cadastral and land registry](/solutions/cadastral-and-land-registry/), for boundary verification, parcel evidence, and registry updates
- [Urban planning and zoning](/solutions/urban-planning-and-zoning/), for site surveys, compliance checks, and plan monitoring
- [Public works and infrastructure maintenance](/solutions/public-works-and-infrastructure-maintenance/), for asset registers, condition assessment, and work orders
- [Waste management and sanitation](/solutions/waste-management-and-sanitation/), for route audits, container inventories, and inspections
- [Smart cities and urban mobility](/solutions/smart-cities-and-urban-mobility/), for street furniture, urban trees, sensors, and mobility infrastructure
- [Tourism and outdoor recreation](/solutions/tourism-and-outdoor-recreation-management/), for trails, signage, visitor facilities, and park assets
- [Cultural heritage and archaeology](/solutions/cultural-heritage-and-archaeology/), for heritage inventories, condition monitoring, and excavation recording
- Citizen issue reporting and resolution tracking

## Built for how public bodies actually buy software

Municipal GIS rarely fails on capability. It fails on procurement, on the cost of adding the twentieth field inspector to a per-seat licence, and on the question of where the data physically lives. QField removes all three. There is no per-seat licence, the source is open, and QFieldCloud can be self-hosted inside your own infrastructure when data residency rules require it.

The second constraint is people. Public sector field teams are large, they turn over, and they are not GIS specialists. Forms configured in QGIS carry constraints, dropdowns, and required-photo rules onto the tablet, so an inspector in their first week produces the same clean record as a twenty-year veteran. Every edit is attributable through QFieldCloud, which is what an audit or a contested decision eventually asks for.

## One workflow with QGIS and QFieldCloud

Prepare layers, forms, and symbology in [QGIS](https://qgis.org) once. Push the project to every device through [QFieldCloud](https://qfield.cloud). Crews work offline across the territory and sync when they return to connectivity, with conflict-safe merges when two teams have touched the same record.

## See QField in real government projects

Public bodies from national agencies to single municipalities run QField in production:

- [Finland's National Land Survey empowers field mapping with QField](/success-stories/nls/), the first country to adopt fully open-source GIS at national scale
- [The UN Open GIS Initiative recommends QField for field operations](/success-stories/un/), across peacekeeping missions
- [Scalable national field operations in Costa Rica](/success-stories/kan-inec-costa-rica/), with KAN and INEC
- [Monitoring 20,000 WWII fortifications across Germany](/success-stories/ww2-fortifications/), a heritage asset register at national scale
- [Real-time radiation detection](/success-stories/radiation-detection/), cleaning up America's nuclear legacy
- [Tonga crop survey](/success-stories/tonga/), mapping cleared and re-ploughed fields after the Hunga Tonga eruption
- [Browse all government success stories →](/success-stories/?filter=government-municipalities)
