# @darija/humanize-duration

Darija duration humanizer built on top of [`humanize-duration`](https://www.npmjs.com/package/humanize-duration).

## Install

```sh
bun add @darija/humanize-duration
npm install @darija/humanize-duration
pnpm add @darija/humanize-duration
```

## Usage

```ts
import humanizeDuration from "@darija/humanize-duration";

humanizeDuration(2 * 60 * 60 * 1000);
//=> "ساعتاين"

humanizeDuration(26 * 60 * 60 * 1000, { largest: 1 });
//=> "نهار"

humanizeDuration(3_000, { units: ["s"], largest: 1 });
//=> "3 د الثواني"

humanizeDuration(12, { units: ["ms"], largest: 1 });
//=> "12 لجزء ثانية"
```

The package exposes a single API and keeps the same option shape as `humanize-duration` for per-call formatting.

By default, the package formats using `y`, `mo`, `w`, `d`, `h`, and `m`. To format seconds or milliseconds, pass `units` explicitly.
