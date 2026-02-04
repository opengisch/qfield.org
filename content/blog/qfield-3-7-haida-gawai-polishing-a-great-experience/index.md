---
_edit_last: "48"
_g_feedback_shortcode_atts_c2259f7980e8a05015e9d2005101bd0805de89dc:
  block_template: null
  block_template_part: null
  className: null
  customThankyou: ""
  customThankyouHeading: Your message has been sent
  customThankyouMessage: Thank you for your submission!
  customThankyouRedirect: ""
  hiddenFields: null
  id: 15903
  jetpackCRM: true
  postToUrl: null
  salesforceData: null
  show_subject: "no"
  stepTransition: fade-slide
  subject: '[OPENGIS.ch] QField 3.7 “Haida Gawai”: Polishing a great experience'
  submit_button_text: Submit
  to: mathieu@opengis.ch
  widget: 0
_g_feedback_shortcode_c2259f7980e8a05015e9d2005101bd0805de89dc: |-
  [contact-field label="Name" type="name"  required="true" /]
  				[contact-field label="Email" type="email" required="true" /]
  				[contact-field label="Website" type="url" /]
  				[contact-field label="Message" type="textarea" /]
_jetpack_dont_email_post_to_subs: ""
_jetpack_newsletter_access: ""
_jetpack_newsletter_tier_id: "0"
_jetpack_post_was_ever_published: ""
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759949672
    payload:
      - id: 15582
      - id: 13565
      - id: 13686
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940160
    payload:
      - id: 15582
      - id: 13565
      - id: 13686
      - id: 14069
      - id: 13401
      - id: 13951
_themeisle_gutenberg_block_has_review: ""
_thumbnail_id: "15904"
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_post_translation_editor_native: "yes"
_wpml_word_count: "745"
author: mathieuopengisch
categories:
  - qfield
cover:
  alt: splash
  image: splash.webp
date: "2025-08-04T08:41:52+00:00"
footnotes: ""
guid: https://www.opengis.ch/?p=15903
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "15903"
tags:
  - qgis.org
title: 'QField 3.7 “Haida Gwaii”: Polishing a great experience'

---
For QField 3.7, we opted for a shorter development cycle that focused on polishing preexisting functionalities from feature form editor widgets improvement through to better nearby Bluetooth device discovery. Of course, we couldn’t help ourselves and still packed in some nice functionality that we thought deserved to reach QField’s growing community as soon as possible.

## Main highlights

{{< figure src="splash.webp" alt="" caption="" >}}

One of the most interesting new functionalities from this development cycle has been the ability to stamp details on photos taken by QField’s in-app camera. A basic version of this has been supported for a while now; this new version offers flexible customisation of details stamping onto photos, including changing the font size, colour, and horizontal position, as well as providing users with the ability to completely change the details via expression-driven templates and add image overlays onto the photo.

The custom details stamping configuration lives within project files, allowing for individual projects to drive styling and details. The configuration interface is provided by QFieldSync and can be found in the project properties dialog by switching to the QField panel when setting up projects in QGIS:

{{< figure src="image_stamping.webp" alt="" caption="" >}}

The other significant addition in this release is **the new plugin manager’s Available Plugins tab, which offers a curated list of plugins** that can easily be installed with a single tap. The list makes it much easier to discover plugin-delivered functionalities such as online routing, geocoding searches, and much more.

The plugin manager can also **alert users of available updates for their installed plugins, ensuring that crucial bug fixes and improvements are easily delivered**. When a new version is released, users can update via a single tap. We are looking into the possibility of enabling automated plugin upgrades soon.

Long-time users of QField are probably aware of a nifty feature that allowed individual project layers to be locked, and for that lock to be driven by a data-defined property expression. For this new version, we’ve supercharged the layer lock functionality by breaking it down into four distinct vector layer permissions that can be disabled: i) feature addition, ii) attribute editing, iii) geometry editing, and iv) feature deletion. These permissions can be disabled by activating a checkbox or conditionality turned on via a data-defined property expression.

{{< figure src="layer_permissions.webp" alt="" caption="" >}}

The disabling of permissions using a data-defined property expression allows for interesting scenarios when paired with QField-driven expression context variables such as the user name of a logged-in QFieldCloud account (@cloud\_username), GNSS positioning (@gnss\_coordinate) and more. Users can easily restrict permissions based on the user interacting with a cloud project, or form advanced geofencing-like rules based on location, time of the day, etc. For more details on available variables, [read this page on QField's growing documentation site](https://docs.qfield.org/reference/expression_variables/).

## Improvements all around

As mentioned above, this version focused on polishing preexisting functionality. Noteworthy improvements include:

- support for **multiple column display** as well as the **ability to filter value relation lists**;
- support for **reversing the sorting order of the relationship editor’s children lists**;
- **smoother scanning process to discover nearby Bluetooth devices** when adding external GNSS devices; and
- support for **feature identification against vector tile layers** (give that a try with the new OpenStreetMap shortbread vector tiles!).

Finally, life for QFieldCloud users has improved with the **support for resuming large fi**le downloads when fetching a cloud project, eliminating the need to restart from scratch after an interruption due to poor connectivity. In addition, users will notice a new notification badge on the top-left main menu button, indicating that a cloud project has pending changes ready to be pushed to the server.

We hope you enjoy this new version as much as we do delivering it to you. Happy field mapping!
