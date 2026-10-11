# Gaming in ErgenPac

ErgenPac 1.0.1, used in the locally tested ErgenOS 1.2 ISO, installs optional launchers and tools. Open **Gaming**, allow the catalog to refresh and select a tool. Review the confirmation before installing.

| Tools | Source |
| --- | --- |
| Steam, Lutris | Native packages |
| Heroic, Faugus | System Flathub |
| GameMode, MangoHud, GOverlay, Gamescope | Native packages |

Native installation performs a full system upgrade and an ErgenCTL post-transaction check. Flatpak uses its separate installation mechanism. GameMode and MangoHud include 32-bit libraries. Installing a tool does not enable it globally or automatically configure a Flatpak game's runtime; follow the hints for each entry.

## If Steam is unavailable

Version 1.0.1 refreshes availability in a separate temporary checkupdates database. Manual pacman -Syy is not required. On connection failure, the application shows a warning and cached availability. Check connectivity and the ErgenPac version, then refresh again. Save the exact error if it persists.

Gaming Check, guided gaming setup and per-game profiles remain planned for 1.3. See [what changed in 1.2](../getting-started/whats-new).
