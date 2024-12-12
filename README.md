[![My Skills](https://skillicons.dev/icons?i=js,html,css,react,vite)](https://skillicons.dev)

# Diving Board Simulator

A physics simulation demonstrating static equilibrium of a diving board with a diver at the edge. This interactive simulation helps engineering students understand concepts of forces and moments in a static system.

## Description

This simulator visualizes a physics problem where a diver stands at the edge of a diving board supported by a roller and a hinge. It calculates:
- Reaction forces at both supports
- Effects of the diver's weight
- Impact of distances on the system

Key features:
- Interactive controls for weight and distance adjustment
- Real-time calculation of reaction forces
- Visual representation of forces and moments
- Educational tool for understanding static equilibrium

## Demo

You can access the live simulation at: https://pjvalverde.github.io/diving-board-sim

## Physics Model

The simulation is based on the following equilibrium equations:
1. Sum of Forces: RB + RC = G
2. Sum of Moments: RB(a) = G(a + b)

Where:
- RB: Reaction force at roller
- RC: Reaction force at hinge
- G: Weight of the diver
- a: Distance between supports
- b: Distance from roller to diver

## Usage

Use the sliders to adjust:
- Weight of the diver (G)
- Distance a
- Distance b

The simulation will automatically calculate and display:
- Reaction force at point B (RB)
- Reaction force at point C (RC)

## Local Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/pjvalverde/diving-board-sim.git

# Navigate to project directory
cd diving-board-sim

# Install dependencies
npm install

# Start development server
npm run dev

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
