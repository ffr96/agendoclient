import { Box } from "../../components/basics/Box";
import { TitleText, Text } from '../../components/basics/Text';
import Layout from "../../components/layout";
import { Separator } from "../../components/separator";

const About = () => {
  return(
    <Layout css={{justifyContent: 'space-evenly', 
      '@bp1': {flexDirection: 'column', '& #HSeparator': {display: 'inherit'}, 
      '& #VSeparator': {display: 'none'}}}}>
      <Box css={{flexDirection: 'column'}}>
        <TitleText css={{borderLeft: '2px solid $lightBlack', 
          borderRadius: '4px',
          borderRight: '2px solid $lightGreen', 
          width: '100%', 
          textAlign: 'center'}}>Teléfono: </TitleText>
        <p>+54 3447 421997</p>
        <p style={{fontStyle: 'italic'}}>Colón, 3280</p>
        <Box css={{boxShadow: '2px 2px 10px', flexDirection: 'column', '@bp1': {width: 150, height: 125}}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1687.824716743221!2d-58.14502588403535!3d-32.213675746046434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae333ff9a37513%3A0x4312121a1021552f!2sHumberto%20Gustavo%20Rosetti%2C%20Psiquiatra!5e0!3m2!1sen!2sar!4v1646601310905!5m2!1sen!2sar" 
            width={400} height={250} style={{boxShadow: '2px 2px 10px'}} 
            allowFullScreen loading="eager"></iframe>
        </Box>
        <Box css={{flexDirection: 'column', alignItems:'flex-start', width: '100%'}}>
          <TitleText css={{marginTop: '2rem', textAlign: 'center', width: '100%'}}>Horarios de atención: </TitleText>
          <ul>
          </ul>
        </Box> 
      </Box>
      <Separator id='VSeparator' orientation='vertical' css={{'&[data-orientation=vertical]': {height: '800px'}, '@bp1': {orientation: 'horizontal'}}} decorative/>
      <Separator id='HSeparator' orientation='horizontal' css={{display: 'none'}} decorative/>  
      <Box css={{flexDirection: 'column'}}>
        <TitleText css={{borderLeft: '2px solid $lightBlack', 
          borderRadius: '4px',
          borderRight: '2px solid $lightBlack', 
          width: '100%', 
          textAlign: 'center'}}>Teléfono: </TitleText>
        <p>+54 9 3447 44-7027</p>
        <p style={{fontStyle: 'italic'}}>Concepción, 3260</p>
        <Box css={{boxShadow: '2px 2px 10px', flexDirection: 'column', '@bp1': {width: 150, height: 125}}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.780955064848!2d-58.24011780467946!3d-32.48440755522088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afdbab15354d0f%3A0xfe59ecf4443f3a39!2sMillan%20118%2C%20Concepci%C3%B3n%20del%20Uruguay%2C%20Entre%20R%C3%ADos!5e0!3m2!1sen!2sar!4v1646359713234!5m2!1sen!2sar" 
            width={400} height={250} 
            allowFullScreen loading="eager"></iframe>
        </Box>
        <Box css={{flexDirection: 'column', alignItems:'flex-start', width: '100%'}}>
          <TitleText css={{marginTop: '2rem', textAlign: 'center', width: '100%'}}>Horarios de atención: </TitleText>
          <ul style={{width:'100%'}}>
          </ul>
        </Box>  
      </Box>
    </Layout>

  );
};

export default About;

