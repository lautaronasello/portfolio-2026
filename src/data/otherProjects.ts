import { OtherProject } from '@/types/project';

export const otherProjectsData: OtherProject[] = [
  {
    id: 'gestion-facturacion',
    title: 'Sistema de Gestión de Clientes y Facturación',
    description:
      'Plataforma web para emisión de comprobantes, gestión de clientes y seguimiento de facturas pendientes con reportes exportables en PDF.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Express'],
    screenshots: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    ],
    githubUrl: 'https://github.com/lautaronasello',
  },
  {
    id: 'scraper-precios',
    title: 'Bot Monitoreo y Scraping de Precios',
    description:
      'Script automatizado en Python para monitoreo diario de precios en e-commerce con alertas inmediatas por Telegram ante variaciones de stock o valor.',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Telegram API', 'APScheduler'],
    screenshots: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    ],
    githubUrl: 'https://github.com/lautaronasello',
  },
  {
    id: 'control-gastos-app',
    title: 'App Móvil de Control de Gastos Personales',
    description:
      'Aplicación multiplataforma para registro rápido de ingresos/egresos, categorización automática y gráficos estadísticos mensuales.',
    technologies: ['Flutter', 'Dart', 'Hive', 'Provider', 'Fl_chart'],
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    ],
    githubUrl: 'https://github.com/lautaronasello',
  },
  {
    id: 'buscador-ia-pdf',
    title: 'Buscador Inteligente sobre Documentos (RAG)',
    description:
      'Herramienta CLI y Web para consultar manuales y documentos PDF extensos mediante búsquedas semánticas e IA en lenguaje natural.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Qdrant', 'OpenAI API'],
    githubUrl: 'https://github.com/lautaronasello',
  },
  {
    id: 'email-marketing-n8n',
    title: 'Workflow de Automatización de Email Marketing',
    description:
      'Flujo de trabajo en n8n que procesa leads entrantes de formularios web, valida datos, asigna etiquetas y envía secuencias personalizadas.',
    technologies: ['n8n', 'Webhooks', 'JavaScript', 'SendGrid API', 'Google Sheets'],
  },
];
