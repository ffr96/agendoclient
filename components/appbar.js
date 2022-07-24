import Link from 'next/link';
import useAuthStorage from '../lib/useAuthStorage';
import { Box } from './basics/Box';
import { LinkText } from './basics/Text';
import { Button } from './basics/Button';
import { Separator } from './separator';

import Image from 'next/image';
import HRLogo from '../public/hrlogo.png';
import { styled, keyframes } from '../stitches.config';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const fadeIn = keyframes({
  from: {
    opacity: 0,
    boxShadow: '0px 0px 0em $$green',
  },
  to: {
    opacity: 1,
    boxShadow: '0px 0px 2em $$green',
  },
});

const AppContainer = styled('div', {
  $$green: '$colors$green',
  display: 'flex',
  boxShadow: '0px 0px 2em $$green',
  width: '100%',
  height: 'calc(2em + 10px)',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  animation: `${fadeIn} 3s`,

  '@bp1': {
    flexDirection: 'column',
    height: 'calc(3em + 12px)',
    '& div': {
      fontSize: '$1',
    },
    '& #tag': {
      width: '100%',
      justifyContent: 'center',
    },
    '& #end': {
      width: '100%',
      background: '$white',
      justifyContent: 'center',
    },
  },
});

const CenteredLinkText = ({ children, active }) => {
  return (
    <LinkText
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        height: '100%',
        fontWeight: 'bold',
      }}
    >
      {children}
    </LinkText>
  );
};

const AppBar = () => {
  const router = useRouter();
  const storage = useAuthStorage();
  const user = storage.getAccessToken();
  const [userLogged, SetUserLogged] = useState(null);
  const [active, SetActive] = useState(null);
  const path = router.pathname;

  useEffect(() => {
    if (!userLogged) {
      SetUserLogged(user);
    }
    SetActive(path);
  }, [path, userLogged, user]);

  console.log(active);

  return (
    <AppContainer>
      <Box id='tag' css={{ width: '25%', justifyContent: 'flex-start' }}>
        <Box style={{ paddingInline: 5 }}>
          <Image
            layout='intrinsic'
            alt='hrlogo'
            quality={100}
            width={20}
            height={20}
            src={HRLogo}
          />
        </Box>
        Dr. Name Surname
      </Box>
      <Box
        css={{
          width: '50%',
          height: '100%',
          justifyContent: 'space-evenly',
          textAlign: 'center',
        }}
      >
        <CenteredLinkText active={active === '/'}>
          <Link href={'/'}>Experiencia</Link>
        </CenteredLinkText>
        <Separator orientation='vertical' decorative />
        <CenteredLinkText active={active === '/about'}>
          <Link href={'/about'}>Contacto</Link>
        </CenteredLinkText>
        <Separator orientation='vertical' decorative />
        <CenteredLinkText active={active === '/more'}>
          <Link href={'/home/more'}>Mas Información</Link>
        </CenteredLinkText>
      </Box>
      <Box
        id='end'
        css={{
          width: '25%',
          justifyContent: 'flex-end',
          alignContent: 'center',
        }}
      >
        {userLogged && (
          <Link href={'/agenda'} passHref>
            <Button>Agenda</Button>
          </Link>
        )}
        {userLogged && (
          <Button
            onClick={() => {
              storage.removeAccessToken();
              Router.push('/');
            }}
          >
            Desconectarse
          </Button>
        )}
      </Box>
    </AppContainer>
  );
};

export default AppBar;
