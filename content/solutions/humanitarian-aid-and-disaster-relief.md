---
title: "QField for Humanitarian Aid and Disaster Relief"
slug: "humanitarian-aid-and-disaster-relief"
type: "solutions"
description: "Needs assessments, damage mapping, shelter and site planning, and search coordination with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "humanitarian", "aid distribution", "needs assessment", "disaster relief", "emergency response", "damage assessment", "humanitarian GIS", "offline humanitarian mapping", "open source humanitarian GIS", "search and rescue", "multi-agency coordination"]
categories: ["Humanitarian, Safety & Emergency Response"]
successStoryCategories: ["humanitarian-emergency-response"]

sitemap:
  priority: 0.69
  changefreq: monthly

hero:
  headline: "Reliable field data for humanitarian response"
  sub: "Assessments, damage mapping, site planning, and search coordination, captured on a device that keeps working when the network does not."
  ctaText: "Talk to us"
  ctaUrl: "/assistance/"
pains:
  - "Networks that are down, overloaded, or were never there in the first place"
  - "Assessment forms that change from team to team, so the numbers never add up"
  - "Photos, GPS points, and notes that arrive separately and have to be matched by hand"
  - "Teams from different organisations working from different maps"
  - "Sensitive data about people and places that cannot be shared with everyone"
  - "Licence costs that do not scale to hundreds of surge staff and volunteers"
proof:
  - "Recommended by the UN Open GIS Initiative for field operations, and field tested in UNMISS (South Sudan) and MONUSCO (DR Congo)"
  - "Used by Tonga's Ministry of Agriculture to map crop damage while the country's internet cable was cut after the 2022 eruption"
  - "Runs the shared search map for volunteer searches for missing people in Australia"
  - "Deployed in a full scale disaster drill for Germany's cultural heritage emergency response unit"
  - "Self-hostable, so data about affected people can stay on infrastructure you control"
  - "Open source, with no per-seat licensing and no vendor lock-in"
faq:
  - q: "Does QField work when the mobile network is down?"
    a: "Yes. QField runs fully offline by default. Basemaps, layers, and forms are loaded onto the device before deployment, and teams can work for days without a connection. Data syncs to QFieldCloud or your own server the next time the device is online."
  - q: "Can several organisations work on the same project?"
    a: "Yes. QFieldCloud lets you share a project with users from different organisations and give each of them the role they need. Each team works on its own offline copy, and changes merge automatically on sync."
  - q: "Can we restrict access to sensitive data?"
    a: "Yes. QFieldCloud permissions control who can see and edit each project, and read-only roles let partners view data without changing it. For the strictest requirements, QFieldCloud can be self-hosted inside your own infrastructure."
  - q: "Do you support multilingual forms?"
    a: "Yes. QGIS projects can be translated, and QField shows the form in the language of the device. The same assessment can run in several languages while the data stays in one consistent structure."
  - q: "How quickly can we deploy a new assessment form?"
    a: "Build or adapt the form in QGIS and push the updated project through QFieldCloud. Teams pick it up on their next sync. Many organisations keep ready-made templates for common assessments so that deployment takes minutes, not days."
  - q: "Can we record where teams have actually been?"
    a: "Yes. QField can record a track log while a team works. Tracks sync back with the rest of the data, so coordinators can see exactly which areas were covered and which still need a visit."
  - q: "What does QField cost for an NGO or a response agency?"
    a: "QField itself is free and open source, with no per-seat licence. QFieldCloud has free, paid, and self-hosted tiers, so the cost does not grow every time you add surge staff or volunteers."
  - q: "What devices does QField run on?"
    a: "QField runs on Android, iOS, Windows, macOS, and Linux. Most teams use ordinary Android phones and tablets, which are easier to source and replace in the field than specialist hardware."
---

## Field workflows

Humanitarian and emergency teams use QField across the whole response cycle. Each area has its own focused workflow:

- [Natural disaster assessment](/solutions/natural-disaster-assessment-floods-landslides-wildfires/), for rapid damage mapping after floods, landslides, wildfires, and earthquakes
- [Civil protection and risk assessment](/solutions/civil-protection-and-risk-assessment/), for hazard mapping, critical assets, and emergency drills
- [Refugee camp and shelter mapping](/solutions/refugee-camp-and-shelter-mapping/), for site planning, shelter inventories, and service mapping
- [Health and epidemiology fieldwork](/solutions/health-and-epidemiology-fieldwork/), for facility mapping, household surveys, and outbreak monitoring
- [Security, policing, and search coordination](/solutions/security-policing-and-crime-mapping/), for incidents, patrols, and ground searches
- [Social vulnerability mapping](/solutions/social-suffering-vulnerability-mapping/), for identifying the communities most at risk
- Needs assessments and aid distribution tracking

## Built for the worst conditions

A disaster usually takes out the infrastructure that most field apps depend on. Power is intermittent, mobile networks are down or saturated, and the people doing the fieldwork are often surge staff or volunteers who were not trained on the tool last week.

QField is designed around those constraints. Projects are packaged onto the device before a team deploys, so maps, forms, and reference layers are all available with no connection at all. Forms configured in QGIS carry dropdowns, constraints, and required photos onto the device, so a volunteer on their first day produces the same structured record as an experienced assessor. When a team gets back into coverage, even briefly, their work syncs and becomes visible to everyone else on the project.

## One shared map for every team

The hardest part of a large response is often not collecting data but getting everyone onto the same picture. Prepare the project once in [QGIS](https://qgis.org) and share it through [QFieldCloud](https://qfield.cloud). Every team, from every organisation, works from the same layers and the same forms, and every record lands in the same place. Coordinators see progress as teams sync, rather than stitching together spreadsheets and emailed files late at night.

## See QField in real humanitarian projects

- [One shared map: finding Australia's missing](/success-stories/find-our-lost-loved-ones/), where a volunteer nonprofit coordinates ground searches of 50 or more people in QField
- [The UN Open GIS Initiative recommends QField for field operations](/success-stories/un/), across peacekeeping and humanitarian missions
- [Tonga crop survey](/success-stories/tonga/), mapping crop damage and monitoring recovery after the Hunga Tonga eruption, while the internet was cut
- [Emergency data management for cultural heritage rescue](/success-stories/dai/), with Germany's KulturGutRetter project
- [Ground truth data on malaria transmitting mosquitoes](/success-stories/malaria-data-collection/), in rural Burkina Faso and Ivory Coast
- [Browse all humanitarian and emergency response success stories →](/success-stories/?filter=humanitarian-emergency-response)
