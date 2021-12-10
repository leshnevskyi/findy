import {createGlobalStyle} from 'styled-components';

import colors from './colors';

const Style = createGlobalStyle`
  :root {
    --font-size-300: 1.6rem;
    --font-size-400: 1.8rem;
    --font-size-500: 2.3rem;
    --font-size-600: 2.6rem;
    --font-size-1000: 27rem;

    --space-50: 2px;
    --space-100: 1.3rem;
    --space-200: 2rem;
    --space-300: 3rem;
    --space-400: 4rem;
    --space-600: 6.5rem;
    --space-700: 9rem;
    --space-900: 18rem;

    --icon-color: ${colors.blue[400]};
    --stroke-width: var(--space-50);

    --speed-slow: 0.7s;
    --speed-normal: 0.3s;
    --speed-fast: 0.1s;

    height: 100%;
    width: 100%;
    font-family: 'SF UI Text', sans-serif;
    font-size: clamp(7px, 0.58vw, 10px);
  }

  *, *::before, *::after {
    --bg-color: transparent;

    appearance: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: var(--bg-color);
    color: var(--text-color);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    border: none;
  }

  *:focus {
    outline: none;
  }

  body {
    --h-padding: var(--space-900);

    --bg-color: ${colors.blueGrey[800]};
    --text-color: ${colors.blueGrey[400]};

    height: 100%;
    width: 100%;
    padding: 0 var(--h-padding);
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-400);
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  svg {
    fill: none;
    stroke: var(--icon-color);
    stroke-width: 0;
    transition: var(--transition-duration-normal);
  }
`;

export default Style;