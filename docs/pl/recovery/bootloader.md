# Odzyskiwanie bootloadera

ErgenCTL potrafi odbudować bootloader zainstalowanego ErgenOS ze środowiska
ErgenOS Live. Tworzy kopię `/boot`, odbudowuje initramfs i GRUB, ponownie generuje
menu migawek Btrfs oraz odtwarza wpis firmware **ErgenOS Secure Boot**, jeżeli ta
funkcja była skonfigurowana.

::: warning Uruchom Live ISO z wyłączonym Secure Boot
Nośnik instalacyjny ErgenOS 1.1 nie uruchamia się przy włączonym Secure Boot.
Wyłącz tę funkcję tymczasowo w firmware. Klucze MOK zainstalowanego systemu
pozostaną niezmienione.
:::

## 1. Zidentyfikuj instalację

Wyświetl dyski i systemy plików:

```bash
lsblk -o NAME,SIZE,FSTYPE,FSVER,LABEL,UUID,MOUNTPOINTS
```

Znajdź główny system plików zainstalowanego ErgenOS. Nie kopiuj nazw urządzeń z
przykładu — wybranie niewłaściwej partycji może uszkodzić inną instalację.

Dla standardowego układu Btrfs najpierw sprawdź subvolume:

```bash
sudo mkdir -p /mnt/ergenos-top
sudo mount -o subvolid=5 /dev/PARTYCJA-ROOT /mnt/ergenos-top
sudo btrfs subvolume list /mnt/ergenos-top
```

Standardowe główne subvolume ErgenOS ma nazwę `@`.

## 2. Zamontuj główny system

```bash
sudo mkdir -p /mnt/ergenos
sudo mount -o subvol=@ /dev/PARTYCJA-ROOT /mnt/ergenos
```

Podczas odzyskiwania ErgenCTL odczytuje `fstab` zainstalowanego systemu i montuje
jego osobne `/boot`, `/boot/efi` oraz `/.snapshots`.

## 3. Uruchom odzyskiwanie graficzne

Otwórz **ErgenCTL** w środowisku Live i wybierz **Recover installed bootloader**.
Potwierdź `/mnt/ergenos` jako zamontowany system, wybierz **Show plan**, sprawdź
wynik, a następnie uruchom **Repair bootloader**.

Ta funkcja pojawia się wyłącznie w środowisku ErgenOS Live.

## Alternatywa w terminalu

Zawsze najpierw obejrzyj plan:

```bash
sudo ergenctl fix bootloader --root /mnt/ergenos --dry-run
sudo ergenctl fix bootloader --root /mnt/ergenos --yes
```

Naprawa kończy się powodzeniem dopiero po sprawdzeniu kernela i initramfs,
zwykłego programu EFI, głównej konfiguracji GRUB, wygenerowanego menu migawek
oraz rekurencyjnego monitorowania przez `grub-btrfsd`. Jeśli Secure Boot był
skonfigurowany, ErgenCTL odbudowuje także podpisany GRUB, odtwarza jego wpis UEFI
i sprawdza podpisy istniejących kerneli bez przebudowy niezwiązanych modułów
DKMS.

## 4. Uruchom ponownie i sprawdź wynik

Po pomyślnym raporcie odmontuj systemy plików i uruchom komputer ponownie. Jeżeli
Secure Boot był skonfigurowany, wybierz **ErgenOS Secure Boot**. Sprawdź, czy GRUB
zawiera zwykły wpis ErgenOS oraz **ErgenOS Snapshots**, a następnie uruchom
zainstalowany system.

::: danger Nie kontynuuj po nieudanym raporcie
Jeżeli walidacja się nie powiedzie, ErgenCTL przywraca kopię `/boot`. Przed
restartem lub ponowieniem naprawy przeczytaj zgłoszoną przyczynę i usuń problem.
:::
