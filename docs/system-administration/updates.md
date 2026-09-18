# Updates and software

## Use ErgenPac

Use ErgenPac for system and first-party application updates. Review the proposed changes before applying them and read project release notes when an update changes installation or recovery behavior.

## Know your sources

The installer can configure official repositories only, yay, paru or Chaotic-AUR. ErgenOS does not maintain a separate binary mirror for Arch packages.

::: warning Additional sources
Do not assume packages from optional sources have the same review process as official packages. Keep track of what you add and where it comes from.
:::

## Snapshots during updates

On Btrfs installations, snap-pac creates pre and post snapshots around Pacman transactions. See [Btrfs snapshots](../recovery/snapshots) for the difference between booting a snapshot and restoring a system.

## If an update fails

Save the exact error and avoid stacking unrelated changes on top of the failure. Continue with [troubleshooting](../troubleshooting/), including the selected software source in your report.
