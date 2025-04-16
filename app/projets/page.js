'use client';

import MainLayout from '../components/layout/MainLayout';
import ProjectCard from '../components/ui/ProjectCard';
import projects from '../projects-data';

export default function ProjectsPage() {
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

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '1.5rem',
        marginBottom: '4rem',
    };

    // Responsive grid
    const mediaQueryStyles = `
    @media (min-width: 768px) {
      .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    
    @media (min-width: 1024px) {
      .projects-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
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
                            <h1 style={titleStyle}>Mes Projets</h1>
                            <p style={descriptionStyle}>
                                Découvrez une sélection de mes projets récents. Chaque projet illustre mes compétences
                                en développement web et ma capacité à créer des solutions efficaces.
                            </p>
                        </div>

                        <div style={gridContainerStyle} className="projects-grid">
                            {projects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </main>
            </MainLayout>
        </>
    );
}