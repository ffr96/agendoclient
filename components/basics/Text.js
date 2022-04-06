import { styled } from "../../stitches.config";

export const LinkText = styled('div', {
  display: 'block',
  position: 'relative',
  $$green: '$colors$green',
  fontFamily: '$secondary',
  color: '$secondBlack',
  fontSize: '$3',

  '& :hover': {
    color: '$$green',
    transition: `color 0.5s ease`,
  },
  '& ::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: '$$green',
    height: '2px',
    transform: 'scale(0)',
    transition: 'opacity 300ms, transform 300ms'
  },
  '& :hover::after': {
    transform: 'scale(1)'
  }
});

export const Text = styled('p', {
  color: '$secondBlack',
  fontFamily: '$primary',
  fontSize: '$2',
  width: '75%',

  '@bp1': {
    fontSize: '$1'
  }
});

export const TitleText = styled('h1', {
  color: '$black',
  fontFamily: '$secondary',
  fontWeight: 'bold',
  fontSize: '$4'
});