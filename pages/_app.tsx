import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Script from 'next/script';


function CustomApp({ Component, pageProps, router }: AppProps) {

  return (
    <div>
        <Head>
          <title>Welcome!</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <Component {...pageProps} />
    </div>
  );
}

export default CustomApp;