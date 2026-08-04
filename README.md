# BockFind

BockFind is a touch-first word-search game built with Expo and React Native.
Players choose a difficulty and grid size, share seeded puzzles with other players, drag across the grid to form words, and clear the full list as fast as possible for a higher score.

## Game Overview

- Genre: Word search
- Platforms: iOS, Android, and web via Expo
- Objective: Find every hidden word in the puzzle grid
- Round end: The puzzle ends when all listed words are found
- Progress tracking: Found words are highlighted in both the board and the word list
- Win state: A victory modal appears when all words are found

## Difficulty Options

BockFind includes four difficulty levels with different direction rules and word-length ranges.

1. Easy

- Word length: 3-7 letters
- Directions: Right, Down

2. Medium

- Word length: 4-8 letters
- Directions: Right, Down, Down-Right, Up-Right

3. Hard

- Word length: 4-10 letters
- Directions: All 8 directions, including backwards

4. Expert

- Word length: 5-12 letters
- Directions: All 8 directions, including backwards

## Core Features

- Seeded puzzle generation for reproducible boards
- Player-controlled difficulty and grid size
- Native share sheet for sending puzzle codes via Messages or AirDrop
- Home-screen puzzle code entry for loading a shared puzzle
- Return-to-current-puzzle shortcut from the home screen
- Gesture-based letter selection that snaps to valid lines
- Real-time score and elapsed timer
- Haptic feedback on selection and successful word finds
- Responsive board sizing for phones and tablets
- Play-again flow from the victory modal

## Puzzle Setup

- Grid size defaults to 10x10 and can be adjusted before each run
- Word count is generated from grid size (10x10 -> 10 words, 22x22 -> 22 words)
- Difficulty controls direction rules and word-length ranges
- Shared puzzle codes preserve the exact random puzzle settings and seed
- Puzzle code format: `R-<difficulty>-<gridSize>-<seed>`

## How A User Interacts With The Game

### 1. Start Screen

- Open the app to the home screen
- Tap the Grid or Difficulty tiles to open a selection modal
- Paste a shared code into Enter code to jump straight into a puzzle
- Tap Create new puzzle to begin
- If a puzzle is already active, tap Return to current puzzle

### 2. In-Game Controls

- Touch and drag on the board to begin a word selection
- The selection line snaps to allowed directions for the current difficulty
- Release your finger to validate the selected letters
- Tap Share to open the native share sheet for the current puzzle code

### 3. Feedback During Play

- Correct words are marked as found
- Found letters are highlighted on the board
- Found words show a checkmark in the word list
- Score increases as words are found
- Timer increments every second while playing

### 4. Completing A Puzzle

- Find all listed words to complete the puzzle
- View the completion summary (words found, time, score)
- Tap Play again to generate a new puzzle

## Data And Persistence

- Preferred difficulty and preferred grid size are stored locally on-device
- No account, login, or cloud sync is required

## Running The Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Useful scripts:

```bash
npm run android
npm run ios
npm run web
npm run dev
npm run start:dev
npm run start:prod
```

If you hit a Worklets mismatch error (for example `Mismatch between JavaScript code version and Worklets Babel plugin version`), restart Metro with a clean cache:

```bash
npm run start:dev
```

The route warnings like `Route "./_layout.tsx" is missing the required default export` can appear as a follow-on effect when the bundle crashes early; they should clear once the Worklets mismatch is resolved.

## App Variants

BockFind supports two app variants via the `APP_VARIANT` environment variable:

- `development`: app name `BockFind Dev`, bundle/package `com.bsteinbk.bockfind.dev`, scheme `bockfind-dev`
- `production`: app name `BockFind`, bundle/package `com.bsteinbk.bockfind`, scheme `bockfind`

Variant is resolved in `app.config.ts` and is set automatically for EAS build profiles:

- `development` profile -> `APP_VARIANT=development`, update channel `development`
- `preview` profile -> `APP_VARIANT=production`, update channel `preview`
- `production` profile -> `APP_VARIANT=production`, update channel `production`

`react-native-legal` is enabled only during native build contexts (`prebuild`, `run:android`, `run:ios`, or EAS build).
This avoids local `expo config`/config-introspection failures when `android/` or `ios/` folders are not present in a managed workflow.

## OTA Updates (EAS Update)

The app is configured for Expo OTA updates with `expo-updates` and an EAS update URL.
On app launch, release builds check for updates, download them when available, and reload automatically.

Publish OTA updates by channel:

```bash
npm run update:development
npm run update:preview
npm run update:production
```

## Tech Stack

- Expo SDK 57
- Expo Router
- React Native + React
- Zustand for game state
- React Native Gesture Handler for drag interactions
- React Native Reanimated for UI animation
- Expo Haptics for tactile feedback
