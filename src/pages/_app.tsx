import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import 'prismjs/themes/prism.css';
import 'antd/dist/antd.css';
import 'prismjs/themes/prism-solarizedlight.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta httpEquiv='cache-control' content='public' />
                <meta httpEquiv='Cache-Control' content='max-age=31536000' />
                <meta charSet='utf-8' />
                <meta name='robots' content='noindex' />
                <title>Demo - Template Editor</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
