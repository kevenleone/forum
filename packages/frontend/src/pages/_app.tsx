import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout/Page';
import { useApollo } from '../graphql/apolloNext';
import GlobalStyle, { theme } from '../styles/globalStyles';
import { Page } from '../styles/page';

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page>
          <Layout>
            <ApolloProvider
              client={{
                ...apolloClient,
              }}
            >
              <Component {...pageProps} />
            </ApolloProvider>
          </Layout>
        </Page>
      </ThemeProvider>
    </>
  );
}
