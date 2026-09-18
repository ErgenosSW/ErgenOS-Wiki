# ErgenOS Wiki — uruchomienie i publikacja

Gotowe: 26 stron EN/PL, sześć działów, logo i kolory ErgenOS, motyw jasny/ciemny, wyszukiwanie lokalne, sidebar, breadcrumbsy, automatyczny spis treści, bloki Tip/Warning/Danger i odnośniki edycji GitHub.

Sprawdzono: build VitePress, instalację z zamrożonego lockfile, wszystkie wewnętrzne odnośniki w 27 wygenerowanych plikach HTML (wraz z 404), wyniki wyszukiwania PL, przełączanie artykułu PL → EN oraz oba motywy w przeglądarce. Workflow GitHub Actions przygotowano, ale nie uruchamiano go online.

## 1. Otwórz projekt

```sh
cd /home/ergenosarch/Documents/Codex/2026-09-18/referenced-chatgpt-conversation-this-is-an/outputs/ErgenOS-Wiki
```

Repozytorium Git jest już zainicjalizowane na gałęzi `main`. Nie ma commitów ani skonfigurowanego remote. Istniejące repozytoria ErgenOS pozostały nietknięte.

## 2. Uruchom podgląd

Standardowo potrzebujesz Node.js 24 i pnpm 11.19.0. Jeżeli masz npm, pnpm zainstalujesz poleceniem `npm install --global pnpm@11.19.0`.

```sh
pnpm install --frozen-lockfile
pnpm docs:dev
```

Na tym komputerze podczas przygotowania projektu npm nie było dostępne w PATH. Możesz też użyć pnpm dostarczonego z aplikacją Codex:

```sh
/home/ergenosarch/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/pnpm docs:dev
```

Otwórz adres wypisany przez serwer wraz ze ścieżką `/ErgenOS-Wiki/`. Aktualnie uruchomiony podgląd produkcyjny znajduje się pod adresem http://localhost:4173/ErgenOS-Wiki/ i wymaga działającego procesu podglądu.

## 3. Sprawdź przed publikacją

```sh
pnpm docs:build
git status --short
```

Treść opisuje bazowy stan ErgenOS 1.1 według lokalnej dokumentacji projektu. To pierwsza wersja poradników, do dalszego rozwijania wraz z systemem. Źródła opisano w THIRD_PARTY_NOTICES.md.

## 4. Utwórz puste repozytorium na GitHubie

Na koncie `ErgenosSW` utwórz publiczne `ErgenOS-Wiki`, bez automatycznego README, licencji i gitignore. Jeżeli repozytorium już istnieje, najpierw sprawdź jego zawartość; nie nadpisuj historii.

Po przeglądzie plików wykonaj samodzielnie:

```sh
git add .
git commit -m "Create bilingual ErgenOS Wiki with VitePress"
git remote add origin https://github.com/ErgenosSW/ErgenOS-Wiki.git
git push -u origin main
```

## 5. Włącz Pages

W repozytorium wybierz **Settings → Pages → Build and deployment → Source → GitHub Actions**. Jeśli pierwsze wdrożenie nie powiodło się przed włączeniem Pages, uruchom workflow **Build and deploy Wiki** ponownie w zakładce Actions.

Po udanym wdrożeniu adres będzie następujący: https://ergenossw.github.io/ErgenOS-Wiki/

Kolejne push na `main` uruchomią publikację automatycznie. Pull requesty tylko budują stronę. Linki edycji zaczną działać po wysłaniu plików na GitHub, a data ostatniej aktualizacji wymaga historii commitów.
