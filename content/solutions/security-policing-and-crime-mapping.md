---
title: "QField for Security, Policing, and Crime Mapping"
slug: "security-policing-and-crime-mapping"
type: "solutions"
description: "Incident mapping, patrol records, and search and rescue coordination with QField, QGIS, and QFieldCloud, fully offline."
draft: false

hiddenFromHomePage: true
hiddenFromSearch: false

tags: ["mobile GIS", "field data collection", "QGIS fieldwork", "crime mapping", "public safety", "policing", "search and rescue", "missing persons", "ground search", "track logs", "incident mapping", "patrol mapping", "offline mapping"]
categories: ["Humanitarian, Safety & Emergency Response"]
successStoryCategories: ["humanitarian-emergency-response"]

sitemap:
  priority: 0.67
  changefreq: monthly

hero:
  headline: "Accurate field data for public safety"
  sub: "Record incidents, patrols, and search coverage on one shared map, even where there is no signal."
  ctaText: "Talk to us"
  ctaUrl: "/assistance/"
pains:
  - "Search and patrol teams working from different maps"
  - "Track logs that have to be emailed in and stitched together by hand, if they arrive at all"
  - "No reliable record of which ground has actually been covered"
  - "Connectivity gaps in rural areas, bushland, and during large events"
  - "Sensitive incident data that only some people should see"
  - "Inconsistent incident codes and descriptions between officers"
proof:
  - "Runs the shared search map for Find Our Lost Loved Ones, whose volunteers found two missing people in 2026 that official searches could not"
  - "Coordinated 52 volunteers on a single live map during one search"
  - "Track logs sync automatically, so search coverage is recorded without emails or manual merges"
  - "QFieldCloud reader accounts let partner agencies follow progress in real time"
  - "Open source, with no per-seat licensing and no vendor lock-in"
faq:
  - q: "Can QField record where search teams have walked?"
    a: "Yes. QField records a track log while each team works, and the tracks sync back to the shared project. Afterwards you can see exactly which ground was covered, not just which area was assigned."
  - q: "Can we split a search area into sectors and assign them to teams?"
    a: "Yes. Build a grid or sector layer in QGIS, colour it by team, and push it to every device. Each team sees its own assignment on the same map as everyone else."
  - q: "Can partner agencies see our work without editing it?"
    a: "Yes. QFieldCloud read-only roles let a partner agency follow the live map without changing anything. Editing rights stay with the teams you choose."
  - q: "Can we control who sees sensitive incident data?"
    a: "Yes. QFieldCloud permissions control access to each project. For the strictest requirements, QFieldCloud can be self-hosted inside your own infrastructure."
  - q: "Does QField work offline during patrols and searches?"
    a: "Yes. QField runs fully offline by default, with basemaps, terrain, and layers loaded onto the device before teams go out. Data syncs whenever a connection is available."
  - q: "Can volunteers use QField without GIS training?"
    a: "Yes. The GIS work happens once in QGIS. In the field, volunteers open the project, press sync, and follow their assignment on the map."
---

## Field workflows

Public safety and search teams use QField to coordinate work on the ground:

- Search and rescue grids, team assignments, and coverage tracking
- Missing person searches with shared track logs
- Incident and hazard mapping with photos
- Patrol routes and observations
- Event safety planning and on-the-day coordination
- Community safety surveys

## One shared map for every team

When dozens of people are searching the same bushland, the biggest risk is not the terrain but the coordination. If teams work from different maps, and track logs have to be emailed in each night, ground gets searched twice while other areas are missed.

Find Our Lost Loved Ones (FOLLO), a volunteer nonprofit in Australia, fixed that with QField. Each search starts in QGIS with LiDAR, hillshade, and contours, overlaid with a grid of 20 metre squares. Teams are colour coded and assigned rows of squares. Volunteers open QField, press sync, and everyone is on the same map. Their track logs flow back automatically, so the team knows exactly which squares were covered and which need a second look. On one search, 52 volunteers worked from the same live map.

FOLLO also gave the head of a state search and rescue unit a QFieldCloud reader account, so the police could follow the search in real time. In 2026, the team found two missing people that the official searches could not.

## One workflow with QGIS and QFieldCloud

Build the map and the assignment grid in [QGIS](https://qgis.org). Share it with every team through [QFieldCloud](https://qfield.cloud), with read-only access for partner agencies. Teams work offline in the field and their records and track logs sync back to one shared project.

## Teams using QField

- [One shared map: finding Australia's missing with QField](/success-stories/find-our-lost-loved-ones/), with Find Our Lost Loved Ones
- [Browse all humanitarian and emergency response success stories →](/success-stories/?filter=humanitarian-emergency-response)

Looking for the broader picture? See [QField for humanitarian aid and disaster relief →](/solutions/humanitarian-aid-and-disaster-relief/).
