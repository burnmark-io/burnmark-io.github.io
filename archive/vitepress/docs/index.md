---
layout: home

hero:
  name: burnmark-io
  text: Labels for real life
  tagline: Design in the browser, work offline-friendly, print shipping and home labels without vendor lock-in.
  actions:
    - theme: brand
      text: Why Burnmark?
      link: /guide/welcome
    - theme: alt
      text: GitHub org
      link: https://github.com/burnmark-io

features:
  - title: Browser-first
    details: "The product story centres on Chromium: open the app, design, and print — no classic \"install manufacturer suite\" workflow."
  - title: Offline-friendly
    details: Once assets are cached, you can keep working when the network drops — templates and merges stay local until you choose to print or export.
  - title: Templates & bulk
    details: Merge fields, CSV-driven batches, sheet PDF tiling with thousands of Avery-style specs — built for marketplaces and repetitive kitchen labelling alike.
---

## What you can do with Burnmark

**Burnmark** is label software for people who actually **print**: spice jars, toy bins, cable bags, **Etsy** or **eBay** shipments, and small-business post rooms. You get a **real design surface** — text, images, shapes, barcodes — and engines that understand **thermal limitations** (single-colour, two-colour Brother QL, etc.) when it is time to flatten to hardware.

Under the hood the **[designer-core](https://github.com/burnmark-io/designer-core)** monorepo provides a **headless** document model and render pipeline that also runs on **Node.js** for automation, but the experience we optimise for is **you in a browser tab**, not a server farm.

**[sheet-templates](https://github.com/burnmark-io/sheet-templates)** ships a JSON catalog of **1,599** sticker-sheet definitions across **56** brands so PDF export matches the sheet in your tray — Avery, Herma, Zweckform, Online Labels, and many more.

## Printing

When pixels need to become paper, Burnmark pairs with **[thermal-label](https://thermal-label.github.io/)** — TypeScript **drivers** for Brother QL, DYMO LabelWriter, and DYMO LabelManager — and shared **bitmap** primitives from **[mbtech-nl](https://mbtech-nl.github.io/)** so previews and prints agree.

For **quick hardware tests** without templates, the **`thermal-label-cli`** project is the lightweight companion; Burnmark’s own **`burnmark-cli`** (from the designer-core workspace) targets **render, validate, CSV batch, and richer output**.

## Explore

- [Welcome & audience](/guide/welcome)
- [Offline, templates, bulk](/guide/offline-and-batch)
- [Libraries for developers](/libraries)
- [Printing & hardware](/printing)
- [Related organizations](/related-orgs)
