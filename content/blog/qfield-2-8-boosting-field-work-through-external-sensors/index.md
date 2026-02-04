---
_edit_last: "2"
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759944058
    payload:
      - id: 13811
      - id: 14431
      - id: 12073
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940302
    payload:
      - id: 13811
      - id: 14431
      - id: 12073
      - id: 15180
      - id: 14069
      - id: 13401
_last_editor_used_jetpack: block-editor
_thumbnail_id: "13777"
_wpcom_is_markdown: "1"
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
_wpml_word_count: "390"
author: mathieuopengisch
categories:
  - gis
  - qfield
  - qfield-highlights
cover:
  alt: 238116107-1792bb88-9fdb-41e7-9716-7fd65f8837ce
  image: 238116107-1792bb88-9fdb-41e7-9716-7fd65f8837ce.png
date: "2023-05-30T04:00:00+00:00"
guid: https://www.opengis.ch/?p=13776
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "13776"
tags:
  - qgis.org
title: 'QField 2.8: Boosting field work through external sensors'

---
The latest version of QField is out, featuring as its main new feature sensor handling alongside the usual round of user experience and stability improvements. We simply can’t wait to see the sensor uses you will come up with!

{{< figure src="238116107-1792bb88-9fdb-41e7-9716-7fd65f8837ce.png" alt="" caption="" >}}

## **The main highlight: sensors**

QField 2.8 ships with **out-of-the-box handling of external sensor streams** over TCP, UDP, and serial port. The functionality allows for data captured through instruments – such as geiger counter, decibel sensor, CO detector, etc. - to be visualized and manipulated within QField itself.

Things get really interesting when sensor data is utilized as default values alongside positioning during the digitizing of features. You are always one tap away from adding a point locked onto your current position with spatially paired sensor readings saved as point attribute(s).

Not wowed yet? Try pairing sensor readings with QField’s tracking capability! ;) Head over [QField’s documentation on this](https://docs.qfield.org/how-to/sensors/) as well as [QGIS' section on sensor management](https://docs.qgis.org/testing/en/docs/user_manual/introduction/qgis_configuration.html#sensors-properties) to know more.

The development of this feature involved the addition of a sensor framework in upstream QGIS which will be available by the end of this coming June as part of the 3.32 release. This is a great example of the synergy between QField and its big brother QGIS, whereas development of new functionality often benefits the broader QGIS community. Big thanks to [Sevenson Environmental Services](https://sevenson.com/) for sponsoring this exciting capability.

## **Notable improvements**

A couple of refinements during this development cycle are worth mentioning. If you ever wished for QField to **directly open a selected project or reloading the last session on app launch**, you’ll be happy to know this is now possible.

For heavy users of value relations in their feature forms, QField is now a tiny bit more clever when displaying string searches against long lists, placing hits that begin with the matched string first as well as visually highlighting matches within the result list itself.

Finally, feature lists throughout QField are now sorted. By default, it will sort by the display field or expression defined for each vector layer, unless an advanced sorting has been defined in a given vector layer’s attribute table. It makes browsing through lists feel that much more natural.