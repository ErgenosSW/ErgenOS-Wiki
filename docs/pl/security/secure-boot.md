# Secure Boot

::: warning Obsługa eksperymentalna
Obsługa Secure Boot po instalacji pozostaje eksperymentalna.
:::
Skonfiguruj Secure Boot za pomocą shim podpisanego przez Microsoft i własnego klucza MOK — bez wymiany kluczy zapisanych w UEFI.

**Zanim zaczniesz:** instalacyjne ISO ErgenOS 1.1 nie uruchamia się jeszcze przy włączonym Secure Boot. Najpierw zainstaluj system z wyłączoną funkcją, a dopiero później wykonaj poniższe kroki.

**Na czym to sprawdziliśmy:** procedura działa na QEMU/OVMF oraz fizycznym Lenovo ThinkPadzie. Ustawienia UEFI różnią się w zależności od producenta, dlatego przed rozpoczęciem zabezpiecz ważne dane.

## 1. Zaktualizuj system i zainstaluj narzędzia

Z podpisanego repozytorium ErgenOS pobierz najnowszy ErgenCTL razem z modułem obsługującym Secure Boot.

```bash
sudo pacman -Syu ergenctl ergenos-secureboot
```

## 2. Uruchom test gotowości

Otwórz **ErgenCTL**, przejdź do zakładki **Secure Boot** i kliknij **Check readiness**. Program bez wprowadzania zmian sprawdzi tryb UEFI, partycję EFI i potrzebne składniki rozruchowe.

## 3. Przygotuj Secure Boot

Kliknij **Set up Secure Boot**, dwukrotnie wpisz jednorazowe hasło MOK i zatwierdź systemowe okno uwierzytelniania. ErgenCTL utworzy klucz, podpisze GRUB, jądra i moduły DKMS, a następnie doda osobną pozycję ErgenOS Secure Boot.

Hasło MOK będzie potrzebne tylko raz, przy następnym uruchomieniu. Nie jest to hasło do konta i nie ma dostępu do prywatnego klucza podpisującego.

## 4. Dodaj klucz MOK

Uruchom komputer ponownie przez pozycję **ErgenOS Secure Boot**. W MokManager wybierz **Enroll MOK**, potwierdź klucz i wpisz tymczasowe hasło z poprzedniego kroku. Następnie uruchom komputer ponownie.

## 5. Włącz Secure Boot w firmware

Otwórz ustawienia UEFI komputera i włącz Secure Boot w trybie standardowym lub z domyślnymi kluczami. Nie usuwaj ani nie zastępuj kluczy platformy. Zapisz ustawienia i uruchom pozycję **ErgenOS Secure Boot**.

## 6. Sprawdź, czy wszystko działa

Wróć do zakładki **Secure Boot** w ErgenCTL i kliknij **Check status**. Program osobno sprawdzi dziewięć elementów konfiguracji. Jeśli wszystkie są gotowe, zobaczysz informację, że Secure Boot jest aktywny.

**Wolisz terminal?** Nadal możesz przejść cały proces ręcznie. Zacznij od `sudo ergenos-secureboot enable --dry-run`, a następnie wykonaj `sudo ergenos-secureboot enable`. Po dodaniu klucza MOK i włączeniu funkcji w UEFI sprawdź wynik przez `sudo ergenos-secureboot check` oraz `mokutil --sb-state`.

**Po aktualizacjach:** dołączone hooki automatycznie obsługują aktualizacje jądra i GRUB-a. Driver Manager w ErgenPac odświeża też ErgenOS Secure Boot po instalacji sterowników DKMS. Jeśli zainstalujesz moduł DKMS inną metodą, na przykład sterownik NVIDIA albo moduł Wi-Fi Broadcom, wykonaj `sudo ergenos-secureboot refresh` i sprawdź wynik poleceniem `sudo ergenos-secureboot check`.

**Snapshoty pozostają dostępne:** podpisany program rozruchowy korzysta z bieżącej konfiguracji zapisanej na partycji rozruchowej, dlatego nowe punkty przywracania Snappera pojawiają się w menu **ErgenOS Snapshots**. Sprawdziliśmy cały scenariusz na ThinkPadzie: celowo uszkodziliśmy normalny system, uruchomiliśmy snapshot przy aktywnym Secure Boot i przywróciliśmy sprawny stan za pomocą ErgenCTL.

**Chcesz wyłączyć obsługę?** Rozwiń sekcję **Maintenance and removal** w ErgenCTL i wykonaj pokazane tam kroki. Ten sam proces jest dostępny w terminalu przez polecenia `remove-mok` i `disable`. Pakiet nie pozwoli usunąć się w sposób, który mógłby unieruchomić system.
