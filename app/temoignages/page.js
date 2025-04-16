'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import TestimonialCard from '../components/ui/TestimonialCard';

export default function TestimonialsPage() {
    const { testimonials } = useSelector(state => state.testimonials);
    const { isAuthenticated } = useSelector(state => state.auth);

    console.log("Témoignages disponibles:", testimonials); // Debug pour voir les témoignages

    // Styles
    const mainContentStyle = {
        flexGrow: 1,
        paddingTop: '6rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    };

    const containerStyle = {
        maxWidth: '1280px',
        margin: '0 auto',
    };

    const headerContainerStyle = {
        marginBottom: '3rem',
        animation: 'fadeIn 0.5s ease',
    };

    const titleStyle = {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
        marginBottom: '1rem',
    };

    const descriptionStyle = {
        color: '#F0F0F0',
        maxWidth: '32rem',
    };

    const actionContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '2rem',
    };

    const primaryButtonStyle = {
        backgroundColor: '#7209B7',
        color: 'white',
        fontWeight: 'bold',
        padding: '0.5rem 1.5rem',
        border: '2px solid #9D4EDD',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    };

    const emptyStateStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#1A1A1D',
        padding: '3rem',
        textAlign: 'center',
    };

    const emptyTextStyle = {
        color: '#F0F0F0',
        marginBottom: '1rem',
    };

    const emptyCTAStyle = {
        color: '#9D4EDD',
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '1.5rem',
        marginBottom: '4rem',
    };

    // Responsive grid
    const mediaQueryStyles = `
    @media (min-width: 768px) {
      .testimonials-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

    return (
        <>
            <style>{mediaQueryStyles}</style>
            <MainLayout>
                <main style={mainContentStyle}>
                    <div style={containerStyle}>
                        <div style={headerContainerStyle}>
                            <h1 style={titleStyle}>Témoignages</h1>
                            <p style={descriptionStyle}>
                                Découvrez ce que mes collègues et clients disent de mon travail et de ma collaboration.
                            </p>
                        </div>

                        <div style={actionContainerStyle}>
                            {isAuthenticated ? (
                                <Link href="/temoignages/ajouter" style={primaryButtonStyle} className="btn-primary">
                                    Ajouter un témoignage
                                </Link>
                            ) : (
                                <Link href="/connexion" style={primaryButtonStyle} className="btn-primary">
                                    Connexion pour ajouter un témoignage
                                </Link>
                            )}
                        </div>

                        {!testimonials || testimonials.length === 0 ? (
                            <div style={emptyStateStyle} className="brutal-box">
                                <p style={emptyTextStyle}>Aucun témoignage pour le moment.</p>
                                <p style={emptyCTAStyle}>Soyez le premier à partager votre expérience !</p>
                            </div>
                        ) : (
                            <div style={gridContainerStyle} className="testimonials-grid">
                                {testimonials.map(testimonial => (
                                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </MainLayout>
        </>
    );
}