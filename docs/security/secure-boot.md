# Secure Boot

::: warning Experimental support
Post-install Secure Boot support remains experimental.
:::
ErgenOS can use Microsoft-signed shim and your own Machine Owner Key without replacing the firmware keys.

**Before you begin:** the ErgenOS 1.1 installation ISO does not currently boot with Secure Boot enabled. Install ErgenOS normally with Secure Boot disabled, then follow this guide from the installed system.

**Test coverage:** this workflow has been validated with QEMU/OVMF and on a physical Lenovo ThinkPad. Firmware interfaces differ between manufacturers, so keep your firmware recovery options and important data available.

## 1. Update ErgenOS and install the tools

Install the current ErgenCTL and Secure Boot backend from the signed ErgenOS repository.

```bash
sudo pacman -Syu ergenctl ergenos-secureboot
```

## 2. Check readiness in ErgenCTL

Open **ErgenCTL**, switch to **Secure Boot** and select **Check readiness**. This checks UEFI mode, the EFI System Partition and the required boot components without changing the system.

## 3. Prepare Secure Boot

Select **Set up Secure Boot**, enter a one-time MOK password twice and approve the system authentication dialog. ErgenCTL creates the signing key, signs GRUB, installed kernels and DKMS modules, and creates the separate ErgenOS Secure Boot entry.

The MOK password is used only once during the next boot. It is not your system password and does not replace or expose the private signing key.

## 4. Enrol the Machine Owner Key

Restart through the **ErgenOS Secure Boot** entry. In MokManager choose **Enroll MOK**, continue, confirm the key and enter the temporary password from the previous step. Then reboot.

## 5. Enable Secure Boot in the firmware

Open the computer's UEFI settings and enable Secure Boot in its standard or default-key mode. Do not clear or replace the platform keys. Save the settings and boot **ErgenOS Secure Boot**.

## 6. Verify the result

Return to **ErgenCTL → Secure Boot** and select **Check status**. The page verifies nine parts of the setup separately. When everything is working, all checks are complete and the page reports that Secure Boot is active.

**Prefer the terminal?** The complete CLI remains available. Use `sudo ergenos-secureboot enable --dry-run`, then `sudo ergenos-secureboot enable`. After enrollment and firmware activation, verify with `sudo ergenos-secureboot check` and `mokutil --sb-state`.

**After updates:** packaged hooks handle kernel and GRUB updates automatically. ErgenPac Driver Manager also refreshes ErgenOS Secure Boot after installing DKMS drivers. For a DKMS driver installed by another method, such as an NVIDIA or Broadcom Wi-Fi module, run `sudo ergenos-secureboot refresh` and verify the result with `sudo ergenos-secureboot check`.

**Btrfs recovery remains available:** the signed loader reads the current GRUB configuration from the installed boot filesystem, so newly created Snapper recovery points remain available under **ErgenOS Snapshots**. This path has been tested on a physical ThinkPad by deliberately breaking the normal system, booting a snapshot with Secure Boot enabled and completing the rollback in ErgenCTL.

**Need to remove it?** Open **Maintenance and removal** on the Secure Boot page and follow the displayed steps. The same process is available with `remove-mok` and `disable` in the terminal. The package blocks unsafe removal while support is still active.
