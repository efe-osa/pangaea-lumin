import '../styles/globals.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { AppProps, NextWebVitalsMetric } from 'next/app';


export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('@axe-core/react')
        .then((axe) => {
          void axe.default(React, ReactDOM, 1000, {});
        })
        .catch((reason) => console.error(`axe-error:>>`, reason));
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
