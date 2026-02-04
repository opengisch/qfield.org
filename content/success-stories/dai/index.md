---
title: "Emergency Data Management for Cultural Heritage Rescue – KulturGutRetter"
date: 2025-10-16T11:58:28+02:00
lastmod: 2025-10-20T10:45:00+02:00
draft: false
author: "Dr. Martina Seifert"
authorTitle: "Project Lead"
company: "KulturGutRetter | <a href=\"https://www.dainst.org/\" target=\"_blank\" rel=\"nofollow\">Deutsches Archäologisches Institut</a>"
description: "Learn how the KulturGutRetter project uses QField for emergency cultural heritage rescue operations. This open-source mobile GIS workflow enables real-time documentation and coordination during disaster response missions."
summary: "The KulturGutRetter project demonstrates how QField enables efficient cultural heritage rescue operations through mobile GIS technology, offline data collection, and real-time coordination during emergency missions."
image: "dai-2.png"
ogImage: "dai-2.png"
sourceLabel: "Original article (KulturGutRetter)"
sourceUrl: "https://www.kulturgutretter.org/en/data-acquisition-and-data-management-for-the-emergency-rescue-of-cultural-heritage/"
keywords: ["cultural heritage", "emergency response", "disaster management", "mobile GIS", "QField", "QGIS", "archaeological documentation", "field data collection"]
tags: ["cultural heritage", "emergency response", "disaster management", "archaeology", "field documentation"]
categories: ["success stories", "emergency response"]
---

### Context & Challenge

Disaster response teams tasked with saving cultural heritage face the enormous challenge of documenting damage, tracking rescue actions, and ensuring efficient data handling—often under harsh conditions. The KulturGutRetter project, led by DAI in partnership with THW and LEIZA, set out to build an open-source workflow for real-time data acquisition and management during emergency missions 

### QField in Action

At the heart of the system is **QField** , integrated with QGIS and tailored form-based templates that capture a wide variety of data types—photographs, audio, video, geolocation, and unique UUID/QR-coded IDs. This ensures every asset—whether building or artifact—can be traced from salvage through stabilization 

{{< figure src="https://www.kulturgutretter.org/wp-content/uploads/sites/41/2023/09/qfield-post-image-1024x576.png" alt="" caption="" >}}

### Field-Tested & Ready for Deployment

QField-powered field kits equipped with tablets connect via a local server and router—even offline. Synchronization to a central PostgreSQL database allows live tracking and coordination of data across devices. This mobile GIS system proved its resilience during a full-scale disaster drill at Demerthin Castle (September 2024), fulfilling ISO-standard data capture and secure workflow needs 

### Key Features

  * Form-based input with geolocation, photos, audio/video, UUID/QR linking 
  * Offline-capable local network sync to a central mini‑server
  * Modular workflows for both movable and immovable heritage elements 
  * Automatic image syncing via local web service, and full data export in FAIR-compliant formats 
  * Adaptable system—online, offline, paper backup modes to suit any emergency scenario 

### Impact & Takeaways

This integrated QField‑based system allowed the KulturGutRetter team to: 

  * Quickly record structured, high-quality data during heritage rescue operations, 
  * Coordinate seamlessly in offline environments,
  * Maintain data integrity from field entry through centralized storage, 
  * Prepare exportable packages—including 3D scans and field metadata—for future conservation and analysis 

{{< figure src="https://www.kulturgutretter.org/wp-content/uploads/sites/41/2023/09/KGR-Praxistest-Schadenserfassung-29.9-Foto-Eva-Goetting-1-1024x576.png" alt="" caption="" >}}

### Built on Open Source, Ready for the Future

By combining QField, QGIS, PostgreSQL, and open‑source tooling under the KulturGutRetter project—supported by the German Bundestag and Foreign Office—this case demonstrates how agile, mobile-first open-source GIS can revolutionize emergency documentation for cultural heritage 

### Learn More

  * [KulturGutRetter: Data Acquisition & Management](https://www.kulturgutretter.org/en/data-acquisition-and-data-management-for-the-emergency-rescue-of-cultural-heritage/)
  * [Full-scale field exercise (Sept 2024)](https://civil-protection-knowledge-network.europa.eu/news/first-full-scale-exercise-german-cultural-heritage-response-unit)
  * [Interview with DAI on QField deployment](https://www.archernet.org/en/2022/01/14/interview-kulturgutretter-digital-documentation-of-cultural-heritage-in-crisis-situations/)