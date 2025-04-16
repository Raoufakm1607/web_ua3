'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MainLayout from './components/layout/MainLayout';
import Terminal from './components/ui/Terminal';
import TestimonialsSection from './components/ui/TestimonialsSection';

export default function Home() {
    const [terminalComplete, setTerminalComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const terminalLines = [
        "echo 'Bienvenue sur mon portfolio...'",
        "cat profil.txt",
        "Nom: AKROUM Abd Elraouf",
        "Profession: Web developer",
        "Location: Montréal, QC",
        "loading skills.json...",
        "displaying personal_info.md..."
    ];

    const handleTerminalComplete = () => {
        setTerminalComplete(true);

        // Afficher le contenu principal après un court délai
        setTimeout(() => {
            setShowContent(true);
        }, 500);
    };

    // Styles
    const containerStyle = {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
    };

    const heroSectionStyle = {
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
    };

    const flexContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    };

    const terminalContainerStyle = {
        marginBottom: '2.5rem',
        width: '100%',
    };

    const contentContainerStyle = {
        width: '100%',
        paddingLeft: 0,
        opacity: showContent ? 1 : 0,
        transform: showContent ? 'translateX(0)' : 'translateX(50px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
    };

    const mainTitleStyle = {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#4EFA8B',
    };

    const subtitleStyle = {
        fontSize: '1.25rem',
        fontFamily: "'Ubuntu Mono', monospace",
        color: '#9D4EDD',
        marginBottom: '1.5rem',
    };

    const boxStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#1A1A1D',
        padding: '1rem',
        margin: '0.25rem',
        marginBottom: '1.5rem',
        transition: 'all 0.3s ease',
    };

    const boxTextStyle = {
        color: '#F0F0F0',
        marginBottom: '1rem',
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
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
        transition: 'all 0.3s ease',
        textDecoration: 'none',
    };

    const secondaryButtonStyle = {
        backgroundColor: '#121212',
        color: '#4EFA8B',
        fontWeight: 'bold',
        padding: '0.5rem 1.5rem',
        border: '2px solid #4EFA8B',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
    };

    const sectionTitleStyle = {
        fontSize: '1.875rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
        marginBottom: '1.5rem',
        display: 'inline-block',
        borderBottom: '2px solid #7209B7',
        paddingBottom: '0.5rem',
    };

    const skillsSectionStyle = {
        backgroundColor: '#1A1A1D',
        padding: '4rem 1rem',
    };

    const skillsGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '1.5rem',
    };

    const skillCardStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#121212',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
    };

    const skillTitleStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#9D4EDD',
        marginBottom: '1rem',
        fontFamily: "'Ubuntu Mono', monospace",
    };

    const skillItemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5rem',
    };

    const skillBulletStyle = {
        color: '#4EFA8B',
        marginRight: '0.5rem',
    };

    const skillTextStyle = {
        color: '#F0F0F0',
    };

    const technicalSkills = [
        { name: 'Next.js', level: 'Intermédiaire', category: 'web' },
        { name: 'JavaScript ES6+', level: 'Avancé', category: 'web' },
        { name: 'C#', level: 'Intermédiaire', category: 'desktop' },
        { name: '.NET', level: 'Intermédiaire', category: 'desktop' },
        { name: 'WPF', level: 'Intermédiaire', category: 'desktop' },
        { name: 'Tailwind CSS', level: 'Avancé', category: 'web' },
        { name: 'HTML', level: 'Avancé', category: 'web' },
        { name: 'Linux', level: 'Intermédiaire', category: 'os' },
        { name: 'Web APIs', level: 'Intermédiaire', category: 'web' },
        { name: 'HTTPS', level: 'Intermédiaire', category: 'web' },
        { name: 'Kotlin', level: 'Débutant', category: 'mobile' },
        { name: 'Java', level: 'Intermédiaire', category: 'multiple' },
    ];

    // Media queries for responsive design
    const mediaStyles = `
    @media (min-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .hero-flex {
        flex-direction: row;
      }
      
      .terminal-container {
        width: 50%;
        margin-bottom: 0;
      }
      
      .content-container {
        width: 50%;
        padding-left: 3rem;
      }
      
      .main-title {
        font-size: 3rem;
      }
      
      .subtitle {
        font-size: 1.5rem;
      }
    }
    
    @media (min-width: 1024px) {
      .skills-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `;

    return (
        <>
            <style>{mediaStyles}</style>
            <MainLayout>
                {/* Section Hero avec Terminal */}
                <section style={heroSectionStyle}>
                    <div style={containerStyle}>
                        <div style={flexContainerStyle} className="hero-flex">
                            <div style={terminalContainerStyle} className="terminal-container">
                                <Terminal
                                    lines={terminalLines}
                                    typingSpeed={40}
                                    onComplete={handleTerminalComplete}
                                />
                            </div>
                            <div style={contentContainerStyle} className="content-container">
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        border: '2px solid #9D4EDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#1A1A1D',
                                        position: 'relative',
                                        animation: 'pulseGlow 3s infinite ease-in-out',
                                        boxShadow: '0 0 10px rgba(114, 9, 183, 0.7)'
                                    }} className="profile-image">
                                        <img
                                            src="/images/profile.jpg"
                                            alt="AKROUM Abd Elraouf"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h1 style={mainTitleStyle} className="main-title">
                                            AKROUM Abd Elraouf
                                        </h1>
                                        <h2 style={subtitleStyle} className="subtitle">
                                            Étudiant en Programmation
                                        </h2>
                                    </div>

                                    <div style={boxStyle}>
                                        <p style={boxTextStyle}>
                                            Cuisinier motivé et livreur fiable avec plus de deux ans d'expérience dans la restauration et la livraison.
                                            Soucieux de la qualité du service et de la satisfaction client, je cherche à intégrer une équipe dynamique
                                            où je pourrai mettre mes compétences à profit.
                                        </p>
                                        <p style={boxTextStyle}>
                                            Actuellement, j'étudie la programmation et l'informatique au Collège La Cité à Ottawa.
                                        </p>
                                    </div>

                                    <div style={buttonContainerStyle}>
                                        <Link href="/projets" style={primaryButtonStyle}>
                                            Voir mes Projets
                                        </Link>
                                        <Link href="/temoignages" style={secondaryButtonStyle}>
                                            Témoignages
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Compétences Techniques */}
                <section style={skillsSectionStyle}>
                    <div style={containerStyle}>
                        <h2 style={sectionTitleStyle}>Compétences Techniques</h2>

                        <div style={skillsGridStyle} className="skills-grid">
                            {/* Groupe Web */}
                            <div style={skillCardStyle}>
                                <h3 style={skillTitleStyle}>Développement Web</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {technicalSkills
                                        .filter(skill => skill.category === 'web')
                                        .map((skill, index) => (
                                            <li key={index} style={skillItemStyle}>
                                                <span style={skillBulletStyle}>•</span>
                                                <span style={skillTextStyle}>{skill.name}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* Groupe Desktop */}
                            <div style={skillCardStyle}>
                                <h3 style={skillTitleStyle}>Développement Bureau</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {technicalSkills
                                        .filter(skill => skill.category === 'desktop')
                                        .map((skill, index) => (
                                            <li key={index} style={skillItemStyle}>
                                                <span style={skillBulletStyle}>•</span>
                                                <span style={skillTextStyle}>{skill.name}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* Autres compétences */}
                            <div style={skillCardStyle}>
                                <h3 style={skillTitleStyle}>Autres Technologies</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {technicalSkills
                                        .filter(skill => ['os', 'mobile', 'multiple'].includes(skill.category))
                                        .map((skill, index) => (
                                            <li key={index} style={skillItemStyle}>
                                                <span style={skillBulletStyle}>•</span>
                                                <span style={skillTextStyle}>{skill.name}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Compétences Professionnelles */}
                <section style={{ padding: '4rem 1rem' }}>
                    <div style={containerStyle}>
                        <h2 style={sectionTitleStyle}>Compétences Professionnelles</h2>

                        <div style={skillsGridStyle} className="skills-grid">
                            <div style={skillCardStyle}>
                                <h3 style={skillTitleStyle}>Cuisine</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Préparation culinaire</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Hygiène et sécurité alimentaire</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Gestion des stocks</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Normes HACCP</span>
                                    </li>
                                </ul>
                            </div>

                            <div style={skillCardStyle}>
                                <h3 style={skillTitleStyle}>Web</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Conduite sécuritaire</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Gestion efficace du temps</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Optimisation des itinéraires</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Applications de navigation</span>
                                    </li>
                                </ul>
                            </div>

                            <div style={skillCardStyle}>
                                <h3 style={skillTitleStyle}>Général</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Service à la clientèle</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Autonomie et ponctualité</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Travail d'équipe</span>
                                    </li>
                                    <li style={skillItemStyle}>
                                        <span style={skillBulletStyle}>•</span>
                                        <span style={skillTextStyle}>Gestion du stress</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Langues */}
                <section style={{ padding: '4rem 1rem', backgroundColor: '#1A1A1D' }}>
                    <div style={containerStyle}>
                        <h2 style={sectionTitleStyle}>Langues</h2>

                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span style={{ color: '#F0F0F0', fontWeight: '500' }}>Français</span>
                                    <span style={{ color: '#4EFA8B' }}>Courant</span>
                                </div>
                                <div style={{ width: '100%', backgroundColor: '#121212', height: '0.5rem' }}>
                                    <div style={{ backgroundColor: '#4EFA8B', height: '0.5rem', width: '95%' }}></div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span style={{ color: '#F0F0F0', fontWeight: '500' }}>Arabe</span>
                                    <span style={{ color: '#4EFA8B' }}>Langue Maternelle</span>
                                </div>
                                <div style={{ width: '100%', backgroundColor: '#121212', height: '0.5rem' }}>
                                    <div style={{ backgroundColor: '#4EFA8B', height: '0.5rem', width: '100%' }}></div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span style={{ color: '#F0F0F0', fontWeight: '500' }}>Anglais</span>
                                    <span style={{ color: '#4EFA8B' }}>Intermédiaire</span>
                                </div>
                                <div style={{ width: '100%', backgroundColor: '#121212', height: '0.5rem' }}>
                                    <div style={{ backgroundColor: '#4EFA8B', height: '0.5rem', width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Formation */}
                <section style={{ padding: '4rem 1rem' }}>
                    <div style={containerStyle}>
                        <h2 style={sectionTitleStyle}>Formation & Certifications</h2>

                        <div style={skillsGridStyle} className="skills-grid">
                            <div style={skillCardStyle}>
                                <div style={{ color: '#9D4EDD', fontFamily: "'Ubuntu Mono', monospace", marginBottom: '0.5rem' }}>
                                    Janvier 2024 - Avril 2025
                                </div>
                                <h3 style={{ ...skillTitleStyle, color: '#F0F0F0' }}>
                                    DEC – Programmation et informatique
                                </h3>
                                <p style={{ color: '#F0F0F0' }}>Collège La Cité, Ottawa, ON</p>
                            </div>

                            <div style={skillCardStyle}>
                                <h3 style={{ ...skillTitleStyle, color: '#F0F0F0' }}>
                                    Certificat de soins de premiers secours
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Témoignages */}
                <section style={{ padding: '4rem 1rem', backgroundColor: '#1A1A1D' }}>
                    <div style={containerStyle}>
                        <h2 style={{ ...sectionTitleStyle, textAlign: 'center', marginBottom: '2rem' }}>
                            Témoignages
                        </h2>

                        <TestimonialsSection />
                    </div>
                </section>

                {/* Section Contact */}
                {/* Section Contact */}
                <section style={{ padding: '4rem 1rem', backgroundColor: '#1A1A1D' }}>
                    <div style={containerStyle}>
                        <h2 style={{ ...sectionTitleStyle, textAlign: 'center' }}>Contact</h2>

                        <div style={{ ...skillCardStyle, maxWidth: '32rem', margin: '0 auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#9D4EDD', marginRight: '0.75rem' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                                    <span style={{ color: '#F0F0F0' }}>438-866-6375</span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#9D4EDD', marginRight: '0.75rem' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                                    <a
                                        href="mailto:raoufakm88@gmail.com"
                                        style={{ color: '#F0F0F0', textDecoration: 'none', transition: 'color 0.3s ease' }}
                                        onMouseOver={e => e.target.style.color = '#4EFA8B'}
                                        onMouseOut={e => e.target.style.color = '#F0F0F0'}
                                    >
                                        raoufakm88@gmail.com
                                    </a>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#9D4EDD', marginRight: '0.75rem' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </span>
                                    <span style={{ color: '#F0F0F0' }}>Montréal, QC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}