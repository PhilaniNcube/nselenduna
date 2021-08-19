import { Fragment } from 'react';
import GlobalStyle from '../GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
