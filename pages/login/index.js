import { useState } from "react";
import { useUser } from "../../lib/useUser";
import { styled } from "../../stitches.config";
import { Box } from '../../components/basics/Box';
import { Button } from "../../components/basics/Button";
import { Text } from "../../components/basics/Text";
import { Separator } from "../../components/separator";
import Layout from '../../components/layout';

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  margin: '1rem',
  padding: '1.5rem',
  textAlign: 'left',
  color: 'inherit',
  textDecoration: 'none',
  border: '3px solid $lightGreen',
  boxShadow: '0px 0px 10px 1px',
  borderRadius: '10px',
  transition: 'color 0.15s ease, borderColor 0.15s ease',
});

const Login = () => {
  const [ username, SetUsername ] = useState('');
  const [ password, SetPassword ] = useState('');
  const { fetcher, errorMessage } = useUser({
    redirectTo:'/agenda', 
    redirectIfFound: true
  });

  const handleUsername = (e) => {
    SetUsername(e.target.value);
  };

  const handlePassword = (e) => {
    SetPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    fetcher(username, password);
  };

  return(
    <Layout>
      <Box css={{height: '60%', width: '30%', 
      '& :hover': {
        color: '$green',
        }}}>
        <Form
          onSubmit={handleSubmit}
        >
          <h1 css={{textAlign: 'center'}}>Login</h1>
          <Separator orientation= "horizontal"/>
          <Box css={{flexDirection: 'column', marginTop: '3rem', marginBottom: '3rem'}}>
            Usuario:{'  '}
            <input onChange={handleUsername} value={username} style={{marginBottom: '1rem'}}/>
            Contraseña:{' '}
            <input onChange={handlePassword} type='password' value={password}/>
            {
              errorMessage && 
              <Text style={{color:'red', textAlign:'center'}}>{errorMessage}</Text>
            }
            <Button type='submit' css={{marginTop: 20}}>Ingresar</Button>
          </Box>
 
        </Form>
      </Box>
    </Layout>
  );
};

export default Login;