# Instalacja

## Pobierz i sprawdź obraz

Pobierz kompletny obraz z [MediaFire](https://www.mediafire.com/file/5pflsx05qjzptld/ergenos-1.2.0-x86_64.iso/file) albo pobierz obie części i pliki sum kontrolnych z [oficjalnego wydania na GitHubie](https://github.com/ErgenosSW/ErgenOS-Linux/releases/tag/v1.2.0).

### Obraz ErgenOS 1.2

Poniższe polecenia dotyczą wyłącznie obrazu `ergenos-1.2.0-x86_64.iso` o rozmiarze 2 751 954 944 bajtów (2,56 GiB). Dla innych wydań użyj ich własnej sumy kontrolnej.

Sprawdź kompletny pobrany obraz:

```bash
echo "c152f4881a2bd0c3a8921f2139a2e3a538cd6cd49160e90cac6650df2a47599b  ergenos-1.2.0-x86_64.iso" | sha256sum -c -
```

Jeżeli pobierasz podzielone zasoby z GitHuba, umieść `part01`, `part02`, `PARTS-SHA256SUMS` i `ISO-SHA256SUMS` w jednym katalogu. Sprawdź części, złóż ISO w odpowiedniej kolejności i sprawdź wynik:

```bash
sha256sum -c PARTS-SHA256SUMS
cat ergenos-1.2.0-x86_64.iso.part01 ergenos-1.2.0-x86_64.iso.part02 > ergenos-1.2.0-x86_64.iso
sha256sum -c ISO-SHA256SUMS
```

Nie zapisuj osobno żadnej części na pendrivie. Automatyczne archiwa kodu źródłowego tworzone przez GitHub nie są obrazami instalacyjnymi.

## Przygotuj pendrive

W Linuksie użyj programu Dyski GNOME, a w Windows Rufus lub Etcher. Wskaż obraz ISO i sprawdź wybrane urządzenie USB.

::: danger Wybrany pendrive zostanie wymazany
Skopiuj potrzebne pliki przed zapisaniem obrazu. Dokładnie sprawdź nazwę i pojemność urządzenia.
:::

## Uruchom środowisko live

W menu startowym firmware wybierz wpis UEFI pendrive'a. Obraz ErgenOS 1.2 wymaga wyłączenia Secure Boot. Obsługę po instalacji opisuje [poradnik Secure Boot](../security/secure-boot).

## Uruchom Calamares

Otwórz Install ErgenOS. Wybierz język, klawiaturę, układ dysku i konto użytkownika. Przed rozpoczęciem sprawdź podsumowanie.

::: warning Partycjonowanie dysku
Zmiany partycji mogą usunąć istniejące systemy i dane. Najpierw zrób osobną kopię zapasową. Zintegrowane odzyskiwanie z migawek jest konfigurowane tylko przy instalacji na Btrfs.
:::

### Źródła oprogramowania

Instalator oferuje wyłącznie oficjalne repozytoria, yay, paru lub Chaotic-AUR. Konfiguracja opcjonalnych źródeł wymaga internetu. Wybierz świadomie: źródła różnią się zasadami zaufania i utrzymania.

## Uruchom ponownie

Po instalacji odłącz pendrive zgodnie z komunikatem i uruchom zainstalowany system. Przejdź do [pierwszego uruchomienia](./first-boot).
