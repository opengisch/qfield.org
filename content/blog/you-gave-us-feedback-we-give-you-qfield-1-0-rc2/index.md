---
_edit_last: "2"
_jetpack_related_posts_cache:
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940670
    payload:
      - id: 4737
      - id: 9700
      - id: 12165
      - id: 5206
      - id: 5337
      - id: 12810
_themeisle_gutenberg_block_styles: ""
_themeisle_gutenberg_block_stylesheet: post-4939
_thumbnail_id: "4950"
_wpas_done_all: "1"
_wpcom_is_markdown: "1"
_wpml_media_duplicate: "1"
author: mbernasocchi
categories:
  - qfield
  - qgis
cover:
  alt: QField_RC3
  image: QField_RC3.png
date: "2019-01-31T06:51:35+00:00"
guid: https://opengis.ch/?p=4939
parent_post_id: null
post_id: "4939"
tags:
  - qgis.org
title: You gave us feedback - we give you QField 1.0 RC3

---
We are really happy to announce the release a new great milestone in QField's history, QField 1.0 Release Candidate 3! (Yes, you might have got a glimpse of the broken RC2 if you where very attentive)

Thanks to the great feedback we received since releasing RC1 we were able to fix plenty of issues and add some more goodies.

We would like to invite everybody to install this Release Candidate and help us test it as much as possible so that we can iron out as many bugs as possible before the final release of QField 1.0.

List of fixes since RC1:  
• fixed bad synchronization / geopackage files not written) (PR [#455](https://github.com/opengisch/QField/pull/455))  
• fix glitches in portrait mode (PR [#423](https://github.com/opengisch/QField/pull/423) and [#439](https://github.com/opengisch/QField/pull/439))  
• fix highlighting of points (search and feature selection) (PR [#443](https://github.com/opengisch/QField/pull/443))  
• fix GPS info window overlapping search icon (PR [#438](https://github.com/opengisch/QField/pull/438))  
• redesign of scale bar (PR [#438](https://github.com/opengisch/QField/pull/438))  
• fix crash in feature form (with invalid relations) (PR [#440](https://github.com/opengisch/QField/pull/440))  
• fix date/time field editing (PR [#421](https://github.com/opengisch/QField/pull/421) and [#458](https://github.com/opengisch/QField/pull/458))  
• fix project not loading the correct map theme (fix [#459](https://github.com/opengisch/QField/pull/459))  
• fix QGS or QGZ does not exist (PR [#453](https://github.com/opengisch/QField/pull/453))

Unfortunately, due to necessary updates in the SDK we target, we had to drop support for Android 4.4. **The minimum Android requirement as of this RC is Android 5.0** (SDK version 21).

In case playstore does not suggest an update to QField Lucendro 0.11.90, the last working version for Android 4.4, we suggest all Android 4.4 users to uninstall QField 1.0 RC 1 (which was broken on android 4.4) and reinstall QField from the store. This way you should get If you don't use play store, you can find all QField releases under [https://qfield.org/releases](https://qfield.org/releases)

You can easily install QField using the playstore ( [https://qfield.org/get](https://qfield.org/get)), find out more on the documentation site ( [https://qfield.org](https://qfield.org/)) and report problems to our issues tracking system ( [https://qfield.org/issues](https://qfield.org/issues))

QField, like QGIS, is an open source project. Everyone is welcome to contribute to make the product even better – whether it is with financial support, enthusiastic programming, translation and documentation work or visionary ideas.

If you want to help us build a better QField or QGIS, or need any services related to the whole QGIS stack don’t hesitate to [contact us](/contact).
