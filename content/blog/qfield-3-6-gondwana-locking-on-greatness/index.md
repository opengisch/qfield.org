---
_edit_last: "48"
_g_feedback_shortcode_atts_b5363fff153859ac071a24bb3debb5f543eb7fdf:
  block_template: null
  block_template_part: null
  className: null
  customThankyou: ""
  customThankyouHeading: Your message has been sent
  customThankyouMessage: Thank you for your submission!
  customThankyouRedirect: ""
  hiddenFields: null
  id: 15582
  jetpackCRM: true
  postToUrl: null
  salesforceData: null
  show_subject: "no"
  stepTransition: fade-slide
  subject: '[OPENGIS.ch] QField 3.6 “Gondwana”: Locking on greatness'
  submit_button_text: Submit
  to: mathieu@opengis.ch
  widget: 0
_g_feedback_shortcode_b5363fff153859ac071a24bb3debb5f543eb7fdf: |-
  [contact-field label="Name" type="name"  required="true" /]
  				[contact-field label="Email" type="email" required="true" /]
  				[contact-field label="Website" type="url" /]
  				[contact-field label="Message" type="textarea" /]
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759909485
    payload:
      - id: 15903
      - id: 13401
      - id: 13686
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940293
    payload:
      - id: 15903
      - id: 13401
      - id: 13686
      - id: 13951
      - id: 15180
      - id: 14227
_oembed_933665d7bfa86efd2d6960dc87a47db9: <iframe title="VideoPress Video Player" aria-label='VideoPress Video Player' width='750' height='336' src='https://videopress.com/embed/835FvGGZ?cover=1&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0' frameborder='0' allowfullscreen data-resize-to-parent="true" allow='clipboard-write'></iframe><script src='https://v0.wordpress.com/js/next/videopress-iframe.js?m=1739540970'></script>
_oembed_e8b6cb7d987c55af119418bf2c79b50e: <iframe title="VideoPress Video Player" aria-label='VideoPress Video Player' width='750' height='338' src='https://videopress.com/embed/kJg69l49?cover=1&amp;preloadContent=metadata&amp;useAverageColor=1&amp;hd=0' frameborder='0' allowfullscreen data-resize-to-parent="true" allow='clipboard-write'></iframe><script src='https://v0.wordpress.com/js/next/videopress-iframe.js?m=1739540970'></script>
_oembed_time_933665d7bfa86efd2d6960dc87a47db9: "1748165681"
_oembed_time_e8b6cb7d987c55af119418bf2c79b50e: "1754297088"
_thumbnail_id: "15583"
_wp_old_date: "2025-05-25"
_wpcom_is_markdown: "1"
_wpml_word_count: "782"
author: mathieuopengisch
categories:
  - qfield
  - qfield-highlights
  - qgis
cover:
  alt: splash
  image: splash.png
date: "2025-06-03T07:46:38+00:00"
guid: https://www.opengis.ch/?p=15582
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "15582"
tags:
  - qfield
  - qgis.org
title: 'QField 3.6 “Gondwana”: Locking on greatness'

---
Building on top of the last release which introduced background tracking, this development cycle focused on polishing functionalities and building on top of preexisting features. The variety of improvements is sure to make our diverse user base and community excited to upgrade to QField 3.6.

## Main highlights

{{< figure src="splash.png" alt="" caption="" >}}

One of the most noticeable improvement in this version is the addition of “map preview rendering”. **QField now renders partial map content immediately beyond the edge of the screen**, offering a much nicer experience when panning around as well as zooming in and out. Long-time QGIS users will recognise the behaviour, and we’re delighted to bring this experience to the field

This upgrade was the foundation upon which we built the following enhancement: as of QField 3.6, **using the “lock to position” mode now keeps your position at the very center of the screen while the canvas slips through smoothly**. This greatly improves the usability of the function as your eyes never need to spend time locating the position within the screen: it’s dead center and it stays there!

https://videopress.com/v/kJg69l49?resizeToParent=true&cover=true&preloadContent=metadata&useAverageColor=true

_Reminder, the “lock to position” mode is activated by clicking on the bottom-right positioning button, with the button’s background turning blue when the mode is activated._

The improvements did not stop there. Panning and zooming around used to drop users out of the lock mode immediately. While this had its upsides, it also meant that simple scale adjustments to try and view more of the map as it follows the position was not possible. With QField 3.6, **the lock has been hardened. Moving the map around will temporarily disable the lock, with a visual countdown embedded within a toast message informs users of when the lock will return**. An action button to terminate the lock is located within the toaster to permanently leave the mode.

Moving on to QFieldCloud, this cycle saw tons of improvements. To begin with, **it is now possible to rely on shared datasets across multiple cloud projects**. Known as localised data paths in QGIS, this functionality enables users to reduce storage usage by storing large datasets in QFieldCloud only once, serving multiple cloud projects, and also easing the maintenance of read-only datasets that require regular updates.

{{< figure src="upload_shared_datasets.webp" alt="" caption="" >}}

_QFieldSync users will see a new checkbox when synchronising their projects, letting them upload shared datasets onto QFieldCloud._

Furthermore, **QField has** **introduced a new cloud project details view to provide additional details** on QFieldCloud-hosted projects before downloading them to devices. The new view includes a cloud project thumbnail, more space for richer description text, including interactive hyperlinks, and author details, as well as creation and data update timestamps. Finally, the view offers a QR code, which allows users to scan it quickly and access cloud projects, provided they have the necessary access permission. Distributing a public project has never been easier!

Beyond that, tons more has made its way into QField, including **map layer notes viewable through a legend badge** in the side dashboard, **support for feature identification on online raster layers** on compatible WMS and ArcGIS REST servers, **atlas printing of a relationship’s child feature** directly within the parent feature form, and much more. There’s something for everybody out there.

## Focus on feature form polishing

This new version of QField coincides with the release of **[XLSForm Converter](/2025/06/02/xlsform-converter-unlock-a-world-of-surveys-with-our-brand-new-qgis-plugin/)**, a new QGIS plugin created by OPENGIS.ch’s very own ninjas. As its title implies, the plugin converts an [XLSForm spreadsheet file (.xls, .xlsx, .ods)](https://xlsform.org/en/) into a full-fledged QGIS project ready to be used in QField with a pre-configured survey layer matching the content of the provided XLSForm.

This was a golden opportunity to focus on polishing QField’s feature form. As a result, advanced functionalities such as **data-driven editable flag and label attribute properties are now supported**. In addition, tons of paper-cut bugs, visual inconsistencies, and UX shortcomings have been addressed. Our favourite one might just be the ability to drag the feature addition drawer’s header up and down to toggle its full-screen state :)
