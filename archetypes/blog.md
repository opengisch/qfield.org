---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: '{{ .Date }}'
author: ''
categories:
  - qfield
tags:
  - qfield
  - qgis
cover:
  image: cover.png
  alt: ''
draft: true
---

Write your blog post introduction here. This should be a compelling summary that draws readers in.

## Main Highlights

Add your main content here with headings to organize the information.

### Subheading

Use Hugo shortcodes to add images stored in the same folder as this blog post:

{{< figure src="image.png" alt="Image description" caption="Optional caption" >}}

### Another Section

- Bullet points work well
- For listing features
- Or important information

## Additional Content

Add more sections as needed. Remember to:

1. Keep your content organized with clear headings
2. Use images to illustrate your points
3. Write in a clear, engaging style

---

**Pro tip:** Place all your images in the same folder as this `index.md` file and reference them using just the filename.
