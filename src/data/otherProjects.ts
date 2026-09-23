import { OtherProject } from '@/types/project';

export const otherProjectsData: OtherProject[] = [
  {
    id: 'gestion-integral-pedidos',
    title: 'Sistema de Gestión integral de pedidos',
    description:
      'Sistema integral que permite a las dependencias públicas generar, administrar y hacer un seguimiento detallado de los pedidos de insumos y materiales de manera sencilla y centralizada.',
    technologies: ['React', '.NET', 'MySQL', 'Material UI', 'Express'],
    screenshots: [
      '/projects/gip/home.png',
      '/projects/gip/solicitudes.png',
      '/projects/gip/confirmacion.png',
    ],
  },
  {
    id: 'bandeja-compras-contrataciones',
    title: 'Bandeja compras y contrataciones',
    description:
      'La plataforma Bandeja de Compras y Contrataciones (BCC) ha sido diseñada para centralizar y optimizar la gestión de compras y contrataciones en las dependencias públicas de la provincia. Su objetivo es reducir la burocracia, mejorar la organización y garantizar la transparencia en cada operación administrativa relacionada con la adquisición de bienes y servicios.',
    technologies: ['React', '.NET', 'MySQL', 'Material UI', 'Express'],
    screenshots: [
      '/projects/cyc/home.png',
      '/projects/cyc/bandeja.png',
      '/projects/cyc/requerimientos.png',
      '/projects/cyc/combinar.png',
    ],
  },
  {
    id: 'agrotech-app',
    title: 'Agrotech - app gestión de productos y servicios',
    description:
      'Aplicación mobile para registro de aplicacion de productos agricolas, generar reportes de rendimiento y monitoreo de siembras.',
    technologies: [
      'NestJS',
      'Flutter',
      'Dart',
      'Hive',
      'BLoC',
      'Apple',
      'Android',
    ],
  },
  {
    id: 'portfolio-legacy',
    title: 'Portfolio Web - version anterior',
    description:
      'Version anterior de mi portafolio web. Si bien no creo que sea un proyecto bien armado fue parte de mis primeros pasos. En el mismo podran encontrar tambien mis primeros proyectos prueba que realice por cuenta propia. Tales son: PokeApp, Spotytime (clon de spotify), Snake Game, NotesApp, entre otros. No obtuvo mantenimiento por lo que algunos proyectos pueden no estar levantados.',
    technologies: ['React', 'Firebase', 'JavaScript', 'Boostrap'],
    demoUrl: 'https://lautaronasello.web.app/',
  },
];
