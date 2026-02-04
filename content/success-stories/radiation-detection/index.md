---
title: "Real-Time Radiation Detection with QField: Cleaning Up America's Nuclear Legacy"
date: 2025-10-16T11:58:28+02:00
draft: false
description: "In sites across the United States, from public parks in New York to former uranium processing facilities in New
      Jersey, a dedicated team of environmental specialists is using QField to detect and remediate radioactive
      contamination left over from America's atomic weapons program."
image: "radiation.png"
ogImage: "radiation.png"
tags: []
categories: []
---

In sites across the United States, from public parks in New York to former uranium processing facilities in New Jersey, a dedicated team of environmental specialists is using QField to detect and remediate radioactive contamination left over from America's atomic weapons program.

### The Mission: FUSRAP Site Remediation

Working under the Formerly Utilized Sites Remedial Action Program (FUSRAP), geological specialists lead cleanup efforts for low-level radioactive waste sites across the country.

_"We're cleaning up radiation, in simple terms," explains the project geologist. "Back in the 60s and early 40s, we didn't really know what this material could do. We're dealing with radium, uranium, thorium—materials that were processed for the atomic bomb program."_

The cleanup process requires precise detection and mapping of contaminated areas, followed by careful excavation and disposal.

### The Challenge: Real-Time Data Collection in Hazardous Environments

The team works in challenging conditions, dressed in full personal protective equipment including respirators while operating sensitive radiation detection equipment. Before implementing QField, their workflow created significant delays that hampered cleanup operations. 

_"We used to have a three day processing time where we would have breadcrumb trails of data, but we wouldn't be able to actually see what those breadcrumbs represented in terms of gamma data,"_ recalls the specialist. _"We'd have to bring our data back, scan, come out of the zone, bring it back to my desk, and go through this long processing system through three different software packages."_

This delay meant field crews would scan an area, then wait days for analysis before knowing where to dig or whether an area was clean. The old system created bottlenecks that frustrated operations teams eager to begin excavation and backfilling.

### QField Integration: Connecting Sensors to Real-Time Mapping

The breakthrough came through integrating radiation detection instruments directly with QField. Working with the QField development team, the specialist created a system that captures gamma radiation readings every second while simultaneously recording precise GPS coordinates.

This sensor integration capability was initially developed specifically for QField to meet the growing demand for real-time sensor data collection in field applications. However, following open-source best practices, OPENGIS.ch contributed this functionality upstream to the broader QGIS project, making sensor integration available to the entire QGIS ecosystem. 

_"We basically just measure the offset from our detector bottom to the antenna to get our elevations," explains the specialist. "The detector spits out data every second, and QField captures both the radiation reading and the location simultaneously."_

The team uses multiple radiation detection methods:   
\- Portable detectors connected via Bluetooth or USB to field tablets   
\- Advanced spectrometers ($90,000 units) that can identify specific radioactive isotopes   
\- Mobile scanning systems mounted on small carts for efficient area coverage   

Using QField's sensor integration capabilities, radiation data flows directly into the mapping interface with custom delimiters to parse the incoming data stream properly. 

### Transforming Field Operations

The impact on field operations has been dramatic. What previously took three days of processing time now happens in real-time, allowing crews to make immediate decisions about sampling and excavation.

_"This process used to take, I would say on average, three days. Working four days a week left us maybe able to do one backfill per week. Now we can do two backfills a week. We can do a scan and collect samples within an hour—we never thought we could ever do that.”_

### Precision and Coverage Verification

QField's mapping capabilities also solve critical quality control issues. The team can now see their coverage in real-time, identifying gaps that might have been missed during scanning. 

_"You can see your sensor being established in real-time. We used to always lose connection to our sensor and then I'd have to go figure out which COM port it's on. Now I can see our sensor readings coming in, and I can also spot if I miss an area and fill it in before we finish."_

With horizontal accuracy running at four millimeters using base station corrections, the team meets the stringent precision requirements for radioactive waste cleanup. 

### Data Integration and Workflow

Field teams use ruggedized tablets running QField to collect data throughout their scanning operations.   
The system integrates multiple data types:   
\- **Gamma scan data:** Real-time radiation readings with GPS coordinates   
\- **Sample locations:** Precise positioning for soil samples sent to on-site laboratories   
\- **Excavation boundaries:** Mapping areas cleared for backfilling   
\- **Infrastructure:** Locations of monitoring equipment, access routes, and safety hazards

Results are processed through the on-site laboratory within 24 hours, allowing rapid decisions about whether areas can be backfilled with clean soil or require additional excavation.

### Looking Forward

The success of QField integration has transformed how the team approaches radioactive waste cleanup. They can now respond immediately to detection data, coordinate multiple field crews efficiently, and provide real-time updates to regulatory agencies overseeing the cleanup efforts.

_"It's really been upping our game here," concludes the specialist. "The ability to visualize this data in real-time, combined with the precision GPS and immediate feedback, has completely changed how we operate in the field."_