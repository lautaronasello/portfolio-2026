import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'don-oficios',
    title: 'Don Oficios',
    category: 'App Mobile & Social Network',
    tags: [
      'Flutter',
      'NestJS',
      'PostgreSQL',
      'Mercado Pago',
      'Clean Architecture',
    ],
    clientView: {
      problem:
        'Dificultad de las personas para encontrar profesionales de confianza (plomeros, electricistas, albañiles) con referencias verificadas y cercanía.',
      solution:
        'Aplicación realizada para cliente de la cual no soy dueño del codigo. Red social de oficios que permite explorar servicios cercanos, verificar ubicación, ver/realizar reseñas y contactar directamente por chat privado.',
      businessValue:
        'Sistema integrado de monetización donde los proveedores adquieren tokens vía Mercado Pago para publicitar sus servicios dentro de la app.',
    },
    techView: {
      stack: [
        'Flutter',
        'NestJS',
        'PostgreSQL',
        'TypeORM',
        'Mercado Pago API',
        'Socket.io',
        'Open Streets Maps',
        'Firebase',
        'Figma',
      ],
      architecture:
        'Ecosistema móvil conectado a una API RESTful en NestJS con arquitectura en capas. Gestión de transacciones seguras para la compra de tokens y comunicación en tiempo real.',
      highlights: [
        'Integración con SDK de Mercado Pago para procesamiento de pagos en tiempo real.',
        'Módulo de geolocalización para filtrado eficiente por radio de cercanía.',
        'Chat cifrado de punta a punta y sistema de puntuación con cálculo ponderado.',
        'Sistema de autenticacion basado en roles (user, provider, admin)',
        'Notificaciones push en tiempo real para nuevas solicitudes de servicios y mensajes.',
        'Sistema de geolocalización para el filtrado eficiente por radio de cercanía.',
      ],
      webUrl: 'https://donoficios.com/',
      appStoreUrl: 'https://apps.apple.com/ar/app/don-oficios/id6748660264',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.don.oficios&hl=es_AR',
      screenshots: [
        '/projects/don/don-1.jpeg',
        '/projects/don/don-2.jpeg',
        '/projects/don/don-3.jpeg',
        '/projects/don/don-4.jpeg',
        '/projects/don/don-5.jpeg',
        '/projects/don/don-6.jpeg',
        '/projects/don/don-7.jpeg',
      ],
    },
  },
  {
    id: 'padel-ai-assistant',
    title: 'Padel AI assistant',
    category: 'Web App & E-commerce IA',
    tags: [
      'Next.js',
      'Node.js',
      'IA Assistant',
      'Tailwind CSS',
      'Mercado Pago',
      'Prisma',
      'AI Coding',
    ],
    clientView: {
      problem:
        'La sobreoferta de paletas de pádel genera confusión e indecisión en los jugadores al momento de comprar y esto les hace perder ventas a los vendedores.',
      solution:
        'Asistente virtual inteligente que guía al usuario mediante preguntas clave sobre su nivel y estilo de juego para recomendar la paleta ideal. Trabajo en conjunto con IA.',
      businessValue:
        'Aumenta la tasa de conversión filtrando dinámicamente sobre el inventario real en stock de la tienda.',
    },
    techView: {
      stack: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'Gemini / OpenAI API',
        'Tailwind CSS',
        'PostgreSQL',
        'Mercado Pago API',
        'Prisma',
        'Render',
        'Cloudinary',
        'Neon',
      ],
      architecture:
        'Frontend en Next.js con Server-Side Rendering (SSR) optimizado para SEO, integrado con IA que ayuda a eleccion de productos dentro del catalogo propio del comercio.',
      highlights: [
        'Prompts estructurados para extracción de preferencias y coincidencia con atributos del producto.',
        'Filtrado reactivo en el cliente sin recargas de página.',
        'Diseño ultraliviano pensado para conversión rápida en dispositivos móviles y web.',
      ],
      githubUrl: 'https://github.com/lautaronasello/CTRLPadel-app',
      demoUrl: 'https://padel-bot-assistant-ten.vercel.app',
    },
  },
  {
    id: 'pamphlet',
    title: 'Pamphlet',
    category: 'Ecosistema Web & Mobile',
    tags: [
      'Next.js',
      'Mobile App',
      'NestJS',
      'PostgreSQL',
      'WebSockets',
      'Encryption',
    ],
    clientView: {
      problem:
        'Dispersión de información en eventos corporativos y conferencias (cronogramas, oradores) y falta de canales de interacción entre asistentes.',
      solution:
        'Aplicación realizada para cliente de la cual no soy dueño del codigo. Plataforma integral: Dashboard web para que organizadores gestionen el evento y métricas, más app móvil para que los participantes consulten la agenda y hagan networking en tiempo real.',
      businessValue:
        'Centralización operativa que reduce costos logísticos, potencia la participación en tiempo real y fomenta la interacción entre asistentes.',
    },
    techView: {
      stack: [
        'React js. (Web)',
        'Flutter (Mobile)',
        'NestJS',
        'PostgreSQL',
        'Socket.io',
        'Google Stitch',
        'Firebase',
        'Get_it',
        'Bloc',
      ],
      screenshots: [
        '/projects/pamphlet/login.png',
        '/projects/pamphlet/home.png',
        '/projects/pamphlet/profile.png',
        '/projects/pamphlet/agenda.png',
        '/projects/pamphlet/ai-assistant.png',
      ],
      architecture:
        'Arquitectura Backend monolito/unificada que sirve tanto al Dashboard administrativo como a la app de los participantes, manteniendo sincronización mediante WebSockets.',
      highlights: [
        'Sincronización instantánea de agendas y notificaciones Push.',
        'Panel analítico en tiempo real con métricas de asistencia y participación.',
        'Sistema de chat por salas y contactos directos entre participantes.',
        'Chat cifrado de punta a punta.',
        'Arquitectura monolitica para escalar de manera sencilla.',
        'Panel administrador web con manejo de usuarios, eventos y métricas.',
      ],
    },
  },
];
