---
_edit_last: "2"
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759975924
    payload:
      - id: 4939
      - id: 4737
      - id: 9700
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940669
    payload:
      - id: 4939
      - id: 4737
      - id: 9700
      - id: 12165
      - id: 5337
      - id: 1923
_oembed_0076a2dc8b6c90a809c35fb7328f128b: <iframe title="QField 1.0 RC5 file manager and zoom to features" src="https://player.vimeo.com/video/323697787?dnt=1&app_id=122963" width="664" height="325" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
_oembed_5894a6d77df4987d5eea430b0da246bc: <iframe title="QField 1.0 RC5 file manager and zoom to features" src="https://player.vimeo.com/video/323697787?dnt=1&amp;app_id=122963" width="750" height="367" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
_oembed_time_0076a2dc8b6c90a809c35fb7328f128b: "1566332856"
_oembed_time_5894a6d77df4987d5eea430b0da246bc: "1588003227"
_publicize_twitter_user: '@OPENGISch'
_themeisle_gutenberg_block_styles: ""
_themeisle_gutenberg_block_stylesheet: post-5206
_thumbnail_id: "5254"
_wpas_done_all: "1"
_wpas_skip_9422747: "1"
_wpcom_is_markdown: "1"
_wpml_media_duplicate: "1"
author: mbernasocchi
categories:
  - android
  - android-qgis
  - featured
  - gis
  - qfield
cover:
  alt: QField_RC5
  image: QField_RC5.png
date: "2019-03-14T11:50:16+00:00"
guid: https://opengis.ch/?p=5206
parent_post_id: null
post_id: "5206"
tags:
  - qgis.org
title: QField RC5 - Last call for testing

---
We are really happy to announce the fifth and (hopefully) last 1.0 release candidate in QField's history! This means that QField 1.0 is closer than ever.

Get it while it's hot on the Playstore ( [https://qfield.org/get](https://qfield.org/get)) or on [GitHub](https://github.com/opengisch/QField/releases)

Thanks to all the feedback by the fantastic community we were able to fix plenty of bugs, address performance issues and even add some super cool new features.

{{< figure src="https://i2.wp.com/new.opengis.chfileselector.jpg" alt="" caption="" >}}

Among the new features, the most important is the flashy new file selector with favorite directories (long press on a folder to add it to the favorites and longpress on the favorites list to remove it) and an automatic list of the last three opened projects that will save you heaps of time while looking for your projects.

Another lifesaver is the newly added support for pasting text from the clipboard in the search bar. Finally, we added a smart and unobtrusive "rate this app" dialog to make it easier for you to give QField the ★★★★★ you always wanted to give it :)

{{< figure src="https://i0.wp.com/new.opengis.chScreenshot%5F20190313-030202%5FQField.jpg" alt="" caption="" >}}

https://vimeo.com/323697787

List of improvements since RC3

- New Custom file selector ( [#476](https://github.com/opengisch/QField/pull/476))
- Favorite directories in file selector ( [#507](https://github.com/opengisch/QField/pull/507))
- Recent projects in file selector ( [#499](https://github.com/opengisch/QField/pull/499))
- Ripple effect in file selector ( [#505](https://github.com/opengisch/QField/pull/505))
- Smart unobtrusive "rate this app" dialog ( [#510](https://github.com/opengisch/QField/pull/510))
- clear value in date/time if invalid when losing focus ( [#464](https://github.com/opengisch/QField/pull/464))
- fix crash when switching layer ( [#498](https://github.com/opengisch/QField/pull/498))
- Respect DPI in multiline fontsize
- Value Map compatibility with QGIS 2 and lazy loading for performance improvements
- Use external valuemap model
- allow to copy text from clipboard in search bar
- respect keep scale option in locator
- optimize scale when searching points ( [#472](https://github.com/opengisch/QField/pull/472))
- add frame to search results
- Update to Qt 5.12.1 (for android 6+)

You can easily install QField using the Playstore ( [https://qfield.org/get](https://qfield.org/get)), find out more on the documentation site ( [https://qfield.org](https://qfield.org/)), watch some demo videos on our channel ( [https://qfield.org/demo](https://qfield.org/demo)) and report problems to our issues tracking system ( [https://qfield.org/issues](https://qfield.org/issues)). Please note that the Playstore update can take some hours to roll out and if you had installed a version directly from [GitHub](https://github.com/opengisch/QField/releases), you might have to uninstall it to get the latest playstore update.

QField, like QGIS, is an open source project. Everyone is welcome to contribute making the product even better – whether it is with financial support, [enthusiastic programming](https://github.com/opengisch/QField), [translation](https://www.transifex.com/opengisch/qfield-for-qgis/) and [documentation work](https://www.qfield.org/docs/index.html) or [visionary ideas](https://github.com/opengisch/QField/issues).

If you want to help us build a better QField or QGIS, or need any services related to the whole QGIS stack don’t hesitate to [contact us](/contact).
