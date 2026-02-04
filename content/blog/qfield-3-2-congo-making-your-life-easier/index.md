---
_edit_last: "48"
_jetpack_dont_email_post_to_subs: "1"
_jetpack_newsletter_access: ""
_jetpack_newsletter_tier_id: "0"
_jetpack_post_was_ever_published: "1"
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759930133
    payload:
      - id: 15863
      - id: 15860
      - id: 12927
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940299
    payload:
      - id: 13776
      - id: 13951
      - id: 15180
      - id: 15365
      - id: 15582
      - id: 15903
_last_editor_used_jetpack: block-editor
_themeisle_gutenberg_block_has_review: ""
_thumbnail_id: "14228"
_wp_old_date: "2024-03-27"
_wp_to_buffer_last_sent: "1712224737"
_wp_to_buffer_success: "0"
_wpas_done_all: "1"
_wpas_feature_enabled: "1"
_wpcom_is_markdown: "1"
_wpml_word_count: "676"
author: mathieuopengisch
categories:
  - gis
  - qfield
  - qfield-highlights
  - qgis
cover:
  alt: qfield32
  image: qfield32.png
date: "2024-04-04T07:58:11+00:00"
footnotes: ""
guid: https://www.opengis.ch/?p=14227
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "14227"
tags:
  - qfield
  - qfieldcloud
  - qgis.org
title: 'QField 3.2 “Congo”: Making your life easier'

---
Focused on stability and usability improvements, most users will find something to celebrate in QField 3.2

## **Main highlights**

{{< figure src="qfield32.png" alt="" caption="" >}}

This new release introduces **project-defined tracking sessions, which are automatically activated when the project is loaded**. Defined while setting up and tweaking a project on QGIS, these sessions permit the automated tracking of device positions without taking any action in QField beyond opening the project itself. This liberates field users from remembering to launch a session on app launch and lowers the knowledge required to collect such data. For more details, please read the [relevant QField documentation section](https://docs.qfield.org/how-to/tracking/#configure-a-project-tracking-session).

{{< figure src="session.png" alt="" caption="" >}}

As good as the above-described functionality sounds, it really shines through in cloud projects when paired with two other new featurs.

First, cloud projects can now automatically push accumulated changes at regular intervals. The functionality can be manually toggled for any cloud project by going to the synchronization panel in QField and activating the relevant toggle (see middle screenshot above). It can also be turned on project load by enabling automatic push when setting up the project in QGIS via the project properties dialog. When activated through this project setting, the functionality will always be activated, and the need for field users to take any action will be removed.

Pushing changes regularly is great, but it could easily have gotten in the way of blocking popups. This is why QField 3.2 can now push changes and synchronize cloud projects in the background. We still kept a ‘successfully pushed changes’ toast message to let you know the magic has happened 🚀

With all of the above, cloud projects on QField can now deliver near real-time tracking of devices in the field, all configured on one desktop machine and deployed through QFieldCloud. Thanks to [Groupements forestiers Québec](https://groupementsforestiers.quebec/) for sponsoring these enhancements.

Other noteworthy feature additions in this release include:

- A **brand new undo/redo mechanism allows users to rollback feature addition, editing, and/or deletion** at will. The redesigned QField main menu is accessible by long pressing on the top-left dashboard button.
- Support for projects' **titles and copyright map decorations as overlays** on top of the map canvas in QField allows projects to better convey attributions and additional context through informative titles.

## **Additional improvements**

{{< figure src="cloud.png" alt="" caption="" >}}

The **QFieldCloud user experience continues to be improved**. In this release, we have reworked the visual feedback provided when downloading and synchronizing projects through the addition of a progress bar as well as additional details, such as the overall size of the files being fetched. In addition, a visual indicator has been added to the dashboard and the cloud projects list to alert users to the presence of a newer project file on the cloud for projects locally available on the device.

With that said, if you haven't signed onto [QFieldCloud](https://app.qfield.cloud/) yet, try it! Psst, the community account is free 🤫

The **creation of relationship children during feature digitizing is now smoother** as we lifted the requirement to save a parent feature _before_ creating children. Users can now proceed in the order that feels most natural to them.

Finally, Android users will be happy to hear that a **significant rework of native camera, gallery, and file picker** activities has led to increased stability and much better integration with Android itself. Activities such as the gallery are now properly overlayed on top of the QField map canvas instead of showing a black screen.
