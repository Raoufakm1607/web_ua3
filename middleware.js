import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Seules les routes qui nécessitent une authentification
    const protectedRoutes = [
        '/temoignages/ajouter',
        '/temoignages/modifier'
    ];

    // Vérifier si le chemin actuel est protégé
    const isProtectedRoute = protectedRoutes.some(path =>
        pathname === path || pathname.startsWith(path + '/')
    );

    // Récupérer les informations d'authentification des cookies
    const authToken = request.cookies.get('auth')?.value;

    // Si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée
    if (!authToken && isProtectedRoute) {
        return NextResponse.redirect(new URL('/connexion', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/temoignages/ajouter/:path*',
        '/temoignages/modifier/:path*',
    ],
};