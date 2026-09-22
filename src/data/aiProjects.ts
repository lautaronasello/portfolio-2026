import { AIProject } from '@/types/project';

export const aiProjectsData: AIProject[] = [
  {
    id: 'agente-clinica-estetica',
    title: 'Agente de Atención — Centro Estético',
    sector: 'Salud & Belleza',
    channels: ['whatsapp', 'instagram'],
    aiTools: ['GPT-4o', 'Gemini'],
    n8nTools: [
      'Google Calendar',
      'Google Sheets',
      'HTTP Request',
      'Webhook',
      'JavaScript',
    ],
    problem:
      'El centro estético recibía más de 80 consultas diarias por WhatsApp e Instagram sobre disponibilidad de turnos, precios y tratamientos. El equipo dedicaba horas del día a responder preguntas repetitivas, generando demoras y pérdida de clientes potenciales.',
    solution:
      'Configuré un agente de IA conectado a WhatsApp e Instagram capaz de responder consultas frecuentes, informar el tarifario actualizado y gestionar reservas de turnos de forma autónoma, integrando el calendario del negocio en tiempo real a través de n8n.',
    roleHighlights: [
      'Redacción de instrucciones de sistema con tono profesional y empático, ajustado al perfil del centro.',
      'Carga de contexto: tarifario completo, descripción de tratamientos y preguntas frecuentes.',
      'Flujo de nodos en n8n para consultar disponibilidad y registrar turnos en Google Calendar.',
      'Flujo de escalado a humano cuando el usuario solicita hablar con una persona.',
      'Integración con Google Sheets para registrar leads y nuevos consultas automáticamente.',
    ],
  },
  {
    id: 'agente-ventas-indumentaria',
    title: 'Agente de Ventas — Tienda de Indumentaria',
    sector: 'Moda & Retail',
    channels: ['instagram', 'facebook', 'whatsapp'],
    aiTools: ['Claude 3.5', 'ChatGPT'],
    n8nTools: [
      'Google Sheets',
      'Webhook',
      'HTTP Request',
      'JavaScript',
      'Gmail',
    ],
    problem:
      'La tienda perdía ventas fuera del horario comercial por no poder atender consultas sobre stock, tallas disponibles y precios. El 60% de los mensajes recibidos ocurrían entre las 20hs y las 9hs del día siguiente.',
    solution:
      'Configuré un agente de ventas activo 24/7 en Instagram, Facebook y WhatsApp que consulta el inventario en tiempo real, responde sobre tallas y colores disponibles, envía fotos del producto y guía al cliente hasta cerrar la compra o derivarlo a un vendedor humano.',
    roleHighlights: [
      'Instrucciones orientadas a conversión: el agente actúa como vendedor consultivo, no solo como soporte.',
      'Carga del catálogo completo como contexto estructurado (producto, talla, color, precio, stock).',
      'Flujo n8n para consultar stock en tiempo real desde Google Sheets actualizado por el equipo.',
      'Lógica en JavaScript para filtrar productos según consulta del cliente y armar respuesta dinámica.',
      'Notificación automática por Gmail al vendedor cuando se cierra una intención de compra.',
    ],
  },
  {
    id: 'agente-soporte-saas',
    title: 'Agente de Soporte Técnico — SaaS B2B',
    sector: 'Software & Tecnología',
    channels: ['whatsapp'],
    aiTools: ['GPT-4o', 'Claude Haiku'],
    n8nTools: [
      'Notion',
      'Gmail',
      'Webhook',
      'JavaScript',
      'HTTP Request',
    ],
    problem:
      'El equipo de soporte de una empresa de software recibía en promedio 120 tickets semanales, de los cuales más del 70% eran consultas repetitivas sobre funcionalidades ya documentadas. Esto saturaba el equipo e impactaba en los tiempos de respuesta para casos complejos.',
    solution:
      'Configuré un agente especializado en la plataforma del cliente, con acceso a la documentación técnica completa y capacidad de escalar tickets complejos a Notion para seguimiento del equipo, permitiéndoles concentrarse en casos que realmente requieren intervención humana.',
    roleHighlights: [
      'Instrucciones técnicas detalladas con terminología propia del producto y casos de uso habituales.',
      'Carga de documentación técnica estructurada (guías, FAQs, changelog) como contexto del agente.',
      'Flujo n8n para crear un issue en Notion automáticamente cuando el agente detecta un caso complejo.',
      'Flujo de notificación por Gmail al equipo de soporte ante escalados críticos.',
      'Uso de Claude Haiku para respuestas rápidas de primer nivel y GPT-4o para resolución de casos técnicos.',
    ],
  },
];
