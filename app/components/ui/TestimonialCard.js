'use client';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTestimonial } from '../../../redux/slices/testimonialSlice';
import Link from 'next/link';

const TestimonialCard = ({ testimonial }) => {
    const dispatch = useDispatch();
    const { currentUser, isAuthenticated } = useSelector(state => state.auth);

    // Vérifier si l'utilisateur actuel est l'auteur du témoignage
    const isAuthor = isAuthenticated && currentUser && testimonial.userId === currentUser.id;

    // Formater la date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    const handleDelete = () => {
        if (window.confirm('Voulez-vous vraiment supprimer ce témoignage ?')) {
            dispatch(deleteTestimonial(testimonial.id));
        }
    };

    // Afficher les étoiles pour la note
    const renderStars = (rating) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <span key={i} style={{
                    color: i < rating ? '#FFC107' : '#555555',
                    fontSize: '1.25rem'
                }}>
          ★
        </span>
            ));
    };

    // Styles
    const cardStyle = {
        border: '2px solid #9D4EDD',
        backgroundColor: '#1A1A1D',
        padding: '1rem',
        margin: '0.25rem',
        transition: 'all 0.3s ease',
        position: 'relative',
        animation: 'fadeIn 0.5s ease'
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem'
    };

    const nameStyle = {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#4EFA8B'
    };

    const roleStyle = {
        color: '#9D4EDD',
        fontFamily: "'Ubuntu Mono', monospace",
        fontSize: '0.875rem'
    };

    const starContainerStyle = {
        display: 'flex'
    };

    const contentStyle = {
        color: '#F0F0F0',
        marginBottom: '1rem'
    };

    const dateStyle = {
        textAlign: 'right',
        fontSize: '0.875rem',
        color: '#777777',
        fontStyle: 'italic'
    };

    const actionsContainerStyle = {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '0.5rem'
    };

    const editButtonStyle = {
        padding: '0.25rem 0.75rem',
        backgroundColor: '#7209B7',
        color: 'white',
        fontSize: '0.875rem',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease'
    };

    const deleteButtonStyle = {
        padding: '0.25rem 0.75rem',
        backgroundColor: '#F44336',
        color: 'white',
        fontSize: '0.875rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div style={cardStyle} className="brutal-box">
            <div style={headerStyle}>
                <div>
                    <h3 style={nameStyle}>{testimonial.name}</h3>
                    <p style={roleStyle}>{testimonial.role}</p>
                </div>
                <div style={starContainerStyle}>
                    {renderStars(testimonial.rating)}
                </div>
            </div>

            <p style={contentStyle}>{testimonial.content}</p>

            <div style={dateStyle}>
                {testimonial.updatedAt
                    ? `Modifié le ${formatDate(testimonial.updatedAt)}`
                    : `Ajouté le ${formatDate(testimonial.createdAt)}`}
            </div>

            {isAuthor && (
                <div style={actionsContainerStyle}>
                    <Link
                        href={`/temoignages/modifier/${testimonial.id}`}
                        style={editButtonStyle}
                    >
                        Modifier
                    </Link>
                    <button
                        onClick={handleDelete}
                        style={deleteButtonStyle}
                    >
                        Supprimer
                    </button>
                </div>
            )}
        </div>
    );
};

export default TestimonialCard;