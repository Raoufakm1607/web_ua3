'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTestimonial, updateTestimonial, clearError } from '../../../redux/slices/testimonialSlice';
import { useRouter } from 'next/navigation';

const TestimonialForm = ({ testimonialId = null }) => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        content: '',
        rating: 5,
    });
    const [formErrors, setFormErrors] = useState({});
    const dispatch = useDispatch();
    const router = useRouter();
    const { testimonials, error } = useSelector(state => state.testimonials);
    const { currentUser } = useSelector(state => state.auth);

    console.log("État actuel des témoignages:", testimonials); // Debug

    useEffect(() => {
        // Si nous sommes en mode édition, charger les données du témoignage
        if (testimonialId) {
            const testimonial = testimonials.find(t => t.id === testimonialId);
            if (testimonial) {
                setFormData({
                    name: testimonial.name,
                    role: testimonial.role,
                    content: testimonial.content,
                    rating: testimonial.rating,
                });
            }
        } else if (currentUser) {
            // Remplir automatiquement le nom si l'utilisateur est connecté
            setFormData(prev => ({
                ...prev,
                name: currentUser.name || '',
            }));
        }
    }, [testimonialId, testimonials, currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'rating' ? parseInt(value, 10) : value,
        });

        // Effacer les erreurs lors de la modification
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: '',
            });
        }

        if (error) {
            dispatch(clearError());
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Le nom est requis';
        }

        if (!formData.role.trim()) {
            errors.role = 'Le rôle est requis';
        }

        if (!formData.content.trim()) {
            errors.content = 'Le contenu du témoignage est requis';
        } else if (formData.content.length < 10) {
            errors.content = 'Le témoignage doit contenir au moins 10 caractères';
        }

        if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
            errors.rating = 'La note doit être entre 1 et 5';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        if (testimonialId) {
            // Mode édition
            console.log("Mise à jour du témoignage:", { id: testimonialId, ...formData });
            dispatch(updateTestimonial({
                id: testimonialId,
                ...formData,
            }));
        } else {
            // Mode création
            const newTestimonial = {
                ...formData,
                userId: currentUser?.id || 'anonymous',
                createdAt: new Date().toISOString(),
            };
            console.log("Ajout d'un nouveau témoignage:", newTestimonial);
            dispatch(addTestimonial(newTestimonial));
        }

        // Rediriger vers la liste des témoignages
        router.push('/temoignages');
    };

    // Styles
    const formContainerStyle = {
        width: '100%',
        maxWidth: '32rem',
        margin: '0 auto',
    };

    const formStyle = {
        backgroundColor: '#1A1A1D',
        padding: '1.5rem',
        border: '2px solid #9D4EDD',
        borderRadius: '4px',
    };

    const formGroupStyle = {
        marginBottom: '1.25rem',
    };

    const labelStyle = {
        display: 'block',
        color: '#F0F0F0',
        marginBottom: '0.5rem',
        fontFamily: "'Ubuntu Mono', monospace",
    };

    const inputStyle = {
        width: '100%',
        backgroundColor: '#121212',
        border: '2px solid #7209B7',
        color: '#F0F0F0',
        padding: '0.75rem',
        fontFamily: "'Ubuntu Mono', monospace",
        fontSize: '1rem',
        borderRadius: '4px',
    };

    const textareaStyle = {
        ...inputStyle,
        minHeight: '8rem',
        resize: 'vertical',
    };

    const errorStyle = {
        color: '#F44336',
        fontSize: '0.875rem',
        marginTop: '0.375rem',
    };

    const ratingContainerStyle = {
        display: 'flex',
        gap: '0.5rem',
    };

    const starStyle = {
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: '#555',
    };

    const activeStarStyle = {
        ...starStyle,
        color: '#FFC107',
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '1rem',
        marginTop: '1.5rem',
    };

    const submitButtonStyle = {
        backgroundColor: '#7209B7',
        color: 'white',
        fontWeight: 'bold',
        padding: '0.75rem 1.5rem',
        border: '2px solid #9D4EDD',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        flexGrow: 1,
        cursor: 'pointer',
        borderRadius: '4px',
    };

    const cancelButtonStyle = {
        backgroundColor: 'transparent',
        color: '#4EFA8B',
        fontWeight: 'bold',
        padding: '0.75rem 1.5rem',
        border: '2px solid #4EFA8B',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        flexGrow: 1,
        cursor: 'pointer',
        borderRadius: '4px',
    };

    return (
        <div style={formContainerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formGroupStyle}>
                    <label htmlFor="name" style={labelStyle}>
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={inputStyle}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                    />
                    {formErrors.name && (
                        <p style={errorStyle}>{formErrors.name}</p>
                    )}
                </div>

                <div style={formGroupStyle}>
                    <label htmlFor="role" style={labelStyle}>
                        Rôle / Entreprise
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        style={inputStyle}
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="ex: Collègue, Client, Manager..."
                    />
                    {formErrors.role && (
                        <p style={errorStyle}>{formErrors.role}</p>
                    )}
                </div>

                <div style={formGroupStyle}>
                    <label htmlFor="content" style={labelStyle}>
                        Témoignage
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        style={textareaStyle}
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Partagez votre expérience..."
                    ></textarea>
                    {formErrors.content && (
                        <p style={errorStyle}>{formErrors.content}</p>
                    )}
                </div>

                <div style={formGroupStyle}>
                    <label style={labelStyle}>
                        Note
                    </label>
                    <div style={ratingContainerStyle}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => setFormData({ ...formData, rating: star })}
                                style={formData.rating >= star ? activeStarStyle : starStyle}
                            >
                ★
              </span>
                        ))}
                    </div>
                    {formErrors.rating && (
                        <p style={errorStyle}>{formErrors.rating}</p>
                    )}
                </div>

                <div style={buttonContainerStyle}>
                    <button type="submit" style={submitButtonStyle}>
                        {testimonialId ? 'Mettre à jour' : 'Ajouter'}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/temoignages')}
                        style={cancelButtonStyle}
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TestimonialForm;