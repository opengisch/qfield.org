---
title: "From 12 Farmers to a National Programme: WithOneSeed Maps Timor-Leste's Reforestation with QField"
date: 2026-05-14T00:05:00+02:00
draft: true
company: "WithOneSeed (xpand Foundation)"
description: "What began with twelve farmers replanting their land has grown into a national reforestation programme aiming for 10 million trees and 20,000 farming families. Inside the QField workflow that maps farm boundaries, tracks every tree, and turns rural communities into the people doing the mapping — not the people being mapped."
sourceLabel: "xpand Foundation"
sourceUrl: "https://www.xpand.net.au/"
# image: "withoneseed-1.jpg"
# ogImage: "withoneseed-1.jpg"
---

### The Challenge

After decades of deforestation, Timor-Leste needed a way for rural communities to put trees back into their landscapes — and a way to pay people for keeping them alive.

What became the WithOneSeed programme began in 2009 with twelve farmers in a single community. The arrangement was simple to describe and slow to gain trust: for every tree a farmer planted and kept alive for twelve months, the programme would pay 50 cents per tree, every year, for the life of that tree. The Australian-based [xpand Foundation](https://www.xpand.net.au/) brokered the early funding. Most people in the community took a while to believe the offer was real.

Fifteen years on, that pilot community has close to a thousand participating farmers and more than 600,000 trees in the ground. The programme is certified under the [Gold Standard](https://www.goldstandard.org/) for carbon credits, which finances the annual payments back to farmers. In 2020 the European Union supported expansion into six further communities, and the programme is now scaling toward a national footprint: a target of 10 million trees, 20,000 farming families, and 17 million tonnes of carbon sequestered.

That scale created a new problem.

To register and monitor every farm, the team had to capture eligibility assessments, polygon farm boundaries, planting dates, and per-tree identifiers — across thousands of farms, multiple districts, and remote rural areas where mobile signal is unreliable and field staff aren't GIS specialists. Early attempts using KML files synced through cloud storage got messy quickly. Files went missing. Versions diverged. The manual pipeline could not keep up with the rate of new farms entering the programme.

### The Solution

The mapping workflow was rebuilt around QGIS, QField, and QFieldCloud.

Each farm registration starts on a tablet in the field, in QField. Field staff walk the boundary, record the polygon, capture the farmer's details, and tag the planting date and tree IDs against the farm record. The form structure is designed once in QGIS and pushed to every device — so every field worker, regardless of GIS experience, collects the same fields, the same way.

Crucially, QField runs **fully offline**. Basemaps are packaged onto the device before staff leave for the field. New boundaries and attribute data are captured wherever the work happens — in communities with little or no mobile coverage — and synchronise to [QFieldCloud](https://qfield.cloud) the moment a device returns to a connected office.

The programme runs three QFieldCloud roles in parallel:

- **Managers** organise the project structure and oversight on QFieldCloud
- **Admins** maintain the data model, push updates out to the field, and monitor incoming data in QGIS
- **Field staff** see the project read-only on their devices and add new farm boundaries

Field staff were trained on-site, over a week of classroom sessions and hands-on field walks. None were GIS specialists when they started; the team simply learned by doing.

A separate tree-tagging system handles the annual count: every tree carries a physical tag, and field crews scan the tags each year to confirm the trees are still alive. Those results are imported into QGIS and matched against the farm boundaries captured in QField — closing the loop between the polygons drawn in the field and the carbon payments returning to the farmers.

### The Result

The QField workflow now supports the operational backbone of the programme:

- **Around 3,000 farms registered**, growing by more than a thousand farms per year
- **Six project areas** across multiple districts, each run by a partner organisation
- **Around 100 field staff** using QField across the partner network
- **Files no longer go missing.** Every farm boundary, attribute, and photo is captured directly against the QGIS data model and synced through QFieldCloud, replacing the earlier cloud-storage pipeline that was losing files and versions
- The data model and three-role workflow are designed to scale to the **national target of 10 million trees and 20,000 farming families**

The programme is also a jobs programme. Annual tree counts, tagging, and farm registration sustain rural employment — work that would otherwise pull young people to the capital city in search of jobs. Tree payments feed into women-led savings and loans groups, school fees, and small social enterprises that have spun out of the programme. Connectivity has improved as a side effect, too: every district office now has Starlink, which keeps the QFieldCloud sync reliable in places that had little reliable internet at all.

Most importantly, the people doing the mapping are the people living on the land. Communities that have historically had mapping *done to them* are the ones holding the tablets.

> "We don't lose anything. Field staff collect offline, and when they're back online, everything pushes to the cloud. We can monitor the data immediately."

### Scaling the Model

The WithOneSeed approach — community planting, annual verification, carbon-finance payback, and a QField-based mapping spine — is being designed for replication. The next phase scales the same workflow nationally across Timor-Leste, with partner organisations running parallel project areas under a shared data model. The technology stack does not need to change to support it. The QGIS project, QField forms, and QFieldCloud roles already in production are the same ones that will carry the programme to 10 million trees.
