# Bootloader recovery

ErgenCTL can rebuild an installed ErgenOS bootloader from the ErgenOS Live ISO.
It backs up `/boot`, rebuilds initramfs and GRUB, regenerates the Btrfs snapshot
menu and restores the **ErgenOS Secure Boot** firmware entry when Secure Boot was
configured.

::: warning Boot the Live ISO with Secure Boot disabled
ErgenOS 1.1 installation media does not boot with Secure Boot enabled. Disable
it temporarily in firmware. The installed system's MOK keys remain unchanged.
:::

## 1. Identify the installation

List disks and filesystems:

```bash
lsblk -o NAME,SIZE,FSTYPE,FSVER,LABEL,UUID,MOUNTPOINTS
```

Identify the installed ErgenOS root filesystem. Do not copy device names from an
example: selecting the wrong partition can damage another installation.

For the standard Btrfs layout, inspect its subvolumes before mounting it:

```bash
sudo mkdir -p /mnt/ergenos-top
sudo mount -o subvolid=5 /dev/ROOT-PARTITION /mnt/ergenos-top
sudo btrfs subvolume list /mnt/ergenos-top
```

The standard ErgenOS root subvolume is `@`.

## 2. Mount the installed root

```bash
sudo mkdir -p /mnt/ergenos
sudo mount -o subvol=@ /dev/ROOT-PARTITION /mnt/ergenos
```

ErgenCTL reads the installed system's `fstab` and mounts its separate `/boot`,
`/boot/efi` and `/.snapshots` filesystems during recovery.

## 3. Run the graphical recovery

Open **ErgenCTL** in the Live environment and select **Recover installed
bootloader**. Confirm `/mnt/ergenos` as the mounted root, choose **Show plan**,
review the result and then run **Repair bootloader**.

This action is shown only in the ErgenOS Live environment.

## Command-line alternative

Always inspect the plan first:

```bash
sudo ergenctl fix bootloader --root /mnt/ergenos --dry-run
sudo ergenctl fix bootloader --root /mnt/ergenos --yes
```

The repair succeeds only after validating the kernel and initramfs, the normal
EFI loader, the main GRUB configuration, the generated snapshot menu and
recursive `grub-btrfsd` monitoring. When Secure Boot is configured it also
rebuilds the signed GRUB image, restores its UEFI entry and verifies existing
kernel signatures without rebuilding unrelated DKMS modules.

## 4. Restart and verify

After a successful report, unmount the filesystems and restart. If Secure Boot
was configured, select **ErgenOS Secure Boot**. Confirm that GRUB contains both
the normal ErgenOS entry and **ErgenOS Snapshots**, then boot the installed
system.

::: danger Do not continue after a failed report
ErgenCTL restores its `/boot` backup when validation fails. Read the reported
cause and correct it before restarting or repeating the repair.
:::
