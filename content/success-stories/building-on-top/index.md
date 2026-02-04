---
title: "Building on Top of QFieldCloud"
date: 2025-10-16T11:58:28+02:00
draft: false
author: "GINVE – Soluzioni per la gestione del verde pubblico"
authorTitle: "Digital services team"
authorUrl: "https://www.ginve.it/en/home-page-eng/"
description: "The main objective was to allow operators to access in the field the graphic and alphanumeric data on trees,
      shrubs, hedges, turf and street furniture elements in offline mode both in reading and editing mode with the
      return of these data in GINVE.CLOUD via a synchronisation procedure."
image: "ginve-6.jpeg"
ogImage: "ginve-6.jpeg"
tags: []
categories: []
---

### Aims and Objectives

The main objective was to allow operators to access in the field the graphic and alphanumeric data on trees, shrubs, hedges, turf and street furniture elements in offline mode both in reading and editing mode with the return of these data in GINVE.CLOUD via a synchronisation procedure. 

For this purpose, it was decided to exploit the potential offered by QField and the GeoPackage database. 

### Preliminary project activity

Initially, a procedure was set up in GINVE.CLOUD to generate a Geopackage and the corresponding QField project file from the GINVE.CLOUD platform.

{{< figure src="ginve-1.jpeg" alt="ginve" caption="" >}}

The Geopackage produced was structured to allow the management and mapping of data, supporting the insertion of point elements, lines, polygons and photos. In addition, form fields with customised attributes and value maps, value relations and check boxes were prepared in order to simplify data input by users. 

In particular, the trees layer has been prepared to allow the management of forms for the collection of the following data:   
\- Identification data   
\- Dimensional and Qualitative   
\- Notes-Other data  
\- Damage  
\- Interventions  
\- Interference

{{< figure src="ginve-2.jpeg" alt="ginve" caption="" >}}

Themes and labels were customised for each layer to make them similar to those in GINVE.CLOUD. 

In addition to customising the data fields, special procedures for displaying the base map were created. Google Maps and OpenStreetMap were used as the base map, but the structure was prepared to allow the use of other raster maps so that they can be displayed and managed in QField. 

### Data Entry

The data entry activity refers to the possibility of entering data relating to the position of the element on the map, the compilation of the element's master data sheet, with photography and planning of interventions.

The graphic data were entered using both automatic positioning via GPS and manual positioning using the positioning functions offered by QField. The alphanumeric data were entered by filling in specific survey sheets with differentiated data according to the element selected.

{{< figure src="ginve-4.jpeg" alt="ginve" caption="" >}}

The collected data was then imported and synchronised with GINVE.CLOUD through a specific procedure that allows the verification of data (even from multiple operators) and alerts the user of any problems encountered, providing details of the error in order to facilitate its correction by the operator. This procedure also allows the import of photos that have been taken byQField and their automatic storage in the Cloud.

{{< figure src="ginve-5.jpeg" alt="ginve" caption="" >}}

### Results

Graphic and alphanumeric data were exported directly from GINVE.CLOUD into QField for immediate mobile use and management by operators. QField's feature of being completely offline usable coupled with the possibility of predefined filling in of certain fields allowed data entry activities to be speeded up, reducing the possibility of human errors occurring and allowing users to be more efficient during census activities. Any conflicts with data in GINVE.CLOUD were handled during synchronisation by allowing the operator to choose and validate which data should be stored. Data imported from QFields are immediately available to all GINVE.CLOUD operators.

{{< figure src="ginve-6.jpeg" alt="larvae" caption="" >}} {{< figure src="ginve-6b.jpeg" alt="larvae" caption="" >}}

Thanks to QField, it has been possible to achieve new goals, enabling users of GINVE.CLOUD to use a high-performance and intuitive solution that provides continuity to the activities carried out in the field while guaranteeing maximum operational efficiency.

**In addition, the integration enabled us to achieve the following objectives:**  
\- Use of maps and offline data on Smartphones and Tablets  
\- Increased speed in data entry activities- Full compatibility with GINVE.CLOUD  
\- Direct import of Geopackage from GINVE.CLOUD- Portability of data in QGIS  
\- Data usable on other GIS platformsThe integration with QField represents an important step in the growth of GINVE.CLOUD and demonstrates its high readiness for interfacing with modern open source applications that make use of innovative, state-of-the-art technologies.

{{< figure src="ginve-7.jpeg" alt="larvae" caption="" >}}