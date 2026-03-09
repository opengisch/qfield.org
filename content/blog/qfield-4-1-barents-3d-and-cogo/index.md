---
title: 'QField 4.1 "Barents sea": dive into the 3rd dimension'
date: '2026-03-08T23:54:16+01:00'
author: 'mbernasocchi'
categories:
  - releases
  - highlights
tags:
  - qfield
  - qgis.org
cover:
  image: ice.jpg
  alt: ''
draft: true
---

QField 4.1 'Barents Sea' brings two powerful new tools to the field: an interactive 3D terrain view and a COGO framework for survey-grade point placement.

## 3D

This release brings two major new capabilities to QField. The first is an integrated 3D map view: QField now renders terrain meshes directly from your project's elevation data, whether from a local DEM or an online terrain provider, and drapes your project layers as a texture over the surface. The result is a fully interactive 3D scene where pinch, drag, and zoom let you explore the terrain, while Shift+drag and Shift+scroll let you pan and zoom the terrain extent itself, with the mesh updating in real time. GNSS position markers and a camera follow mode keep you oriented in the field. When you close the 3D view, the 2D map snaps to match the extent you were exploring, keeping your context intact.

## COGO tools

The second is a new COGO (Coordinate Geometry) framework, bringing survey-grade point placement to the field. Three operations are available out of the box: point by XY coordinates, point by distance and angle from another point, and point at the intersection of two circles. The operations are written in C++ and built on the QGIS API, so they are fast and precise. In terms of workflow, COGO integrates cleanly into the existing digitizing tools: a toggle in the digitizing drawer switches between standard cursor digitizing and COGO operation mode, and you can flip between the two on the fly. The framework is designed to be extensible, with future plugin support on the roadmap.


## QField 4.1 'Barents Sea'
The Barents Sea, a marginal sea of the Arctic Ocean bordered by Norway and Russia, is one of the most ecologically and geopolitically significant water bodies on the planet. Home to some of the world's largest cod and haddock fisheries, it sustains both marine ecosystems and the livelihoods of coastal communities across the high north. Its waters are a barometer for our changing climate: the Barents Sea is the fastest-warming part of the Arctic, making it a critical area of scientific observation and environmental monitoring, as highlighted by the [Nansen Legacy project](https://arvenetternansen.com/) ([factsheet](https://arvenetternansen.com/wp-content/uploads/2024/04/The-future-Barents-Sea-fact-sheet-AeN-2024.pdf)). 


{{< figure src="ice.jpg" alt="Sea ice in the Barents Sea" caption="Sea ice in the Barents Sea,  Peter Prokosch https://www.grida.no/resources/3636" >}}

At OPENGIS.ch, we see the Barents Sea as a powerful symbol of why field data collection matters. Understanding and protecting remote, extreme environments like the Arctic requires tools that are reliable, offline-capable, and built for real-world conditions. That is precisely what QField is designed to deliver.

With QField 4.1 'Barents Sea', we continue building on that mission, bringing new capabilities to field workers, researchers, and environmental stewards wherever their work takes them.

Happy field mapping!
