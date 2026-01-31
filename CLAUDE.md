# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"The Game Refinery" is a React-based web application for showcasing and developing board game ideas. It displays game cards with metadata (player count, length, development stage) using custom SVG icons and allows users to view detailed game pages.

## Development Commands

- `npm start` - Start development server on port 3000
- `npm run build` - Create production build
- `npm test` - Run tests in watch mode
- `npm run deploy` - Deploy to GitHub Pages (automatically runs build first)

## Architecture

### Custom State-Based Routing

The app uses **state-based routing** instead of React Router. All routing logic is managed in [src/App.js](src/App.js) via useState hooks:

- `pageRoute` - Controls which page is displayed ('home' or 'gamePage')
- `userRoute` - Controls authentication flow ('signedOut', 'signingIn', 'signedIn')
- `currentGame` - Stores the selected game object for GamePage

When adding new pages, update the conditional rendering in App.js and pass navigation functions as props.

### Game Data Management

Games are defined in [src/Data/gameList.js](src/Data/gameList.js) using the `Game` class. Each game has:
- Basic info: name, rating, description, status
- Metadata: playerMin/Max, lengthMin/Max, mechanics array
- Visual: imageUrl

New games are created via `creatNewGame()` which applies default values and adds to gameList array.

### Component Hierarchy

```
src/
├── Pages/           - Top-level page components (HomePage, GamePage)
├── Containers/      - Complex components that compose multiple children
│   ├── Navigation/
│   ├── GameSummary/
│   ├── GameSectionContainer/
│   ├── DisplayBox/
│   └── Footer/
├── Components/      - Reusable UI components
│   ├── GameCard/   - Individual game cards on home page
│   ├── Slider/     - Carousel functionality
│   ├── SubmitForm/ - Username entry form
│   ├── UIContext/  - React Context (currently minimal)
│   └── ...
├── Icons/          - Custom SVG components (PlayerCountIcon, GameLengthIcon, etc.)
├── Data/           - Shared data and constants
│   ├── gameList.js     - Game data and Game class
│   ├── SVGBank.js      - Reusable SVG definitions
│   └── ColorPalette.js - Color constants
└── Images/         - Static assets (game icons, logos)
```

### Styling Approach

- **Tachyons** utility classes for layout and spacing (flex, pa2, ma0, etc.)
- Component-specific CSS files for custom styles
- Inline styles for dynamic values (colors, dimensions based on game data)

### SVG Icon System

Custom icon components in `src/Icons/` render game metadata visually. Icons adjust their display based on game properties:
- **PlayerCountIcon** - Shows min/max player count
- **GameLengthIcon** - Displays game duration
- **DividingHeader** - Styled section headers
- Development stage icons have different visual states

When modifying game metadata display, check both the icon component and how it's used in GameCard/GameSummary.

## Key Implementation Notes

### Adding a New Game

1. Import the game icon image at the top of [src/Data/gameList.js](src/Data/gameList.js)
2. Create a game object with all required properties
3. Call `creatNewGame(gameObject)` to add it to the list

### Navigation Between Pages

To navigate from HomePage to GamePage:
1. Call `setPageRoute('gamePage')` passed from App.js
2. Call `setCurrentGame(gameObject)` to pass game data
3. GamePage receives `currentGame` prop

To return home: call `goHomePage()` (sets pageRoute to 'home' and clears currentGame)

### User Sign-In Flow

The sign-in is cosmetic (no real authentication):
1. User clicks "Set Name" → userRoute becomes 'signingIn'
2. SubmitForm component appears in Navigation
3. User submits name → userRoute becomes 'signedIn'
4. UserInfo component displays with username and gold balance

## Technologies

- React 17 with functional components and hooks
- Create React App (react-scripts 4.0.3)
- Tachyons for utility-first CSS
- gh-pages for deployment to GitHub Pages
- Jest/React Testing Library for testing (via CRA)

## Deployment

The app is configured for GitHub Pages deployment at: https://joshcode25.github.io/the-game-refinery

The `homepage` field in package.json must match the GitHub Pages URL. The deploy script handles the build and gh-pages branch management.
