'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import projects from '../../projects-data';

export default function ProjectDetailPage() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    // Styles
    const mainContentStyle = {
        flexGrow: 1,
        paddingTop: '6rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingBottom: '4rem',
    };

    const containerStyle = {
        maxWidth: '1280px',
        margin: '0 auto',
    };

    const backLinkStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        color: '#4EFA8B',
        marginBottom: '2rem',
        transition: 'color 0.3s ease',
        textDecoration: 'none',
    };

    const heroBoxStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#1A1A1D',
        padding: '1.5rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
        animation: 'fadeIn 0.5s ease',
    };

    const projectNumberStyle = {
        position: 'absolute',
        top: '-1rem',
        right: '-1rem',
        fontSize: '8rem',
        fontWeight: 'bold',
        color: '#9D4EDD',
        opacity: '0.1',
        zIndex: '0',
    };

    const contentContainerStyle = {
        position: 'relative',
        zIndex: '10',
    };

    const titleStyle = {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
        marginBottom: '0.5rem',
    };

    const subtitleStyle = {
        fontSize: '1.25rem',
        color: '#9D4EDD',
        marginBottom: '1.5rem',
    };

    const techContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
    };

    const techBadgeStyle = {
        padding: '0.25rem 0.5rem',
        backgroundColor: 'rgba(114, 9, 183, 0.2)',
        color: '#4EFA8B',
        fontSize: '0.875rem',
        fontFamily: "'Ubuntu Mono', monospace",
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '1.5rem',
        marginBottom: '1.5rem',
    };

    const sectionBoxStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#1A1A1D',
        padding: '1.5rem',
        height: '100%',
    };

    const sectionTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
        marginBottom: '1rem',
    };

    const sectionTextStyle = {
        color: '#F0F0F0',
        whiteSpace: 'pre-line',
    };

    const featureItemStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '0.5rem',
    };

    const bulletStyle = {
        color: '#4EFA8B',
        marginRight: '0.5rem',
    };

    // Error state for project not found
    if (!project) {
        return (
            <MainLayout>
                <main style={mainContentStyle}>
                    <div style={containerStyle}>
                        <div style={{
                            border: '2px solid #9D4EDD',
                            backgroundColor: '#1A1A1D',
                            padding: '3rem',
                            textAlign: 'center',
                            maxWidth: '28rem',
                            margin: '0 auto',
                        }}>
                            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#4EFA8B', marginBottom: '1rem' }}>
                                Projet introuvable
                            </h1>
                            <p style={{ color: '#F0F0F0', marginBottom: '1.5rem' }}>
                                Le projet que vous cherchez n'existe pas.
                            </p>
                            <Link href="/projets" style={{
                                backgroundColor: '#7209B7',
                                color: 'white',
                                fontWeight: 'bold',
                                padding: '0.5rem 1.5rem',
                                border: '2px solid #9D4EDD',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                            }}>
                                Voir tous les projets
                            </Link>
                        </div>
                    </div>
                </main>
            </MainLayout>
        );
    }

    // Responsive grid
    const mediaQueryStyles = `
    @media (min-width: 768px) {
      .details-grid {
        grid-template-columns: 2fr 1fr;
      }
      
      .half-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

    return (
        <>
            <style>{mediaQueryStyles}</style>
            <MainLayout>
                <main style={mainContentStyle}>
                    <div style={containerStyle}>
                        <Link
                            href="/projets"
                            style={backLinkStyle}
                            onMouseOver={e => e.target.style.color = '#9D4EDD'}
                            onMouseOut={e => e.target.style.color = '#4EFA8B'}
                        >
                            <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Retour aux projets
                        </Link>

                        <div style={heroBoxStyle}>
                            <div style={projectNumberStyle}>
                                {project.id}
                            </div>
                            <div style={contentContainerStyle}>
                                <h1 style={titleStyle}>{project.title}</h1>
                                <p style={subtitleStyle}>{project.shortDescription}</p>

                                <div style={techContainerStyle}>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} style={techBadgeStyle}>
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={gridContainerStyle} className="details-grid">
                            <div style={sectionBoxStyle}>
                                <h2 style={sectionTitleStyle}>Description</h2>
                                <div style={sectionTextStyle}>
                                    {project.fullDescription}
                                </div>
                            </div>

                            <div style={sectionBoxStyle}>
                                <h2 style={sectionTitleStyle}>Fonctionnalités</h2>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {project.features.map((feature, index) => (
                                        <li key={index} style={featureItemStyle}>
                                            <span style={bulletStyle}>•</span>
                                            <span style={{ color: '#F0F0F0' }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={gridContainerStyle} className="half-grid">
                            <div style={sectionBoxStyle}>
                                <h2 style={sectionTitleStyle}>Défis</h2>
                                <div style={sectionTextStyle}>
                                    {project.challenges}
                                </div>
                            </div>

                            <div style={sectionBoxStyle}>
                                <h2 style={sectionTitleStyle}>Résultats</h2>
                                <div style={sectionTextStyle}>
                                    {project.outcome}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </MainLayout>
        </>
    );
}