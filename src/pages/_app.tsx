import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, NextJS and Styled-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
