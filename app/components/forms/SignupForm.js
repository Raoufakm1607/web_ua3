'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, clearError } from '../../../redux/slices/authSlice';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            errors.name = 'Le nom est requis';
        }

        if (!formData.email) {
            errors.email = 'L\'email est requis';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Format d\'email invalide';
        }

        if (!formData.password) {
            errors.password = 'Le mot de passe est requis';
        } else if (formData.password.length < 6) {
            errors.password = 'Le mot de passe doit contenir au moins 6 caractères';
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Veuillez confirmer votre mot de passe';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Les mots de passe ne correspondent pas';
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

        // Préparer les données pour l'enregistrement
        const userData = {
            id: Date.now().toString(),
            name: formData.name,
            email: formData.email,
            password: formData.password,
            createdAt: new Date().toISOString(),
        };

        dispatch(register(userData));

        // Si pas d'erreur, rediriger vers la page de connexion
        if (!error) {
            router.push('/connexion');
        }
    };

    // Styles responsive
    const formContainerStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem',
    };

    const formStyle = {
        width: '100%',
        maxWidth: '28rem',
        backgroundColor: '#1A1A1D',
        padding: '1.5rem',
        border: '2px solid #9D4EDD',
        borderRadius: '4px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#4EFA8B',
        marginBottom: '1.5rem',
        fontFamily: "'Ubuntu Mono', monospace",
        textAlign: 'center',
    };

    const errorBoxStyle = {
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        border: '1px solid #F44336',
        padding: '0.75rem',
        marginBottom: '1rem',
        color: '#F44336',
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

    const errorTextStyle = {
        color: '#F44336',
        fontSize: '0.875rem',
        fontWeight: '500',
        marginTop: '0.375rem',
    };

    const buttonStyle = {
        backgroundColor: '#7209B7',
        color: 'white',
        fontWeight: 'bold',
        padding: '0.75rem 1.5rem',
        border: '2px solid #9D4EDD',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        width: '100%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '1rem',
        borderRadius: '4px',
    };

    return (
        <div style={formContainerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2 style={titleStyle}>Inscription</h2>

                {error && (
                    <div style={errorBoxStyle}>
                        {error}
                    </div>
                )}

                <div style={formGroupStyle}>
                    <label htmlFor="name" style={labelStyle}>
                        Nom complet
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={inputStyle}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Prénom Nom"
                    />
                    {formErrors.name && (
                        <p style={errorTextStyle}>{formErrors.name}</p>
                    )}
                </div>

                <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        style={inputStyle}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                    />
                    {formErrors.email && (
                        <p style={errorTextStyle}>{formErrors.email}</p>
                    )}
                </div>

                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        style={inputStyle}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                    />
                    {formErrors.password && (
                        <p style={errorTextStyle}>{formErrors.password}</p>
                    )}
                </div>

                <div style={formGroupStyle}>
                    <label htmlFor="confirmPassword" style={labelStyle}>
                        Confirmer le mot de passe
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        style={inputStyle}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                    />
                    {formErrors.confirmPassword && (
                        <p style={errorTextStyle}>{formErrors.confirmPassword}</p>
                    )}
                </div>

                <button
                    type="submit"
                    style={buttonStyle}
                >
                    S'inscrire
                </button>
            </form>
        </div>
    );
};

export default SignupForm;