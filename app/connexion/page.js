'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LoginForm from '../components/forms/LoginForm';

export default function LoginPage() {
    const router = useRouter();
    const { isAuthenticated } = useSelector(state => state.auth);

    // Si l'utilisateur est déjà connecté, le rediriger vers la page d'accueil
    useEffect(() => {
        if (isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-term-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-block">
                        <h1 className="text-3xl font-bold text-term-green tracking-wider font-mono">
                            AKROUM<span className="text-accent-light">.DEV</span>
                        </h1>
                    </Link>
                </div>

                <LoginForm />

                <div className="mt-6 text-center">
                    <p className="text-term-text">
                        Pas encore de compte ?{' '}
                        <Link href="/inscription" className="text-term-green hover:underline">
                            S'inscrire
                        </Link>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <Link href="/" className="text-term-green hover:underline">
                        Retour à l'accueil
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}