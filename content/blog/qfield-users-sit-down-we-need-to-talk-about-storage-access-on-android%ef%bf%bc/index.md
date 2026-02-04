---
_edit_last: "2"
_jetpack_related_posts_cache:
  8f6677c9d6b0f903e98ad32ec61f8deb:
    expires: 1759930014
    payload:
      - id: 15010
      - id: 12398
      - id: 12927
  37550b67d263a3ce789993dc25046c5f:
    expires: 1759940311
    payload:
      - id: 12810
      - id: 1700
      - id: 12165
      - id: 15180
      - id: 1923
      - id: 13237
_last_editor_used_jetpack: block-editor
_publicize_twitter_user: '@OPENGISch'
_thumbnail_id: "12796"
_wpas_done_all: "1"
_wpcom_is_markdown: "1"
_wpml_location_migration_done: "1"
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
_wpml_word_count: '{"total":1134,"to_translate":{"fr":1134,"de":1134,"it":1134}}'
author: mbernasocchi
categories:
  - qfield
cover:
  alt: import
  image: import.png
date: "2022-03-05T00:48:44+00:00"
guid: https://www.opengis.ch/?p=12794
obfx-footer-scripts: ""
obfx-header-scripts: ""
parent_post_id: null
post_id: "12794"
tags:
  - qgis.org
title: QField Users Sit Down, We Need to Talk About Storage Access on Android

---
> _TLDR: Since November 2021, Google has enforced new storage access limitations for apps published on its Play store which prohibits direct storage access on Android 11 and above forcing QField to adapt and rely on importing projects and datasets to access those._

If you are a QField beta user on Android 11 and above, you might have noticed a significant change in the way the app is handling storage in the latest set of betas released in early February of 2022. This blog post will go over the changes, explain why those **had to be made** (looking at you, Google), how to work in this new paradigm, and showcase some new benefits from the hard work done by OPENGIS.ch’s geoninjas.

## **It’s all gone! How can I access my projects and datasets?!**

Starting with Android 11, apps are denied full access to main and external storage content. For QField, this means direct access to projects and datasets transferred and/or downloaded into storage folders is not possible anymore.

To work within this new confine, QField now has to import project folders or individual datasets into an app-dedicated storage location where Android allows for unrestricted read/write access.

Practically, this means that instead of being shown and having access to the full storage tree when clicking on the “Open local files” button, users are now shown a set of new folders named ‘QField files directory’, ‘Imported datasets’, and ‘Imported projects’ as well as a drop-down menu accessible via a top-right three-dot button.

{{< figure src="https://lh3.googleusercontent.com/lB1LdVMJcbB8AZ13axbQcAAH2H8aG9QolThzc1Mzl53mfRcVrMa2Are3gXos6wzTEusu5K0SeROritR3eU6JFSMcm1gR7H1wdIdBQ4gJ4zXdjWs8%5FGiApmIp0xGZO%5F%5Fvx8GsxZR%5F" alt="" caption="" >}}

### _Import project from folder_

When importing a project from a folder, users will be asked to grant permission for QField to read the content of a given folder on the device’s storage via a system folder picker. When the folder is selected, QField copies the folder content (including its sub-folders) into the app’s ‘Imported projects’ location. Users can then open the project from there.

Re-importing a given folder through the drop-down menu action will overwrite preexisting projects given an identical folder name. That allows users to be able to update projects.

_Note that feature editing, addition, and deletion will be saved into the imported project’s datasets, not in the original folder selected during the import process. More on how to find and handle those project datasets will come later in this post._

### _Import project from ZIP archive_

Having to adapt to Google’s new set of rules did not come without its benefits. Users can now easily transfer projects into a given device by compressing the project content into a ZIP archive and having QField import that compressed project automatically. This can greatly ease remote deployment of projects by being able to send a single file to users.

### _Import dataset(s)_

QField can also import individual dataset(s). Users will be asked to select one or more files via a system file picker, which will be copied into the ‘Imported datasets’ folder. Users will have to ensure that all sidecar files are selected when importing (e.g. a shapefile dataset would require users to select the .shp, .shx, .dbf, .prj, and .cpg files).

_Just like imported projects, editing of datasets will be saved into the imported datasets, and not reflected in the original files._

## **Alright, but how can I retrieve modified projects and datasets?**

Imported projects and datasets can be accessed directly using a USB cable. The location on storage is displayed in the top navigation bar when opening a local file.

On most devices plugged into a computer via USB cable connection, the path will be <drive>:/Android/data/ch.opengis.qfield/files/ where you will find both the Imported Datasets and Imported Projects folders within which your edited content will be located.

However, we’ve also added a nice new ‘Send to…’ functionality that allows for users to share and send datasets straight from QField using Android APIs. This allows for the sending of edited datasets directly to third party apps (Gmail, Drive, Dropbox, Nextcloud, your favourite messenger app, etc.).

{{< figure src="https://lh4.googleusercontent.com/oTkD9HqHrrRR2G2ftpoSipcpoJ9GIhq-2Iyi%5Fvn59coCzWoIZX7BcVfE%5FIVkDj4EcI2mDIOfot6UTZI0HZcUuBug%5FUKqEc1SI4FbFSgB0GhFAhRgYSKRlf-3MSdm0MKMyOteSx8u" alt="" caption="" >}}

### **Is direct copying via USB cable gone altogether?**

Users can still avoid going through the import process by copying files via a USB cable connection directly into the QField app’s files directory. As mentioned above, the location on most devices will be <drive>:/Android/data/ch.opengis.qfield/files/.

## **What are the benefits from these changes?**

Working out a functional solution to meet Google’s newly-enforced restrictions did not come without its benefits.

On top of what was already covered above - importing of compressed project ZIP files and sharing functionalities – QField is now fully integrated with Android’s cross-application document sharing APIs. This means that users can now directly open projects and files sent to them via their favourite browser/email/cloud/messenger app without the need to first download those files onto the device.

Altogether, the newly-coded importing mechanisms and integration with Android document APIs don’t only improve the ease of use for the average person, it also makes viewing and editing spatial datasets on QField far more secure. The imported projects and datasets reside in a location with access limited to QField only, meaning that its content is inherently far more protected from malicious access from third-party apps.

## **Why were these drastic changes needed?**

As mentioned in the introduction, the changes were needed to comply with a set of new Google Play policies that came into force in November 2021. Users can read more on Google’s rationale on this page [https://developer.android.com/google/play/requirements/target-sdk](https://developer.android.com/google/play/requirements/target-sdk).

As part of the enforcement of these new policies, Google came up with an arbitrary mechanism to whitelist some apps which allows those to retain full storage access given the user explicitly allowed for it. We here at OPENGIS.ch believes QField had ample justifications to be whitelisted, however, Google’s appeal process judged otherwise after a series of email exchanges detailing our reasoning. While we have so far lost this argument with Google, we will continue fighting for our users and for their freedom to choose. If by any chance you have a good contact at Google that might be willing to listen to our reasoning, we would be grateful if you'd [get in touch with us](https://opengis.ch/#contact).

We hope this clarifies the recent changes and helps QField users adapt to those.
