# Checklista wydania ISO

Używaj tej listy dla każdego kandydata do wydania. Wyniki zapisz w zgłoszeniu wydania lub notatkach z testów, wskazując dokładny obraz ISO. Ta strona jest szablonem, a nie potwierdzeniem przeprowadzenia testów.

Każdy wiersz oznacz jako **PASS**, **FAIL**, **NOT RUN** lub **N/A**, podając powód dla N/A. Dołącz dowód wyniku lub link do błędu. Puste pole oznacza NOT RUN. Sam udany build nie potwierdza działania instalacji ani odzyskiwania.

## Zapisz dane kandydata

```text
Wersja i kandydat:
Commit źródeł:
Nazwa ISO i SHA-256:
Data budowania:
Tester i data testu:
Model sprzętu lub hypervisor:
CPU / GPU / urządzenie sieciowe:
Tryb firmware i stan Secure Boot:
System plików i tryb partycjonowania:
Źródło oprogramowania wybrane w Calamares:
Wynik / dowód / powiązane zgłoszenie:
```

## 1. Budowanie i pliki wydania

Polecenia budowania uruchamiaj z repozytorium ErgenOS-Linux na przygotowanej maszynie. Opis dotyczący obecnego skryptu sprawdź ponownie w jego pomocy, jeśli zmieni się proces budowania.

| Test | Oczekiwany rezultat | Wynik / dowód |
| --- | --- | --- |
| Wersja i changelog | VERSION, opis wydania i planowany tag dotyczą tego samego kandydata. | |
| Walidacja profilu | `./build.sh --validate-only` kończy się powodzeniem. Sprawdza profil i rozwiązywanie pakietów; nie testuje rozruchu. | |
| Budowanie ISO | `./build.sh` kończy się powodzeniem wraz z kontrolą gotowego obrazu. Zapisz użyte opcje przebudowy pakietów. | |
| Pełny obraz | ISO i wygenerowany SHA256SUMS są w skonfigurowanym katalogu wynikowym; weryfikacja sumy przechodzi. | |
| Części obrazu, jeśli używane | Build z `--release-parts` tworzy obie numerowane części i SHA256SUMS w katalogu wydania. Połączony obraz ma tę samą sumę co pełne ISO. | |
| Pobrana kopia | Pobierz dokładnie te pliki, które mają otrzymać użytkownicy, i niezależnie sprawdź ich sumy. | |

## 2. Rozruch live i instalacja

::: warning Dyski testowe
Używaj jednorazowej VM albo osobnego dysku testowego. Partycjonowanie i przywracanie mogą zastąpić dane. Kopie zapasowe trzymaj poza testowanym dyskiem.
:::

| Test | Oczekiwany rezultat | Wynik / dowód |
| --- | --- | --- |
| Rozruch live UEFI | Kandydat uruchamia GNOME w VM i na dostępnym sprzęcie testowym. | |
| Wymaganie Secure Boot | Zachowanie live odpowiada opublikowanym ograniczeniom. Według dokumentacji ISO ErgenOS 1.1 wymaga wyłączenia Secure Boot. | |
| Podstawowy sprzęt w live | Klawiatura, obraz, sieć i dźwięk działają na zapisanej konfiguracji. | |
| Automatyczna instalacja Btrfs | Calamares kończy instalację na dysku testowym, a system startuje bez pendrive'a/ISO. | |
| Partycjonowanie ręczne | Świadomie wybrany, obsługiwany układ instaluje się i uruchamia; zmiany partycji odpowiadają podsumowaniu. | |
| Inne oferowane systemy plików | Każdy deklarowany system plików jest przetestowany; odzyskiwanie Btrfs nie jest przedstawiane jako dostępne na pozostałych. | |
| Wybór źródeł pakietów | Sprawdź osobno instalacje official-only, yay, paru i Chaotic-AUR, jeśli są oferowane. Zapisz wynik każdej z nich. | |
| Przerwanie sieci | Zachowanie instalatora i komunikat błędu są zrozumiałe, gdy nie da się skonfigurować opcjonalnego źródła. | |
| Użytkownik i lokalizacja | Logowanie, klawiatura, język i ustawienia czasu zachowują się po restarcie. | |

## 3. Zainstalowany system i aktualizacje

| Test | Oczekiwany rezultat | Wynik / dowód |
| --- | --- | --- |
| Aplikacje projektu | ErgenOS Welcome, ErgenCTL i ErgenPac uruchamiają się i wykonują swoje główne zadania. | |
| Dostęp do repozytoriów | Podpisane pakiety ErgenOS i wybrane źródła zewnętrzne można odświeżać i używać. | |
| Pełna aktualizacja | ErgenPac aktualizuje system; po restarcie system i aplikacje działają. | |
| Zarządzanie pakietami | Zainstaluj i usuń nieistotną aplikację testową z każdego deklarowanego źródła, w tym Flatpak tam, gdzie jest skonfigurowany. | |
| Driver Manager | Wykryty sprzęt i proponowane sterowniki odpowiadają maszynie; sprawdź restart po zmianie sterownika. | |
| Aktualizacja kernela lub bootloadera | Jeśli taka aktualizacja jest dostępna w teście kandydata, sprawdź kolejny zwykły rozruch i wpisy odzyskiwania. W przeciwnym razie zapisz NOT RUN i lukę w testach. | |

## 4. Odzyskiwanie Btrfs

Oczekiwane zachowanie projektu opisuje [poradnik migawek](../recovery/snapshots).

| Test | Oczekiwany rezultat | Wynik / dowód |
| --- | --- | --- |
| Konfiguracja Snappera | W instalacji Btrfs dostępne są migawki głównego systemu plików. | |
| Migawki Pacmana | Transakcja testowa tworzy migawki przed i po operacji; menu odzyskiwania je wykrywa. | |
| Rozruch migawki | Wybrana wcześniejsza migawka uruchamia się z tymczasową zapisywalną warstwą. | |
| Przywracanie przez ErgenCTL | Na jednorazowym systemie wykonaj przywracanie i potwierdź zwykły rozruch przywróconego systemu. | |
| Wznawianie sesji | Rozruch migawki nie wznawia zahibernowanej zwykłej sesji. Normalną hibernację przetestuj osobno, jeśli jest skonfigurowana. | |

## 5. Secure Boot i sprzęt

Korzystaj z [procedury Secure Boot](../security/secure-boot). Wyniki konfiguracji zapisuj oddzielnie od zwykłego rozruchu UEFI.

| Test | Oczekiwany rezultat | Wynik / dowód |
| --- | --- | --- |
| Gotowość, konfiguracja i rejestracja MOK | ErgenCTL wykonuje udokumentowaną procedurę; klucze platformy w firmware są zachowane. | |
| Rozruch i status | Zainstalowany system uruchamia się przez wpis Secure Boot, a kontrole stanu przechodzą. | |
| Aktualizacje i DKMS | Po zmianach kernela, GRUB-a lub DKMS sprawdź podpisy, status i rozruch na właściwym sprzęcie. | |
| Odzyskiwanie z Secure Boot | Rozruch migawki i przywracanie przez ErgenCTL działają na zapisanym systemie testowym Btrfs. | |
| Konserwacja i usuwanie | Udokumentowane usuwanie działa na osobnym systemie testowym i pozostawia działającą konfigurację rozruchu. | |
| Podstawowy test sprzętu | Zapisz osobno wyniki Wi-Fi, Bluetooth/dźwięku, obrazu, urządzeń wejściowych, uśpienia/wznowienia i klawiszy funkcyjnych dla każdej maszyny. | |
| Sprzęt nieobsługiwany lub nietestowany | Opisz luki w testach; udana próba w VM nie oznacza ogólnej zgodności sprzętowej. | |

## 6. Decyzja o wydaniu

- [ ] Każdy zaplanowany test ma wynik, identyfikator maszyny/kandydata i dowód.
- [ ] Błędy blokujące instalację, normalny rozruch, aktualizację i deklarowane odzyskiwanie są naprawione i ponownie sprawdzone.
- [ ] Pozostałe błędy i pozycje NOT RUN mają jawną decyzję opiekuna oraz opublikowane ograniczenie tam, gdzie jest potrzebne.
- [ ] Publikowane ISO jest przetestowanym kandydatem; zmieniony obraz otrzymał nową sumę i powtórzono testy dotyczące zmian.
- [ ] Strony instalacji, Secure Boot i ograniczeń EN/PL odpowiadają kandydatowi.
- [ ] Adres pobierania, rozmiar, wersja i suma na Website wskazują przetestowane pliki.
- [ ] Opis wydania, tag i pliki sprawdzono przed publikacją.
- [ ] Po publikacji sprawdzono publiczne pobieranie, sumę i odnośniki.

```text
Decyzja: HOLD / RELEASE
Kandydat i SHA-256:
Błędy blokujące:
Zaakceptowane ograniczenia i nietestowane konfiguracje:
Opiekun i data:
```
