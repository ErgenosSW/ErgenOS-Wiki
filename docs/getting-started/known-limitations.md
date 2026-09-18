# Known limitations

Applies to ErgenOS 1.1.

## Secure Boot

ErgenCTL provides guided experimental setup after installation using Microsoft-signed shim and a Machine Owner Key. The ErgenOS 1.1 ISO itself still requires Secure Boot to be disabled. The workflow has been validated with QEMU/OVMF and one Lenovo ThinkPad; see the [setup guide](/security/secure-boot).

## Hardware coverage

The range of validated computer configurations is still limited. Please report hardware-specific problems with the exact device model and relevant system information.

## Network-dependent options

Optional repository setup and downloading additional software require an internet connection. ErgenOS applications use the signed ErgenOS repository, while Arch packages continue to come from Arch mirrors.
