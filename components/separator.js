import { styled } from "../stitches.config";
import * as Sep from '@radix-ui/react-separator';

export const Separator = styled(Sep.Root, {
  backgroundColor: '$lightGreen',
  '&[data-orientation=horizontal]': { height: '1px', width: '75%' },
  '&[data-orientation=vertical]': { height: '50%', width: '1px' }
});