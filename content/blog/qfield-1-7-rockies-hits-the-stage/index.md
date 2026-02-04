---
_edit_last: "2"
_jetpack_related_posts_cache:
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940662
    payload:
      - id: 14471
      - id: 11573
      - id: 14431
      - id: 13951
      - id: 12363
      - id: 8308
_last_editor_used_jetpack: block-editor
_publicize_twitter_user: '@OPENGISch'
_themeisle_gutenberg_block_styles: ""
_thumbnail_id: "11864"
_wp_old_date: "2020-10-19"
_wpas_done_all: "1"
_wpas_is_tweetstorm: ""
_wpas_mess: QField 1.7 Rockies hits the the stage! Be ready for the cold weather with a smooth coordinate search, filters in the value relation widget, fancy new QML and HTML widgets, enhanced geometry editing functionalities and an expandable legend.
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
_wpml_word_count: '{"total":851,"to_translate":{"fr":851,"de":851,"it":851}}'
author: signedav
categories:
  - android-qgis
  - featured
  - gis
  - qfield
  - qfield-highlights
cover:
  alt: qml_land_trans
  image: qml_land_trans.png
date: "2020-10-20T07:26:08+00:00"
guid: https://www.opengis.ch/?p=11735
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "11735"
spay_email: ""
tags:
  - qgis.org
title: QField 1.7 Rockies hits the stage

---
**Be ready for the cold weather with a smooth coordinate search, filters in the value relation widget, fancy new QML and HTML widgets, enhanced geometry editing functionalities and an expandable legend. Right when Autumn starts, QField 1.7 Rockies hits the stage.**

As usual get it now on the [play store](https://play.google.com/store/apps/details?id=ch.opengis.qfield) or on [github](https://github.com/opengisch/QField/releases)!

The days are getting shorter and the wind blows colder. It's always good to be in a good company outside while getting your mapping work done. QField will be your reliable companion.

We know, QField 1.6 Qinling has only been out two months and with its amount of new features and stability improvements, it would have deserved a longer primetime. But we just couldn't withhold you all the new great stuff we've been building lately.

So let's welcome QField 1.7 Rockies. And yes, we mean THE [Rockies](https://en.wikipedia.org/wiki/Rocky_Mountains), where QField is looking for plenty of new buddies.

Let's have a look.

## Merging features

Splitting of a feature has been possible for quite some time. Now the merging of features of multipolygon-layer is possible as well. Select them and merge them - easy like that. The first selected feature gets the new geometry and keeps its attributes.

{{< figure src="mergesmall-3.png" alt="" caption="" >}}

## Filters in the Value Relation Widget

The value relation widgets provide an easy selection of a related feature. Often it's used for lookup tables but sometimes the related tables contain a lot of entries and the list of the possible values is long.

Using filters in the value relation drop-down can increase the efficiency in selecting the correct value. It can be configured by expressions in QGIS, so it's possible to have the content of the drop down depend on the values entered previously in other fields.

{{< figure src="filtervaluerelation_trans.png" alt="" caption="" >}}

In the screenshot above there is a Map Value Widget with "forest" and "meadow" as values. On selecting "forest", only the trees appear in the Field "Plant Species". On selecting "meadow" there would be listed flowers instead.

## Go to coordinates in the Search

The search has not only been improved in its appearance, but it's handling is much more comfortable with a button to clear the text and easy opening and closing.

Additionally, we added the possibility to jump to coordinates. Searching a place you know the coordinates of is now super simple. And this means that digitizing that precise geometry with known coordinates is finally possible.

{{< figure src="https://user-images.githubusercontent.com/28384354/91524953-c144ba00-e900-11ea-97db-8f8b5a7f32a3.jpg" alt="coordinates" caption="coordinates" >}}

## QML and HTML Widget

You might remember when we introduced the [QML widget in QGIS](/de/2018/11/06/qml-widgets-qgis/). Now it's in QField as well. And it's not alone. HTML widgets are supported too.

This provides a lot of possibilities to display information with texts, images and charts and it even allows you interaction.  
Do you need help setting up complex forms? Don't hesitate to [get in touch with us](/qgis-support/)!


{{< gallery cols="2" >}}  
{{< figure src="https://user-images.githubusercontent.com/28384354/91524902-ad00bd00-e900-11ea-86e2-c44af84bb04a.png" alt="qml" caption="qml" >}}  
{{< figure src="html-1.png" alt="" caption="" >}}  
{{< /gallery >}}  

##   
Expandable legend icons

The legend items are now expandable and collapsible.

Wait a minute... Wasn't this possible before? Yes. It was possible in earlier versions. But why it's announced here as a new feature?

Because now it is built in a future proof manner thanks to all the people and organisations who care for QField and bought [a support contract with the sustainability initiative](/qgis-support/) or committed to a [recurring sponsorship](https://github.com/sponsors/opengisch).

Some technical background: As you may be aware QField uses QGIS under the hood and QGIS uses Qt under the hood. Qt is currently used in version 5. Qt 5 is not that young any more and has a lot of functionality which is no longer supported by Qt. The old legend was based on the tree view, a deprecated module. Using it had some implications like the suboptimal support of HiDPI. Furthermore, these deprecated modules will disappear in the soon-to-come Qt 6.

As you can see, keeping QField at the quality we and you expect requires a lot of maintenance work. It is of utmost importance and only possible thanks to sponsoring since paying for fixing already existing features is less attractive for most people.

## What will the future bring

In the last weeks, we have been highly busy on coding, testing and promoting [QFieldCloud](https://qfield.cloud/) and we are very happy to be able to announce it very soon. So be prepared.

Also, keep an eye on the [@QFieldForQgis](https://twitter.com/qfieldforqgis) and [@QFieldCloud](https://twitter.com/qfieldcloud) twitter accounts to stay updated.

## Open Source

QField is an open source project. This means that whatever is produced is available free of charge. To anyone. Forever. This also means that everyone has the chance to contribute. You can write code, but you don't need to. You can also help [translating the app to your language](https://www.transifex.com/opengisch/qfield-for-qgis/dashboard/) or help out [writing documentation or case studies](https://github.com/opengisch/QField-docs) or by sponsoring a new feature.

## And now...

... enjoy QField 1.7 Rockies and have a nice autumn!
