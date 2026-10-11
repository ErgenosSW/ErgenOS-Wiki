# Gaming w ErgenPac

ErgenPac 1.0.1, użyty w przetestowanym lokalnie ISO ErgenOS 1.2, pozwala doinstalować wybrane launchery i dodatki. Otwórz zakładkę **Gaming**, poczekaj na odświeżenie katalogu i wybierz narzędzie. Przed instalacją przejrzyj potwierdzenie.

| Narzędzia | Źródło |
| --- | --- |
| Steam, Lutris | Pakiety natywne |
| Heroic, Faugus | Systemowy Flathub |
| GameMode, MangoHud, GOverlay, Gamescope | Pakiety natywne |

Instalacja natywna wykonuje pełną aktualizację systemu i kontrolę ErgenCTL po transakcji. Instalacja Flatpak korzysta z osobnego mechanizmu. GameMode i MangoHud uwzględniają biblioteki 32-bitowe. Zainstalowanie narzędzia nie włącza go globalnie ani nie konfiguruje automatycznie środowiska gry Flatpak; korzystaj ze wskazówek przy danej pozycji.

## Gdy Steam nie jest dostępny

W wersji 1.0.1 katalog odświeża dostępność w osobnej tymczasowej bazie checkupdates. Nie trzeba ręcznie wykonywać pacman -Syy. Przy problemie z połączeniem aplikacja pokazuje ostrzeżenie i dane z pamięci podręcznej. Sprawdź połączenie, wersję ErgenPac i ponów odświeżenie. W razie dalszego błędu zapisz jego treść.

Gaming Check, konfigurator dla graczy i profile poszczególnych gier pozostają planem na 1.3. Zobacz [zmiany w 1.2](../getting-started/whats-new).
