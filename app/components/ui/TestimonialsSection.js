'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const TestimonialsSection = () => {
    const { testimonials } = useSelector(state => state.testimonials);
    const { isAuthenticated } = useSelector(state => state.auth);
    const [displayedTestimonials, setDisplayedTestimonials] = useState([]);

    // Prendre les 2 derniers témoignages pour la page d'accueil
    useEffect(() => {
        if (testimonials && testimonials.length > 0) {
            // Trier par date décroissante et prendre les 2 premiers
            const sortedTestimonials = [...testimonials]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 2);

            setDisplayedTestimonials(sortedTestimonials);
        }
    }, [testimonials]);

    // Styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
    };

    const testimonialsContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '48rem',
    };

    const testimonialCardStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#121212',
        padding: '1.5rem',
        borderRadius: '4px',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem',
    };

    const authorInfoStyle = {
        marginBottom: '0.5rem',
    };

    const authorNameStyle = {
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
    };

    const authorRoleStyle = {
        fontSize: '0.875rem',
        color: '#9D4EDD',
        fontFamily: "'Ubuntu Mono', monospace",
    };

    const contentStyle = {
        color: '#F0F0F0',
        marginBottom: '1rem',
        fontSize: '0.95rem',
        lineHeight: '1.6',
    };

    const emptyStateStyle = {
        textAlign: 'center',
        padding: '2rem',
        border: '2px solid #9D4EDD',
        backgroundColor: '#121212',
        maxWidth: '32rem',
        width: '100%',
    };

    const emptyTextStyle = {
        color: '#F0F0F0',
        marginBottom: '1.5rem',
    };

    const buttonStyle = {
        backgroundColor: '#7209B7',
        color: 'white',
        fontWeight: 'bold',
        padding: '0.75rem 1.5rem',
        border: '2px solid #9D4EDD',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block',
        marginTop: '0.5rem',
    };

    const viewAllButtonStyle = {
        backgroundColor: 'transparent',
        color: '#4EFA8B',
        fontWeight: 'bold',
        padding: '0.75rem 1.5rem',
        border: '2px solid #4EFA8B',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        borderRadius: '4px',
        marginTop: '1rem',
    };

    const renderStars = (rating) => {
        return (
            <div style={{ display: 'flex', gap: '0.25rem' }}>
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <span key={i} style={{ color: i < rating ? '#FFC107' : '#555555' }}>
              ★
            </span>
                    ))}
            </div>
        );
    };

    // Si pas de témoignages
    if (!displayedTestimonials || displayedTestimonials.length === 0) {
        return (
            <div style={containerStyle}>
                <div style={emptyStateStyle}>
                    <p style={emptyTextStyle}>Aucun témoignage pour le moment.</p>
                    {isAuthenticated ? (
                        <Link href="/temoignages/ajouter" style={buttonStyle}>
                            Soyez le premier à témoigner
                        </Link>
                    ) : (
                        <Link href="/connexion" style={buttonStyle}>
                            Connexion pour ajouter un témoignage
                        </Link>
                    )}
                </div>
            </div>
        );
    }

    // Version responsive avec @media
    const mediaQuery = `
    @media (min-width: 768px) {
      .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

    return (
        <>
            <style>{mediaQuery}</style>
            <div style={containerStyle}>
                <div style={testimonialsContainerStyle} className="testimonials-grid">
                    {displayedTestimonials.map((testimonial) => (
                        <div key={testimonial.id} style={testimonialCardStyle}>
                            <div style={headerStyle}>
                                <div style={authorInfoStyle}>
                                    <div style={authorNameStyle}>{testimonial.name}</div>
                                    <div style={authorRoleStyle}>{testimonial.role}</div>
                                </div>
                                {renderStars(testimonial.rating)}
                            </div>
                            <div style={contentStyle}>"{testimonial.content}"</div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/temoignages" style={viewAllButtonStyle}>
                        Voir tous les témoignages
                    </Link>

                    {isAuthenticated ? (
                        <Link href="/temoignages/ajouter" style={buttonStyle}>
                            Ajouter un témoignage
                        </Link>
                    ) : (
                        <Link href="/connexion" style={buttonStyle}>
                            Connexion pour ajouter un témoignage
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default TestimonialsSection;