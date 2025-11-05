# Image Assets Structure

This directory contains all image assets for The Pantheon portfolio.

## Directory Structure

```
images/
├── athena/          # Tech & AI Projects
│   ├── eventflow-*.{jpg,png,webp}
│   ├── caroline-*.{jpg,png,webp}
│   ├── blog-*.{jpg,png,webp}
│   └── pantheon-*.{jpg,png,webp}
│
├── aphrodite/       # Design & Interior Projects
│   ├── project1-*.{jpg,png,webp}
│   ├── project2-*.{jpg,png,webp}
│   └── renders/
│
├── dionysus/        # Creative Projects
│   ├── murder-mystery-*.{jpg,png,webp}
│   ├── characters/
│   └── props/
│
├── apollo/          # Career & Timeline
│   ├── headshot.{jpg,png,webp}
│   ├── timeline-*.svg
│   └── skills-chart.svg
│
└── og/              # Open Graph Images
    ├── og-home.jpg
    ├── og-athena.jpg
    ├── og-aphrodite.jpg
    ├── og-dionysus.jpg
    └── og-apollo.jpg
```

## Image Specifications

### Project Screenshots (Athena)
- **Format:** JPG or WebP
- **Size:** 1200x800px (16:9 ratio)
- **Optimization:** Next.js Image component auto-optimizes

### Design Renders (Aphrodite)
- **Format:** JPG or WebP (WebP preferred)
- **Size:** 1920x1080px minimum
- **Quality:** High resolution for detail

### Creative Assets (Dionysus)
- **Format:** JPG, PNG (if transparency needed), or WebP
- **Size:** Varies by content
- **Types:** Documents, character sheets, promotional materials

### Career/Timeline (Apollo)
- **Headshot:** 400x400px square
- **Charts:** SVG preferred (scalable)
- **Timeline graphics:** SVG or PNG with transparency

### Open Graph Images
- **Format:** JPG (best compatibility)
- **Size:** 1200x630px (Facebook/Twitter recommended)
- **Text:** Readable at small sizes
- **File size:** < 300KB

## Usage in Components

Images are loaded using Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/athena/eventflow-dashboard.jpg"
  alt="EventFlow Dashboard"
  width={1200}
  height={800}
  className="rounded-lg"
  placeholder="blur"  // Optional: requires blurDataURL
/>
```

## Placeholder Images

Until real images are added, you can use:
- [Unsplash](https://unsplash.com) for temporary photos
- [Lorem Picsum](https://picsum.photos) for placeholder images
- [Placeholder.com](https://placeholder.com) for quick placeholders

Example: `https://picsum.photos/1200/800`

## Image Optimization Checklist

- [ ] Compress images before uploading (use TinyPNG, ImageOptim, etc.)
- [ ] Convert to WebP format when possible
- [ ] Provide alt text for accessibility
- [ ] Use appropriate dimensions (don't upload 4K images for 800px display)
- [ ] Consider lazy loading for below-the-fold images

## Adding New Images

1. Add image to appropriate chamber directory
2. Update project data in `/lib/data/projects.ts` with image path
3. Ensure alt text is descriptive
4. Test on both desktop and mobile

## Notes

- Next.js automatically optimizes images on-demand
- Images are cached for future requests
- WebP format is automatically served to supporting browsers
- Lazy loading is enabled by default
