---
_edit_last: "48"
_g_feedback_shortcode_a7a6cb74c8d50bb996ac0b24d946c1987a3e7b2a: |-
  [contact-field label="Name" type="name"  required="true" /]
  				[contact-field label="Email" type="email" required="true" /]
  				[contact-field label="Website" type="url" /]
  				[contact-field label="Message" type="textarea" /]
_g_feedback_shortcode_atts_a7a6cb74c8d50bb996ac0b24d946c1987a3e7b2a:
  block_template: null
  block_template_part: null
  className: null
  customThankyou: ""
  customThankyouHeading: Your message has been sent
  customThankyouMessage: Thank you for your submission!
  customThankyouRedirect: ""
  hiddenFields: null
  id: 15063
  jetpackCRM: true
  postToUrl: null
  salesforceData: null
  show_subject: "no"
  subject: '[OPENGIS.ch] QField 3.4 “Ebo”: Geofencing and processing out of the box'
  submit_button_text: Submit
  to: mathieu@opengis.ch
  widget: 0
_jetpack_dont_email_post_to_subs: ""
_jetpack_newsletter_access: ""
_jetpack_newsletter_tier_id: "0"
_jetpack_post_was_ever_published: ""
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759904929
    payload:
      - id: 14069
      - id: 15903
      - id: 13951
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940295
    payload:
      - id: 14069
      - id: 15903
      - id: 13951
      - id: 15180
      - id: 14702
      - id: 15627
_themeisle_gutenberg_block_has_review: ""
_thumbnail_id: "15064"
_wpcom_is_markdown: "1"
_wpml_word_count: "530"
author: mathieuopengisch
categories:
  - gis
  - qfield
  - qfield-highlights
cover:
  alt: "34"
  image: 34.png
date: "2024-10-08T04:45:00+00:00"
footnotes: ""
guid: https://www.opengis.ch/?p=15063
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "15063"
tags:
  - qgis.org
title: 'QField 3.4 “Ebo”: Geofencing and processing out of the box'

---
QField 3.4 is out, and it won’t disappoint. It has tons of new features that continue to push the limits of what users can do in the field.

## Main highlights

{{< figure src="34.png" alt="" caption="" >}}


A new **geofencing framework** has landed, enabling users to configure QField behaviors in relation to geofenced areas and user positioning. Geofenced areas are defined at the project-level and shaped by polygons from a chosen vector layer. The three available geofencing behaviours in this new release are:

- Alert user when _inside_ an area polygon;
- Alert user when _outside_ all defined area polygons and
- Inform the user when entering and leaving an area polygons.

In addition to being alerted or informed, users can also prevent digitizing of features when being alerted by the first or second behaviour. The configuration of this functionality is done in QGIS using QFieldSync.

{{< figure src="geofencing_settings.png" alt="" caption="" >}}

> Pro tip: geofencing settings are embedded within projects, which means it is easy to deploy these constraints to a team of field workers through [QFieldCloud](https://qfield.cloud/). Thanks [Terrex Seismic](https://www.terrexseismic.com/) for sponsoring this functionality.

QField now offers users access to a brand new **processing toolbox containing over a dozen algorithms** **for manipulating digitized geometries** directly in the field. As with many parts of QField, this feature relies on QGIS’ core library, namely its processing framework and the numerous, well-maintained algorithms it comes with.

The algorithms exposed in QField unlock many useful functionalities for refining geometries, including orthogonalization, smoothing, buffering, rotation, affine transformation, etc. As users configure algorithms’ parameters, a grey preview of the output will be visible as an overlay on top of the map canvas.

{{< figure src="ortho_alg.png" alt="" caption="" >}}

To reach the processing toolbox in QField, select one or more features by long-pressing on them in the features list, open the 3-dot menu and click on the process selected feature(s) action. Are you excited about this one? Send your thanks to the [National Land Survey of Finland](https://www.maanmittauslaitos.fi/), who’s support made this a reality.

QField’s camera has gained support for **customized ratio and resolution of photos**, as well as the **ability to stamp details – date and time as well as location details - onto captured photos**. In fact, QField’s own camera has received so much attention in the last few releases that we have decided to make it the default one. On supported platforms, users can switch to their OS camera by disabling the native camera option found at the bottom of the QField settings’ general tab.

## Wait, there's more

There are plenty more improvements packed into this release from **project variables editing using a revamped variables editor** through to **integration of QField documentation help in the search bar** and the **ability to search cloud project lists**. Read the [full 3.4 changelog](https://github.com/opengisch/QField/releases/tag/v3.4.0) to know more, and enjoy the release!