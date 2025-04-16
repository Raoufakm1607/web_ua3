import { Providers } from './providers';
import '../styles/globals.css';

export const metadata = {
    title: 'Portfolio d\'AKROUM Abd Elraouf',
    description: 'Portfolio professionnel d\'AKROUM Abd Elraouf,Web developer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </head>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}