# packages

Bun workspace for Darija packages.

## Packages

- `@darija/humanize-duration`: Darija relative-time humanizer built on top of `humanize-duration`.

## Commands

```sh
bun install
bun run check
bun run build
bun run test
bun run typecheck
```

## Publishing

Before publishing a package, verify the tarball locally:

```sh
cd packages/humanize-duration
npm pack --dry-run
```

The repo includes a GitHub Actions publish workflow for trusted publishing.

Release flow:

```sh
# bump packages/humanize-duration/package.json first
git tag v0.1.1
git push origin v0.1.1
```

The workflow verifies that the Git tag matches the package version, then publishes with npm trusted publishing.
