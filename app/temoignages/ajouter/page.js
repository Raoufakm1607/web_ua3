'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import TestimonialForm from '../../components/forms/TestimonialForm';

export default function AddTestimonialPage() {
    const { isAuthenticated } = useSelector(state => state.auth);
    const router = useRouter();

    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/connexion');
        }
    }, [isAuthenticated, router]);

    const backLinkStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        color: '#4EFA8B',
        marginBottom: '2rem',
        textDecoration: 'none',
        fontSize: '1rem',
    };

    const iconStyle = {
        width: '1rem',
        height: '1rem',
        marginRight: '0.5rem',
    };

    if (!isAuthenticated) {
        return (
            <MainLayout>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center brutal-box">
                        <h1 className="text-3xl font-mono font-bold text-term-green mb-6">Accès Restreint</h1>
                        <p className="text-term-text mb-8">Veuillez vous connecter pour ajouter un témoignage.</p>
                        <div className="space-x-4">
                            <Link href="/connexion" className="btn-primary">Connexion</Link>
                            <Link href="/inscription" className="btn-secondary">Inscription</Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <main style={{ flexGrow: 1, paddingTop: '6rem', paddingBottom: '4rem', padding: '6rem 1rem 4rem 1rem' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <Link
                        href="/temoignages"
                        style={backLinkStyle}
                    >
                        <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Retour aux témoignages
                    </Link>

                    <div style={{ marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#4EFA8B', marginBottom: '1rem' }}>
                            Ajouter un témoignage
                        </h1>
                        <p style={{ color: '#F0F0F0', maxWidth: '32rem' }}>
                            Partagez votre expérience et votre avis sur notre collaboration.
                        </p>
                    </div>

                    <TestimonialForm />
                </div>
            </main>
        </MainLayout>
    );
}