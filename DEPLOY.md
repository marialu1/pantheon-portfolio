# 🚀 Deploy Instructions

## Quick Deploy to Vercel

### Step 1: Login to Vercel
```bash
cd /home/marilu/proj/portfolio-lab/03_CORE_SITE/pantheon
vercel login
```

You'll get a link to authenticate. Open it in your browser and confirm.

### Step 2: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (your account)
- Link to existing project? **N**
- What's your project's name? **pantheon** (or choose another)
- In which directory is your code located? **./** (current directory)
- Want to override settings? **N**

### Step 3: Production Deploy
```bash
vercel --prod
```

---

## Environment Variables (if needed later)

For AI features, you'll need to add these in Vercel dashboard:
```
GROQ_API_KEY=your_groq_key
NEXT_PUBLIC_SITE_URL=your_vercel_url
```

---

## Custom Domain (Optional)

1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add your domain (e.g., dominatedbycline.com)
4. Follow DNS configuration instructions

---

## Manual Deploy (Alternative)

If CLI doesn't work:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import from Git repository
4. Select the pantheon folder
5. Deploy!

---

**Note:** Make sure all changes are committed to git before deploying!
