# What's new in ErgenOS 1.2

ISO 1.2.0 was rebuilt and accepted in local VM testing. Public image publication is being prepared; the website download still points to ISO 1.1.

- Default ErgenOS theme for GNOME Shell and GTK3/GTK4/libadwaita, including Nautilus.
- Redesigned ErgenCTL, ErgenPac and Welcome interfaces.
- Optional launchers and tools in ErgenPac 1.0.1 [Gaming](../system-administration/gaming).
- Expanded hybrid GPU diagnostics and post-update verification in ErgenCTL.
- Installed-system menu: ErgenOS Linux, Advanced options and ErgenOS Snapshots with configured Btrfs/Snapper. Firmware and BootNext entries are hidden; a hook maintains this through GRUB updates.

Welcome is a shortcut portal. Gaming Check, guided gaming setup, per-game profiles, expanded power diagnostics and automatic Live installation discovery are deferred to 1.3.

VM acceptance covers the rebuilt image, Gaming and the intended GRUB menu. It does not represent a complete new Secure Boot test on every hardware configuration. Six ErgenCTL repair tests failed during an earlier container source build; the cause remains unresolved. The accepted image was built directly with mkarchiso using published signed application packages.
