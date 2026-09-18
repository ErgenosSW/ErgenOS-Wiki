# Recovery

## Check your filesystem first

The integrated recovery setup is enabled only for Btrfs installations. It combines Snapper, snap-pac, grub-btrfs and a temporary writable overlay for snapshot boot.

## Understand the workflow

Read [Btrfs snapshots](./snapshots) before relying on an older boot entry. A snapshot boot lets you inspect an earlier system state; it is not itself a completed rollback.

::: warning Keep a separate backup
Snapshots on the system disk do not protect against losing that disk. Keep important data backed up separately.
:::

## When to ask for help

If you cannot identify the correct recovery point or filesystem layout, collect the boot error and your installation details for a [problem report](../troubleshooting/reporting-issues).
