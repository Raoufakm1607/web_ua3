'use client';

import Link from 'next/link';

const ProjectCard = ({ project }) => {
    const cardStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#1A1A1D',
        padding: '1rem',
        margin: '0.25rem',
        transition: 'all 0.3s ease',
    };

    const cardHoverStyle = {
        ':hover': {
            borderColor: '#4EFA8B',
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 6px -1px rgba(114, 9, 183, 0.3)',
        },
    };

    const imageContainerStyle = {
        aspectRatio: '16/9',
        width: '100%',
        backgroundColor: '#121212',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    const bgNumberStyle = {
        fontSize: '5rem',
        color: '#9D4EDD',
        fontWeight: 'bold',
        opacity: '0.2',
        position: 'absolute',
    };

    const contentOverlayStyle = {
        zIndex: '10',
        textAlign: 'center',
        padding: '1rem',
    };

    const titleStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
        marginBottom: '0.5rem',
    };

    const descriptionStyle = {
        color: '#F0F0F0',
        fontSize: '0.875rem',
    };

    const techContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1rem',
    };

    const techBadgeStyle = {
        padding: '0.25rem 0.5rem',
        backgroundColor: 'rgba(114, 9, 183, 0.2)',
        color: '#4EFA8B',
        fontSize: '0.75rem',
        fontFamily: "'Ubuntu Mono', monospace",
    };

    const buttonStyle = {
        backgroundColor: '#121212',
        color: '#4EFA8B',
        fontWeight: 'bold',
        padding: '0.5rem 1.5rem',
        border: '2px solid #4EFA8B',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        transition: 'all 0.3s ease',
        width: '100%',
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
    };

    const buttonHoverStyle = {
        ':hover': {
            backgroundColor: 'rgba(78, 250, 139, 0.1)',
        },
    };

    return (
        <div
            style={{...cardStyle, ...cardHoverStyle}}
            className="brutal-box"
        >
            <div style={imageContainerStyle}>
                <div style={bgNumberStyle}>{project.id}</div>
                <div style={contentOverlayStyle}>
                    <h3 style={titleStyle}>{project.title}</h3>
                    <p style={descriptionStyle}>{project.shortDescription}</p>
                </div>
            </div>

            <div style={techContainerStyle}>
                {project.technologies.map((tech, index) => (
                    <span key={index} style={techBadgeStyle}>
            {tech}
          </span>
                ))}
            </div>

            <Link
                href={`/projets/${project.id}`}
                style={{...buttonStyle, ...buttonHoverStyle}}
                className="btn-secondary"
            >
                Voir le projet
            </Link>
        </div>
    );
};

export default ProjectCard;