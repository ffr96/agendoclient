import { Box } from './basics/Box';

export default function Layout({children, css}) {
  return( 
    <Box css={{...css, marginTop: '3rem', minHeight: '90vh'}}>
      {children}
    </Box>
  );
}