# 📋 Assets & Improvements Needed

## 🎨 Visual Assets Required

### Project Screenshots/Images

#### Athena's Chamber (Tech)
- [ ] **EventFlow**
  - Dashboard screenshot (planner view)
  - Calendar with events screenshot
  - Caroline AI chat interface
  - Mobile responsive view
  - **Recommended size:** 1200x800px (16:9)

- [ ] **Caroline AI**
  - Chat interface with example conversation
  - Memory system visualization
  - Task suggestions example
  - **Recommended size:** 1200x800px

- [ ] **DominatedByCline**
  - Blog homepage screenshot
  - Example blog post
  - **Recommended size:** 1200x800px

- [ ] **The Pantheon**
  - Current entrance screenshot
  - Chamber navigation demo
  - Before/after comparison
  - **Recommended size:** 1200x800px

#### Aphrodite's Gallery (Design)
- [ ] **Interior Design Projects**
  - 3-5 residential project renders
  - Before/after comparisons
  - Detail shots (materials, lighting)
  - Floor plans (optional)
  - **Format:** High-res renders (1920x1080+)

#### Dionysus' Theatre (Creative)
- [ ] **Murder Mystery Game**
  - Character dossier examples (2-3)
  - Clue card designs
  - Promotional video thumbnail
  - Event setup photos (if event happened)
  - **Format:** Mixed (documents, images, video)

#### Apollo's Hall (Career)
- [ ] **Professional Photo**
  - Headshot (400x400px square)
  - Full body professional (optional)

- [ ] **Timeline Graphics**
  - Career path visualization
  - Skills evolution chart
  - **Format:** SVG or PNG

---

## 🎭 Design Elements

### Fonts
- [ ] **Greek-style font** for titles
  - Options: Cinzel, Trajan Pro, or similar serif
  - Add to `/public/fonts/`
  - Update `font-face` in globals.css

### Icons & Decorations
- [ ] Greek column SVGs (decorative)
- [ ] Portal frame graphics (if not using 3D)
- [ ] Chamber-specific icons
  - Athena: Owl, spear, shield
  - Aphrodite: Rose, mirror, shell
  - Dionysus: Grapes, theater masks, wine
  - Apollo: Sun, lyre, laurel wreath

### Background Patterns
- [ ] Subtle Greek key pattern (border decoration)
- [ ] Marble texture (optional, for backgrounds)
- [ ] Starfield/night sky (for entrance)

---

## 💻 Code Improvements Needed

### High Priority
- [ ] **ProjectCard Component**
  - Reusable card with image, title, tech tags
  - Hover effects
  - Click to open modal
  - Responsive layout

- [ ] **Project Detail Modal**
  - Full project description
  - Image gallery/carousel
  - Tech stack list
  - Links (live, github, demo)
  - Stats display
  - Close button + ESC key

- [ ] **Image Optimization**
  - Use Next.js Image component
  - Lazy loading
  - Blur placeholder
  - WebP format

### Medium Priority
- [ ] **Loading States**
  - Skeleton loaders for images
  - Smooth transitions
  - Progress indicators

- [ ] **Error Handling**
  - 404 page (custom)
  - Error boundaries
  - Fallback UI

- [ ] **SEO**
  - Meta tags for each page
  - Open Graph images
  - Sitemap generation
  - robots.txt

### Low Priority (Future)
- [ ] **3D Entrance** (debug Three.js issues)
- [ ] **Smooth Transitions** (GSAP animations)
- [ ] **Sound Effects** (optional, subtle)
- [ ] **Easter Eggs** (hidden interactive elements)

---

## 📝 Content Improvements

### Athena Chamber
- [ ] **Expand project descriptions**
  - Add "problem/solution" sections
  - Include specific metrics/results
  - Add customer testimonials (if applicable)

- [ ] **Code snippets** (for tech showcase)
  - Key algorithm examples
  - Architecture diagrams
  - API endpoint examples

### Aphrodite Gallery
- [ ] **Project case studies**
  - Client brief
  - Design process
  - Material selection rationale
  - Final results + client feedback

### Dionysus Theatre
- [ ] **Murder Mystery showcase**
  - Game mechanics explanation
  - Sample character sheet
  - Clue example
  - Embed promotional video

### Apollo Hall
- [ ] **CV content**
  - Full work history
  - Education details
  - Certifications
  - Skills with proficiency levels
  - Achievements/awards

- [ ] **Dynamic CV generator**
  - Company-specific customization
  - PDF export functionality
  - Multiple templates

---

## 🤖 AI Integration (Future Phase)

### RAG System
- [ ] Set up Groq API account
- [ ] Create vector database (Chroma)
- [ ] Prepare knowledge base documents
  - All project descriptions
  - Skills information
  - Career history
  - FAQs

### Chatbot Features
- [ ] 4 personality prompts (one per god)
- [ ] Conversation history
- [ ] Context switching (chamber-aware)
- [ ] Voice synthesis (Cartesia - optional)

---

## 🎯 Performance Optimizations

### Current Issues to Fix
- [ ] Three.js loading (debug or remove temporarily)
- [ ] Bundle size analysis
- [ ] Lighthouse audit
- [ ] Mobile performance testing

### Targets
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Lighthouse Score > 90
- [ ] Mobile-friendly test pass

---

## 📱 Mobile Optimizations

- [ ] Touch-friendly navigation
- [ ] Simplified layouts for small screens
- [ ] Swipe gestures (optional)
- [ ] Hamburger menu (if needed)
- [ ] Test on actual devices:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] Tablet (iPad)

---

## 🔗 External Integrations

### Analytics
- [ ] Vercel Analytics (free)
- [ ] Google Analytics (optional)
- [ ] Track:
  - Page views per chamber
  - Time spent in each chamber
  - Click-through rates
  - Bounce rate

### Contact Form
- [ ] Email setup (or use FormSpree/Resend)
- [ ] Success/error messages
- [ ] Spam protection

### Social Links
- [ ] Add social media icons
- [ ] LinkedIn profile link
- [ ] GitHub profile link
- [ ] Twitter/X (optional)
- [ ] Email contact

---

## 📦 File Structure Improvements

```
pantheon/
├── components/
│   ├── ui/                    # NEW: Reusable UI components
│   │   ├── ProjectCard.tsx
│   │   ├── Modal.tsx
│   │   ├── Button.tsx
│   │   └── ImageGallery.tsx
│   ├── canvas/
│   └── scenes/
├── lib/
│   ├── data/
│   │   ├── projects.ts       # ✅ Done
│   │   └── skills.ts         # NEW: Skills data
│   └── utils/                # NEW: Helper functions
│       ├── imageLoader.ts
│       └── analytics.ts
└── public/
    ├── images/               # NEW: Project images
    │   ├── eventflow/
    │   ├── caroline/
    │   ├── design/
    │   └── murder-mystery/
    └── fonts/                # NEW: Custom fonts
```

---

## ⏱️ Timeline Estimate

### Week 1 (Deploy + Polish)
- ✅ Deploy MVP to Vercel
- Collect project screenshots
- Add ProjectCard component
- Basic modal implementation

### Week 2 (Content)
- Add all project images
- Write expanded descriptions
- Fill all 4 chambers with content
- SEO optimization

### Week 3 (Features)
- Mobile optimization
- Performance improvements
- Analytics setup
- Contact form

### Week 4 (AI - Optional)
- RAG system setup
- Chatbot integration
- Voice features (if time)

---

## 🚨 Blockers / Questions

1. **Do you have existing screenshots of EventFlow?**
   - If not, we need to take them from the live app

2. **Interior design project images**
   - Need 3-5 high-quality renders
   - Any existing portfolio?

3. **Murder mystery materials**
   - Can we show actual character sheets?
   - Is promotional video ready?

4. **Professional photo**
   - Do you have a good headshot?
   - Or should we use placeholder?

5. **Domain name decision**
   - dominatedbycline.com?
   - Something else?

---

**Priority Order:**
1. 🔴 Deploy MVP (now!)
2. 🟠 Project images collection
3. 🟡 ProjectCard + Modal components
4. 🟢 Content expansion
5. 🔵 AI integration (later)

**Status:** Ready for deployment, then iterate!
**Last Updated:** January 5, 2025
