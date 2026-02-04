---
_edit_last: "48"
_jetpack_related_posts_cache:
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940297
    payload:
      - id: 15180
      - id: 14471
      - id: 14702
      - id: 15209
      - id: 15627
      - id: 15903
_last_editor_used_jetpack: block-editor
_thumbnail_id: "14432"
_wpas_done_all: "1"
_wpcom_is_markdown: "1"
_wpml_word_count: "806"
author: mathieuopengisch
categories:
  - gis
  - qfield
  - qfield-highlights
cover:
  alt: 33splash
  image: 33splash.png
date: "2024-06-11T04:50:00+00:00"
guid: https://www.opengis.ch/?p=14431
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "14431"
tags:
  - qfield
  - qgis.org
title: 'QField 3.3 “Darién”: It is just the beginning'

---
QField 3.3 has been released, and with it, we are proud to introduce a brand new plugin framework that empowers users to customize and add completely new functionalities to their favourite field application. That’s on top of a bunch of new features and improvements added during this development cycle. What preceded this moment was just the beginning!

## Main highlights

{{< figure src="33splash.png" alt="" caption="" >}}

One of the biggest feature additions of this version is a brand new drawing tool that allows users to sketch out important details over captured photos or annotate drawing templates. This was a highly requested feature, which we are delighted to bring to all supported platforms (Android, iOS, Windows, macOS, and, of course, Linux) with the financial support of the [Swiss QGIS user group](http://qgis.ch).

Also landing in this version is support for **copying and pasting vector features into and from the clipboard**. This comes in handy in multiple ways, from providing a quick and easy way to transfer attributes from one feature to another through matching field names to pasting the details of a captured feature in the field into a third-party messenger, word editing, or email application. Copying and pasting features can be done through the feature form’s menu as well as long pressed over the map canvas. If copy pasting ain’t your style, a new feature-to-feature attributes transfer shortcut has also been added to the feature form’s menu. Appreciation to [Switzerland, Canton of Lucerne, Environment and Energy](https://uwe.lu.ch/) for providing the funds for this feature.

{{< figure src="transfer_attributes-1.png" alt="" caption="" >}}

The feature form continues to gain more functionalities; in this version, the feature form’s value map editor widget has gained a **new toggle button interface** that can help fasten data entry. The interface replaces the traditional combo box with a series of toggle buttons, lowering the number of taps required to pick a value. If you enjoy this as much as we do, send a virtual thanks to [German Archaeological Institut - KulturGutRetter](https://www.kulturgutretter.org/en/home-2/), which sponsored this feature.

Other improvements in the feature form include support for **value relation item grouping** and respect for **the vector layer attributes’ "reuse last entered value" setting**.

{{< figure src="value_map_buttons-1.png" alt="" caption="" >}}

Finally, additional features that are sure to please include support for **image decoration overlay**, a new interface to **hop through cameras**(front, back, and external devices) for the ‘non-native’ camera **,** the possibility to **disable the 3-finger map rotation gesture**, [and much more](https://github.com/opengisch/QField/releases/tag/v3.3.0).

## **User experience improvements**

Long-time users of QField will notice the new version **restyling of the information panels such as GNSS positioning, navigation, elevation profile, and sensor data**. The information is now presented as an overlay sitting on top of the map canvas, which increases the map canvas' visibility while also achieving better focus and clarity on the provided details. While revisiting these information panels, we’ve made sure all details, including altitude and distance to destination, respect user-configured project distance unit type.

The dashboard’s legend has also received some attention. You can now **toggle the visibility of any layer via a quick tap on a new eye icon sitting in the legend tree** itself. Similarly, legend groups can be expanded and collapsed directly for the tree. This also permits you to show or hide layers while digitizing a feature, something which was not possible until now. The development of these improvements was supported by [Gispo](https://www.gispo.fi/en) and sponsored by the [National Land Survey of Finland](https://www.maanmittauslaitos.fi/en).

## **Plugin framework**

Last but far away from least, QField 3.3 introduces a brand new plugin framework using Qt’s powerful QML and JavaScript engine. With a few lines of code, plugins can be written to tweak QField’s behaviour and add breathtaking capabilities. Two types of plugins are possible: app-wide plugins as well as project-scoped plugins. To ensure maximum ease of deployment, we have enabled project plugin distribution through [QFieldCloud](https://qfield.cloud)! We extend our heartfelt thanks to [Amsa](https://www.amsa.it/en/cittadini) for the financial contribution that brought this incredible project to life.

{{< figure src="plugin_manager-1.png" alt="" caption="" >}}

Stay tuned for an upcoming webinar and a dedicated post that will dive into how QField plugins can revolutionize your field (and business) workflows by allowing you to be even more efficient in the field.

Users interested in authoring plugins or better understanding the framework can already visit the [dedicated documentation page](https://docs.qfield.org/how-to/plugins/), a [sample plugin implementation](https://github.com/opengisch/qfield-weather-forecast) sporting a weather forecast integration and our latest [blog article](/2024/06/18/supercharge-your-fieldwork-with-qfields-project-and-app-wide-plugins/).