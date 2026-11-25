import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'don-oficios',
    title: 'Don Oficios',
    tier: 'featured',
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
        'Red social y marketplace de servicios de proximidad que permite explorar prestadores cercanos, verificar ubicación, ver reseñas y contactar directamente por chat privado en tiempo real.',
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
    tier: 'featured',
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
    tier: 'featured',
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
        'Plataforma integral para eventos y conferencias: Dashboard web para que organizadores gestionen el cronograma y métricas en vivo, más app móvil para que los participantes consulten la agenda y hagan networking en tiempo real.',
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
  {
    id: 'nexo',
    title: 'NEXO Merchant Console',
    tier: 'featured',
    category: 'Fintech Platform & Dashboard',
    tags: [
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'BullMQ',
      'Clean Architecture',
      'TanStack Query',
    ],
    clientView: {
      problem:
        'Los comercios carecen de transparencia sobre las comisiones de las pasarelas de pago, desconocen las fechas exactas de acreditación y no cuentan con herramientas para conciliar transacciones, impuestos y liquidaciones en un solo lugar.',
      solution:
        'Plataforma fintech fullstack (consola web + API transaccional) que centraliza la gestión de cobros multicanal (Débito, Crédito, QR), simula costos de liquidación en tiempo real, audita retenciones impositivas y permite monitorear el ciclo de vida de los fondos desde el cobro hasta la acreditación neta en cuenta.',
      businessValue:
        'Motor de liquidaciones asíncrono con BullMQ que aplica reglas tarifarias diferenciadas por medio de pago (0.6% QR a 6.5% crédito 3 cuotas) con cálculo automático de IVA (21%), idempotencia garantizada en cada transacción y soporte de acreditación anticipada con penalidad financiera configurable.',
    },
    techView: {
      screenshots: [
        '/projects/nexo/nexo-1.png',
        '/projects/nexo/nexo-2.png',
        '/projects/nexo/nexo-3.png',
        '/projects/nexo/nexo-4.png',
        '/projects/nexo/nexo-5.png',
      ],
      webUrl: 'https://nexo-pay-nine.vercel.app/',
      githubUrl: 'https://github.com/lautaronasello/nexo-app',

      stack: [
        'Next.js (App Router)',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Axios',
        'NestJS',
        'Prisma ORM',
        'PostgreSQL',
        'BullMQ',
        'Swagger',
      ],
      architecture:
        'Arquitectura Clean Architecture en ambas capas. Frontend: Domain → Application (hooks) → Infrastructure (repos HTTP) → Presentation (UI). Backend: módulos NestJS desacoplados (Merchants, Transactions, Settlements, Queues) con motor de liquidaciones asíncrono via BullMQ y Prisma como ORM tipado sobre PostgreSQL.',
      highlights: [
        'Motor de liquidaciones asíncrono con BullMQ: procesa y agenda acreditaciones sin bloquear el ciclo de cobro.',
        'Reglas tarifarias diferenciadas por medio de pago: QR 0.6%, Débito 0.8%, Crédito 1 pago 1.8%, Crédito 3 cuotas 6.5% (+ penalidad de adelanto).',
        'Simulador de liquidaciones en tiempo real con desglose de comisión, IVA (21%) y fecha exacta de acreditación.',
        'Idempotencia garantizada en cada transacción mediante claves UUID v4 únicas.',
        'Gestor multicomercio con conmutación instantánea entre sucursales y balances independientes.',
        'Emulador de cobros tipo POS con validación en tiempo real.',
        'API documentada con Swagger y contenerizada con Docker Compose.',
      ],
    },
  },
  {
    id: 'bandeja-compras-contrataciones',
    title: 'Bandeja compras y contrataciones',
    tier: 'systems',
    category: 'Gestión Pública & Compras',
    tags: ['React', '.NET', 'MySQL', 'Material UI', 'Express'],
    screenshots: [
      '/projects/cyc/home.png',
      '/projects/cyc/bandeja.png',
      '/projects/cyc/requerimientos.png',
      '/projects/cyc/combinar.png',
    ],
    clientView: {
      problem:
        'Fragmentación y lentitud en los procesos de adquisición de bienes y servicios en dependencias públicas de la provincia.',
      solution:
        'Plataforma integral diseñada para centralizar y optimizar la gestión de compras y contrataciones en dependencias públicas de la provincia.',
      businessValue:
        'Garantiza transparencia en cada operación administrativa, reduce la burocracia y unifica expedientes de compras estatales.',
    },
    techView: {
      stack: ['React', '.NET', 'MySQL', 'Express', 'Material UI'],
      architecture:
        'Sistema web administrativo multi-dependencia con backend en .NET/Express y base de datos relacional MySQL con flujos de aprobación jerárquica.',
      highlights: [
        'Módulo de requerimientos y combinación de órdenes de compra.',
        'Bandeja unificada de expedientes y contrataciones para dependencias públicas.',
        'Auditoría y trazabilidad completa de compras administrativas.',
      ],
      screenshots: [
        '/projects/cyc/home.png',
        '/projects/cyc/bandeja.png',
        '/projects/cyc/requerimientos.png',
        '/projects/cyc/combinar.png',
      ],
    },
  },
  {
    id: 'gestion-integral-pedidos',
    title: 'Sistema de Gestión integral de pedidos',
    tier: 'systems',
    category: 'Gestión Pública & Logística',
    tags: ['React', '.NET', 'MySQL', 'Express', 'Material UI'],
    screenshots: [
      '/projects/gip/home.png',
      '/projects/gip/solicitudes.png',
      '/projects/gip/confirmacion.png',
    ],
    clientView: {
      problem:
        'Dificultad de las dependencias públicas para solicitar, distribuir y controlar insumos y materiales de forma unificada.',
      solution:
        'Sistema integral que permite generar, administrar y auditar pedidos de insumos y materiales de manera sencilla y centralizada.',
      businessValue:
        'Trazabilidad completa de solicitudes de insumos y optimización del gasto público en materiales.',
    },
    techView: {
      stack: ['React', '.NET', 'MySQL', 'Express', 'Material UI'],
      architecture:
        'Arquitectura cliente-servidor con backend en .NET/Express y base de datos relacional MySQL optimizada para auditoría.',
      highlights: [
        'Módulo de solicitudes de insumos con validación jerárquica.',
        'Panel de control de pedidos para administradores con métricas de consumo.',
        'Generación de reportes de entrega y confirmación de recepción.',
      ],
      screenshots: [
        '/projects/gip/home.png',
        '/projects/gip/solicitudes.png',
        '/projects/gip/confirmacion.png',
      ],
    },
  },
  {
    id: 'agrotech-app',
    title: 'Agrotech - Gestión Agropecuaria',
    tier: 'systems',
    category: 'App Mobile & Agropecuaria',
    tags: ['Flutter', 'NestJS', 'Hive', 'BLoC', 'Dart'],
    clientView: {
      problem:
        'Falta de registro en tiempo real de insumos aplicados en el campo y pérdida de trazabilidad en lotes de siembra.',
      solution:
        'Aplicación móvil offline-first para registrar la aplicación de productos agrícolas, generar reportes de rendimiento y monitorear siembras.',
      businessValue:
        'Optimización de costos en agroquímicos y monitoreo preciso del rendimiento por hectárea.',
    },
    techView: {
      stack: ['Flutter', 'Dart', 'NestJS', 'Hive', 'BLoC Pattern'],
      architecture:
        'Ecosistema móvil offline-first con almacenamiento local en Hive y arquitectura BLoC, sincronizado con backend en NestJS.',
      highlights: [
        'Arquitectura modular en Flutter con BLoC y sincronización en segundo plano.',
        'Registro y auditoría offline de aplicaciones de agroquímicos por lote.',
        'Generación de reportes de siembra y rendimiento por campaña.',
      ],
    },
  },
];
