import { Inter } from 'next/font/google';
import classNames from 'classnames';
import { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { APP_NAME, DESCRIPTION_DEFAULT } from '@/constants/meta';

import { Providers } from './providers';

import 'node_modules/react-modal-video/css/modal-video.css';
import '../styles/index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`
  },
  description: DESCRIPTION_DEFAULT
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={classNames(`bg-[#FCFCFC] dark:bg-black`, inter.className)}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
