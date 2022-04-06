import { Box } from "./basics/Box";
import { Text } from './basics/Text';

export const Dropdown = ({title, content}) => {
  return(
    <Box css={{position: 'relative', display: 'inline-block' ,'&:hover #dropdwn': {opacity: 1, transition:'opacity 0.5s', left: '-45px', zIndex: 1}}}>
      <Text css={{width:'100%', fontWeight:'700', backgroundColor: '$lightGreen', padding: '10px', 
        borderRadius: 4, minWidth: '100px', textAlign:'center'}}>{title}</Text>
      <Box id='dropdwn' css={{position: 'absolute', opacity:0, background: '$white',
        zIndex:-1, boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.4)',
        minHeight: '120px', minWidth: '200px', alignContent:'center', justifyContent:'center'
      }}>
        {
          content
        }
      </Box>
    </Box>
  );
};