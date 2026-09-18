# ISO release checklist

Use this checklist for each release candidate. Record results in a release issue or your test notes, identifying the exact ISO. This page is a template, not evidence that a release has passed testing.

Mark each row **PASS**, **FAIL**, **NOT RUN** or **N/A**, with a reason for N/A. Attach evidence or link a bug for failures. An empty result means NOT RUN. A successful build alone does not establish that installation or recovery works.

## Record the candidate

```text
Version and candidate:
Source commit:
ISO filename and SHA-256:
Build date:
Tester and test date:
Hardware model or hypervisor:
CPU / GPU / network device:
Firmware mode and Secure Boot state:
Filesystem and partitioning mode:
Software source selected in Calamares:
Result / evidence / related issue:
```

## 1. Build and release files

Run build operations from the ErgenOS-Linux repository on your configured build machine. These commands describe the current build script; recheck its help when changing the build process.

| Check | Expected result | Result / evidence |
| --- | --- | --- |
| Version and changelog | VERSION, release notes and intended tag describe the same candidate. | |
| Profile validation | `./build.sh --validate-only` succeeds. This validates the profile and package resolution; it is not a boot test. | |
| ISO build | `./build.sh` succeeds, including its post-build checks. Record any package rebuild options used. | |
| Complete image | ISO and generated SHA256SUMS are available in the configured output directory; verification succeeds. | |
| Split assets, if used | A build with `--release-parts` produces both numbered parts and SHA256SUMS in the release directory. Reassembled bytes match the complete ISO checksum. | |
| Downloaded copy | Download the exact files intended for users and verify their checksums independently. | |

## 2. Live boot and installation

::: warning Test disks
Use a disposable VM or a dedicated test disk. Partitioning and rollback tests can replace data. Keep backups separate from the tested disk.
:::

| Check | Expected result | Result / evidence |
| --- | --- | --- |
| UEFI live boot | The release candidate reaches GNOME on a VM and available physical test hardware. | |
| Secure Boot requirement | Live boot behavior matches the published release limitation. The documented ErgenOS 1.1 ISO requires Secure Boot disabled. | |
| Basic live hardware | Keyboard, display, network and sound work on the recorded configuration. | |
| Automatic Btrfs installation | Calamares completes on a test disk and the installed system boots without the USB/ISO. | |
| Manual partitioning | A deliberately selected, supported layout installs and boots; the chosen partition changes match the summary. | |
| Other offered filesystems | Each filesystem you advertise is tested; Btrfs-only recovery is not presented as available on other filesystems. | |
| Software source choices | Test official-only, yay, paru and Chaotic-AUR in separate installations when offered. Record each result, not one combined pass. | |
| Network interruption | Installer behavior and errors are understandable when an optional source cannot be configured. | |
| User and locale | User login, keyboard, language and time settings survive reboot. | |

## 3. Installed system and updates

| Check | Expected result | Result / evidence |
| --- | --- | --- |
| First-party applications | ErgenOS Welcome, ErgenCTL and ErgenPac open and complete their primary workflows. | |
| Repository access | Signed ErgenOS packages and the selected upstream sources can be refreshed and used. | |
| Full update | ErgenPac completes a system update; the system boots and applications open afterwards. | |
| Package management | Install and remove a nonessential test application using each advertised source, including Flatpak where configured. | |
| Driver Manager | Hardware detection and offered driver choices match the test machine; verify reboot after a driver change. | |
| Kernel or bootloader update | When such an update is available in the candidate test, verify the next normal boot and recovery entries. Otherwise record NOT RUN and the coverage gap. | |

## 4. Btrfs recovery

Follow the [snapshot guide](../recovery/snapshots) for the behavior expected by the project.

| Check | Expected result | Result / evidence |
| --- | --- | --- |
| Snapper setup | Root snapshots are available on the Btrfs installation. | |
| Pacman snapshots | A test transaction produces pre/post snapshots and the recovery menu discovers them. | |
| Snapshot boot | A chosen earlier snapshot boots with a temporary writable overlay. | |
| ErgenCTL rollback | On the disposable system, complete the rollback workflow and confirm normal boot into the restored system. | |
| Resume behavior | Snapshot boot does not resume a hibernated normal session. Test normal hibernation separately where configured. | |

## 5. Secure Boot and hardware

Use the [Secure Boot procedure](../security/secure-boot). Record setup results separately from ordinary UEFI boot.

| Check | Expected result | Result / evidence |
| --- | --- | --- |
| Readiness, setup and MOK enrollment | ErgenCTL completes the documented workflow; firmware platform keys are preserved. | |
| Enabled boot and status | The installed system boots through the Secure Boot entry and status checks pass. | |
| Updates and DKMS | Recheck signing, status and boot after relevant kernel, GRUB or DKMS changes on applicable hardware. | |
| Recovery with Secure Boot | Snapshot boot and ErgenCTL rollback succeed on the recorded Btrfs test system. | |
| Maintenance and removal | The documented removal flow works on the dedicated test system and leaves a usable boot configuration. | |
| Hardware smoke test | Record Wi-Fi, Bluetooth/audio, display, input, suspend/resume and function keys separately for each machine. | |
| Unsupported or untested hardware | Coverage gaps are documented; do not turn a VM pass into a general hardware compatibility claim. | |

## 6. Release decision

- [ ] Every planned test has a result, machine/candidate identifier and evidence.
- [ ] Installation, normal boot, update and advertised recovery blockers are resolved and retested.
- [ ] Any remaining failures and NOT RUN items have an explicit maintainer decision and a published limitation where relevant.
- [ ] The ISO uploaded for release is the tested candidate; any changed ISO has a new checksum and its affected tests are repeated.
- [ ] EN/PL installation, Secure Boot and limitations pages match the candidate.
- [ ] Website download URL, size, version and checksum point to the tested files.
- [ ] Release notes, tag and downloads are reviewed before publishing.
- [ ] After publication, the public download, checksum and links have been checked.

```text
Decision: HOLD / RELEASE
Candidate and SHA-256:
Blocking issues:
Accepted limitations and untested configurations:
Maintainer and date:
```
