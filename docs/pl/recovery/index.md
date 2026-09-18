# Odzyskiwanie

## Najpierw sprawdź system plików

Zintegrowane odzyskiwanie jest włączane tylko przy instalacji na Btrfs. Łączy Snapper, snap-pac, grub-btrfs i tymczasową zapisywalną warstwę podczas rozruchu migawki.

## Poznaj przebieg odzyskiwania

Przeczytaj [migawki Btrfs](./snapshots), zanim skorzystasz ze starszego wpisu rozruchowego. Uruchomienie migawki pozwala obejrzeć wcześniejszy stan systemu; samo w sobie nie kończy przywracania.

::: warning Zachowaj osobny backup
Migawki na dysku systemowym nie chronią przed utratą tego dysku. Ważne dane kopiuj osobno.
:::

## Kiedy poprosić o pomoc

Jeżeli nie potrafisz określić właściwego punktu przywracania lub układu systemu plików, zbierz błąd rozruchu i informacje o instalacji do [zgłoszenia problemu](../troubleshooting/reporting-issues).
