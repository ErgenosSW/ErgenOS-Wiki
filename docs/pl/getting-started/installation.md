# Instalacja

## Pobierz i sprawdź obraz

Pobierz obraz i odpowiadającą mu sumę SHA-256 z [oficjalnego wydania](https://github.com/ErgenosSW/ErgenOS-Linux/releases). Jeśli obraz jest podzielony na części, połącz je zgodnie z instrukcją tego wydania, a następnie sprawdź pełny plik ISO.

### Obraz ErgenOS 1.1

Poniższe polecenia dotyczą wyłącznie obrazu `ergenos-1.1.0-x86_64.iso` (2,51 GiB). Dla innych wydań użyj ich własnej sumy kontrolnej.

Sprawdź kompletny pobrany obraz:

```bash
echo "460c2ab349681cef4922ebba35b180b24f7a17e7182dbf23cc7c99b13b1fdcce  ergenos-1.1.0-x86_64.iso" | sha256sum -c -
```

Jeśli pobrano części ISO i `SHA256SUMS-1.1.0` z wydania GitHub, połącz części w katalogu zawierającym wyłącznie części tego wydania, a następnie sprawdź sumę:

```bash
cat ergenos-1.1.0-x86_64.iso.part-* > ergenos-1.1.0-x86_64.iso
sha256sum -c SHA256SUMS-1.1.0
```

## Przygotuj pendrive

W Linuksie użyj programu Dyski GNOME, a w Windows Rufus lub Etcher. Wskaż obraz ISO i sprawdź wybrane urządzenie USB.

::: danger Wybrany pendrive zostanie wymazany
Skopiuj potrzebne pliki przed zapisaniem obrazu. Dokładnie sprawdź nazwę i pojemność urządzenia.
:::

## Uruchom środowisko live

W menu startowym firmware wybierz wpis UEFI pendrive'a. Obraz ErgenOS 1.1 wymaga wyłączenia Secure Boot. Obsługę po instalacji opisuje [poradnik Secure Boot](../security/secure-boot).

## Uruchom Calamares

Otwórz Install ErgenOS. Wybierz język, klawiaturę, układ dysku i konto użytkownika. Przed rozpoczęciem sprawdź podsumowanie.

::: warning Partycjonowanie dysku
Zmiany partycji mogą usunąć istniejące systemy i dane. Najpierw zrób osobną kopię zapasową. Zintegrowane odzyskiwanie z migawek jest konfigurowane tylko przy instalacji na Btrfs.
:::

### Źródła oprogramowania

Instalator oferuje wyłącznie oficjalne repozytoria, yay, paru lub Chaotic-AUR. Konfiguracja opcjonalnych źródeł wymaga internetu. Wybierz świadomie: źródła różnią się zasadami zaufania i utrzymania.

## Uruchom ponownie

Po instalacji odłącz pendrive zgodnie z komunikatem i uruchom zainstalowany system. Przejdź do [pierwszego uruchomienia](./first-boot).
