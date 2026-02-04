---
_edit_last: "2"
_g_feedback_shortcode_aa689fb11abd598e5bf63b523eec9a86cca7e0d4: |-
  [contact-field label="Name" type="name"  required="true" /]
  				[contact-field label="Email" type="email" required="true" /]
  				[contact-field label="Website" type="url" /]
  				[contact-field label="Message" type="textarea" /]
_g_feedback_shortcode_atts_aa689fb11abd598e5bf63b523eec9a86cca7e0d4:
  block_template: null
  block_template_part: null
  className: null
  customThankyou: ""
  customThankyouHeading: Your message has been sent
  customThankyouMessage: Thank you for your submission!
  customThankyouRedirect: ""
  hiddenFields: null
  id: 15627
  jetpackCRM: true
  postToUrl: null
  salesforceData: null
  show_subject: "no"
  stepTransition: fade-slide
  subject: '[OPENGIS.ch] XLSForm Converter: unlock a world of surveys with our brand new QGIS plugin'
  submit_button_text: Submit
  to: mathieu@opengis.ch
  widget: 0
_jetpack_dont_email_post_to_subs: "1"
_jetpack_newsletter_access: ""
_jetpack_newsletter_tier_id: "0"
_jetpack_post_was_ever_published: ""
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759963610
    payload:
      - id: 15582
      - id: 14471
      - id: 15365
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940293
    payload:
      - id: 15582
      - id: 14471
      - id: 15365
      - id: 15655
      - id: 14431
      - id: 15740
_themeisle_gutenberg_block_has_review: ""
_thumbnail_id: "15629"
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_word_count: "696"
author: mathieuopengisch
categories:
  - processing
  - qfield
  - qgis-plugins
cover:
  alt: xlsformconverter-qgis-qfield
  image: xlsformconverter-qgis-qfield.webp
date: "2025-06-02T04:57:00+00:00"
footnotes: ""
guid: https://www.opengis.ch/?p=15627
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "15627"
tags:
  - qgis.org
title: 'XLSForm Converter: unlock a world of surveys with our brand new QGIS plugin'

---
Today marks the initial release of our brand-new QGIS plugin, _XLSForm Converter_.  
As the name suggests, the plugin converts XLSForm survey files into ready-to-use QGIS projects with a preconfigured survey attribute form.

Migrating to QField was never easier!  

{{< figure src="xlsformconverter-qgis-qfield-1.webp" alt="" caption="" >}}

Even more exciting is that the converted QGIS project includes all the necessary settings for use with QField, thanks to a nifty QFieldCloud integration. With just a single checkbox, you can upload your generated project to the cloud and begin gathering data—either as a standalone surveyor or collaboratively as part of a team.

We believe this provides a fantastic solution for organisations and groups familiar with XLSForm—or already working with templates—who want to leverage QGIS-powered QField to conduct spatial surveys.

## Plugin highlights

The plugin adds an algorithm to QGIS’ processing toolbox that converts a XLSForm file – Microsoft Excel’s .xls or .xlsx as well as LibreOffice Calc’s .ods – into a QGIS project containing a main survey layer and a basemap.

{{< figure src="xlsformconverter-algorithm-screenshot.webp" alt="" caption="" >}}

The layer’s geometry type will reflect the first geometry-driven question type found in the XLSForm, namely a point geometry for geopoint, a line geometry for geotrace, or a polygon geometry for geoshape.

For XLSForm _repeat_ blocks, the algorithm generates additional layers and configures parent-child relationships to bind them to the main survey layer. These layers are hidden from the layer tree by default, keeping the project simple and user-friendly—even for users unfamiliar with QGIS.

For questions that capture media content—such as photographs, videos, and audio clips—the converter sets up the project so users can easily record them in QField with a single tap.

_Pro tip: Since the converter is an algorithm, you can use it to build complex, model-driven survey projects via the QGIS Processing Modeler. You can also run conversions in headless environments using `qgis_process`. The possibilities are endless!_

## QFieldCloud-facilitated deployment to QField

As mentioned earlier, the converted project can immediately be used in QField to conduct surveying. The best way to deploy these projects to your QField-running devices is via [QFieldCloud](https://qfield.cloud/). The algorithm comes with a parameter that – when checked – will automatically upload the generated project to QFieldCloud.

That functionality requires the QFieldSync plugin to be installed and enabled in QGIS. Just log in to your QFieldCloud account via QFieldSync, and let the algorithm take care of the rest. It’s magical! If you haven’t yet tried QFieldCloud, this might be [a good time to do so by signing up for a free community account](https://qfield.cloud/).

Of course, you’ll always be able to copy these projects manually onto devices via USB cable or the numerous file import options available in QField.

## XLSForm-what?

[XLSForm](https://xlsform.org/) is a form standard designed to simplify the authoring of forms using spreadsheet programs like LibreOffice Calc or Microsoft Excel. They are simple to get started with and allow for the authoring of complex forms in no time. The syntax is beginner-friendly, and the building of surveys by adding rows onto a spreadsheet is surprisingly intuitive.

The standard has been widely adopted across various sectors, including public health, humanitarian relief, disaster response, local governance, and non-profit organisations.

Over here at OPENGIS.ch, we believe this plugin can be instrumental to preexisting operations and projects interested in migrating to a QField surveying environment where spatial considerations are front and center. If you are interested in discussing this further, [do not hesitate to contact us](/#contact).
