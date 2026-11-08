# Contributing to ScreamFlow

ScreamFlow is a free, open-source, on-device dictation app. Thanks for helping.

## Ground rules

- **Local only.** Audio and text never leave the computer. Don't add cloud
  speech-to-text, hosted cleanup, accounts, or telemetry. Network access is for
  downloading models the user picks, and for an AI cleanup server only when it
  runs on `localhost` (enforced in `src-tauri/src/llm_client.rs`).
- **Light in the background.** It runs all day in the menu bar, so keep idle
  CPU and memory near zero.
- **Simple setup.** Hold a key, talk, text appears. New options need a strong
  reason.
- **macOS first.** Windows comes later; Linux is best effort.

## Getting started

See [BUILD.md](BUILD.md) for prerequisites, then:

```bash
git clone git@github.com:amitmanchella/screamflow.git
cd screamflow
bun install
bun run tauri dev
```

[AGENTS.md](AGENTS.md) describes the architecture, notices, and i18n rules.

## Before opening a pull request

```bash
bun run lint
bun run format:check
bun run check:translations
cd src-tauri && cargo test --lib
```

Use conventional commit prefixes (`feat:`, `fix:`, `docs:`, `refactor:`,
`chore:`) and explain _why_ in the message.

## Upstream

ScreamFlow is a fork of [Handy](https://github.com/cjpais/Handy) by CJ Pais
(MIT). The `upstream` remote tracks it so fixes can be merged in:

```bash
git remote add upstream https://github.com/cjpais/Handy.git
git fetch upstream && git merge upstream/main
```

Handy's name and logo are not part of its open-source license, so keep them
out of anything users see.
