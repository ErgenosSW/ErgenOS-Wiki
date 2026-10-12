# Installation

## Download and verify

Download the complete image from [MediaFire](https://www.mediafire.com/file/5pflsx05qjzptld/ergenos-1.2.0-x86_64.iso/file), or download both parts and checksum files from the [official GitHub release](https://github.com/ErgenosSW/ErgenOS-Linux/releases/tag/v1.2.0).

### ErgenOS 1.2 image

These commands apply only to `ergenos-1.2.0-x86_64.iso`, which is 2,751,954,944 bytes (2.56 GiB). Use the matching checksum for other releases.

Verify the complete downloaded image:

```bash
echo "c152f4881a2bd0c3a8921f2139a2e3a538cd6cd49160e90cac6650df2a47599b  ergenos-1.2.0-x86_64.iso" | sha256sum -c -
```

If you downloaded the split assets from GitHub, place `part01`, `part02`, `PARTS-SHA256SUMS` and `ISO-SHA256SUMS` in one directory. Verify the parts, assemble the ISO in order and verify the result:

```bash
sha256sum -c PARTS-SHA256SUMS
cat ergenos-1.2.0-x86_64.iso.part01 ergenos-1.2.0-x86_64.iso.part02 > ergenos-1.2.0-x86_64.iso
sha256sum -c ISO-SHA256SUMS
```

Do not flash either part separately. GitHub's automatically generated source-code archives are not installation images.

## Prepare the USB drive

Use GNOME Disks on Linux, or Rufus or Etcher on Windows. Select the ISO and verify the target USB device.

::: danger The selected USB drive will be erased
Copy any files you need from that USB drive before writing the image. Check the device name and capacity carefully.
:::

## Boot the live environment

Select the USB drive's UEFI entry in your firmware boot menu. The ErgenOS 1.2 ISO requires Secure Boot to be disabled. Post-install support is described in [Secure Boot](../security/secure-boot).

## Run Calamares

Open Install ErgenOS. Choose your language, keyboard, disk layout and user account. Review the final summary before starting.

::: warning Disk layout
Partition changes can erase existing operating systems and data. Make a separate backup first. The integrated snapshot recovery setup is enabled only for Btrfs installations.
:::

### Software sources

The installer offers official repositories only, yay, paru or Chaotic-AUR. Optional source setup requires an internet connection. Choose deliberately; these sources have different trust and maintenance implications.

## Restart

After installation, remove the USB drive when prompted and boot the installed system. Continue with [first boot](./first-boot).
