# Marcas — frontend

Galeria minimalista: fundo branco ou preto (alternado), logo centrado, transição de ampliação e notas sobre a origem de cada marca.

## Local

```bash
npm install
npm run dev
```

Abrir: **http://localhost:5173/Marcas/**

Pré-visualizar build de produção:

```bash
npm run build
npm run preview
```

## Sequência (15 marcas → volta à Apple)

Apple → Nike → Adidas → Jordan → Fila → Vans → Puma → Louis Vuitton → Mercedes-Benz → Zara → Loro Piana → Dior → Chanel → Lacoste → Gucci

**Teclas:** Enter / → avançar · ← voltar · toque no ecrã

## Publicar no GitHub (profissional)

### 1. Repositório

[github.com/geraldosense/Marcas](https://github.com/geraldosense/Marcas)

### 2. Ativar GitHub Pages (só uma vez)

1. No GitHub, abre **Marcas** → **Settings** → **Pages**
2. Em **Build and deployment**, **Source** → escolhe **GitHub Actions** (não “Deploy from branch”)
3. Guarda

### 3. Correr o deploy

Cada **push** na branch `main` dispara o workflow **Deploy to GitHub Pages**.

Ou manualmente: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

Espera o visto verde (~1–2 min). O site fica em:

**https://geraldosense.github.io/Marcas/**

### 4. Enviar alterações do teu Mac

```bash
git add -A
git commit -m "Descrição da alteração"
git push origin main
```

### Notas

- O Vite usa `base: "/Marcas/"` — o URL tem de incluir `/Marcas/`
- Repositório **público** (ou GitHub Pro se for privado) para Pages gratuito
- Textos de origem: `src/brandStories.ts` · logos: `src/brands.ts`
