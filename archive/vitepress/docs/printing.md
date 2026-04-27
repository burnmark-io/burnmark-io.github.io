# Printing and hardware

Burnmark focuses on **getting pixels right** — typography, barcodes, colour intent, PDF tiling. Getting those pixels **onto paper** relies on the **[thermal-label](https://thermal-label.github.io/)** organization:

- **Brother QL** — Node USB/TCP and browser **WebUSB**.
- **DYMO LabelWriter** — Node USB/TCP and browser **WebUSB** (note NFC-locked models in upstream docs).
- **DYMO LabelManager** — Node HID and browser **WebHID** for D1 tapes.

Shared **transport** classes (`UsbTransport`, `TcpTransport`, `WebUsbTransport`, `WebBluetoothTransport`) implement one **`Transport`** interface so drivers stay testable.

## Bitmap consistency

Thermal output is ultimately **1bpp** (or two-plane colour). The **`@mbtech-nl/bitmap`** package (from **[mbtech-nl](https://mbtech-nl.github.io/)**) supplies common bitmap types; **`@thermal-label/contracts`** re-exports them so a Burnmark render and a driver `print()` call speak the same language.

## CLIs: pick the right tool

| Tool | Best for |
| --- | --- |
| **`thermal-label-cli`** | “Is this printer alive?” — `list`, `status`, quick `print text` / `print image`. |
| **`burnmark-cli`** | **Templates**, **validation**, **CSV batches**, exports — production workflows. |

Both can coexist; they intentionally target different levels of ambition.

## Trademarks

Not affiliated with Brother, Dymo, or other manufacturers. Product names belong to their owners.
