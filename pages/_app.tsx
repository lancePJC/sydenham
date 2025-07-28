// pages/_app.tsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import { CartProvider } from '@/components/context/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sydenham Enterprises</title>
        <meta name="description" content="Official Sydenham Enterprises website" />
        <meta name="google-site-verification" content="abc123XYZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      {/* Wrap everything with CartProvider */}
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  );
}
