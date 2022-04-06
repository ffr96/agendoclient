import { styled } from "../../stitches.config";

export const Button = styled('button', {
  borderRadius: '3px',
  borderWidth: '2px',
  borderColor: '$lightGreen',
  color: '$green',
  padding: '5px',
  margin: '0.3em',
  background: '$white',
  fontFamily: '$secondary',
  fontSize: '$3',
  minWidth: '100px',
  cursor: 'pointer',

  '&:hover': {
    color: '$white',
    background: '$lightGreen',
    transition: 'background 0.5s, color 0.5s'
  }
});