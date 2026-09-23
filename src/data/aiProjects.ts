import { AIProject } from '@/types/project';

export const aiProjectsData: AIProject[] = [
  {
    id: 'dise-ingenieria',
    title: 'Agente de reporte y publicacion — Plasticos Dise',
    sector: 'Manufactura & Reportes',
    n8nTools: [
      'Google Sheets',
      'HTTP Request',
      'Webhook',
      'JavaScript',
      'ChatGPT Model',
      'NestJS',
    ],
    problem:
      'La planta de produccion de plasticos Dise generaba reportes diarios de produccion que implicaban busquedas y consultas tediosas para el operario. Ademas de esto el reporte se debia subir a la plataforma poka con ciertos comentarios especificos para luego poseer un registro en esta app de cada lote producido.',
    solution:
      'Creé un flujo que permite acceder a la base de datos de Dise, buscar el lote, obtener el historial de publicaciones de poka y generar un reporte especifico predefinido por el gerente de operaciones para luego subirlo a la plataforma poka con los comentarios específicos para cada lote producido. Esto permite al operario agilizar el proceso de subida de reportes.',
    roleHighlights: [
      'Cree el backend necesario en NestJS para el formateo y obtenicion de datos de Dise',
      'Creacion de instrucciones de sistema con tono profesional y empático, ajustado al perfil del operario.',
      'Carga de contexto: base de datos de Dise con el detalle de cada lote producido.',
      'Flujo de nodos en n8n para generar reportes específicos predefinidos por el gerente de operaciones para luego subirlo a la plataforma poka.',
      'Integración con la API de Poka para subir el reporte generado a la plataforma.',
      'Integración con Google Sheets para registrar y almacenar los reportes generados.',
    ],
  },
  {
    id: 'agente-segufer',
    title: 'Agente de soporte tecnico y reporte de problemas — Segufer',
    sector: 'Seguridad Industrial',
    n8nTools: [
      'Google Sheets',
      'Webhook',
      'HTTP Request',
      'JavaScript',
      'Gmail',
    ],
    problem:
      'Segufer posee maquinas expendedoras de elementos de seguridad industrial. Muchas veces estas maquinas tienen problemas con la dispensacion de productos o los operarios no estan familiarizados con el uso de la misma o con la utilizacion de los elementos de seguridad.',
    solution:
      'Configure un agente de soporte que permita a los usuarios resolver sus dudas y permite tambien tomar los reportes realizados por personal humano. Esto mejoro la velocidad de respuesta ante los casos de dudas sobre uso de la maquina o elementos y rapidez de respuesta ante problemas de la maquina. ',
    roleHighlights: [
      'Instrucciones orientadas a resolución de problemas, capacidad de responder preguntas sobre los productos y el funcionamiento de la maquina.',
      'Flujo n8n para tomar reportes realizados por personal humano.',
      'Integración con Google Sheets para registrar y almacenar los reportes generados.',
      'Notificación automática por Gmail al vendedor cuando se cierra una intención de compra.',
    ],
  },
  {
    id: 'agente-ventas-coc',
    title: 'Agente de ventas — Círculo Odontólogico Córdoba',
    sector: 'Salud & Escuela',
    n8nTools: [
      'Ai agent',
      'WhatsApp',
      'Google Sheets',
      'Supabase',
      'Information Extractor',
      'Google Documents',
    ],
    problem:
      'El Círculo Odontólogico Córdoba posee un amplio catalogo de servicios y el personal de venta no lograba acompanhar la demanda de consultas por parte de los clientes. Esto generaba demoras en la respuesta a los clientes y potenciales perdidas de ventas.',
    solution:
      'Creé un agente especializado capaz de responder consultas sobre cursos, eventos y servicios, con capacidad de gestionar pre-inscripciones y pagos, integrándose con WhatsApp, Google Sheets y Supabase para centralizar y automatizar el flujo completo de ventas y administración.',
    roleHighlights: [
      'Instrucciones técnicas detalladas con información sobre servicios, eventos y cursos.',
      'Uso de la API de Google Sheets para registrar y almacenar las consultas y pre-inscripciones de los clientes.',
      'Uso de la API de Supabase para registrar y almacenar los cursos y campañas creadas por el coc.',
      'Configuracion de LLM para clasificacion de consultas.',
      'Flujos de n8n para gestionar consultas y pre-inscripciones.',
    ],
  },
];
