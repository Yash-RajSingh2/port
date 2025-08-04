import { createGlobalStyle } from "styled-components";
import { themes } from "./themes";

// Get default theme values
const defaultTheme = themes['/'];

// Global styles
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
     html{
    --bg: ${defaultTheme['--bg']};
    --line: ${defaultTheme['--line']};
    --fill: ${defaultTheme['--fill']};
    --text: ${defaultTheme['--text']};
    --subtext: ${defaultTheme['--subtext']};
    --duo: ${defaultTheme['--duo']};
  }
    body{
    min-height: calc(-40px + 100vh);
    position: relative;
    background: var(--bg);
    padding: 20px;}

  html::before,
  html::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    width: 20px;
    background-color: white;
    z-index: 9999;
  }

  html::before {
    left: 0;
  }

  html::after {
    right: 0;
  }

  body::before,
  body::after {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    height: 20px;
    background-color: white;
    z-index: 9999;
  }

  body::before {
    top: 0;
  }

  body::after {
    bottom: 0;
  }
`;

export default GlobalStyles;
