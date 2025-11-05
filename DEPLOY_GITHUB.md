# 🚀 Deploy via GitHub (Mais Rápido!)

## Método Recomendado: Vercel + GitHub

### Passo 1: Push para GitHub

```bash
cd /home/marilu/proj/portfolio-lab/03_CORE_SITE/pantheon

# Create GitHub repo (if not exists)
# Option A: Via GitHub CLI
gh repo create pantheon-portfolio --public --source=. --remote=origin --push

# Option B: Via web (https://github.com/new)
# Then:
git remote add origin https://github.com/YOUR_USERNAME/pantheon-portfolio.git
git branch -M main
git push -u origin main
```

### Passo 2: Import no Vercel

1. Vai a **https://vercel.com/new**
2. Click "Import Git Repository"
3. Autoriza acesso ao GitHub (se necessário)
4. Seleciona o repo `pantheon-portfolio`
5. Settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (deixa default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (default)
6. Click **"Deploy"**

### Passo 3: Aguarda Deploy

⏱️ Tempo estimado: 2-3 minutos

Vais receber:
- ✅ URL de produção: `pantheon-portfolio.vercel.app`
- ✅ Preview URLs automáticos para cada commit
- ✅ Auto-deploy em cada push

---

## Deploy Manual (Alternativa)

Se o GitHub não funcionar, podes fazer upload direto:

1. Build localmente:
   ```bash
   npm run build
   ```

2. Vai a https://vercel.com/new
3. Click "Deploy from template" ou "Upload"
4. Upload a pasta `.next` ou liga via Vercel CLI

---

## Depois do Deploy

### Obter URL
Vais receber algo como: `https://pantheon-portfolio-xyz123.vercel.app`

### Custom Domain (Opcional)
1. Vercel Dashboard → Project Settings → Domains
2. Add `dominatedbycline.com` (ou outro)
3. Configura DNS:
   - **Type:** CNAME
   - **Name:** @ ou www
   - **Value:** cname.vercel-dns.com

---

## Environment Variables (Para AI Features)

Adiciona no Vercel Dashboard → Settings → Environment Variables:

```
GROQ_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

---

## Auto-Deploy Setup

Cada push para `main` vai fazer deploy automático! 🎉

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel detecta e faz deploy automaticamente
```

---

## Troubleshooting

### Build Errors?
- Check Node version (precisa 18+)
- Vercel Settings → Node.js Version → 18.x ou 20.x

### 3D Not Loading?
- Normal! Estamos a usar versão 2D por agora
- 3D vem numa próxima iteração

### Domain Not Working?
- DNS propagation demora 24-48h
- Verifica configuração: `dig dominatedbycline.com`

---

**Status:** Ready to deploy! 🚀
**Time to live:** ~5 minutes from now
