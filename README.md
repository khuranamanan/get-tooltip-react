# Get Tooltip React

[![npm](https://img.shields.io/npm/v/get-tooltip-react)](https://www.npmjs.com/package/get-tooltip-react)
[![GitHub](https://img.shields.io/github/license/khuranamanan/get-tooltip-react)](LICENSE)

A customizable tooltip component for React applications.

## Installation

You can install the `get-tooltip-react` package using npm:

```sh
npm install get-tooltip-react
```

## Usage

Import the Tooltip component and use it in your React application:

```js
import React from "react";
import { Tooltip } from "get-tooltip-react";
import "get-tooltip-react/dist/style.css"; // Don't forget to import the CSS for styling

function App() {
  return (
    <div className="App">
      <h1>Tooltip React Component</h1>

      <div className="container">
        <Tooltip
          tooltipText="This is a tooltip!"
          position="top"
          bg="#172554"
          textColor="#93c5fd"
          delay={500}
          arrow
        >
          <button className="tooltip-btn">Hover Me</button>
        </Tooltip>

        <Tooltip tooltipText="Another tooltip">
          <span>Hover over me too!</span>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
```

## Props
The Tooltip component accepts the following props:

- children: ReactNode (required) - The content that triggers the tooltip.
- tooltipText: string (required) - The text to display in the tooltip.
- position: one of ["top", "bottom", "left", "right"] - Position of the tooltip (default: "bottom").
- bg: string - Background color of the tooltip (default: "black").
- textColor: string - Text color of the tooltip (default: "white").
- delay: number - Delay before showing the tooltip (in milliseconds, default: 0).
- arrow: boolean - Whether to show an arrow on the tooltip (default: false).
