# BockFind

BockFind is a touch-first word-search game built with Expo and React Native.
Players choose a difficulty, start a seeded puzzle or a catalog puzzle, share codes with other players, drag across the grid to form words, and clear the full list as fast as possible for a higher score.

## Game Overview

- Genre: Word search
- Platforms: iOS, Android, and web via Expo
- Objective: Find every hidden word in the puzzle grid
- Progress tracking: Found words are highlighted in both the board and the word list
- Win state: A victory modal appears when all words are found

## Difficulty Options

BockFind includes four difficulty levels with different board sizes, word counts, and allowed directions.

1. Easy

- Grid: 10x10
- Words: 10
- Word length: 3-7 letters
- Directions: Right, Down

2. Medium

- Grid: 14x14
- Words: 12
- Word length: 4-8 letters
- Directions: Right, Down, Down-Right, Up-Right

3. Hard

- Grid: 18x18
- Words: 15
- Word length: 4-10 letters
- Directions: All 8 directions, including backwards

4. Expert

- Grid: 22x22
- Words: 18
- Word length: 5-12 letters
- Directions: All 8 directions, including backwards

## Core Features

- Seeded puzzle generation for reproducible boards
- Dual puzzle modes: Random and Catalog
- Native share sheet for sending puzzle codes via Messages or AirDrop
- Enter code flow for joining a shared puzzle from the home screen
- Gesture-based letter selection that snaps to valid lines
- Real-time score, timer, and remaining word count
- Haptic feedback on selection and successful word finds
- Responsive board sizing for phones and tablets
- Play-again flow from the victory modal

## Puzzle Modes

1. Random mode

- Generates a fresh puzzle using a timestamp seed
- Keeps the current dynamic generation behavior
- Can be shared by code so another player can open the exact same random puzzle

2. Catalog mode

- Provides a fixed set of 10 puzzles per difficulty
- Players can choose puzzle number 1-10
- The same difficulty plus puzzle number combination resolves to the same layout across devices

## How A User Interacts With The Game

### 1. Start Screen

- Open the app to the home screen
- Choose puzzle source: Random or Catalog
- If Catalog is selected, choose puzzle number 1-10
- Paste a shared code into Enter code to jump straight into a puzzle
- Review the selected mode stats (grid size, word count, mode)
- Tap a difficulty card to change the puzzle settings
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
