---
title: "Community-led mapping for land rights and forest protection in Sarawak with QField"
# date: 2025-10-16T11:58:28+02:00
draft: false
# author: "Patrice Wijnands"
# authorTitle: "Author Title"
company: "The Bruno Manser Fonds"
# description: "In parts of Sarawak (Malaysia), indigenous communities are actively resisting deforestation and fighting for land rights. For one The Bruno Manser Fonds working with villages in the Baramarea, community mapping has become a practical way to support that work while also protecting and passing on local knowledge."
# image: "-.jpg"
date: "2026-01-15T00:00:00+00:00"
categories: ["forestry", "ecology-environment", "water-land-management"]
image: "sarawak-7.jpg"
ogImage: "https://qfield.org/success-stories/sarawak/sarawak-7.jpg"
---


In parts of Sarawak (Malaysia), indigenous communities are **actively resisting deforestation and fighting for land rights**. For one [The Bruno Manser Fonds](https://bmf.ch/en) working with villages in the Baramarea, community mapping has become a practical way to support that work while also protecting and passing on local knowledge.

The goal is simple to describe, but powerful in practice: **create maps that show where people live and what matters to them**. Rivers and mountains, hunting grounds, important forest resources, and the borders people recognize as their lands. The maps are built with the community, in their language where possible, and based on their understanding of the landscape.

This is not only useful for planning and storytelling. In at least one case, a community map was used in court as **evidence** of long-standing connection and use. The community could show place names and key sites in a way that helped to **prove** that they have been living in those areas for a long time.


### Why mapping needs more than satellite imagery

Satellite imagery and topographic maps are helpful starting points. They show rivers, ridges, clearings, and settlement patterns. But they do not capture meaning.

A satellite image can’t tell you where ancestors are buried, where a place is considered sacred, which part of the forest is used for hunting, or which areas people avoid for cultural reasons. Those details live in stories, memory, and daily practice.

{{< figure src="sarawak-7.jpg" alt="" caption="" width="600">}}

### The reality in the field: connectivity comes and goes

A second challenge is technical but very real: **internet access**. Many of these villages have unreliable connectivity, and “offline” can mean days or weeks, not just a few hours between the office and the field.

That matters because community mapping usually involves **large basemaps and plenty of edits from multiple devices**. If you can’t reliably push data back and forth online, you need a workflow that works without it.

### How QField is used in the workflow

The team prepares a QGIS project and packages it for mobile fieldwork using QFieldSync. Then QField is used for **collecting features and attributes** directly on Android devices in the field. A key part of this project is that distribution and syncing often happens by cable, not through the cloud.

{{< figure src="sarawak-2.jpg" alt="" caption="" width="300">}}

**1. Co-designing the project with each community**

Before fieldwork begins, the team sits with the community and adapts the project to what they want to map.

**Different communities care about different things.** A village close to a river may want specific river sections and names recorded in detail. Another community might focus more on forest resources or cultural sites. Together, they decide:

- What feature types to include
- How features should be represented (point, line, polygon)
- Which attributes matter (names, local terms, notes, photos)
- What should be captured in the local language

This step is not only about data structure. It is about decision-making. Many communities have had mapping done to them by outsiders. Here, the community defines what the place is called, what counts as important, and what should be left private.

**2. Moving projects and data without the internet**

Because basemaps are large and connectivity is weak, the team transfers projects to devices using a cable. Community members **collect data in the field and return to a local computer** where the data is brought back into the QGIS project.

Later, when a stable connection is available, the consolidated dataset can be **pushed to a database or cloud service** for wider viewing and backup. But the core mapping work does not depend on that connection.

This also changes how versioning is handled. In the “industrial” workflow, you often assume you can sync frequently, resolve conflicts quickly, and keep changes small. In this context, the gaps are longer and the differences between versions can be bigger. The team keeps multiple versions and, when needed, compares and fixes conflicts manually to protect data quality.


### A moment of real impact: giving the map ack immediately

One of the strongest moments in the interview was what happened when the community saw the collected data on their own phones.
At first, the idea might sound like giving people a basemap. But it was more than that. It was their own collected layers, their own names, their own places, and their own priorities, visible immediately. It became a local “Google Maps,” except it **reflected their world** rather than someone else’s.

That created interest fast. The mapper described an evening when many community members showed up with smartphones, asking to get the map on their devices. For the project team, that was a clear sign the mapping wasn’t just a report deliverable. It was something people wanted to use and keep. QField made it possible for every community member to **carry community data in their own pocket**. So far, QField has been used in **two communities**, and its success ensures that it will be used again.

### Being careful about what is share

The project is also very deliberate about data protection. **Not everything that is mapped should be published.** Sensitive cultural sites, graveyards, and other locations can be exploited if they are made public. Even among neighboring communities, boundaries can be contested, and publishing one version can create conflict.

For that reason, the team does not plan to publish all data to the web or to OpenStreetMap. There is interest in selectively sharing non-sensitive layers, such as river names, but only with consent and clear boundaries.

{{< figure src="sarawak-8.jpg" alt="" caption="" width="600">}}


### The final deliverable that matters most: a printed map

**Digital maps are essential for fieldwork**, but the “finished” outcome for many communities is a **high-quality printed map**, with a thoughtful layout and space for metadata and stories.

A printed map does something phones do not. People can spread it out, gather around it, point to places, and talk. It feels permanent. It can be stored, shared, and used as proof in a way that carries weight locally.

For the BMF and the Communities, the printed map is not an afterthought. It is one of the main goals, alongside the longer-term aim of keeping community data organized in a comparable way across multiple mapping projects.

{{< gallery cols="1" >}}
{{< figure src="sarawak-1.jpg" alt="" caption="" >}}

{{< figure src="sarawak-3.jpg" alt="" caption="" >}}

{{< figure src="sarawak-5.jpg" alt="" caption="" >}}
{{< /gallery >}}
