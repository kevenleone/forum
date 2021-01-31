import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout/Page';
import GlobalStyle, { theme } from '../styles/globalStyles';
import { Page } from '../styles/page';

export default function App({ Component, pageProps }): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Page>
      </ThemeProvider>
    </>
  );
}
