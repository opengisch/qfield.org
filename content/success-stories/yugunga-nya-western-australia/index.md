
---
title: "Yugunga-Nya Rangers Map Their Ancestral Land with QField"
date: 2026-06-28T00:05:00+02:00
draft: true
company: "Yugunga-Nya Native Title Aboriginal Corporation (YN PBC)"
description: "Four years after their native title determination, the Yugunga-Nya people are mapping and protecting hundreds of kilometres of ancestral country in the Western Australian desert. Inside the QField and QGIS workflow that supports heritage surveys with mining proponents on one side, and a thirty-strong ranger team recording artifacts, sacred sites, and endangered species on the other, for the first time in their history, on their own terms."
sourceLabel: "Yugunga-Nya"
sourceUrl: "https://www.ynpbc.com.au"
---

### The Challenge

The Yugunga-Nya people's native title area sits in the Western Australian desert, eight hours northeast of Perth, and spans hundreds of kilometres. It is country layered with tens of thousands of years of heritage: stone artifacts, grinding stones, rock art, sacred sites, water sources. Much of it is still in its original state. It is also country crossed by some of Australia's most active mining and resource development.

Native title was only formally determined for the Yugunga-Nya members four years ago. Their corporation, the [Yugunga-Nya Native Title Aboriginal Corporation](https://www.ynpbc.com.au) (YN PBC), now carries two demanding responsibilities. One is working with developers who are legally required to conduct heritage surveys before disturbing the ground. The other is supporting the community's own ranger program to protect the land on country.

Both jobs have to happen across an enormous, remote landscape with patchy connectivity, and both produce sensitive data that has to be captured consistently and held carefully.

Before QField, the mapping side was a familiar mess for anyone who has worked in remote field data collection. Handheld GPS units that didn't talk to the maps. Photos detached from the points they belonged to. No consistent schema for what was being recorded or how. For Laura Agostini, heritage consultant and anthropologist with YN PBC, the workflow simply didn't hold up under the scale of the work.

> "Before that we were using GPS and merging maps and trying to combine the both, and it just did not work for me. In my mind it was very non-intuitive, the Garmins, to me. So this sort of solved a lot of issues."
>
> Laura Agostini, Heritage Consultant, YN PBC

### The Solution

The corporation now runs QField on Samsung tablets across both sides of the work.

**Heritage surveys with proponents.** When a mining or development proponent needs to disturb ground in the native title area, the law requires a heritage survey first. Laura or another heritage consultant heads out with an archaeologist and eight traditional owners. Everyone lines up and walks the survey area together, in what Laura describes as *"looking for a missing person."* A short survey takes two days. A long one takes ten. Every survey turns up hundreds of artifacts: cores, flakes, grinding stones, occasionally finer tools, and around rocky outcrops, rock art. Heritage consultants on each end of the line carry a tablet loaded with the survey base map and a set of QField recording layers: known heritage, isolated artifact finds, site boundaries, deviations. Everyone carries a radio. When someone in the middle of the line finds something, they call it in, a consultant walks over, and the artifact gets recorded. For site boundaries, the team uses QField's track recording to walk the perimeter directly.

**The ranger program.** YN PBC supports a ranger team of around thirty Yugunga-Nya members. The rangers protect country, covering environmental preservation, heritage preservation, plant and animal monitoring, endangered species, animal tracks. Until recently they relied on heritage consultants whenever mapping work needed doing. After a recent QField training workshop, that has changed. The team walked the block together, recorded a few features, and the rangers picked it up quickly.

> "They're coming from a space of knowing these areas, connected culturally, emotionally, to these areas, and now they have something that's so practical, that makes sense, easy to pick up, and they can now go out without us and when they see something they can record it, report back."
>
> Laura Agostini, Heritage Consultant, YN PBC

The technical setup is intentionally simple. Base maps are prepared in QGIS by Laura's colleague Liam (YN PBC's in-house GIS lead) and packaged onto the tablets before any team leaves the office. Recording layers carry the schema and dropdowns that keep data consistent across surveys and across people. Tablet-level GPS turned out to be good enough for the accuracy the work needs. Experiments with external Garmin antennas were dropped because the gain wasn't worth the friction in a vehicle-heavy workflow. Data syncs through [QFieldCloud](https://qfield.cloud) at the end of each day, replacing the older approach where the office had to chase phones, laptops, and shared folders to pull data back together.

Sacred sites, rock art, and other sensitive cultural information stay internal. The corporation is open to research collaboration where data can be shared carefully, but the default is protection.

### The Result

For the first time in their history, the Yugunga-Nya people are recording, mapping, and defending their own country on their own terms.

- Around 30 rangers trained on QField through a workshop programme the team is now extending
- Hundreds of artifacts captured per survey, each one linked to its location, its site context, and the survey it belonged to
- One consistent data model across heritage consultants, the archaeologist, and the rangers, ending the reconciliation work between Garmin tracks, loose photos, and inconsistent notes
- End-of-day syncing through QFieldCloud keeps the office in step with the field across enormous distances and patchy coverage
- Sensitive cultural data stays internal, with the corporation in control of when and how it is shared

> "This is the first time in history where the Yugunga-Nya members have been able to physically on the ground with this tool record and protect and fight for their land rights. QField has given people the ability to do that in a way that's accessible, accurate, and customisable. It's a pretty huge thing."
>
> Laura Agostini, Heritage Consultant, YN PBC

There is another result, harder to measure but important to the elders. Heritage surveys driven by developer schedules often ask traditional owners to walk and re-walk areas they have already mapped many times over. Each repeat survey is a small frustration with a long history behind it. A QGIS dataset that holds the corporation's accumulated work changes that conversation. When a proponent arrives with a shapefile and a proposal, YN PBC can overlay it against what has already been recorded, flag where the impacts will fall, and suggest where a project might move five kilometres west to avoid the country that matters most.

> "It's a conversation that's open and it makes sense and it brings people to the table rather than conflict."
>
> Laura Agostini, Heritage Consultant, YN PBC

### A Cultural Mapping Database for Country

The next step is bigger. YN PBC is building a cultural mapping database in QGIS that will hold both tangible and intangible heritage: sites, artifacts, important waterways, but also song lines, story lines, and the ethnographic and consultation material that gives those places meaning. Features in the database link back to their cultural context. The collection work is already underway, and QField is the spine that feeds it from the field.

It is the kind of project that only became possible four years ago, when the Yugunga-Nya members were formally recognised as the holders of their country. A mature, customisable, open-source field data stack (QField, QGIS, QFieldCloud) gives them a way to act on that recognition without paying a proprietary vendor every time they record an artifact on their own land.

*The Yugunga-Nya Native Title Aboriginal Corporation (YN PBC) acknowledges the Traditional Owners of the land where it works. We thank Laura Agostini for sharing this story.*
Displaying index.md.
