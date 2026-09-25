---
title: "QField for Smart Cities and Urban Mobility"
slug: "smart-cities-and-urban-mobility"
type: "solutions"
description: "Street furniture, urban trees, sensors, and mobility infrastructure inventories with QField, QGIS, and QFieldCloud, integrated with your city platforms."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["field data collection", "mobile GIS", "QGIS fieldwork", "smart city", "urban mobility", "IoT sensors", "street furniture", "urban trees", "cycle infrastructure", "parking inventory", "digital twin", "municipal asset inventory", "QFieldCloud API", "open source smart city GIS"]
categories: ["Government, Public Administration & Municipalities"]
successStoryCategories: ["government-municipalities"]

sitemap:
  priority: 0.67
  changefreq: monthly

hero:
  headline: "Map and maintain smart city infrastructure"
  sub: "Keep sensors, street furniture, urban trees, and mobility assets up to date, and feed the data straight into your city platforms."
  ctaText: "Talk to us"
  ctaUrl: "/assistance/"
pains:
  - "City asset data that is only as smart as the last time someone checked it on the ground"
  - "Sensors and devices installed by different contractors, each with their own records"
  - "Complex data models that field crews struggle to fill in correctly"
  - "Field apps that do not talk to the city's own platforms and databases"
  - "Proprietary tools that lock the city's data into one vendor"
  - "Licence costs that grow with every new crew and contractor"
proof:
  - "GINVE built its urban green management platform on QFieldCloud, generating QField projects for trees, hedges, turf, and street furniture"
  - "QFieldCloud exposes an API for integration with city platforms and digital twins"
  - "Writes directly to PostGIS, GeoPackage, and any format QGIS supports"
  - "Scans QR codes and barcodes and reads NFC tags on tagged assets"
  - "Open source and self-hostable, with no per-seat licensing and no vendor lock-in"
faq:
  - q: "Can QField integrate with our existing city platform?"
    a: "Yes. QField writes to PostGIS, GeoPackage, and other standard formats, so anything that reads them can use the data. For tighter integration, QFieldCloud exposes an API. GINVE, for example, generates QField projects from its own urban green platform and syncs the results back."
  - q: "Can we capture IoT sensor and device metadata?"
    a: "Yes. Build a form in QGIS with the fields you need, such as device ID, model, installation date, and power source, with dropdowns and constraints so every record is consistent. QField can scan a QR code or barcode on the device to fill in its ID."
  - q: "Can we work with complex data models?"
    a: "Yes. QField supports related tables, value relations, conditional fields, and constraints configured in QGIS. Crews see a form that guides them through the model instead of a raw attribute table."
  - q: "Do you support collaboration across departments and contractors?"
    a: "Yes. Share projects through QFieldCloud and give each department or contractor the role they need. Every edit is attributed, so you can see who changed what."
  - q: "How accurate is positioning for street assets?"
    a: "Built-in phone GPS is typically accurate to a few metres. For centimetre accuracy, pair QField with an external GNSS receiver with RTK corrections over Bluetooth."
  - q: "Can the city host the data itself?"
    a: "Yes. QField and QFieldCloud are open source and self-hostable, so the city can keep its data inside its own infrastructure."
---

## Field workflows

City teams use QField to keep the physical layer of a smart city accurate:

- IoT sensor and device inventories
- Street furniture, lighting, and signage
- Urban trees, green spaces, and hedges
- Cycle lanes, bike parking, and micromobility infrastructure
- Parking, loading zones, and kerbside inventories
- Condition checks and maintenance records

## Built to connect

A smart city is only as good as its data about the physical world, and that data has to reach the systems that use it. QField is built on open formats. Records captured in the field go straight into PostGIS or GeoPackage, and the QFieldCloud API lets other platforms create projects and collect results automatically.

GINVE, an Italian company that manages urban greenery for public bodies, built exactly that. Its platform generates a GeoPackage and QField project for each job, crews edit trees, shrubs, hedges, turf, and street furniture offline in QField, and the results sync back into the platform through QFieldCloud.

## One workflow with QGIS and QFieldCloud

Design the data model and forms in [QGIS](https://qgis.org). Push them to every crew and contractor through [QFieldCloud](https://qfield.cloud), or generate projects automatically through the API. Crews work offline across the city and sync when they are back online.

## Cities using QField

- [Building on top of QFieldCloud](/success-stories/building-on-top/), with GINVE's urban green management platform in Italy
- [Browse all government success stories →](/success-stories/?filter=government-municipalities)

Looking for the broader picture? See [QField for government and municipalities →](/solutions/government-and-municipalities/).
