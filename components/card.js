import { Text, TitleText } from "./basics/Text";
import { Box } from "./basics/Box";
import { Separator } from "./separator";
import { keyframes } from "../stitches.config";

const fadeIn = keyframes({
  'from': {
    transform: 'translate(-15px)',
    opacity: 0.1,
  },
  'to': {
    opacity: 1,
  }
});

const Card = ({info}) => {
  return(
    <Box css={{
      flexDirection: 'column', 
      boxShadow: '0px 0px 15px grey',
      animation: `${fadeIn} 1.5s ease-in`,
      alignItems: 'center',
    }}>
      <TitleText css={{alignSelf: 'center', margin:22}}>{info.title}</TitleText>
      <Separator orientation="horizontal" css={{marginBottom: 30}}/>
      {
        info.text.length > 0 && info.text.map((txt,id) => {
          return(
            <Box key={id} css={{paddingInline: 10, width:'100%', flexDirection: 'column', alignItems:'flex-start'}}>
            <Text>{txt}</Text>
            <Separator css={{width: '100%', alignSelf: 'center', backgroundColor: '$lightBlack', '&[data-orientation=horizontal]': {width:'20%'}}}/>
          </Box>
          );
        })
      }
    </Box>       
  );
};

export default Card;