# ErgenOS Wiki

Independent VitePress repository for the English and Polish ErgenOS documentation. Includes the existing ErgenOS logo and palette, light/dark themes, six documentation sections, local search, breadcrumbs, automatic heading outlines, Tip/Warning/Danger blocks and per-language GitHub edit links.

## Local development

Install Node.js 24 and pnpm 11.19.0. With npm available, install pnpm using `npm install --global pnpm@11.19.0`.

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
```

Open the URL printed by VitePress (including `/ErgenOS-Wiki/`).

```sh
pnpm docs:build
pnpm docs:preview
```

Build output: `docs/.vitepress/dist/`. A normal build checks internal Markdown links. Search indexes are generated at build time; verify search with the production preview.

## Structure

- `docs/index.md`: English home; `docs/pl/index.md`: Polish home.
- `docs/{getting-started,system-administration,security,recovery,hardware,troubleshooting}/`: English articles.
- `docs/pl/`: matching Polish articles, with identical relative paths.
- `docs/.vitepress/config.ts`: locales, search, Pages base and edit links.
- `docs/.vitepress/navigation.ts`: shared sidebar and breadcrumb section names.
- `docs/.vitepress/theme/`: branding and breadcrumb component.
- `.github/workflows/deploy.yml`: pull-request build checks and main-branch deployment.

## Editing

Keep both languages synchronized. Keep matching article paths so the language switcher preserves the current page. H2/H3 headings populate the TOC automatically. Add new articles to the shared navigation. Breadcrumbs derive the section from the path and the article title from its H1.

```md
::: tip Useful detail
Your tip here.
:::

::: warning Check before continuing
Your warning here.
:::

::: danger Destructive action
Your danger notice here.
:::
```

The first content pass describes the documented ErgenOS 1.1 baseline. Hardware coverage is limited; do not invent minimum requirements or copy unverified recovery commands. Installation and Secure Boot procedures are maintained here; the website keeps legacy redirects.

## Deployment

Pushes to `main` build and deploy the Wiki through GitHub Actions. Pull requests
run the production build without publishing it. The public site is available at
<https://ergenossw.github.io/ErgenOS-Wiki/>.

Deployment follows the [VitePress Pages guide](https://vitepress.dev/guide/deploy).
The base is `/ErgenOS-Wiki/`; if the repository or domain changes, update the
base, favicon URL, sitemap hostname and GitHub edit links together.

## Licensing

GPL-3.0-or-later, aligned with the source ErgenOS project. See LICENSE and THIRD_PARTY_NOTICES.md.
