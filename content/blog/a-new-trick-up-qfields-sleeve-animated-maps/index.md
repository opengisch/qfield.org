---
_edit_last: "2"
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759930595
    payload:
      - id: 15582
      - id: 8314
      - id: 11434
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940310
    payload:
      - id: 15582
      - id: 8314
      - id: 11434
      - id: 13401
      - id: 12165
      - id: 8305
_last_editor_used_jetpack: block-editor
_oembed_cdcc282287af9619a4d90ecb63709467: '{{unknown}}'
_oembed_ce746361873cf8b20dc2d779af7c34b4: <iframe title="QField 2.2 animated Zoo markers demo" src="https://player.vimeo.com/video/732691644?h=40f8ce63ac&amp;dnt=1&amp;app_id=122963" width="750" height="338" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
_oembed_time_ce746361873cf8b20dc2d779af7c34b4: "1674486813"
_publicize_twitter_user: '@OPENGISch'
_thumbnail_id: "13018"
_wpas_done_all: "1"
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
_wpml_word_count: '{"total":284,"to_translate":{"fr":284,"de":284,"it":284}}'
author: mathieuopengisch
categories:
  - qfield
  - qfield-highlights
  - qgis
  - uncategorised
  - video
cover:
  alt: Peek-2022-07-16-12-43
  image: Peek-2022-07-16-12-43.gif
date: "2022-08-16T04:58:00+00:00"
guid: https://www.opengis.ch/?p=13017
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "13017"
tags:
  - qgis.org
title: 'A New Trick up QField’s Sleeve: Animated Maps'

---
**Starting with QField 2.2, users can fully rely on animation capabilities that have made their way into QGIS during its last development cycle. This can be a powerful mean to highlight key elements on a map that require special user attention.**

The example below demonstrates a scenario where animated raster markers are used to highlight active fires within the visible map extent. Notice how the subtle fire animation helps draw viewers’ eyes to those important markers.

{{< figure src="Peek-2022-07-16-12-43.gif" alt="" caption="" >}}

[_Animated raster markers_ is a new symbol layer type in QGIS 3.26](https://www.qgis.org/en/site/forusers/visualchangelog326/index.html#feature-new-animated-marker-symbol-type) that was developed by [Nyall Dawson](https://north-road.com/). Supported image formats include GIF, WEBP, and APNG.

The second example below showcases more advanced animated symbology which relies on expressions to animate several symbol properties such as marker size, border width, and color opacity. While more complex than simply adding a GIF marker, the results achieved with data-defined properties animation can be very appealing and integrate perfectly with any type of project.

https://player.vimeo.com/video/732691644

You’ll quickly notice how smooth the animation runs. That is thanks to OPENGIS.ch’s own ninjas having spent time improving the map canvas element’s handling of layers constantly refreshing. This includes automatic skipping of frames on older devices so the app remains responsive.

Oh, we couldn’t help ourselves but take the opportunity to demonstrate how nice the QField feature form layout is these days in the video above ? To know more about [other new features in QField 2.2, go and read the release page](https://github.com/opengisch/QField/releases/tag/v2.2.0).

Happy field mapping to all!

_The lovely animal markers used in the zoo example above were made by Serbian artist [Arsenije Vujovic](https://www.behance.net/gallery/38312723/Animals)._
