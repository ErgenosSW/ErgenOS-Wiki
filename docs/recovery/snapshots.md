# Btrfs snapshots

## What creates the recovery points

On a Btrfs installation, Snapper manages snapshots of the root filesystem. snap-pac creates snapshots before and after Pacman transactions. grub-btrfs adds discovered snapshots to the GRUB menu.

## What snapshot boot means

ErgenOS includes grub-btrfs-overlayfs. It places a temporary writable overlay over a read-only snapshot so the earlier system can boot.

::: warning Temporary changes
Treat changes made in the snapshot session as temporary. Booting a snapshot does not permanently restore it as your normal system.
:::

## Rollback

ErgenCTL provides the project's rollback workflow. Before confirming a rollback, identify the snapshot and review the action shown by the installed version of ErgenCTL. For version-specific questions use the [ErgenCTL repository](https://github.com/ErgenosSW/ErgenCTL).

## Hibernation

Normal boot entries retain hibernation support. Snapshot entries use noresume to avoid resuming into a historical system state.

## Limits

This setup applies to Btrfs installations. Snapshot availability does not guarantee protection for every file or mounted filesystem. Keep a separate backup of important data.
