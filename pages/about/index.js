import Layout from '../../components/layout';
import { Separator } from '../../components/separator';
import MapWithInfo from '../../components/mapWithInfo';

const About = () => {
  return (
    <Layout
      css={{
        justifyContent: 'space-evenly',
        '@bp1': {
          flexDirection: 'column',
          '& #HSeparator': { display: 'inherit' },
          '& #VSeparator': { display: 'none' },
        },
      }}
    >
      <MapWithInfo
        hours={['Lun-Mie: 8-12am - 16-20hr', 'Jue: 8-12 - 16-18hr ', 'Vie: -']}
        phoneNumber={1234}
        address={1234}
        iframes={
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1687.824716743221!2d-58.14502588403535!3d-32.213675746046434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae333ff9a37513%3A0x4312121a1021552f!2sHumberto%20Gustavo%20Rosetti%2C%20Psiquiatra!5e0!3m2!1sen!2sar!4v1646601310905!5m2!1sen!2sar'
        }
      />
      <Separator
        id='VSeparator'
        orientation='vertical'
        css={{
          '&[data-orientation=vertical]': { height: '800px' },
          '@bp1': { orientation: 'horizontal' },
        }}
        decorative
      />
      <Separator
        id='HSeparator'
        orientation='horizontal'
        css={{ display: 'none', marginBlock: '3rem' }}
        decorative
      />
      <MapWithInfo
        hours={[
          'Lun-Mie: 9-12am - 17-20hr',
          'Jue: 8-10am - 16-18hr ',
          'Vie: -',
        ]}
        phoneNumber={1234}
        address={123}
        iframes={
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.780955064848!2d-58.24011780467946!3d-32.48440755522088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afdbab15354d0f%3A0xfe59ecf4443f3a39!2sMillan%20118%2C%20Concepci%C3%B3n%20del%20Uruguay%2C%20Entre%20R%C3%ADos!5e0!3m2!1sen!2sar!4v1646359713234!5m2!1sen!2sar'
        }
      />
    </Layout>
  );
};
export default About;
