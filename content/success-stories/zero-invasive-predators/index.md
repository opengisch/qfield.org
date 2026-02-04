---
title: "Zero Invasive Predators: Eliminating Invasive Species with QField"
date: 2025-10-16T11:58:28+02:00
draft: false
author: "Author Name"
authorTitle: "Author Title"
company: "Zero Invasive Predators (ZIP)"
description: "In the rugged wilderness of New Zealand's South Westland, an ambitious conservation project is underway. Zero
      Invasive Predators (ZIP) is systematically eliminating possums, rats, and stoats from vast tracts of forest—with
      QField and QFieldCloud playing a crucial role in their operations."
image: "zero-invasive-3.jpg"
ogImage: "zero-invasive-3.jpg"
tags: []
categories: []
---

In the rugged wilderness of New Zealand's South Westland, an ambitious conservation project is underway. Zero Invasive Predators (ZIP) is systematically eliminating possums, rats, and stoats from vast tracts of forest—with QField and QFieldCloud playing a crucial role in their operations.

### The Challenge: Managing Conservation at Scale

ZIP's mission is breathtaking in scope: to completely remove invasive predators from New Zealand as part of the nationwide Predator Free 2050 initiative. These predators devastate native ecosystems, killing an estimated 25 million native birds annually.

In South Westland alone, their project area spans 114,000 hectares of challenging terrain. This extraordinary achievement represents a vast predator-free area, protected on all sides by mountains, rivers, the ocean, and a network of remote reporting traps and detection devices.

As a frame of reference - _"The scale of the project area is extraordinary: 10 times the size of New Zealand's largest predator-free island, and over 30 times the size of the largest fenced sanctuary."_

{{< figure src="zero-invasive-6.jpg" alt="mt price" caption="" >}}

##### _Waitangitahuna River on the left and Whataroa from Mt Price_

### Tracking 20,000 Devices in the Field

The scale of data management required for this operation is immense. ZIP manages approximately 20,000 field devices through QField in their South Westland project alone—including trail cameras, AI cameras, bait stations, and cage traps. Each device requires ongoing servicing, maintenance, and data collection.

For each device location, the team needs to record three types of information:   
**Actions:** Deployment of equipment and setup details   
**Events:** Servicing information and maintenance records   
**Properties:** Operational data such as bait take, lure status, and battery levels 

Before QField, this information was captured using Garmin GPS devices and paper notebooks—a cumbersome process that created significant delays in data processing and limited the effectiveness of rapid response operations.

{{< figure src="zero-invasive-2.jpeg" alt="devices" caption="" >}} {{< figure src="zero-invasive-5.jpeg" alt="PFSW TMAP Rakiura" caption="" >}}

### The Evolution to Digital Data Collection

ZIP's journey to QField began with a creative but limited solution—using Garmin GPS units to manually record data in JSON format within text fields. While innovative, this system showed its limitations as operations expanded from a 400-hectare pilot site to 12,000 hectares of challenging terrain.

_"The GPX capture was starting to show its limitations, and using notepads to record data was pretty much showing its limitations,"_

After researching digital field data collection options, ZIP chose QField for its seamless integration with their existing open-source GIS stack (QGIS, PostgreSQL, and GeoServer), its robust offline capabilities, and the rich functionality it offered.

_"The ability to control symbology and just the amount of data that could go out in a packaged map on the phone was fantastic,".  
"It worked so much better than Garmins and paper notes."_

### QFieldCloud: Transforming Response Times

The introduction of QFieldCloud revolutionized ZIP's field operations. Before QFieldCloud, data synchronization involved physically collecting phones from field staff every two weeks, manually connecting each device to a computer, and processing the accumulated data—causing significant delays in data availability.

_"The data turnaround was around about two weeks. You record on your phone for two weeks and then sync it,". "There was a bunch of things that happened in the back end, like SQL scripts to refresh symbologies."_

Now, with QFieldCloud, field staff can sync their data daily, providing near real-time information flow critical for responding to predator detections.

_"If we've cleared an area of predators and then we get a predator appearing inside our block, we have to be able to react to that very quickly. If it's a possum, if you're not onto that possum within a couple of weeks, it's likely moved 20 or 30 kilometers from where you found it. Being able to respond as quickly as possible is sort of the key to success for us."_

This rapid data flow has transformed their ability to coordinate teams and respond to incursions efficiently.

### Field Team Coordination

ZIP has approximately 80 staff members across the organization, with about two-thirds working in field-based roles. At any given time, around 35 active QField users are collecting and accessing data across multiple project sites.

When responding to a predator detection, teams work intensively in a targeted area. QFieldCloud enables staff to see exactly what has been done and what remains to be done, eliminating duplication of effort and improving coordination.

_"The ability to go out, sync their data, and then go out the next day and go, 'okay, this is the section that's left to do'—that's been game-changing,"._

Field staff also use QField to access critical information in the field, including:   
\- Trap and bait station locations   
\- Device deployment details   
\- Health and safety information (tracks, wasp nests, mine shafts)   
\- Predator sighting locations 

{{< figure src="zero-invasive-3.jpg" alt="field team coordination" caption="" >}}

### Looking to the Future

As ZIP continues to expand their operations—including beginning work on Stewart Island (Rakiura), a 170,000-hectare project—the scalability of QField becomes increasingly valuable.

The organization remains committed to the open-source technology stack that supports their conservation work. _"We're very appreciative of the open-source stack that supports all of our work,". "The amount of data that we're housing—our detection records are in the tens of millions—and that's all on PostgreSQL and GeoServer."_

📷 Photos taken by [Chad Cottle](https://zip.org.nz/teamfeed/2018/1/chad-cottle)