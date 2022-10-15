import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Header } from '../features/common/components/Header';
import { Container } from '@mantine/core';
import { PageProvider } from '../features/common/contexts/PageContext';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Twitter検索ヘルパー</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Twitterの高度な検索を、より簡単に行えるツールです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          defaultRadius: 'xs',
          fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
          components: {
            TextInput: {
              styles: {
                label: {
                  fontWeight: "bold"
                }
              }
            },
            RadioGroup: {
              styles: {
                label: {
                  fontWeight: "bold"
                }
              }
            }
          }
        }}
      >
        <NotificationsProvider>
          <PageProvider>
            <Container>
              <Header></Header>
              <Component {...pageProps} />
            </Container>
          </PageProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
