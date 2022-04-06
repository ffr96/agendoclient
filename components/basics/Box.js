import { styled } from "../../stitches.config";

export const Box = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$secondary',
  color: '$secondBlack',
  borderRadius: 10,

  '& h1': {
    paddingInline: '5px'
  }
});