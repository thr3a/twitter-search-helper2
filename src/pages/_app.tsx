import { MantineProvider } from '@mantine/core';
import { Container } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../features/common/components/Header';
import { PageProvider } from '../features/common/contexts/PageContext';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Twitter検索ヘルパー</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
        <meta name='description' content='Twitterの高度な検索を、より簡単に行えるツールです。' />
        <link rel='icon' href='/favicon.ico' />
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
              styles: (theme) => ({
                label: {
                  fontWeight: 'bold'
                },
                root: {
                  marginBottom: theme.spacing.xs
                }
              })
            },
            RadioGroup: {
              styles: (theme) => ({
                label: {
                  fontWeight: 'bold'
                },
                root: {
                  marginBottom: theme.spacing.xs
                }
              })
            },
            Checkbox: {
              styles: (theme) => ({
                root: {
                  marginBottom: theme.spacing.sm
                }
              })
            },
            DatePicker: {
              styles: (theme) => ({
                label: {
                  fontWeight: 'bold'
                },
                day: {
                  height: 30
                }
              })
            }
          }
        }}
      >
        <NotificationsProvider>
          <PageProvider>
            <Container>
              <Header />
              <Component {...pageProps} />
            </Container>
          </PageProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
