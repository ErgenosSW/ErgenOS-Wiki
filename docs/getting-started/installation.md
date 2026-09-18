# Installation

## Download and verify

Download the image and its matching SHA-256 checksum from the [official release](https://github.com/ErgenosSW/ErgenOS-Linux/releases). If the image is split into parts, follow that release's reassembly instructions before checking the complete ISO.

### ErgenOS 1.1 image

These commands apply only to `ergenos-1.1.0-x86_64.iso` (2.51 GiB). Use the matching checksum for other releases.

Verify the complete downloaded image:

```bash
echo "460c2ab349681cef4922ebba35b180b24f7a17e7182dbf23cc7c99b13b1fdcce  ergenos-1.1.0-x86_64.iso" | sha256sum -c -
```

If you downloaded the ISO parts and `SHA256SUMS-1.1.0` from the GitHub release, combine the parts in a directory containing only parts from that release, then verify:

```bash
cat ergenos-1.1.0-x86_64.iso.part-* > ergenos-1.1.0-x86_64.iso
sha256sum -c SHA256SUMS-1.1.0
```

## Prepare the USB drive

Use GNOME Disks on Linux, or Rufus or Etcher on Windows. Select the ISO and verify the target USB device.

::: danger The selected USB drive will be erased
Copy any files you need from that USB drive before writing the image. Check the device name and capacity carefully.
:::

## Boot the live environment

Select the USB drive's UEFI entry in your firmware boot menu. The ErgenOS 1.1 ISO requires Secure Boot to be disabled. Post-install support is described in [Secure Boot](../security/secure-boot).

## Run Calamares

Open Install ErgenOS. Choose your language, keyboard, disk layout and user account. Review the final summary before starting.

::: warning Disk layout
Partition changes can erase existing operating systems and data. Make a separate backup first. The integrated snapshot recovery setup is enabled only for Btrfs installations.
:::

### Software sources

The installer offers official repositories only, yay, paru or Chaotic-AUR. Optional source setup requires an internet connection. Choose deliberately; these sources have different trust and maintenance implications.

## Restart

After installation, remove the USB drive when prompted and boot the installed system. Continue with [first boot](./first-boot).
