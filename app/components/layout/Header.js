'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/slices/authSlice';

const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Style variables
    const headerStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? '#121212' : 'transparent',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
    };

    const logoStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
        letterSpacing: '0.05em',
        fontFamily: "'Ubuntu Mono', monospace"
    };

    const accentTextStyle = {
        color: '#9D4EDD'
    };

    const navLinkStyle = {
        padding: '0.25rem 0.75rem',
        display: 'inline-block',
        borderBottom: '2px solid transparent',
        transition: 'all 0.2s ease',
    };

    const activeNavLinkStyle = {
        ...navLinkStyle,
        borderBottomColor: '#4EFA8B',
        color: '#4EFA8B'
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
        fontSize: '0.875rem',
    };

    const hamburgerLineStyle = {
        display: 'block',
        width: '1.5rem',
        height: '0.125rem',
        backgroundColor: '#4EFA8B',
        marginBottom: '0.375rem',
        transition: 'all 0.3s ease',
    };

    const mobileMenuContainerStyle = {
        display: menuOpen ? 'block' : 'none',
        marginTop: '1rem',
    };

    const mobileMenuStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        backgroundColor: '#1A1A1D',
        padding: '1rem',
        border: '1px solid #7209B7',
    };

    // Gérer le scrolling pour l'effet de parallaxe
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        // Supprimer le cookie d'auth
        document.cookie = 'auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getLinkStyle = (path) => {
        if (pathname === path || (path !== '/' && pathname.startsWith(path))) {
            return activeNavLinkStyle;
        }
        return navLinkStyle;
    };

    return (
        <header style={headerStyle}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0.75rem 1rem',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link href="/" style={logoStyle}>
                        AKROUM<span style={accentTextStyle}>.DEV</span>
                    </Link>

                    {/* Menu desktop */}
                    <nav style={{
                        display: 'none',
                        alignItems: 'center',
                        gap: '1.5rem',
                        '@media (min-width: 768px)': {
                            display: 'flex'
                        }
                    }} className="hidden md:flex">
                        <Link href="/" style={getLinkStyle('/')}>
                            Accueil
                        </Link>
                        <Link href="/projets" style={getLinkStyle('/projets')}>
                            Projets
                        </Link>
                        <Link href="/temoignages" style={getLinkStyle('/temoignages')}>
                            Témoignages
                        </Link>

                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                style={secondaryButtonStyle}
                            >
                                Déconnexion
                            </button>
                        ) : (
                            <Link
                                href="/connexion"
                                style={pathname === '/connexion' ? activeNavLinkStyle : primaryButtonStyle}
                            >
                                Connexion
                            </Link>
                        )}
                    </nav>

                    {/* Menu hamburger pour mobile */}
                    <button
                        onClick={toggleMenu}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '2rem',
                            height: '2rem',
                            '@media (min-width: 768px)': {
                                display: 'none'
                            }
                        }}
                        className="md:hidden"
                        aria-label="Menu"
                    >
            <span style={{
                ...hamburgerLineStyle,
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}></span>
                        <span style={{
                            ...hamburgerLineStyle,
                            opacity: menuOpen ? 0 : 1
                        }}></span>
                        <span style={{
                            ...hamburgerLineStyle,
                            marginBottom: 0,
                            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                        }}></span>
                    </button>
                </div>

                {/* Menu mobile */}
                <nav style={mobileMenuContainerStyle} className="md:hidden">
                    <div style={mobileMenuStyle}>
                        <Link
                            href="/"
                            style={getLinkStyle('/')}
                            onClick={() => setMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/projets"
                            style={getLinkStyle('/projets')}
                            onClick={() => setMenuOpen(false)}
                        >
                            Projets
                        </Link>
                        <Link
                            href="/temoignages"
                            style={getLinkStyle('/temoignages')}
                            onClick={() => setMenuOpen(false)}
                        >
                            Témoignages
                        </Link>

                        {isAuthenticated ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setMenuOpen(false);
                                }}
                                style={{
                                    ...secondaryButtonStyle,
                                    width: '100%'
                                }}
                            >
                                Déconnexion
                            </button>
                        ) : (
                            <Link
                                href="/connexion"
                                style={{
                                    ...primaryButtonStyle,
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                                onClick={() => setMenuOpen(false)}
                            >
                                Connexion
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;