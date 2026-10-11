# Zmiany w ErgenOS 1.2

ISO 1.2.0 zostało przebudowane i zaakceptowane w lokalnych testach VM. Pełne ISO jest dostępne na [MediaFire](https://www.mediafire.com/file/5pflsx05qjzptld/ergenos-1.2.0-x86_64.iso/file). [Wydanie GitHub](https://github.com/ErgenosSW/ErgenOS-Linux/releases/tag/v1.2.0) zawiera dwie części ISO, sumy kontrolne i instrukcję składania.

- Domyślny motyw ErgenOS dla GNOME Shell oraz GTK3 i GTK4/libadwaita, w tym Nautilusa.
- Odświeżone interfejsy ErgenCTL, ErgenPac i Welcome.
- Opcjonalne launchery i dodatki w [Gaming](../system-administration/gaming) w ErgenPac 1.0.1.
- Rozbudowana diagnostyka hybrydowej grafiki i kontrola po aktualizacji w ErgenCTL.
- Menu zainstalowanego systemu: ErgenOS Linux, Advanced options i ErgenOS Snapshots przy skonfigurowanym Btrfs/Snapper. Ukryte wpisy firmware i BootNext; poprawka utrzymywana przy aktualizacji GRUB-a.

Welcome jest portalem skrótów. Gaming Check, konfigurator dla graczy, profile gier, szersza diagnostyka zasilania oraz automatyczne wykrywanie instalacji z Live są odłożone do 1.3.

Test VM potwierdza przebudowany obraz, Gaming i docelowe menu GRUB. Nie oznacza ponownego pełnego testu Secure Boot na każdym sprzęcie. Sześć testów napraw ErgenCTL nie przeszło wcześniejszego budowania ze źródeł w kontenerze; przyczyna pozostaje niewyjaśniona. Zaakceptowany obraz zbudowano bezpośrednio przez mkarchiso z opublikowanymi podpisanymi paczkami aplikacji.
