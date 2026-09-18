import { defineConfig } from 'vitepress'
import { sidebar } from './navigation'
const repo = 'https://github.com/ErgenosSW/ErgenOS-Wiki'
export default defineConfig({
  title: 'ErgenOS Wiki',
  description: 'Install, manage and recover your ErgenOS system.',
  base: '/ErgenOS-Wiki/',
  cleanUrls: false,
  appearance: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/png', href: '/ErgenOS-Wiki/ergenos-logo.png' }]],
  sitemap: { hostname: 'https://ergenossw.github.io/ErgenOS-Wiki/' },
  locales: {
    root: { label: 'English', lang: 'en', themeConfig: {
      nav: [{ text: 'Guide', link: '/getting-started/' }, { text: 'Recovery', link: '/recovery/' }, { text: 'ErgenOS website', link: 'https://ergenossw.github.io/ErgenOS-Website/' }],
      sidebar: sidebar('en'),
      outline: { level: [2, 3], label: 'On this page' },
      editLink: { pattern: `${repo}/edit/main/docs/:path`, text: 'Edit this page on GitHub' }
    } },
    pl: { label: 'Polski', lang: 'pl', description: 'Instalacja, administracja i odzyskiwanie systemu ErgenOS.', themeConfig: {
      nav: [{ text: 'Poradnik', link: '/pl/getting-started/' }, { text: 'Odzyskiwanie', link: '/pl/recovery/' }, { text: 'Strona ErgenOS', link: 'https://ergenossw.github.io/ErgenOS-Website/pl/' }],
      sidebar: sidebar('pl'),
      outline: { level: [2, 3], label: 'Na tej stronie' },
      editLink: { pattern: `${repo}/edit/main/docs/:path`, text: 'Edytuj tę stronę na GitHubie' },
      docFooter: { prev: 'Poprzednia strona', next: 'Następna strona' },
      lastUpdated: { text: 'Ostatnia aktualizacja' },
      darkModeSwitchLabel: 'Wygląd', lightModeSwitchTitle: 'Włącz jasny motyw', darkModeSwitchTitle: 'Włącz ciemny motyw',
      sidebarMenuLabel: 'Menu', returnToTopLabel: 'Wróć na górę', langMenuLabel: 'Zmień język', skipToContentLabel: 'Przejdź do treści'
    } }
  },
  themeConfig: {
    logo: { src: '/ergenos-logo.png', alt: 'ErgenOS' },
    socialLinks: [{ icon: 'github', link: repo }],
    search: { provider: 'local', options: { locales: { pl: { translations: {
      button: { buttonText: 'Szukaj', buttonAriaLabel: 'Szukaj w dokumentacji' },
      modal: { noResultsText: 'Brak wyników dla', resetButtonTitle: 'Wyczyść', displayDetails: 'Pokaż szczegóły',
        footer: { selectText: 'wybierz', navigateText: 'przejdź', closeText: 'zamknij' } }
    } } } } },
    footer: { message: 'ErgenOS · Independent. Open source. Built with care.' }
  }
})
