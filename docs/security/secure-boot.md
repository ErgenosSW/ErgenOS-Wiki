# Secure Boot

::: warning Experimental support
The ErgenOS 1.1 ISO must be booted and installed with Secure Boot disabled. Post-install support remains experimental.
:::

## How the project supports it

The documented setup uses Microsoft-signed shim and a locally enrolled Machine Owner Key (MOK). Packages are available from the signed ErgenOS repository.

## Follow the maintained setup guide

Use the [official Secure Boot setup guide](https://ergenossw.github.io/ErgenOS-Website/secure-boot.html) for the exact installation and enrollment steps. This wiki does not duplicate those commands, so firmware-sensitive instructions remain in one maintained location.

## Recovery compatibility

The project reports snapshot discovery and ErgenCTL rollback through the signed GRUB loader in its tested configurations. This does not establish compatibility with every firmware or device. See [hardware](../hardware/) and [recovery](../recovery/).
