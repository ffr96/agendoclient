import Head from 'next/head';
import Layout from '../components/layout';
import Card from '../components/card';
import infoCard from '../public/hrcards';

export default function App() {
  return (
    <Layout css={{flexWrap: 'wrap'}}>
      <Head>
        <title>PSR</title>
        <meta name="description" content="HR Psiquiatria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {
          infoCard?.map((card,i) => 
            <ul key={i}>
              <Card info={card}/>
            </ul>)
        }
    </Layout>
  );
}