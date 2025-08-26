# Netflix Intro & Recap Skipper

A simple Safari Web Extension that automatically clicks the **"Skip Intro"** and **"Skip Recap"** buttons on Netflix, so you can binge without interruptions. 🍿

## Features

- ⏩ Automatically skips intros and recaps
- 🔔 Toast notification when a skip happens
- 💻 Runs quietly in the background — no setup needed

## How It Works

This extension injects a content script into Netflix pages that:

- Detects the presence of "Skip Intro" / "Skip Recap" buttons
- Clicks them automatically
- Shows a small toast confirmation

## Development

1. Open the project in Xcode
2. Run the macOS host app once to register the extension
3. Enable the extension in Safari → Settings → Extensions
4. Visit Netflix and enjoy 🎉

## Tech Stack

- Safari Web Extension (Manifest v2)
- Vanilla JS
- [Toastify JS](https://github.com/apvarun/toastify-js)
