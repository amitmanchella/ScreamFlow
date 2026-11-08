# ScreamFlow

Free, open-source dictation that runs entirely on your Mac. Hold a key, talk,
and the text appears where your cursor is.

- **On-device.** Speech is transcribed on your computer with open models
  (Parakeet, Whisper, and others). Audio and text are never uploaded.
- **Light.** It sits in the menu bar and loads the model only while you dictate.
- **No accounts, no telemetry, no paid plan.**

ScreamFlow is a fork of [Handy](https://github.com/cjpais/Handy) by CJ Pais.

> **Status: v0.1, early.** macOS first. Windows comes later; Linux builds but
> is best effort. There are no signed releases yet, so build from source.

## Use it

1. Build and open the app (see [BUILD.md](BUILD.md)).
2. Grant microphone and accessibility access.
3. Pick a model. It downloads once, then works offline.
4. Hold <kbd>Option</kbd>+<kbd>Space</kbd> anywhere, talk, and let go.

Add names and jargon under **Custom words** in settings. Models that support
vocabulary hear them as hints; for the rest, ScreamFlow corrects close matches
after transcription.

## AI cleanup (optional, on-device)

Cleanup is off by default. It can run only on this computer:

- **Apple Intelligence** on Apple silicon Macs that have it.
- **Any OpenAI-compatible server on `localhost`**, such as llama.cpp, Ollama,
  or LM Studio.

ScreamFlow refuses to send text to any address that is not on this machine.
A built-in small, fast cleanup model is planned.

## Network use

ScreamFlow never phones home. It goes online only when you ask it to download
a model. Models currently come from Handy's model mirror
(`blob.handy.computer`) and Hugging Face. Update checks are off: there is no
release feed yet.

## Build

See [BUILD.md](BUILD.md). In short, with Rust and Bun installed:

```bash
bun install
mkdir -p src-tauri/resources/models
curl -L -o src-tauri/resources/models/silero-vad-v6.2-F32.gguf \
  https://huggingface.co/handy-computer/silero-vad-v6.2-gguf/resolve/main/silero-vad-v6.2-F32.gguf
bun run tauri dev
```

## License

MIT. See [LICENSE](LICENSE). The license and copyright notice are Handy's,
kept as the MIT license requires. Handy's name and branding are not part of
that license and are not used here.
