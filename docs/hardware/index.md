# Hardware compatibility

## Reported testing

ErgenOS has been tested on QEMU/KVM in UEFI mode and on a Lenovo ThinkPad E14 Gen 2. Wi-Fi, Bluetooth, Bluetooth audio, suspend, hardware function keys and the post-install Secure Boot workflow were covered on the ThinkPad. For ErgenOS 1.2, the default theme and AMD integrated graphics plus NVIDIA dedicated graphics workflow were accepted on an existing Acer Nitro V 16S AI installation. This was not a fresh installation or a new NVIDIA Secure Boot validation on that laptop.

::: warning Limited coverage
These results describe tested configurations, not universal hardware support. Long-term upgrade testing and hardware coverage remain limited.
:::

## Before installation

Use the live environment to check display output, keyboard, network and audio. Check the [known limitations](/getting-started/known-limitations) for the release you intend to install.

## Collect useful details

Record the computer model, graphics adapter, network device, firmware mode and symptoms. Include whether the problem occurs in the live image, installed system or both.

## Get help

Follow [reporting a problem](../troubleshooting/reporting-issues). Secure Boot-specific behavior is covered separately in [Secure Boot](../security/secure-boot).
