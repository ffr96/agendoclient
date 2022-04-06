import { createStitches } from "@stitches/react";

export const { styled, getCssText, keyframes }  = createStitches({
  theme: {
    fonts: {
      main: 'system-io',
      secondary: 'sans-serif',
      title: 'Times New'
    },
    colors: {
      green: 'rgba(0,128,0)',
      lightGreen: 'rgba(0,128,0,0.2)',
      white: '#ffffff',
      secondWhite: '#eeeded91',
      black: '#000000',
      secondBlack: '#383838',
      lightBlack: 'rgba(56,56,56,0.2)'
    },
    fontSizes: {
      1: '10px',
      2: '15px',
      3: '17px',
      4: '20px'
    }
  },
  media: {
    bp1: '(max-width: 600px)',
  }
});