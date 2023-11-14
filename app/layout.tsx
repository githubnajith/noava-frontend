import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import RootHeader from '@/common-components/1.Header/RootHeader';
import Footer from '@/common-components/2.Footer/Footer';

// ------------------------------------------------------
const inter = Inter({subsets: ['latin']});
const title = ' Noava : Best Mobile skin & wraps in india';
const description = `Mobile skins for 500+ phone models. India's leading mobile skin manufacturer. Samsung Mobile Skins, Vivo Mobile Skins, Oppo Mobile Skins, Apple Mobile Skins, Realme Mobile Skins, Poco Mobile Skins, Moto Mobile Skins etc. Best mobile skins & covers in India.`;
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://www.noava.in/',
    siteName: 'Noava skins & wraps',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fmobile%20skins%20%26%20wraps.jpeg?alt=media&token=934d4581-ea59-430a-ba2f-e1169a117ffd',
        width: 1200,
        height: 600,
        alt: 'Noava skins and wraps',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@www.noava.in',
    creator: 'noava',
    title: title,
    description: description,
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fmobile%20skins%20%26%20wraps.jpeg?alt=media&token=934d4581-ea59-430a-ba2f-e1169a117ffd',
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Providers> */}
        <RootHeader />
        {children}
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
