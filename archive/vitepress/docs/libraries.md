# Libraries

Burnmark-io publishes MIT-licensed packages for **label design**, **sheet data**, and **tooling**. Versions and import paths change — always read the GitHub README for the repo you depend on.

## designer-core (monorepo)

The **[designer-core](https://github.com/burnmark-io/designer-core)** repository is a **pnpm workspace** containing:

| Package | Role |
| --- | --- |
| `@burnmark-io/designer-core` | Headless **document model**, render pipeline, colour flattening, **template** engine, exports (bitmap / PNG / PDF). **No DOM**, no Vue/React imports — runs in **Node 24+** and modern browsers. |
| `burnmark-cli` | Command-line **render**, **validate**, **CSV batch**, and print hooks into `@thermal-label/*` drivers. |
| `@burnmark-io/designer-vue` | Vue 3 **composable** with reactive document + debounced render. |
| `@burnmark-io/designer-react` | React 18+ **hook** with the same semantics; StrictMode- and SSR-aware. |

**Quick mental model:** construct a `LabelDesigner` with canvas DPI and dimensions, `add()` elements (text, images, barcodes, shapes), merge template variables, then `renderToBitmap()` / export helpers.

## sheet-templates

**[`@burnmark-io/sheet-templates`](https://github.com/burnmark-io/sheet-templates)** is a **JSON registry** (no runtime deps) of sticker-sheet specs — lookup by product code, brand, approximate dimensions, or paper size. Built for designer-core’s PDF tiling but reusable anywhere you need **millimetre-accurate** sheet geometry.

## Relationship to thermal-label

Designer-core’s README explicitly supports printing via **`@thermal-label/*`** packages on Node. In the browser, printing paths follow whatever WebUSB / WebHID / Bluetooth surfaces the driver exposes — same ecosystem, different packaging.

## Contributing

Upstream repos use **pnpm**, **Vitest**, **changesets**, and **TypeScript**. Clone the monorepo from GitHub if you plan to contribute features or fixes.
