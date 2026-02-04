---
_dp_original: "12905"
_edit_last: "3"
_jetpack_related_posts_cache:
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940309
    payload:
      - id: 15655
      - id: 12905
      - id: 6541
      - id: 735
      - id: 14553
      - id: 850
_last_editor_used_jetpack: block-editor
_publicize_twitter_user: '@OPENGISch'
_themeisle_gutenberg_block_has_review: ""
_themeisle_gutenberg_block_styles: ""
_thumbnail_id: "13138"
_wpas_done_all: "1"
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
_wpml_post_translation_editor_native: "yes"
_wpml_word_count: '{"total":876,"to_translate":{"fr":876,"de":876,"it":876}}'
author: fabian
categories:
  - events
  - qfield
  - qgis
cover:
  alt: WhatsApp-Image-2022-08-22-at-13.40.29
  image: WhatsApp-Image-2022-08-22-at-13.40.29.jpeg
date: "2022-09-08T05:00:00+00:00"
guid: https://www.opengis.ch/?p=13134
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "13134"
spay_email: ""
tags:
  - qgis.org
title: 24th Contributors QGIS Meeting in Firenze 2022

---
The international community of QGIS contributors got together in person from 18 to 22 August in parallel to [OpenStreetMap State of The Map](https://2022.stateofthemap.org/) event and right before the [FOSS4G](https://2022.foss4g.org/). So there was a lot of **open source geo power** concentrated in the **beautiful city of Florence** in those days. It was my first participation and all I knew was that it's supposed to be an unconference. This means, there is no strict schedule but space and opportunity for everyone to present their work or team up to discuss and hack on specific tasks to bring the QGIS project to the next level.

## Introduction and first discussions

We were a group of **six OPENGIS.ch members** arriving mostly on Thursday, spending the day shopping and moving into our city apartment. In the evening we went to a Bisteccheria to eat the famous Fiorentina steak. It was big and delicious as was the food in general. Though, I am eating vegetarian since to compensate. On Friday we went to the Campus to meet the other contributors. After a warm welcome by the organizer, Rossella and our CEO and QGIS chair Marco Bernasocchi we did an introduction round where everyone mentioned their first QGIS version ever used. At this point, I became aware of the **knowledge and experience** I was sharing the room with. Besides this, I noticed that there was another company attending with several members, namely Tim Sutton's Kartoza, which is also contributing a lot to QGIS. The first discussion was about **QGIS funding model, vision, communication and on the new website** in planning. This discussion then moved into some smaller groups including most of the long term contributors. I was looking around, physically and virtually, and tried to process all the new inputs and to better understand the whole QGIS world. Besides, I noticed my colleague Ivan having problems with compiling QGIS after upgrading to Ubuntu 22.04 which then motivated my other colleague Clemens to implement a docker container to do the compilation. Nevertheless, I postponed my Ubuntu upgrade. That evening we went out all together to have a beer or two and play some pool sessions and table football. Finally, the OPENGIS.ch crew navigated back home pairing **a [high-precision GNSS sensor](https://www.happysurvey.ch/survey/monch/) with a mobile device running OpenStreetMap in [QField](https://qfield.org/)**. We arrived back home safely and super precise.

## First tasks and coffee breaks

There was catering in the main hall covering breakfast, lunch and coffee breaks. It never took long after grabbing a cup of coffee to find yourself in a conversation with either fellow contributors or OpenStreetMap folks. I chatted with a mapper from Japan about mobile apps, an engineer from Colombia about travelling and a freelancer from the Netherlands about GDAL, to name 3 coffees out of many.

### QGIS plugins website

After some coffee, Matthias Kuhn, our CTO and high-ranking QGIS contributor, asked me whether I could **improve some** ugly **parts of [QGIS plugins website](https://plugins.qgis.org)**. So I had my first task which I started working on immediately. The task was to make the site more useful on mobile devices which would be achieved by collapsing some unimportant information and even removing other parts. I noticed some quirks in the development workflow, so I also added some pre-commit hooks to the dev setup. Dimas Ciputra from Kartoza helped me finalize the improvements and merge them into master branch on [github](https://github.com/qgis/QGIS-Django).

### QGIS website downloads section

Regis Haubourg asked to help **simplify the [QGIS Downloads](https://qgis.org/en/site/forusers/download.html) for Windows** section on the main QGIS website. We played around in the browser dev tools until we thought the section looked about right. I then checked out the github repo and started implementing the changes. I need to say the tech stack is not quite easy to develop with currently, but there is a complete rework in planning. Anyway, following the pull request on [github](https://github.com/qgis/QGIS-Website) a [lively discussion started](https://github.com/qgis/QGIS-Website/pull/1046) which is ongoing by the time of writing. And this is a good thing and shows how much thought goes into this project.

## Presentations

There were many interesting and sometimes spontaneous presentations which always involved lively discussions. Amy Burness from Kartoza presented new styling capabilities for QGIS, Tobias Schmetzer from the Bavarian Center for Applied Energy Research presented the geo data processing and pointed out issues he encountered using QGIS on this and Etienne Trimaille from 3liz talked about [qgis-plugins-ci](https://github.com/opengisch/qgis-plugin-ci), just to name a few.

## Amazing community

On Saturday evening a bus showed up at the campus and took us on a trip up to the hills. After quite a long ride we arrived at a restaurant high up with mind-blowing view of the city. I forgot how many rounds of Tuscan food were served, but it was delicious throughout. An amazing evening with fruitful conversations and many laughs.

{{< figure src="WhatsApp-Image-2022-08-22-at-13.40.29.jpeg" alt="" caption="" >}}

The weather was nice and hot, the beers cold, the Tuscan food delicious and the contributors were not only popular Github avatars but really nice people. **Thank you QGIS.**
