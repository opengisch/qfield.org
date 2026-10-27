---
title: "Teaching Drones to Spot Invasive Plants: CSEM Labels Ground Truth with QField"
date: "2026-10-27T00:00:00+00:00"
draft: true
company: "CSEM"
description: "In the NEOPHYS project, CSEM and its Swiss partners, including SBB, trained machine learning models to detect invasive neophytes in 3 mm drone imagery. QField and QFieldCloud let the botanists labelling the data draw centimetre-accurate polygons in the field, straight onto the orthomosaic, with every label in a single GeoPackage."
# image: "csem-neophytes.jpg"
# ogImage: "https://qfield.org/success-stories/csem-neophytes/csem-neophytes.jpg"
categories: ["ecology-environment", "infrastructure-engineering"]
---

**Across Switzerland, a research team is teaching machine learning models to find invasive plants in drone imagery. To give those models reliable ground truth, the botanists labelling the data took QField and [QFieldCloud](https://qfield.cloud) into the field and drew every plant directly onto the map.**

### The Challenge

Neophytes are plants that arrived from other parts of the world and spread at the expense of native species. Many came to Switzerland from abroad, and they are now spreading within the country too. Railways are one of the ways they travel: trains carry seeds with them as they run across the network.

For SBB, Switzerland's largest railway operator, that is a legal problem as well as an ecological one. SBB has to make sure no neophytes grow on its land, and that includes the strips beside the tracks and the unused plots that slowly overgrow. Checking all of that land on foot does not scale.

The NEOPHYS project set out to find a better way. Bringing together CSEM, the Swiss technology innovation centre, with SBB, two universities and several other Swiss partners, the project tested whether invasive plants could be detected automatically from drone flights.

"We have this project, NEOPHYS, together with many Swiss partners," explains Silvio Mueller, a research and development engineer at CSEM who works on computer vision and robotics. "We are trying to detect neophytes from drone flights. A drone flies over the plants, we take images, and then we want to see where there are neophytes."

The project focused on six species. A drone provider flew the sites and delivered orthorectified mosaics in very high resolution RGB, with a ground sampling distance of around **three millimetres per pixel**. That level of detail makes small plants visible, but it also produces enormous images that are hard to handle.

### Why Ground Truth Is Hard

A detection model is only as good as its training data, and the training data here had to be drawn by hand. Two labellers, a biology professor and his assistant, outlined each plant as a polygon on the imagery. Some of the plants were so small that they were barely visible from the air, so the labellers could not do this reliably from a desk. They had to walk the sites with a tablet, compare the image with what was growing at their feet, and paint the plant exactly where it stood, often to centimetre accuracy.

Coming from a robotics background, the team first tried a conventional image labelling tool. It was not built for geospatial imagery of this size, so the mosaics had to be cut into tiles, and that made fieldwork painful.

"The labellers had to look for the right tile," Silvio says. "That's a big pain when you're in the field and you're like, 'Oh, where am I? Am I in this tile? Am I in the other tile?'"

Once the labelling was done, Silvio then had to reassemble all of the individual masks into something the model could use.

### The Solution

The team moved the labelling into QGIS and QField. Instead of a stack of tiles, the labellers now had the full orthomosaic on their tablets as a single map. Standing in front of a plant, they could find it on the image and draw a polygon around it, without hunting for the right tile.

Each polygon came with a form for the details the researchers needed, such as the plant's growth stage and whether it was flowering. The field edits synced back to the office through QFieldCloud.

"With QField I had one GeoPackage that had all my labels in it," Silvio says. "So it was pretty simple."

The attributes turned out to be as valuable as the outlines. The team flew the same sites **six times a year**, and recording the phenological stage of every plant let them work out when each species is easiest to detect. That answers a practical question for any future monitoring programme: when should the drone fly?

### The Results

- **Five of the six target species** were detected well by the trained models. Species with large leaves and distinctive structures needed fewer labels, while small plants that resemble their neighbours needed many more.
- The models still work reasonably well at **sites they were not trained on**, with only a modest drop in accuracy.
- Growth stage and flowering attributes, captured in the field, helped the team identify the **best time of year to fly** for each species.
- All labels ended up in **one GeoPackage**, instead of hundreds of tiled masks that had to be stitched back together.

### What Comes Next

NEOPHYS was funded for two and a half years by Innosuisse, the Swiss innovation agency, whose goal is to bring new technology into Swiss industry. With the research phase complete, the project partners are now in discussion with commercial partners, from construction firms to railway service companies, who could take the dataset and the technology and turn them into a service for Swiss railway operators.

The main limitation today is the cost of collecting very high resolution imagery. As drone flights become cheaper, an approach like this could let infrastructure owners monitor invasive plants across far larger areas than field crews could ever walk, built on ground truth that the field crews themselves collected.
