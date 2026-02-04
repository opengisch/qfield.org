---
_edit_last: "33"
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759969468
    payload:
      - id: 293
      - id: 13792
      - id: 315
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940663
    payload:
      - id: 293
      - id: 13792
      - id: 315
      - id: 13789
      - id: 15582
      - id: 1923
_last_editor_used_jetpack: block-editor
_publicize_twitter_user: '@OPENGISch'
_themeisle_gutenberg_block_styles: ""
_thumbnail_id: "11479"
_wpas_done_all: "1"
_wpas_mess: "Being able to use a WMS offline on QField can be very useful. For that, we need to figure out what is the best way to get a raster from a WMS and which format is the most efficient. \nVisit our blog to read our findings"
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
_wpml_word_count: '{"total":1097,"to_translate":{"fr":1097,"de":1097,"it":1097}}'
author: lucie
categories:
  - processing
  - qfield
  - qgis
  - scripts
cover:
  alt: Screenshot from 2020-06-08 13-00-42
  image: Screenshot-from-2020-06-08-13-00-42.png
date: "2020-06-09T05:03:00+00:00"
guid: https://www.opengis.ch/?p=11434
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "11434"
spay_email: ""
tags:
  - qgis.org
title: Offline WMS - Benchmarking raster formats for QField

---
## What are we looking for?

We would like to use WMS offline on QField. For that, we need to figure out what is the best way to get a raster from a WMS and which format is the most efficient (size and performance).

In this post we'll show you is how to generate the ideal raster file from a WMS and the results of our efficiency tests for the the different raster formats.

## WMS to GPKG

### The simple way

If there is no limitation on the WMS or you need only a small region, here is the easiest process.

1. Request the WMS and store a [description file in XML](https://gdal.org/drivers/raster/wms.html#xml-description-file):

```
gdal_translate "WMS:url" file.xml -of WMS
```

1. Create a Geopackage from the information in the description file.

```
gdal_translate -of GPKG file.xml file.gpkg -co TILE_FORMAT=JPEG
```

That was quite simple, right?

### The larger datasets way

If the command takes too much time, it means that it is trying to download too much data and could be caused by downloading higher resolution data than required.  
The command might even completely fail if it contains a request for bigger data blocks thant the server allows.

Here is the process to get larger datasets in a simple way. Let's use a real example:

1. Use `gdal_translate "WMS:https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?request=getmap&service=wms&crs=EPSG:4326&format=image/jpeg&layers=gebco_latest&version=1.1.0" test.xml -of WMS`
1. Open the test.xml file for editing, here you'll find the parameters of the WMS. We change the "SizeX" to 3600 and "SizeY" to 1800. By changing these parameters we lower the resolution. It is important to keep proportionality.
1. Another thing we need to change are "BlockSizeX" and "BlockSizeY" that define the size of the tiles. We change both to 2048.
1. Finally, use `gdal_translate -of GPKG test.xml test.gpkg -co TILE_FORMAT=JPEG`
1. To make a Geopackage pyramid use `gdaladdo GPKG:test.gpkg:gebco_latest`. It will **replace** the Geopackage, if you want to keep the original one, you need to copy it first.

Now you have a raster Geopackage that you can use in QField.

## Testing raster formats

### Preparing the files

As first step we exported our test orthophoto WMS to a plain GeoTIFF using QGIS' default behaviour.

{{< figure src="https://i1.wp.com/www.opengis.chtiff.png" alt="" caption="" >}}

Formatgdal\_translategdaladdogpkg JPEGgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_JPEG.gpkg" -co TILE\_FORMAT=JPEG
gpkg PNGgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_PNG.gpkg" -co TILE\_FORMAT=PNGgpkg PNG\_JPEGgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_PNG\_JPEG.gpkg" -co TILE\_FORMAT=PNG\_JPEGgpkg PNG8gdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_PNG8.gpkg" -co TILE\_FORMAT=PNG8gpkg WEBPgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_WEBP.gpkg" -co TILE\_FORMAT=WEBPgpkg pyramid\_JPEGgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_JPEG.gpkg" -co TILE\_FORMAT=JPEGgdaladdo GPKG:C:\\test\\test\_JPEG.gpkg:test\_gpkg\_JPEG gpkg pyramid\_PNGgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_PNG.gpkg" -co TILE\_FORMAT=PNGgdaladdo GPKG:C:\\test\\test\_PNG.gpkg:test\_gpkg\_PNGgpkg pyramid\_PNG\_JPEGgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_PNG\_JPEG.gpkg" -co TILE\_FORMAT=PNG\_JPEGgdaladdo GPKG:C:\\test\\test\_PNG\_JPEG.gpkg:test\_gpkg\_PNG\_JPEGgpkg pyramid\_PNG8gdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_PNG8.gpkg" -co TILE\_FORMAT=PNG8gdaladdo GPKG:C:\\test\\test\_PNG8.gpkg:test\_gpkg\_PNG8gpkg pyramid\_WEBPgdal\_translate -of GPKG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_WEBP.gpkg" -co TILE\_FORMAT=WEBPgdaladdo GPKG:C:\\test\\test\_WEBP.gpkg:test\_gpkg\_WEBPJPEG2000gdal\_translate -of JP2OpenJPEG "C:\\test\\ortho\_test.tif" "C:\\test\\test\_jpeg\_2000.jpg"COG DEFLATEgdal\_translate "C:\\test\\ortho\_test.tif" "C:\\test\\test\_cog.tif" -co TILED=YES -co COPY\_SRC\_OVERVIEWS=YES -co COMPRESS=DEFLATECOG\_JPEGgdal\_translate "C:\\test\\ortho\_test.tif" "C:\\test\\test\_cog\_JPEG.tif" -co TILED=YES -co COPY\_SRC\_OVERVIEWS=YES -co COMPRESS=JPEGtifIn QGIS right click on the layer > export > save as > (see the details in the picture under the table)MBTgdal\_translate -of MBTILES "C:\\test\\ortho\_test.tif" "C:\\test\\test\_mbt.mbtiles"Creation commands for all the tested formats

### Rendering test results

We have tested many formats, here is a table with the results of the size and rendering speed in QGIS and QField.  
To analyze the speed we used `qgis_bench.exe -i 10 -p "C:\test\test.qgs" >> "C:\test\test.log`.  
Qgis\_bench is a tool that renders a QGIS project a number of times to get performance measurements. The parameter -i is to define the iterations and -p is the project used which contains only the generated raster.

FormatExtent \[m\]File size \[GB\]Total\_avgTotal\_maxdevTotal\_minTotal\_stdevgpkg JPEG52'880/29'2300.4250.242255.7815.539244.984gpkg PNG52'880/29'2302.9412.002490.328152.142259.859gpkg PNG\_JPEG52'880/29'2300.4250.125256.8756.750245.172gpkg PNG852'880/29'2301.4283.875296.40612.625271.250gpkg WEBP52'880/29'2300.3330.238348.10973.534256.703gpkg pyramid\_JPEG52'880/29'2300.51.0093.4062.3970.688gpkg pyramid\_PNG52'880/29'2303.01.2083.2812.0730.688gpkg pyramid\_PNG\_JPEG52'880/29'2300.61.4914.3442.8531.016gpkg pyramid\_PNG852'880/29'2301.61.5084.3752.8670.969gpkg pyramid\_WEBP52'880/29'2300.41.3334.9063.5730.766JPEG200052'880/29'2301.113.888136.109122.2220.219COG DEFLATE52'880/29'2303.6264.427273.09425.411239.016COG\_JPEG52'880/29'2301.014.778131.172116.3941.734tif52'880/29'2306.42.3676.7344.3671.672MBT52'880/29'2304.40.4694.6414.1710Comparison of file size and rendering speed of different raster formats. "Total" columns are rendering times in \[s\]. Lower file size is more storage friendly, lower Total\_avg is more performant.

## Analysis

### File size

The Geopackage WEBP (with and without pyramid) has the best result for file size, but it is not _yet_supported by QField (from 1.6) and is only slightly smaller than the JPEG variant.

Plain GeoTiff, MBTiles, Cloud Optimized GeoTIFF (COG - DEFLATE mode) and Geopackages with PNG generate by far the largest file sizes (up to 20x larger) and are thus not recommended.

### Rendering speed

MBTiles are on average double as fast as JPEG Geopackages with pyramids which in turn are more than double as fast as GeoTIFF and 15x faster than COG.   
Geopackages without pyramids are 200 to 400 times slower.

## Conclusion

Even though MBTiles render faster than the Geopackage pyramid JPEG, they come with an almost 10x bigger storage requirement which makes us say that the best offline raster format supported by QField is **Geopackage pyramid JPEG** or if you need transparency and slightly smaller files **Geopackage pyramid WebP**.

If you need transparency before QField 1.6, the best results are achieved with Geopackage pyramid PNG\_JPEG.
