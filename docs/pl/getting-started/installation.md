# Instalacja

## Pobierz i sprawdź obraz

Pobierz obraz i odpowiadającą mu sumę SHA-256 z [oficjalnego wydania](https://github.com/ErgenosSW/ErgenOS-Linux/releases). Jeśli obraz jest podzielony na części, połącz je zgodnie z instrukcją tego wydania, a następnie sprawdź pełny plik ISO.

## Przygotuj pendrive

W Linuksie użyj programu Dyski GNOME albo narzędzia opisanego w [oficjalnym poradniku instalacji](https://ergenossw.github.io/ErgenOS-Website/pl/installation.html). Wskaż obraz ISO i sprawdź wybrane urządzenie USB.

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
