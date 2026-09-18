# Secure Boot

::: warning Obsługa eksperymentalna
Obraz ErgenOS 1.1 trzeba uruchomić i zainstalować z wyłączonym Secure Boot. Obsługa po instalacji pozostaje eksperymentalna.
:::

## Jak projekt realizuje obsługę

Opisana konfiguracja wykorzystuje shim podpisany przez Microsoft oraz lokalnie zarejestrowany klucz Machine Owner Key (MOK). Pakiety są dostępne w podpisanym repozytorium ErgenOS.

## Skorzystaj z utrzymywanego poradnika

Dokładne kroki instalacji i rejestracji klucza znajdziesz w [oficjalnym poradniku Secure Boot](https://ergenossw.github.io/ErgenOS-Website/pl/secure-boot.html). Wiki odsyła do niego, aby instrukcje dotyczące firmware były utrzymywane w jednym miejscu.

## Zgodność z odzyskiwaniem

Projekt opisuje przetestowane wykrywanie migawek i przywracanie przez ErgenCTL z podpisanym GRUB-em. Nie oznacza to zgodności z każdym firmware i urządzeniem. Zobacz [sprzęt](../hardware/) i [odzyskiwanie](../recovery/).
