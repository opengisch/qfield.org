---
title: "One Shared Map: Finding Australia's Missing with QField"
date: "2026-07-07T00:00:00+00:00"
draft: true
company: "Find Our Lost Loved Ones (FOLLO)"
description: "Find Our Lost Loved Ones, an Australian volunteer nonprofit, uses QField, QGIS and QFieldCloud to coordinate large ground searches for missing people. In 2026 the team located two missing people that official searches could not, giving their families an end to years of uncertainty."
image: "follo.jpg"
ogImage: "https://qfield.org/success-stories/find-our-lost-loved-ones/follo.jpg"
categories: ["humanitarian-emergency-response"]
---

**In the forests of Tasmania, a volunteer team is using QField, QGIS and [QFieldCloud](https://qfield.cloud) to search for missing people, and to give their families the answers that official searches could not.**

### The Challenge

Every year in Australia, thousands of people go missing. Most are found quickly. But when a search runs for days without success, when the weather turns cold and the odds fall away, official resources have to be redirected, and the case moves onto a national register of long term missing persons. On average, more than one new unresolved case is added to that register every month.

"It's not just a statistic. It's not just a missing person. It's somebody's loved one," says Alex Smith, secretary of Find Our Lost Loved Ones (FOLLO), the volunteer nonprofit set up to keep searching after the official effort ends. "Limbo is suffering."

FOLLO's story began with Celine Cremer, a Belgian traveller who went missing in the Tasmanian bush. A private search drew around 30 volunteers from across the country, Alex among them, driving down from Queensland. On the first day they found her phone, half buried under leaf litter, and verified it on the spot against a serial number her family had carried with them from Belgium. In the days that followed they found her drink bottle and the place she had sheltered on her first night. Weeks later, a searcher walking alone beside a river found her remains, and her family finally had an answer.

That first search also exposed a technical problem. Maps were shared as a patchwork of PDF files in a general navigation app. Volunteers were asked to switch on their track logs and email them back each evening, where one person would work late into the night trying to stitch them together so the next morning's teams knew where to go. Only about half the track logs ever made it back. "This is a technological problem that can be fixed," Alex remembers telling himself on the long drive home.

### The Solution

Alex, who studied engineering, computing and GIS, went looking for something better and found the QGIS ecosystem. FOLLO now runs the full stack: QGIS on the desktop, QFieldCloud for synchronisation, and QField in the field.

Every search begins in QGIS. Alex builds each map from the ground up, starting with LiDAR data, generating a hillshade, adding contours, then layering in rivers, roads and points of interest. Over the top he lays a grid of 20 metre squares. "Twenty metres is the golden number," he says. "Big enough that you're still achieving something, but small enough that pretty much anybody can search it. That's breaking the problem down into a chunk you can do."

Teams are colour coded, red, blue, green and orange, and each is assigned its own rows of squares. Volunteers open QField, press sync, and everyone is on the same map. As they walk their lane with track logging switched on, their paths flow back to a single shared project. Afterwards, the track logs confirm exactly which squares were truly covered, and which still need a second look.

That single source of truth solved two of FOLLO's biggest problems at once. There is now one map for everyone, no more "which PDF do you have," and submitting a track log became a single tap rather than an evening of emails. On the search for Peter "Pom" Willoughby, 52 volunteers coordinated from the same live map, and the team captured far more complete coverage than it ever had before. "I don't want 52 emails," Alex says. "QField just handles it."

The real vector layers matter too. From the layers menu, searchers turn detail on and off as they go, hiding contours when they are distracting, or switching on a single polygon when police suggest a particular valley is worth a look.

### The Result

In 2026, FOLLO has found two missing people that the official searches could not.

- **Celine Cremer:** located after a sustained volunteer effort, giving her family and friends in Belgium an end to years of uncertainty.
- **Peter "Pom" Willoughby:** found in May 2026, with his extended family waiting at the community hall as the searchers returned.

The approach has also opened a door with the authorities. Alex gave the head of a state search and rescue unit a QFieldCloud reader account and added him to the live maps, so the police could see FOLLO's work in real time. In return, the police shared their own track logs, something Alex had never heard of before. "I don't want a polygon that says 'we searched over there.' We want to see where you actually walked." Tasmania Police have since spoken publicly about learning from the group.

For a volunteer organisation, the fact that the whole toolchain is free and open source is not a detail, it is the foundation. A single search can cost a volunteer thousands of dollars in their own time and travel, and asking dozens of unpaid searchers to buy software licences was never an option.

> "I just want to see fewer missing people. I don't care who finds them. QField has been really, really game changing."
>
> Alex Smith, Find Our Lost Loved Ones

FOLLO is now preparing further searches and working toward becoming a registered charity, with the goal of taking the model national. QField was never designed for this. But in the hands of a determined volunteer team, one shared map is helping bring people home.

---

Learn more about Find Our Lost Loved Ones at [follo.org.au](https://follo.org.au/).
