

## Creating a new blog post
```bash
hugo new --kind blog content/blog/my-new-post/index.md
```

Now you can:

- Edit the front matter (title, author, categories, tags, etc.)
- Add images to the same folder (they will be automatically optimized)
- Reference images using just the filename: `{{< figure src="image.png" >}}`
- Set draft: false when ready to publish

**Image Optimization:**
Images placed in the blog post folder are automatically:
- Resized to max 1200px width (configurable per image)
- Optimized with quality 85% (configurable in hugo.yaml)
- Generated with responsive srcset for retina displays
- Lazy-loaded for better performance
- EXIF metadata stripped for privacy and smaller file size

### Available Shortcodes for Blog Posts

**Images:**
```markdown
{{< figure src="image.png" alt="Description" caption="Caption text" >}}
{{< figure src="image.png" alt="Description" width="300px" class="d-block mx-auto" >}}
{{< figure src="image.png" alt="Description" href="https://example.com" >}}
```

**Image Gallery (Carousel):**
```markdown
{{< gallery cols="3" autoplay="false" interval="5000" >}}  
{{< figure src="img1.png" alt="Image 1" caption="Caption 1" >}}  
{{< figure src="img2.png" alt="Image 2" caption="Caption 2" >}}  
{{< figure src="img3.png" alt="Image 3" caption="Caption 3" >}}  
{{< /gallery >}}
```

**Figures Row (Side-by-Side):**
```markdown
{{< figures-row >}}
{{< figure src="img1.png" alt="First" width="137px" >}}
{{< figure src="img2.png" alt="Second" width="137px" >}}
{{< figure src="img3.png" alt="Third" width="137px" >}}
{{< /figures-row >}}
```

**Green Text (Brand Color):**
```markdown
{{< green text="highlighted text" />}}
```
Or with inner content:
```markdown
{{< green >}}highlighted text{{< /green >}}
```

**Button/Call-to-Action:**
```markdown
{{< button href="/get/" text="🚀 GET QFIELD NOW" >}}
{{< button href="https://example.com" text="Learn More" variant="btn-secondary" size="btn-lg" >}}
{{< button href="/support-us" text="💚 SUPPORT US" style="nav" >}}
```

## creating a new solution
```bash
hugo new --kind solutions content/solutions/my-new-solution.md
```

Required fields:

- title: The display title of your solution
- slug: URL-friendly version (usually same as filename)
- description: Brief description for SEO
- hero.headline: Main headline shown on the page
- hero.sub: Subheadline with more detail
- categories: Industry category (e.g., "Environment, Agriculture & Natural Resources")

Optional fields:

- tags: Keywords for SEO
- pains: List of pain points this solution addresses
- proof: Social proof points (testimonials, usage stats)
- faq: Frequently asked questions with answers
- hero.ctaText & hero.ctaUrl: Call-to-action button

## creating a new success story
```bash
hugo new --kind success-stories content/success-stories/my-success-story.md
```

Required fields:

- title: The title of the success story
- date: Auto-filled by Hugo
- author: Name of the person/organization
- authorTitle: Their title or role
- company: Company, project, or organization name
- description: Brief summary for SEO and previews
- image: Featured image path (e.g., /images/ss/my-story.jpg)
- ogImage: Full URL for social media sharing (e.g., https://qfield.org/images/ss/my-story.jpg)
- draft: Set to false when ready to publish

Optional fields:

- tags: Relevant keywords
- categories: Story categories

Important:

Place images in `ss` directory
Reference them in markdown as `/images/ss/image-name.jpg`
Use markdown formatting for content sections
The "Back to success stories" button is added automatically

## Environments and configs

- Hugo merges `config/_default` with the folder that matches `--environment` (`development`, `staging`, `production`). If you omit it, `hugo server` defaults to `development`.
- Local development: `hugo server --environment development` for fast, unminified builds and no analytics/service worker.
- Staging preview: `hugo --environment staging -D -b https://staging.qfield.org` to get near-prod settings without analytics/SW and with easier-to-read JSON/SVG. Use whatever staging base URL is correct for your deploy.
- Production build: `hugo --environment production --gc --minify -b https://qfield.org/` for strict headers, full minification, and analytics/SW enabled.

## Build for Production

1. Build the site with production config:
```bash
hugo --environment production --minify
```

This will:

Use the production config from hugo.yaml
Minify HTML, CSS, and JS
Optimize images
Generate the site in the `public` directory

2. Preview the production build locally:
Then visit `http://localhost:1313` to test before deploying.

3. Deployment
Push the `public` folder to the repo

## GitHub Actions Deployments

The workflow in `.github/workflows/pages.yml` runs automatically for every push or pull request targeting `main`, building the Hugo site with production settings for direct pushes and staging settings for previews. It uploads the generated `public/` directory as an artifact, and a follow-up job deploys that artifact to GitHub Pages so merged changes go live without extra steps. You can also trigger the same workflow manually via **Run workflow** when you need an ad-hoc build.
