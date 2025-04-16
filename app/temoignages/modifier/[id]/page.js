'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import TestimonialForm from '../../../components/forms/TestimonialForm';

export default function EditTestimonialPage() {
    const { id } = useParams();
    const { isAuthenticated } = useSelector(state => state.auth);
    const { testimonials } = useSelector(state => state.testimonials);
    const { currentUser } = useSelector(state => state.auth);

    const testimonial = testimonials.find(t => t.id === id);
    const isAuthor = testimonial && currentUser && testimonial.userId === currentUser.id;

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-term-black">
                <div className="text-center">
                    <h1 className="text-3xl font-mono font-bold text-term-green mb-6">Accès Restreint</h1>
                    <p className="text-term-text mb-8">Veuillez vous connecter pour modifier un témoignage.</p>
                    <div className="space-x-4">
                        <Link href="/connexion" className="btn-primary">Connexion</Link>
                        <Link href="/inscription" className="btn-secondary">Inscription</Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!testimonial) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-grow pt-24 pb-16 px-4 flex items-center justify-center">
                    <div className="brutal-box text-center py-12 max-w-md">
                        <h1 className="text-3xl font-bold text-term-green mb-4">Témoignage introuvable</h1>
                        <p className="text-term-text mb-6">
                            Le témoignage que vous essayez de modifier n'existe pas.
                        </p>
                        <Link href="/temoignages" className="btn-primary">
                            Retour aux témoignages
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }

    if (!isAuthor) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-grow pt-24 pb-16 px-4 flex items-center justify-center">
                    <div className="brutal-box text-center py-12 max-w-md">
                        <h1 className="text-3xl font-bold text-error-red mb-4">Accès non autorisé</h1>
                        <p className="text-term-text mb-6">
                            Vous n'êtes pas autorisé à modifier ce témoignage car vous n'en êtes pas l'auteur.
                        </p>
                        <Link href="/temoignages" className="btn-primary">
                            Retour aux témoignages
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16 px-4">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <Link
                            href="/temoignages"
                            className="inline-flex items-center text-term-green hover:text-accent transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Retour aux témoignages
                        </Link>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-term-green mb-4">Modifier le témoignage</h1>
                        <p className="text-term-text max-w-2xl">
                            Mettez à jour votre témoignage ci-dessous.
                        </p>
                    </div>

                    <TestimonialForm testimonialId={id} />
                </div>
            </main>

            <Footer />
        </div>
    );
}