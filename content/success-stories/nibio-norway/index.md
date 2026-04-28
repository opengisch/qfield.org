---
title: "From Stereoscopes to Smartphones: NIBIO Digitises Norway's National Land Surveys"
date: 2026-04-22T00:05:00+02:00
draft: true
company: "NIBIO (Norwegian Institute of Bioeconomy Research)"
description: "Norway's national land research institute manages data on every forest, field, and wetland in the country. Learn how Anna, Chief Engineer in NIBIO's Geomatics department, spent years systematically replacing paper-based field workflows with QField, from early pollinator surveys to full polygon vegetation mapping, while keeping sensitive national data on Norwegian servers."
sourceLabel: "NIBIO"
sourceUrl: "https://www.nibio.no/nyheter/ny-app-gjer-kvardagen-enklare-for-feltarbeidarar"
image: "nibio-field.jpg"
ogImage: "nibio-field.jpg"
---

### The Challenge

NIBIO, the Norwegian Institute of Bioeconomy Research, carries an extraordinary mandate: know Norway's land. Where the forests are and what grows in them. How much wetland remains. Which soils store the most carbon. Where wild pastures lie and what grazes on them. This is the data the Norwegian government relies on for climate reporting, environmental policy, and agricultural planning.

Gathering it means sending teams into the field for months at a time. From April through October, researchers fan out across Norway's varied terrain, counting pollinators, mapping vegetation, sampling soil. When they returned to the institute, they brought paper notebooks, audio recordings, and maps covered in hand-drawn polygon boundaries. Then the real work began: manually transcribing everything into digital form.

For vegetation mapping, one of NIBIO's most spatially complex surveys, the old workflow was particularly laborious. Fieldworkers used stereoscopes to interpret aerial photographs in three dimensions, then traced grazing-land boundaries directly onto paper prints with marker pens. Every season's mapping had to be digitised back at the office, a process that introduced errors and delayed analysis by weeks.

### The Solution

Anna, Chief Engineer in NIBIO's Geomatics department, had been building toward a different way of working for years.

NIBIO adopted QGIS as early as 2008, one of the first government research institutes in Norway to move away from proprietary desktop GIS. By 2010, the team had migrated their spatial databases to PostgreSQL and PostGIS entirely. When QField appeared, Anna began experimenting. Starting around 2019, she introduced the app for point surveys on eight-inch tablets: simple forms with constrained dropdowns that ensured only valid data entered the database. Transfers happened via USB cable, just one or two tablets, no cloud infrastructure needed yet.

The scale was modest, but the principle was sound. It also reflected a firm position on data governance: NIBIO manages national-level data that Norway treats as a strategic resource. After trialling [QFieldCloud](https://qfield.cloud)'s hosted infrastructure in 2023, NIBIO moved in 2024 to self-hosting QFieldCloud on their own servers. The data stays in Norway.

Over the following years, different programmes across NIBIO gradually took up QField as confidence and capability grew together:

- **3Q biodiversity monitoring.** NIBIO's long-running programme tracking plants, birds, and insects across around 1,000 Norwegian agricultural landscape sites. Researchers replaced paper forms and audio recordings with structured digital capture, with photos and observation data syncing directly to the server from the field.
- **Pollinator surveys.** Point observations of bumblebees, bees, and wildflowers, with photo documentation and one-to-many relationships between survey sites and individual observations.
- **Vegetation mapping.** In 2025, NIBIO made the full transition for their grazing-land surveys: fieldworkers now digitise polygon boundaries directly in QField, working against aerial imagery with topology rules applied in real time. The stereoscopes and paper maps are gone.

For each new programme, Anna refined the forms. Toggle buttons replaced dropdown lists for faster input in the field. Colour-coded symbology gave researchers an immediate read on progress: a feature not yet started shows as one colour, in progress as another, complete as a third. Zooming out, a fieldworker can see at a glance exactly which sites still need attention. Strict mandatory fields are balanced carefully against field realities, because sometimes you need to set the tablet down, dig into the soil, and come back.

When a particularly complex technical issue arose during rollout, NIBIO found the support team willing to go well beyond a standard fix.

> "I called him Sherlock Holmes, because he really dug into the code and found the solution."
>
> Anna, Chief Engineer, NIBIO Geomatics Department

### The Result

Across every programme that has made the transition, the same pattern emerges: data arrives cleaner, analysis starts sooner, and the post-season transcription bottleneck is gone.

- Field constraints ensure valid values reach the database directly, reducing checking and correction work that previously followed every season
- Colour-coded progress tracking means no missed sites and no duplicate visits
- Photos, attributes, and geometry are captured in a single structured record, building richer datasets than paper ever allowed
- Self-hosted QFieldCloud keeps national data within Norwegian borders, meeting NIBIO's data governance requirements

A new soil monitoring programme is now being deployed on QField too, with eighty sites distributed across Norway. Each site requires complex nested forms capturing soil type, quality, biodiversity indicators, and ecological parameters. They will be revisited on a rotating annual cycle for years to come, making data consistency and form integrity critical from the very first entry.

What began as a cautious experiment on a handful of tablets has become critical infrastructure for national-scale environmental monitoring. And once colleagues see what QField can do, Anna says, the demands only grow.

> "We started small. And then if you give them your little finger, they want your whole hand."
>
> Anna, Chief Engineer, NIBIO Geomatics Department
