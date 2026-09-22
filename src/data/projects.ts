import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'don-oficios',
    title: 'Don Oficios',
    category: 'App Mobile & Marketplace',
    metricBadge: 'Sub-100ms Geolocalización',
    tags: [
      'Flutter',
      'NestJS',
      'PostgreSQL',
      'Mercado Pago',
      'Clean Architecture',
    ],
    clientView: {
      problem:
        'Inexistencia de un canal verificado y geolocalizado para contratación directa de trabajadores independientes, generando alta fricción y falta de confianza.',
      solution:
        'Plataforma social de oficios para explorar servicios por proximidad geográfica, verificar puntuaciones de clientes y gestionar contratos en tiempo real por chat.',
      businessValue:
        'Monetización mediante la venta de tokens publicitarios vía Mercado Pago, permitiendo a los prestadores destacar sus perfiles según su radio de cobertura.',
    },
    techView: {
      stack: [
        'Flutter',
        'NestJS',
        'PostgreSQL',
        'TypeORM',
        'Mercado Pago API',
        'Socket.io',
        'OpenStreetMap',
        'Firebase',
      ],
      architecture:
        'Arquitectura en capas (Clean Arch en cliente móvil) conectada a un Backend NestJS desacoplado. Indexación espacial en PostgreSQL para procesamiento de cercanía en tiempo real.',
      highlights: [
        'Integración con SDK de Mercado Pago para compra segura de tokens con credenciales e idempotencia.',
        'Algoritmo de filtrado geoespacial para consultas de radio dinámico con tiempo de respuesta < 100ms.',
        'Chat bidireccional socket-based con gestión de estado sin pérdidas y notificaciones push.',
        'Sistema de autenticación y autorización multinivel (User, Provider, Admin).',
      ],
      webUrl: 'https://donoficios.com/',
      appStoreUrl: 'https://apps.apple.com/ar/app/don-oficios/id6748660264',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.don.oficios&hl=es_AR',
      screenshots: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    caseStudy: {
      problem:
        'Resolver la contención de búsquedas en tiempo real y la latencia en el emparejamiento de usuarios con prestadores de servicios en radios < 10km.',
      role: 'Lead Mobile & Backend Engineer. Responsable exclusivo del diseño de arquitectura del API REST, modelo de datos y desarrollo de la app en Flutter.',
      method: [
        'Orquesté la arquitectura modular Clean Architecture en Flutter separando capas de dominio, datos y presentación mediante Bloc.',
        'Diseñé e indexé consultas espaciales en PostgreSQL para evitar cuellos de botella durante búsquedas de alta concurrencia.',
        'Implementé el flujo de pagos idempotente integrado con webhooks de Mercado Pago para la acreditación automática de tokens.',
        'Mitigué fallos de conexión en chats utilizando re-intentos automáticos y persistencia local Hive.',
      ],
      result:
        'Publicación en App Store y Google Play Store con latencia de búsqueda sub-100ms y 0% de pérdida de eventos de acreditación de tokens en producción.',
    },
    adr: {
      title: 'ADR 001: NestJS + PostgreSQL para Ecosistema Móvil Transaccional',
      context:
        'Se requería un framework backend robusto, fuertemente tipado y con capacidad de manejo transaccional seguro para compras de tokens y filtrados geográficos.',
      decision:
        'Adoptar NestJS (TypeScript) con TypeORM sobre PostgreSQL en lugar de arquitecturas Serverless NoSQL.',
      revisitTrigger:
        'Reevaluar la estrategia de API monolítica al alcanzar 50k peticiones/minuto o cuando la carga del chat vía WebSockets impacte el pool de conexiones de la base de datos principal.',
    },
    tradeoffs: [
      {
        dimension: 'Complejidad Operativa',
        choice: 'Backend NestJS en servidor dedicado vs Firebase Serverless',
        detail: 'Mayor overhead inicial de mantenimiento a cambio de control total sobre transacciones de pagos y privacidad de datos.',
        reversibility: 'Media',
      },
      {
        dimension: 'Consistencia de Datos',
        choice: 'ACID en PostgreSQL vs Eventual Consistency en Mongo/NoSQL',
        detail: 'Garantía estricta de saldo de tokens y estados de transacciones de pago sin desajustes.',
        reversibility: 'Baja',
      },
      {
        dimension: 'Time-to-Ship',
        choice: 'Flutter (Multiplataforma) vs Kotlin/Swift Nativo',
        detail: 'Reducción del 45% en tiempo de desarrollo al reutilizar 90% de lógica entre iOS y Android.',
        reversibility: 'Media',
      },
    ],
    spof: {
      infraSPOF:
        'Instancia única de PostgreSQL sin Réplica de Lectura (Read Replica). Si el nodo máster falla, las búsquedas de servicios se detienen.',
      humanSPOF:
        'Gestión centralizada de credenciales de producción de Mercado Pago y Firebase en el Lead Engineer.',
      preMortem:
        'Bajo una carga 10x superior, el servidor WebSocket saturaría el pool de conexiones de PostgreSQL. Mitigación: Desacoplar el servicio de chat en un microservicio con Redis Pub/Sub.',
    },
  },
  {
    id: 'padel-ai-assistant',
    title: 'Padel AI Assistant',
    category: 'E-commerce & AI Agent',
    metricBadge: 'Búsqueda < 30s con IA',
    tags: [
      'Next.js 14',
      'TypeScript',
      'OpenAI / Gemini',
      'Prisma',
      'Tailwind CSS',
      'Mercado Pago',
    ],
    clientView: {
      problem:
        'La sobreoferta de paletas de pádel genera fricción e indecisión en los compradores, reduciendo las tasas de conversión en tiendas electrónicas.',
      solution:
        'Asistente conversacional con IA que interpreta el nivel y estilo de juego del usuario en lenguaje natural para recomendar el equipamiento ideal del inventario real.',
      businessValue:
        'Aumenta la tasa de conversión directa y reduce el abandono del carrito mediante guiado personalizado y checkout directo.',
    },
    techView: {
      stack: [
        'Next.js 14',
        'TypeScript',
        'Node.js',
        'Gemini / OpenAI API',
        'Tailwind CSS',
        'PostgreSQL',
        'Mercado Pago API',
        'Prisma',
        'Render',
        'Cloudinary',
      ],
      architecture:
        'Next.js 14 App Router con Server Actions y streaming de respuestas de IA. Pipeline de extracción de entidades conectado al esquema de catálogo en PostgreSQL.',
      highlights: [
        'Prompts estructurados con JSON Schema enforcement para recomendación sin alucinaciones de inventario.',
        'Filtrado reactivo instantáneo en cliente sin recargas de página.',
        'Integración con checkout transparente de Mercado Pago.',
      ],
      githubUrl: 'https://github.com/lautaronasello/CTRLPadel-app',
      demoUrl: 'https://padel-bot-assistant-ten.vercel.app',
    },
    caseStudy: {
      problem:
        'Eliminar la parálisis por elección del cliente final mediante un recomendador conversacional libre de alucinaciones y sincrónico con el stock.',
      role: 'Creador y Desarrollador Fullstack. Diseñé el prompt-engineering, el pipeline de extracción de intenciones y el frontend reactivo.',
      method: [
        'Audité patrones de búsqueda de clientes para diseñar un esquema de parámetros técnicos (balance, forma, dureza de goma).',
        'Implementé Structured Outputs con la API de OpenAI/Gemini asegurando que la IA devuelva únicamente IDs de productos existentes.',
        'Optimicé el rendering con Next.js 14 Server Components para reducir el tiempo de primer despliegue visual (FCP).',
      ],
      result:
        'Reducción del tiempo de selección a < 30 segundos con 100% de precisión en la existencia de stock recomendado.',
    },
    adr: {
      title: 'ADR 002: Next.js 14 App Router + Structured LLM Outputs',
      context:
        'Se necesitaba combinar SEO de alta velocidad con un flujo conversacional inteligente sin comprometer la latencia de carga inicial.',
      decision:
        'Utilizar Next.js 14 App Router con Server Actions y llamadas estructuradas al modelo de IA.',
      revisitTrigger:
        'Reevaluar el proveedor del modelo LLM si el costo por consulta supera los $0.005 USD o la latencia de respuesta P95 excede los 2.0 segundos.',
    },
    tradeoffs: [
      {
        dimension: 'Techo de Escalabilidad',
        choice: 'Servidor Serverless Vercel/Render vs VPS Propio',
        detail: 'Escalado automático instantáneo para picos de tráfico de e-commerce.',
        reversibility: 'Alta',
      },
      {
        dimension: 'Complejidad de Implementación',
        choice: 'Prompting Estructurado vs Fine-Tuning de Modelo Propio',
        detail: 'Ahorro sustancial en costos de entrenamiento manteniendo 99%+ de fidelidad de respuestas.',
        reversibility: 'Alta',
      },
    ],
    spof: {
      infraSPOF:
        'Dependencia directa de la disponibilidad del API de OpenAI/Gemini. Si el proveedor sufre degradación, la asistencia cae.',
      humanSPOF: 'Mantenimiento del catálogo y actualización de reglas de recomendación por una única persona.',
      preMortem:
        'Ante un pico de visitas masivo, las cuotas de API del proveedor de IA se agotarían. Mitigación: Fallback automático a un recomendador por reglas deterministas sin IA.',
    },
  },
  {
    id: 'pamphlet',
    title: 'Pamphlet',
    category: 'Ecosistema Event Tech',
    metricBadge: 'Sync Multi-Dispositivo',
    tags: [
      'Next.js',
      'Flutter',
      'NestJS',
      'PostgreSQL',
      'WebSockets',
    ],
    clientView: {
      problem:
        'Dispersión de agendas y nula interacción entre asistentes en conferencias corporativas masivas.',
      solution:
        'Plataforma integral: Dashboard web para administradores y App móvil en tiempo real para asistentes con agenda interactiva y networking.',
      businessValue:
        'Reducción de costos logísticos impresos, captación de métricas de asistencia y aumento del engagement en eventos.',
    },
    techView: {
      stack: [
        'React / Next.js (Web)',
        'Flutter (Mobile)',
        'NestJS',
        'PostgreSQL',
        'Socket.io',
        'Firebase Push',
      ],
      screenshots: [
        '/projects/pamphlet/login.png',
        '/projects/pamphlet/home.png',
        '/projects/pamphlet/profile.png',
        '/projects/pamphlet/agenda.png',
        '/projects/pamphlet/ai-assistant.png',
      ],
      architecture:
        'Backend unificado en NestJS que presta servicios al Dashboard Web y a la App Flutter mediante HTTP REST y WebSockets concurrentes.',
      highlights: [
        'Sincronización instantánea de cronogramas con notificaciones push.',
        'Panel analítico en tiempo real con métricas de interacción.',
        'Networking privado entre participantes con salas de chat.',
      ],
    },
    caseStudy: {
      problem:
        'Garantizar la actualización instantánea de agendas modificadas en vivo ante miles de dispositivos conectados simultáneamente.',
      role: 'Fullstack Engineer. Encargado de la arquitectura de comunicación en tiempo real y sincronización móvil.',
      method: [
        'Decompuse los eventos de actualización en un broker de mensajería con Socket.io.',
        'Diseñé la arquitectura local-first en la app móvil para permitir lectura offline de la agenda.',
        'Implementé métricas de asistencia en tiempo real mediante agregaciones eficientes en PostgreSQL.',
      ],
      result:
        'Sincronización masiva de eventos en < 200ms a través de múltiples dispositivos sin caída de servicio durante el evento.',
    },
    adr: {
      title: 'ADR 003: Arquitectura Unificada Backend para Web Admin & App Móvil',
      context:
        'Se requería sincronización perfecta de datos entre los organizadores (Web) y los participantes (Mobile).',
      decision:
        'Construir una única API en NestJS compartida con esquemas de validación unificados (DTOs).',
      revisitTrigger:
        'Separar el backend en microservicios independientes si las métricas analíticas de la web afectan el rendimiento de la API móvil.',
    },
    tradeoffs: [
      {
        dimension: 'Garantías de Consistencia',
        choice: 'Sincronización WebSocket + Cache Local Hive',
        detail: 'Disponibilidad offline total para el usuario móvil aunque no tenga conectividad.',
        reversibility: 'Media',
      },
    ],
    spof: {
      infraSPOF: 'Conexión WebSocket centralizada en un único proceso Node.js.',
      humanSPOF: 'Conocimiento del flujo de sincronización offline concentrado en el desarrollador principal.',
      preMortem:
        'Caída de conectividad en el recinto del evento. Mitigación exitosa: Persistencia local en dispositivo móvil con caché estático.',
    },
  },
];

