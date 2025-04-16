'use client';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }) {
    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
        // Si l'utilisateur est authentifié, définir un cookie
        if (isAuthenticated) {
            document.cookie = 'auth=true; Path=/; max-age=86400';
        }
    }, [isAuthenticated]);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#121212',
            color: '#F0F0F0'
        }}>
            <Header />
            <main style={{
                flexGrow: 1,
                paddingTop: '4rem'
            }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}