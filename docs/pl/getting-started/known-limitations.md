# Znane ograniczenia

Dotyczy ErgenOS 1.1.

## Secure Boot

Po instalacji ErgenCTL przeprowadza przez eksperymentalną konfigurację z shim podpisanym przez Microsoft i własnym kluczem MOK. Samo ISO ErgenOS 1.1 nadal wymaga wyłączenia Secure Boot. Procedurę sprawdziliśmy na QEMU/OVMF i Lenovo ThinkPadzie; zobacz [poradnik konfiguracji](/pl/security/secure-boot).

## Przetestowany sprzęt

ErgenOS został dotąd sprawdzony na ograniczonej liczbie komputerów. Jeśli trafisz na problem sprzętowy, zgłoś go wraz z dokładnym modelem urządzenia i informacjami o systemie.

## Funkcje wymagające internetu

Włączenie dodatkowych repozytoriów i pobieranie programów wymaga połączenia z internetem. Aplikacje ErgenOS pochodzą z podpisanego repozytorium projektu, natomiast pozostałe pakiety są pobierane z serwerów Arch Linux.
