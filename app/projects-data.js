const projects = [
    {
        id: '01',
        title: 'Site Web E-commerce',
        shortDescription: 'Une plateforme e-commerce pour une boutique locale.',
        fullDescription: `
      Ce projet consistait à créer un site web e-commerce pour une petite entreprise locale.
      J'ai développé une interface utilisateur intuitive avec un catalogue de produits,
      un système de panier d'achat et une passerelle de paiement sécurisée.
      
      Le site est entièrement responsive et optimisé pour les performances sur tous les appareils.
      J'ai également mis en place un tableau de bord d'administration pour permettre au propriétaire
      de gérer ses produits, stocks et commandes facilement.
    `,
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB'],
        features: [
            'Catalogue de produits avec filtrage et recherche',
            'Système de panier d\'achat',
            'Passerelle de paiement sécurisée',
            'Tableau de bord administrateur',
            'Design responsive',
            'Optimisation SEO'
        ],
        challenges: `
      Le plus grand défi de ce projet était de créer un système de gestion des stocks
      en temps réel qui se mettait à jour automatiquement après chaque achat.
      J'ai résolu ce problème en utilisant des hooks React personnalisés et en optimisant
      les requêtes à la base de données.
    `,
        outcome: `
      Le site a permis à l'entreprise d'augmenter ses ventes de 35% en seulement trois mois,
      tout en réduisant les coûts opérationnels liés à la gestion des commandes.
    `,
    },
    {
        id: '02',
        title: 'Application de Gestion des Tâches',
        shortDescription: 'Une application de gestion de tâches et de productivité.',
        fullDescription: `
      J'ai conçu et développé une application de gestion des tâches qui aide les utilisateurs
      à organiser leur travail et améliorer leur productivité. L'application offre une interface
      minimaliste mais puissante, avec des fonctionnalités comme les tâches récurrentes,
      les rappels, et la visualisation des progrès.
      
      L'application s'intègre également avec des services tiers comme Google Calendar
      pour une synchronisation facile des événements et des échéances.
    `,
        technologies: ['React Native', 'Firebase', 'Redux', 'Google Calendar API'],
        features: [
            'Création et organisation de tâches',
            'Tâches récurrentes',
            'Rappels et notifications',
            'Suivi des progrès',
            'Synchronisation avec Google Calendar',
            'Mode hors ligne',
            'Thème sombre/clair'
        ],
        challenges: `
      La synchronisation des données entre l'application locale et les services cloud a posé
      plusieurs défis, notamment pour la gestion des conflits lors de modifications hors ligne.
      J'ai implémenté un système de résolution de conflits qui préserve les modifications
      locales tout en intégrant les changements distants.
    `,
        outcome: `
      L'application a été téléchargée plus de 5 000 fois et maintient une note moyenne de 4,7/5
      sur les stores d'applications. Les utilisateurs apprécient particulièrement la simplicité
      de l'interface et la fiabilité de la synchronisation.
    `,
    },
    {
        id: '03',
        title: 'Portfolio Personnel',
        shortDescription: 'Mon portfolio professionnel avec une esthétique brutaliste.',
        fullDescription: `
      Ce projet est mon portfolio personnel, conçu pour mettre en valeur mes compétences
      et mes projets dans un style brutaliste minimaliste. Le site utilise Next.js pour
      le rendu côté serveur et Tailwind CSS pour le design.
      
      J'ai mis l'accent sur l'expérience utilisateur avec des animations subtiles
      et une navigation intuitive. Le site comprend également un système d'authentification
      pour les visiteurs qui souhaitent laisser des témoignages.
    `,
        technologies: ['Next.js', 'React', 'Redux', 'Tailwind CSS', 'Framer Motion'],
        features: [
            'Design brutaliste minimaliste',
            'Mode sombre inspiré du terminal',
            'Animation de type shell sur la page d\'accueil',
            'Système d\'authentification pour les témoignages',
            'Formulaires validés',
            'Design responsive'
        ],
        challenges: `
      Le plus grand défi était de créer un design brutaliste qui reste élégant et professionnel.
      J'ai également dû équilibrer les animations pour qu'elles améliorent l'expérience utilisateur
      sans distraire du contenu principal.
    `,
        outcome: `
      Ce portfolio a reçu des retours positifs pour son originalité et sa facilité d'utilisation.
      Il m'a permis de présenter mes compétences de manière créative tout en démontrant
      ma maîtrise des technologies web modernes.
    `,
    }
];

export default projects;