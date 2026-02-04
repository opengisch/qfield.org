---
title: "Ground Truth Data Collection Using QField for LULC Mapping in Fiji"
date: 2025-10-16T11:58:28+02:00
draft: false
author: "Kevin Davies, School of Geosciences, The University of Sydney"
description: "Communities in Fiji rely on landscape resources for agricultural and forestry-related activities. Accurate mapping
          and monitoring patterns of land use and land cover (LULC) over time at an appropriate scale is important for informing
          landscape management, policies, and climate-smart sustainable development."
image: "use_study_fiji4.jpg"
ogImage: "use_study_fiji4.jpg"
tags: []
categories: []
---

### Purpose

Communities in Fiji rely on landscape resources for agricultural and forestry-related activities. Accurate mapping and monitoring patterns of land use and land cover (LULC) over time at an appropriate scale is important for informing landscape management, policies, and climate-smart sustainable development. Fiji's Ministry of Forestry is collaboratively developing an approach with the Universities of Sydney (USYD), Western Australia (UWA) and the South Pacific (USP) to produce an inter-annual LULC map using Sentinel-2 satellite data, and freely available geospatial tools. QFIeld is being used for collecting ground truth data in the landscape for training and validation of the LULC map. 

### Workflow

– The LULC ground truth collection form was designed in QGIS.  
– A set of predefined ground truth plot locations were generated based on a stratification of satellite data within the study area.  
– The form, predefined plots, and appropriate offline background layers were packaged in QGIS and then loaded onto each of the tablets used by the field team (Figure 1).  
– A team member navigated to a predefined plot in QField and created a ground truth point at the location and labelled the point with the most appropriate pre-defined LULC class (Figure 2).  
– Data collected from all tablets was combined into one ground truth data collection in QGIS.  
– Image interpretation using the OpenForis platform will be used to increase the number of ground truth plots.  
– The final ground truth collection will be imported into Google Earth Engine to produce the LULC map and calculate the map accuracy.  

{{< figure src="use_study_fiji1.png" alt="Predefined Ground Truth Plots" caption="" >}}

_Figure 1: Predefined Ground Truth Plots_

{{< figure src="use_study_fiji2.png" alt="Capturing land cover class" caption="" >}}

_Figure 2: Capturing land cover class_

### Preliminary Results and Future Work

An example of a preliminary land cover map is shown in Figure 3. An important objective from our work is to transfer skills and build capacity with local stakeholders to continue to update the LULC map on an annual basis as well as to expand the map to include other communities, catchments and forestry areas across Fiji. This capacity building will include iterative stakeholder consultation, online training materials, field and classroom training workshops, and collaborative fieldwork. 

{{< figure src="use_study_fiji3.png" alt="Preliminary land cover map for the Ba region, Viti Levu, Fiji" caption="" >}}

_Figure 3: Preliminary land cover map for the Ba region, Viti Levu, Fiji_

### Acknowledgment

We would like to thank the field team from the Fiji Ministry of Forestry especially Viliame Tupua and Renata Varea (USP). The project was funded by the Australian Centre for International Agricultural Research (ACIAR; ASEM/2016/101). 

{{< figure src="use_study_fiji4.jpg" alt="The Fiji Forestry/USP field team" caption="" >}}

_The Fiji Forestry/USP field team is about to collect ground truth data with QField._