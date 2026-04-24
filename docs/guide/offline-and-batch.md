# Offline work, templates, and bulk labels

Burnmark is written so **everyday label jobs** do not depend on a perfect internet connection or a cloud account you will forget to renew.

## Offline-friendly workflows

The **browser** can cache scripts, fonts, and sheet data. Once those assets are present, you can **keep editing** templates, adjust layouts, and prepare merges while offline. Printing itself may still require the printer to be reachable (USB, Bluetooth, or network depending on setup), but **design time** is not held hostage to Wi-Fi.

> Exact caching behaviour depends on how you deploy the app (service worker, static hosting, etc.) — treat this as a **product goal**, not a guarantee of every build flavour.

## Templates

A **template** is a saved document with **merge fields** — placeholders like `{{name}}`, `{{sku}}`, `{{qty}}` that you bind at render time. That is how one “shipping label” layout becomes two hundred unique labels without two hundred trips through a drag-and-drop UI.

The headless **`LabelDesigner`** API (see **designer-core** on GitHub) lets you load JSON documents, apply a merge object, and render to **bitmap**, **PNG**, or **PDF** consistently in Node or in the browser.

## Bulk from CSV

For marketplace sellers, the sweet spot is: **CSV in → PDF or prints out**. Column headers map to merge keys; rows become individual labels or tiled sheets. Barcode elements pick up per-row values so tracking numbers stay scannable.

Batch runs are also where **CLI tooling** shines — validate hundreds of rows, fail fast on bad data, and pipe outputs to printers or archives.

## Sheet tiling

When your output is **letter or A4 sticker stock**, Burnmark uses **`@burnmark-io/sheet-templates`** — a zero-runtime-dependency JSON registry describing label sizes, pitches, and multi-layout grids. That means PDF export can honour **Avery**, **Herma**, **Zweckform**, **Online Labels**, and dozens of other brands without shipping proprietary binary templates.

## When to use thermal-label directly

If you only need a **hardware smoke test** (“does this USB device answer?”) use **`thermal-label-cli`**. When you need **merge fields, barcodes, and sheet PDFs**, stay in Burnmark — the stacks share drivers but optimise for different tasks.
