# Zgodność sprzętowa

## Opisane testy

ErgenOS został przetestowany w QEMU/KVM w trybie UEFI oraz na Lenovo ThinkPad E14 Gen 2. Na ThinkPadzie sprawdzono Wi-Fi, Bluetooth, dźwięk Bluetooth, uśpienie, sprzętowe klawisze funkcyjne i konfigurację Secure Boot po instalacji. Dla ErgenOS 1.2 zaakceptowano również domyślny motyw oraz obsługę zintegrowanej grafiki AMD i dedykowanej karty NVIDIA na istniejącej instalacji Acer Nitro V 16S AI. Nie była to świeża instalacja ani nowy test NVIDIA z Secure Boot na tym laptopie.

::: warning Ograniczony zakres
Wyniki dotyczą sprawdzonych konfiguracji, a nie uniwersalnej obsługi sprzętu. Zakres testów sprzętu i długoterminowych aktualizacji pozostaje ograniczony.
:::

## Przed instalacją

W środowisku live sprawdź obraz, klawiaturę, sieć i dźwięk. Zapoznaj się ze [znanymi ograniczeniami](/pl/getting-started/known-limitations) wybranego wydania.

## Zbierz przydatne informacje

Zapisz model komputera, kartę graficzną, urządzenie sieciowe, tryb firmware i objawy. Podaj, czy problem występuje w obrazie live, po instalacji czy w obu przypadkach.

## Uzyskaj pomoc

Skorzystaj ze [zgłaszania problemów](../troubleshooting/reporting-issues). Zachowanie związane z Secure Boot opisuje osobny [poradnik](../security/secure-boot).
