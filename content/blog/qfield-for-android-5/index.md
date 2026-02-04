---
_edit_last: "2"
_fa_slide_settings: ""
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759909678
    payload:
      - id: 1700
      - id: 12165
      - id: 4939
_publicize_facebook_user: https://www.facebook.com/743441857
_publicize_twitter_user: '@mbernasocchi'
_thumbnail_id: "1932"
_wpas_done_all: "1"
_wpas_skip_3653108: "1"
_wpas_skip_4401126: "1"
_wpas_skip_9422747: "1"
_wpas_skip_10122977: "1"
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
author: mbernasocchi
categories:
  - android-qgis
  - featured
  - qfield
date: "2015-12-01T13:44:53+00:00"
guid: https://www.opengis.ch/?p=1923
parent_post_id: null
post_id: "1923"
tags:
  - qgis.org
title: QField for Android 5

---
{{< figure align="alignnone" width=129 src="https://developer.android.com/images/brand/en%5Fapp%5Frgb%5Fwo%5F45.png" alt="QField app on Google Play" caption="QField app on Google Play" >}}
{{< figure align="alignnone" width=129 src="https://developer.android.com/images/brand/en%5Fapp%5Frgb%5Fwo%5F45.png" alt="QField Karma edition app on Google Play" caption="QField Karma edition app on Google Play" >}}

It's done, finally we managed to get rid of Ministro so that we finally can say, QField runs on any android from 4.0.3 (ICS). This makes as of today (according to [google](https://developer.android.com/about/dashboards/index.html)) 96% of the android installations worldwide. Eventually we want to settle to 4.3 (JB) as minimum to allow us using certain features and avoiding [one known issue](https://github.com/opengisch/QField/issues/6), but for now it would mean cutting of another 25% of the users.
**So as of today it is: 4.0.3 (Ice cream sandwich API 15) is the required minimal Android version to run QField and Android 4.3 (Jelly Bean API 18) is the suggested minimal version.**
We tested with 4.4, 5.0.1 and 5.1 but we haven't had the chance to get our hands on an Android 6 so if you can, let us know how it works.
But adding support for android 5 isn't the only great news, during the process we also:

- Reintroduced WMS support
- Removed ministro dependency. All libs are now bundled so that the installation is as simple as possible
- Drastically reduced total download size from 300MB+ to 36MB
- Updated libs to QGIS 2.13 (https://github.com/qgis/QGIS/commit/6b3eddd)

We would like to thank to the City of Vevey and the QGIS hack fest Gran Canaria for supporting the development of this critical feature.
QField is an Open Source project led by OPENGIS.ch LLC, more [information](/android-gis/qfield/), the [source code](https://qfield.opengis.ch/repo) and a possibility to donate to the project can be found on the [QField page](/android-gis/qfield/) (preferred) or by buying the QField for [QGIS Karma edition app](https://qfield.opengis.ch/karma).
Also if you need a specific feature, [contact us](/contact/) to sponsor its development.
