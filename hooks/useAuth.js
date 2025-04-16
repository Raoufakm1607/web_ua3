'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { logout } from '../redux/slices/authSlice';

const useAuth = () => {
    const { isAuthenticated, currentUser, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    // Vérifier si le cookie d'authentification est présent
    const hasAuthCookie = () => {
        return document.cookie.split(';').some(item => item.trim().startsWith('auth='));
    };

    // Gérer la déconnexion
    const handleLogout = () => {
        dispatch(logout());
        document.cookie = 'auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/connexion');
    };

    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    useEffect(() => {
        if (!isAuthenticated && !hasAuthCookie()) {
            router.push('/connexion');
        }

        // Si l'utilisateur est authentifié, définir un cookie
        if (isAuthenticated) {
            document.cookie = 'auth=true; Path=/; max-age=86400';
        }
    }, [isAuthenticated, router]);

    return {
        isAuthenticated,
        currentUser,
        error,
        handleLogout
    };
};

export default useAuth;