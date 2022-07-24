import { Box } from './basics/Box';
import { TitleText } from './basics/Text';

const MapWithInfo = ({ phoneNumber, address, hours, iframes }) => {
  return (
    <Box css={{ flexDirection: 'column' }}>
      <TitleText
        css={{
          borderLeft: '2px solid $lightBlack',
          borderRadius: '4px',
          borderRight: '2px solid $lightGreen',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Teléfono:{' '}
      </TitleText>
      <p>{phoneNumber}</p>
      <p style={{ fontStyle: 'italic' }}>{address}</p>
      <Box
        css={{
          boxShadow: '2px 2px 10px',
          flexDirection: 'column',
          '@bp1': { width: 150, height: 125 },
        }}
      >
        <iframe
          src={iframes}
          width={400}
          height={250}
          style={{ boxShadow: '2px 2px 10px' }}
          allowFullScreen
          loading='eager'
        ></iframe>
      </Box>
      <Box
        css={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        <TitleText
          css={{ marginTop: '2rem', textAlign: 'center', width: '100%' }}
        >
          Horarios de atención:{' '}
        </TitleText>
        {hours?.length > 0 &&
          hours.map((hour, i) => {
            return <ul key={i}>{hour}</ul>;
          })}
      </Box>
    </Box>
  );
};

export default MapWithInfo;
