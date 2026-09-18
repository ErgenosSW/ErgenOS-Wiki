export const sections = [
  { slug: 'getting-started', en: 'Getting Started', pl: 'Pierwsze kroki', pages: [
    ['index', 'Overview', 'Wprowadzenie'], ['installation', 'Installation', 'Instalacja'], ['first-boot', 'First boot', 'Pierwsze uruchomienie'], ['known-limitations', 'Known limitations', 'Znane ograniczenia']] },
  { slug: 'system-administration', en: 'System Administration', pl: 'Administracja systemem', pages: [
    ['index', 'Overview', 'Wprowadzenie'], ['updates', 'Updates & software', 'Aktualizacje i oprogramowanie']] },
  { slug: 'security', en: 'Security', pl: 'Bezpieczeństwo', pages: [
    ['index', 'Overview', 'Wprowadzenie'], ['secure-boot', 'Secure Boot', 'Secure Boot']] },
  { slug: 'recovery', en: 'Recovery', pl: 'Odzyskiwanie', pages: [
    ['index', 'Overview', 'Wprowadzenie'], ['snapshots', 'Btrfs snapshots', 'Migawki Btrfs'],
    ['bootloader', 'Bootloader recovery', 'Odzyskiwanie bootloadera']] },
  { slug: 'hardware', en: 'Hardware', pl: 'Sprzęt', pages: [
    ['index', 'Compatibility', 'Zgodność sprzętowa']] },
  { slug: 'troubleshooting', en: 'Troubleshooting', pl: 'Rozwiązywanie problemów', pages: [
    ['index', 'Start here', 'Zacznij tutaj'], ['reporting-issues', 'Report a problem', 'Zgłaszanie problemów']] }
] as const
export function sidebar(locale: 'en' | 'pl') {
  const prefix = locale === 'pl' ? '/pl/' : '/'
  return sections.map(section => ({
    text: section[locale], collapsed: false,
    items: section.pages.map(page => ({
      text: page[locale === 'pl' ? 2 : 1],
      link: `${prefix}${section.slug}/${page[0] === 'index' ? '' : page[0]}`
    }))
  }))
}
