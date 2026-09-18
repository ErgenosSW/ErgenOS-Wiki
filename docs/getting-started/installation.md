# Installation

## Download and verify

Download the image and its matching SHA-256 checksum from the [official release](https://github.com/ErgenosSW/ErgenOS-Linux/releases). If the image is split into parts, follow that release's reassembly instructions before checking the complete ISO.

## Prepare the USB drive

Use GNOME Disks on Linux, or the image-writing tool described in the [official installation guide](https://ergenossw.github.io/ErgenOS-Website/installation.html). Select the ISO and verify the target USB device.

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
