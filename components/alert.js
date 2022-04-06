import { styled, keyframes } from "../stitches.config";
import { Text } from "./basics/Text";

const AlertContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  left: '45%',
  width: '100%'
});

const showIn = keyframes({
  'from': {
    transform: 'translateY(15px)',
    opacity: 0.1,
  },
  'to': {
    opacity: 1,
  }
});

const showOut = keyframes({
  'from': {
    opacity: 1,
  },
  'to': {
    opacity: 0,
  }
});

const Alert = ({ type, message, timer }) => {
  let color;
  switch (type) {
    case 'SUCCESS':
      color = 'lightgreen';
      break;
    case 'WARNING':
      color = 'orange';
      break;
    case 'ERROR':
      color = 'red';
      break;  
  }

  const delay = `${timer - 1000}ms`;

  const AlertDisplay = styled('div', {
    borderRadius: 6,
    width: '12%',
    textAlign: 'center',
    animation: `${showIn} 1.1s ease-out, ${showOut} 1.1s ease-in ${delay}`,

    '@bp1': {
      width: '24%'
    }
  });

  return(
    <AlertContainer>
      <AlertDisplay css={{background: color, zIndex: 1}}>
        <Text css={{width: '100%', fontWeight: 600}}>{message}</Text>
      </AlertDisplay>
    </AlertContainer>
  );
};

export default Alert;