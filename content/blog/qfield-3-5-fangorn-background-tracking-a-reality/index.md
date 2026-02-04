---
_edit_last: "34"
_g_feedback_shortcode_atts_b656232b254ee3dd7f92b515e29128ee388ade43:
  block_template: null
  block_template_part: null
  className: null
  customThankyou: ""
  customThankyouHeading: Your message has been sent
  customThankyouMessage: Thank you for your submission!
  customThankyouRedirect: ""
  hiddenFields: null
  id: 15180
  jetpackCRM: true
  postToUrl: null
  salesforceData: null
  show_subject: "no"
  stepTransition: fade-slide
  subject: '[OPENGIS.ch] QField 3.5 “Fangorn”: Background tracking a reality!'
  submit_button_text: Submit
  to: mathieu@opengis.ch
  widget: 0
_g_feedback_shortcode_b656232b254ee3dd7f92b515e29128ee388ade43: |-
  [contact-field label="Name" type="name"  required="true" /]
  				[contact-field label="Email" type="email" required="true" /]
  				[contact-field label="Website" type="url" /]
  				[contact-field label="Message" type="textarea" /]
_jetpack_dont_email_post_to_subs: "1"
_jetpack_newsletter_access: ""
_jetpack_newsletter_tier_id: "0"
_jetpack_post_was_ever_published: ""
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759945136
    payload:
      - id: 13811
      - id: 15582
      - id: 14227
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940295
    payload:
      - id: 13811
      - id: 15582
      - id: 14227
      - id: 13401
      - id: 13565
      - id: 13776
_oembed_5685e13c86c0e3fe321257c4871c6692: <iframe title="VideoPress Video Player" aria-label='VideoPress Video Player' width='750' height='750' src='https://videopress.com/embed/RqiQKWXY?cover=1&amp;autoPlay=0&amp;controls=1&amp;loop=0&amp;muted=0&amp;persistVolume=1&amp;playsinline=0&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0' frameborder='0' allowfullscreen data-resize-to-parent="true" allow='clipboard-write'></iframe><script src='https://v0.wordpress.com/js/next/videopress-iframe.js?m=1739540970'></script>
_oembed_time_5685e13c86c0e3fe321257c4871c6692: "1754314262"
_themeisle_gutenberg_block_has_review: ""
_thumbnail_id: "15181"
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_post_translation_editor_native: "yes"
_wpml_word_count: "727"
author: mathieuopengisch
categories:
  - gis
  - qfield
  - qfield-highlights
cover:
  alt: splash
  image: splash.png
date: "2025-03-04T05:45:00+00:00"
enclosure: |-
  https://videos.files.wordpress.com/RqiQKWXY/qfield_tracking_demo_green.mp4
  14359169
  video/mp4
footnotes: ""
guid: https://www.opengis.ch/?p=15180
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "15180"
tags:
  - qgis.org
title: 'QField 3.5 “Fangorn”: Background tracking a reality!'

---
Let’s not bury the lead here: the long-awaited capability to track position while QField is in the background or the device is locked has arrived in this brand-new version of QField. This feels like a magical moment, so we settled for a fantastical forest for our release name.

## Main highlights

{{< figure src="splash.png" alt="" caption="" >}}

As highlighted above, QField 3.5 has unlocked **background position tracking** on the Android platform. This allows users to keep track of their positions even as they put QField in the background to conduct other tasks on their devices. It also means that tracking has become far more battery efficient, as users can lock/suspend their phones and tablets for long periods while QField continues to collect and track positions. On top of it all, this will work out of the book with internal GNSS as well as external high-precision GNSS devices.

This is a long-requested functionality for QField, and we couldn’t be prouder to deliver it to our hundreds of thousands of Android users. Big thanks to [Groupements forestiers Québec](https://www.groupementsforestiers.quebec/), [Biotope](https://www.biotope.fr/), and [Terrex Seismic,](https://www.terrexseismic.com/) who jointly sponsored the development.

Moving on to the next major feature added to this new version. Users can now easily import folders from WebDAV services and subsequently upload and download content to that remote folder within QField itself. This functionality eases friction on Android and iOS platforms where storage access is heavily regulated. This implementation highlights our commitment to providing QField users with the freedom they need to build their workflows; thanks to [Prona Romandie](https://www.prona-romandie.ch/), [AgaricIG](http://www.agaricig.com), and [Oslandia](https://oslandia.com/) for commissioning this work.

It’s important to note that the WebDAV functionality does not provide data synchronization. The download and upload operations will overwrite datasets stored locally or remotely. [For users in need of synchronization and smooth project distribution, QFieldCloud is the way to go](https://qfield.cloud/). With this new version of QField, downloading large datasets from QFieldCloud has become much more reliable, especially on devices with low memory.

Last but not least, QField has gained **support** **for project-configured grid decoration**. When activated, a grid is overlayed on top of the map canvas, which will dynamically render while panning and zooming around. The grid is configured and activated while setting up projects within QGIS itself.

{{< figure src="griddialog.png" alt="" caption="" >}}

Pro tip: this functionality can replace heavy grid datasets when covering a large dataset, something to consider when trying to optimize projects’ storage size. Big thanks to [Oester Messtechnik GmbH](https://messtechnik.ch/) for supporting the implementation of this fourth decoration following the arrival of title, copyright, and image decorations in earlier releases.

Other improvements in this release include **“forward” angle snapping** to digitize perfectly angled polygons, **pinch gesture-driven feature rotation**, and a new print template which unlocks printing of map canvas to PDF even when their projects have no layouts defined.

{{< figure src="alwayspdf.png" alt="" caption="" >}}

## **Plugin-specific improvements**


One of the main additions to QField’s plugin framework is the **capability to integrate custom results into the search bar**. Thanks to Kanton Basel-Landschaft for supporting the development, users can enjoy OpenStreetMap Nominatim search result integration by [installing this plugin](https://github.com/opengisch/qfield-nominatim-locator) (instructions available on the repository). This integration also opens up many new possibilities, such as enabling plugins to send prompts to AI, just like [this plugin](https://github.com/mbernasocchi/qfield-ask-ai) does.

Other noteworthy improvements include shipping **Quick3D QML modules, which allow authors to develop 3D overlays**, a new API to customize QField’s colour appearance and a new mechanism for plugins to add a configuration button within the plugin manager.

{{< figure src="configuration.png" alt="" caption="" >}}


Users and plugin authors can expect an exciting year ahead as the QField plugin framework continues to grow with new functionalities and improvements. Watch this space!
