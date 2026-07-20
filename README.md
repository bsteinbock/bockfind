# BockFind

BockFind is a touch-first word-search game built with Expo and React Native.
Players choose a difficulty, grid size, and word count, share seeded puzzles with other players, drag across the grid to form words, and clear the full list as fast as possible for a higher score.

## Game Overview

- Genre: Word search
- Platforms: iOS, Android, and web via Expo
- Objective: Find every hidden word in the puzzle grid
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
- Player-controlled grid size and word count
- Native share sheet for sending puzzle codes via Messages or AirDrop
- Enter code flow for joining a shared puzzle from the home screen
- Gesture-based letter selection that snaps to valid lines
- Real-time score, timer, and remaining word count
- Haptic feedback on selection and successful word finds
- Responsive board sizing for phones and tablets
- Play-again flow from the victory modal

## Puzzle Setup

- Grid size defaults to 10x10 and can be adjusted before each run
- Word count can be tuned within the limits supported by the selected difficulty and grid size
- Difficulty controls direction rules and word-length ranges, not board size
- Shared puzzle codes preserve the exact random puzzle settings and seed

## How A User Interacts With The Game

### 1. Start Screen

- Open the app to the home screen
- Tap the Grid, Words, or Difficulty tiles to open a settings modal
- Paste a shared code into Enter code to jump straight into a puzzle
- Review the selected puzzle stats in the hero panel
- Tap Start puzzle to begin

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
```

## Tech Stack

- Expo SDK 57
- Expo Router
- React Native + React
- Zustand for game state
- React Native Gesture Handler for drag interactions
- React Native Reanimated for UI animation
- Expo Haptics for tactile feedback
