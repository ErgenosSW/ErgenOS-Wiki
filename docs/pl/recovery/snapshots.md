# Migawki Btrfs

## Co tworzy punkty odzyskiwania

W instalacji Btrfs Snapper zarządza migawkami głównego systemu plików. snap-pac tworzy je przed transakcjami Pacmana i po nich. grub-btrfs dodaje wykryte migawki do menu GRUB. Jego usługa obserwuje całe drzewo Snappera, aby nowe punkty odzyskiwania pojawiały się automatycznie.

## Co oznacza uruchomienie migawki

ErgenOS zawiera grub-btrfs-overlayfs. Narzędzie nakłada tymczasową zapisywalną warstwę na migawkę tylko do odczytu, umożliwiając rozruch wcześniejszego stanu systemu.

::: warning Zmiany tymczasowe
Zmiany w sesji migawki traktuj jako tymczasowe. Sam rozruch migawki nie przywraca jej na stałe jako zwykłego systemu.
:::

## Przywracanie

ErgenCTL udostępnia mechanizm przywracania projektu. Przed potwierdzeniem zidentyfikuj migawkę i sprawdź operację wyświetlaną przez zainstalowaną wersję ErgenCTL. Informacje zależne od wersji sprawdzaj w [repozytorium ErgenCTL](https://github.com/ErgenosSW/ErgenCTL).

## Hibernacja

Zwykłe wpisy rozruchowe zachowują obsługę hibernacji. Wpisy migawek używają noresume, aby uniknąć wznowienia w historycznym stanie systemu.

## Ograniczenia

Ten mechanizm dotyczy instalacji Btrfs. Dostępność migawek nie gwarantuje ochrony wszystkich plików i zamontowanych systemów plików. Zachowaj osobną kopię ważnych danych.
