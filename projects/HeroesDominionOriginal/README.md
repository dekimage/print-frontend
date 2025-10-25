# Heroes Dominion Original

This project contains the card system for Heroes Dominion Original game.

## Structure

- `data.js` - Contains card data structure and helper functions
- `Card.js` - React component for rendering individual hero cards
- `README.md` - This documentation file

## Card Structure

Each hero card contains:

- `id` - Unique identifier
- `name` - Hero name
- `hp` - Health points
- `image` - Hero image filename
- `abilities` - Array of 2 abilities

Each ability contains:

- `id` - Unique identifier
- `name` - Ability name
- `icon` - Ability icon filename
- `effect` - Effect string (e.g., "damage,3")
- `readableEffect` - Human readable effect description
- `range` - Range string (e.g., "1-4", "0-0" for self)
- `isLinear` - Boolean for linear targeting
- `isSight` - Boolean for sight requirement
- `maxTarget` - Maximum targets (optional)
- `cooldown` - Cooldown turns (optional)

## Asset Directories

The following directories should be created in the `public` folder:

- `public/heroes-dominion/heroes/` - Hero images
- `public/heroes-dominion/abilities/` - Ability icons
- `public/heroes-dominion/symbols/` - Effect symbols and stat icons

## Usage

The page is accessible at `/heroes-dominion-original` and uses the same filtering and sorting system as other card pages in the project.
