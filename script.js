/* =====================================================
   script.js — Portfolio de Hibat Allah

   Este archivo tiene 3 partes:
     1) TEXTOS ............ los textos fijos de la web (ES / EN)
     2) PROYECTOS ......... ¡aquí añades tus proyectos nuevos!
        CERTIFICACIONES ... y aquí tus certificaciones nuevas
     3) CÓDIGO ............ lo que hace que todo funcione
                           (no hace falta tocarlo)
   ===================================================== */


/* =====================================================
   1) TEXTOS FIJOS
   Cada clave (por ejemplo 'nav.projects') coincide con un
   atributo data-i18n="nav.projects" en el index.html.
   ===================================================== */
const textos = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.certs': 'Certificaciones',
    'nav.about': 'Sobre mí',
    'nav.study': 'Lo que estudio',
    'nav.contact': 'Contacto',

    'hero.hello': 'Hola, soy Hibat Allah',
    'hero.text': 'Estudiante de ASIR. Aprendo construyendo: aquí reúno mis proyectos de sistemas, redes y robótica.',
    'hero.btnProjects': 'Ver proyectos',
    'hero.btnContact': 'Contactar',
    'hero.chipProject': 'Proyecto destacado',
    'hero.chipCert': 'Cisco Networking Academy',

    'projects.title': 'Proyectos',
    'projects.intro': 'Cada proyecto cuenta qué hicimos, cómo lo probamos y qué aprendí.',
    'projects.all': 'Todos',
    'projects.view': 'Ver proyecto',
    'projects.soonTitle': 'Próximo proyecto',
    'projects.soonText': 'Aquí irá mi siguiente trabajo.',

    'modal.close': 'Cerrar',
    'modal.gallery': 'Galería',

    'certs.title': 'Certificaciones',
    'certs.intro': 'Cursos y logros de Cisco Networking Academy.',
    'certs.type.insignia': 'Insignia',
    'certs.type.certificado': 'Certificado',
    'certs.type.logro': 'Logro',
    'certs.kind.curso': 'Curso',
    'certs.kind.modulo': 'Módulo',
    'certs.issued': 'Emitido el',
    'certs.verified': 'Insignia verificada',


    'about.title': 'Sobre mí',
    'about.p1': 'Soy estudiante de Administración de Sistemas Informáticos en Red (ASIR) con interés en la administración de sistemas, las redes y la ciberseguridad.',
    'about.p2': 'Me considero una persona responsable, organizada y con gran capacidad de aprendizaje. Disfruto resolviendo incidencias técnicas, trabajando en equipo y adquiriendo nuevos conocimientos relacionados con la informática y las tecnologías de la información.',
    'about.p3': 'Mi objetivo es seguir desarrollándome profesionalmente en el ámbito de los sistemas y las redes.',
    'about.f1k': 'Estudio',
    'about.f1v': 'Grado Superior de ASIR · Digitech FP',
    'about.f2k': 'Vivo en',
    'about.f3k': 'Idiomas',
    'about.f3v': 'Inglés y árabe (dariya)',

    'study.title': 'Lo que estoy estudiando',
    'study.intro': 'Las áreas de ASIR en las que trabajo ahora mismo.',

    'contact.title': '¿Hablamos?',
    'contact.text': 'Si quieres saber más sobre algún proyecto, escríbeme.',
    'contact.btn': 'Enviar un correo',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación'
  },

  en: {
    'nav.projects': 'Projects',
    'nav.certs': 'Certifications',
    'nav.about': 'About me',
    'nav.study': 'What I study',
    'nav.contact': 'Contact',

    'hero.hello': "Hi, I'm Hibat Allah",
    'hero.text': 'ASIR student. I learn by building: this is where I collect my systems, networking and robotics projects.',
    'hero.btnProjects': 'See projects',
    'hero.btnContact': 'Get in touch',
    'hero.chipProject': 'Featured project',
    'hero.chipCert': 'Cisco Networking Academy',

    'projects.title': 'Projects',
    'projects.intro': 'Each project explains what we built, how we tested it and what I learned.',
    'projects.all': 'All',
    'projects.view': 'View project',
    'projects.soonTitle': 'Next project',
    'projects.soonText': 'My next piece of work will go here.',

    'modal.close': 'Close',
    'modal.gallery': 'Gallery',

    'certs.title': 'Certifications',
    'certs.intro': 'Courses and achievements from Cisco Networking Academy.',
    'certs.type.insignia': 'Badge',
    'certs.type.certificado': 'Certificate',
    'certs.type.logro': 'Achievement',
    'certs.kind.curso': 'Course',
    'certs.kind.modulo': 'Module',
    'certs.issued': 'Issued on',
    'certs.verified': 'Verified badge',


    'about.title': 'About me',
    'about.p1': 'I am a student of Network IT Systems Administration (ASIR) with an interest in systems administration, networking and cybersecurity.',
    'about.p2': 'I consider myself a responsible, organised person with a great ability to learn. I enjoy solving technical issues, working in a team and gaining new knowledge about IT and information technologies.',
    'about.p3': 'My goal is to keep growing professionally in the field of systems and networks.',
    'about.f1k': 'Studying',
    'about.f1v': 'Higher Vocational Degree in ASIR · Digitech FP',
    'about.f2k': 'Based in',
    'about.f3k': 'Languages',
    'about.f3v': 'English and Arabic (Darija)',

    'study.title': "What I'm studying",
    'study.intro': 'The ASIR areas I am working on right now.',

    'contact.title': "Let's talk",
    'contact.text': 'If you want to know more about any project, write to me.',
    'contact.btn': 'Send an email',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location'
  }
};


/* =====================================================
   2) PROYECTOS
   ─────────────────────────────────────────────────────
   PARA AÑADIR UN PROYECTO NUEVO:
     1. Guarda sus fotos en la carpeta  images/
     2. Copia TODO el bloque { ... } de DragonWare
        (desde la llave "{" hasta la llave "}," del final)
     3. Pégalo debajo, dentro de la lista, y cambia los textos.
   Cada texto tiene la forma  { es: '...', en: '...' }.
   Si no quieres inglés, borra la parte  en: '...'  y se
   mostrará el español.
   ===================================================== */
const proyectos = [
  {
    id: 'dragonware',
    destacado: true,                       // true = tarjeta grande (solo para el primero)
    titulo: { es: 'DragonWare', en: 'DragonWare' },
    subtitulo: { es: 'Robot seguidor de líneas', en: 'Line-following robot' },
    categoria: { es: 'Robótica', en: 'Robotics' },
    portada: 'images/dragonware-robot.jpg',
    resumen: {
      es: 'Robot modular que montamos y programamos en equipo para el ASTI Robotics Challenge. Imaginamos un dragón con un sensor en la boquilla que detecta la distancia y avanza hasta alcanzar el objetivo para empujarlo.',
      en: 'A modular robot we built and programmed as a team for the ASTI Robotics Challenge. We pictured a dragon with a sensor in its snout that detects distance and moves forward until it reaches its target and pushes it.'
    },
    tecnologias: ['Arduino', 'KeyStudio V4.0', 'HC-SR04', 'Motor shield'],

    // Datos rápidos (los cuadritos de arriba)
    datos: [
      { etiqueta: { es: 'Contexto', en: 'Context' }, valor: { es: 'ASTI Robotics Challenge · Digitech FP', en: 'ASTI Robotics Challenge · Digitech FP' } },
      { etiqueta: { es: 'Periodo', en: 'When' }, valor: { es: 'Enero – febrero 2026', en: 'January – February 2026' } },
      { etiqueta: { es: 'Equipo', en: 'Team' }, valor: { es: '4 personas de ASIR', en: '4 ASIR students' } },
      { etiqueta: { es: 'Mi rol', en: 'My role' }, valor: { es: 'Finanzas (papeletas), montaje, descripción y vídeos', en: 'Finance (raffle tickets), assembly, description and videos' } }
    ],

    // Bloques de contenido. Cada uno puede tener: texto, lista y/o tabla.
    secciones: [
      {
        titulo: { es: 'Idea y diseño', en: 'Idea and design' },
        lista: [
          { es: 'Mantuvimos la estructura original del kit y le añadimos una máscara de dragón roja hecha a mano, con círculos recortados para que los sensores de proximidad detecten bien.', en: 'We kept the original structure of the kit and added a hand-made red dragon mask, with circles cut out so the proximity sensors read properly.' },
          { es: 'Diseño modular: las ruedas y las pilas se pueden cambiar fácilmente, como pedía el concurso.', en: 'Modular design: wheels and batteries are easy to swap, as the competition required.' },
          { es: 'Lo montamos siguiendo el manual del kit KeyStudio V4.0 y un vídeo explicativo.', en: 'We built it following the KeyStudio V4.0 kit manual and an explanatory video.' },
          { es: 'Publicamos la evolución del robot en Instagram: @dragonware.', en: "We shared the robot's progress on Instagram: @dragonware." }
        ]
      },
      {
        titulo: { es: 'Pruebas y resultados', en: 'Tests and results' },
        lista: [
          { es: 'Sensor de proximidad: lo primero que probamos. Ajustamos el servo a su ángulo correcto (90º).', en: 'Proximity sensor: the first thing we tested. We set the servo to its correct angle (90º).' },
          { es: 'Motores: superaron bien la prueba de manejo manual.', en: 'Motors: they passed the manual driving test well.' },
          { es: 'Pilas: se descargaron y el robot dejó de seguir la línea. Al recargarlas, el problema desapareció.', en: 'Batteries: they ran out and the robot stopped following the line. After recharging them, the problem went away.' },
          { es: 'Sensores de línea: detectan brillo, no color, así que ajustamos la sensibilidad.', en: 'Line sensors: they detect brightness, not colour, so we adjusted the sensitivity.' },
          { es: 'El resto de la programación fue sencilla, salvo el sigue líneas con la línea negra y la blanca.', en: 'The rest of the programming was easy, except line following with the black and white line.' }
        ]
      },
      {
        titulo: { es: 'Presupuesto', en: 'Budget' },
        tabla: {
          cabecera: [{ es: 'Producto', en: 'Item' }, { es: 'Precio por unidad', en: 'Price per unit' }],
          filas: [
            [{ es: 'Chasis Maqueen Lite (PCB + controladora)', en: 'Maqueen Lite chassis (PCB + controller)' }, { es: '10 €', en: '€10' }],
            [{ es: 'Placa de desarrollo V4.0 KeyStudio', en: 'KeyStudio V4.0 development board' }, { es: '12,98 €', en: '€12.98' }],
            [{ es: 'Motor Shield 1 KeyStudio', en: 'KeyStudio Motor Shield 1' }, { es: '24,90 €', en: '€24.90' }],
            [{ es: 'Acrylic Board para panel LED 8x16', en: 'Acrylic board for 8x16 LED panel' }, { es: '2 – 6 €', en: '€2 – 6' }],
            [{ es: 'Sensor ultrasónico HC-SR04', en: 'HC-SR04 ultrasonic sensor' }, { es: '1,73 €', en: '€1.73' }],
            [{ es: 'Cables', en: 'Cables' }, { es: '10 €', en: '€10' }],
            [{ es: 'Pilas', en: 'Batteries' }, { es: '6 €', en: '€6' }]
          ]
        },
        texto: {
          es: 'Total aproximado: entre 67,61 € y 71,61 € (suma de los precios por unidad).',
          en: 'Approximate total: between €67.61 and €71.61 (sum of the unit prices).'
        }
      },
      {
        titulo: { es: 'Financiación', en: 'Funding' },
        texto: {
          es: 'Para conseguir presupuesto organizamos un sorteo de un circuito de spa en Don San Marco. Diseñamos un ticket de lotería específico, con 100 papeletas y sorteo el 1 de marzo. Yo fui la responsable de finanzas y de las papeletas.',
          en: 'To raise a budget we organised a raffle for a spa circuit at Don San Marco. We designed a dedicated lottery ticket, with 100 tickets and the draw on 1 March. I was in charge of finance and the tickets.'
        }
      },
      {
        titulo: { es: 'Parte 2: propuesta para una PYME', en: 'Part 2: proposal for a small business' },
        texto: {
          es: 'En una copistería o un almacén pequeño, los materiales se mueven constantemente de una zona a otra y se pierde tiempo. Proponemos un robot seguidor de líneas que arrastra una carretilla pequeña de cartón duro reciclado (15 × 10 cm, para unos 300–400 g).',
          en: 'In a print shop or a small warehouse, materials constantly move from one area to another and time is lost. We propose a line-following robot that pulls a small cart made of recycled hard cardboard (15 × 10 cm, for about 300–400 g).'
        },
        lista: [
          { es: 'Sobrepeso: una célula de carga con módulo HX711 detecta el peso. Si se supera el máximo, se enciende un LED, suena un zumbador y el robot se bloquea hasta que se libere la carga.', en: 'Overload: a load cell with an HX711 module measures the weight. If the maximum is exceeded, an LED lights up, a buzzer sounds and the robot stops until the load is removed.' },
          { es: 'Aviso remoto: si pasan 20 segundos, manda una señal por Bluetooth y un usuario autorizado puede enviar el comando unlock.', en: 'Remote alert: after 20 seconds it sends a Bluetooth signal, and an authorised user can send the unlock command.' },
          { es: 'Seguridad: el sensor ultrasónico detecta también las piernas de las personas y el robot reduce la velocidad al acercarse al destino.', en: "Safety: the ultrasonic sensor also detects people's legs, and the robot slows down as it approaches its destination." },
          { es: 'Un enganche trasero para unir la carretilla.', en: 'A rear hitch to attach the cart.' }
        ]
      },
      {
        titulo: { es: 'Impacto esperado', en: 'Expected impact' },
        lista: [
          { es: 'Educativo: desarrolla robótica, electrónica y programación.', en: 'Educational: builds robotics, electronics and programming skills.' },
          { es: 'Social: reduce tareas repetitivas y mejora el bienestar laboral.', en: 'Social: reduces repetitive tasks and improves wellbeing at work.' },
          { es: 'Industrial: aporta estabilidad al flujo de trabajo y ahorro a pequeñas empresas.', en: 'Industrial: stabilises workflow and saves money for small businesses.' },
          { es: 'Ambiental: reutiliza materiales, evita papel y consume poca energía.', en: 'Environmental: reuses materials, avoids paper and uses little energy.' }
        ]
      },
      {
        titulo: { es: 'Lo que aprendí', en: 'What I learned' },
        texto: {
          es: 'Aprendimos a tener mucha templanza en el montaje y la programación, a programar un Arduino y a ser creativos con el diseño. Para mí, lo más importante fue el trabajo en equipo, la planificación y la atención al detalle. No tuvimos un mentor formal, pero contamos con el apoyo de profesores y compañeros.',
          en: 'We learned to stay patient during assembly and programming, to program an Arduino and to be creative with the design. For me, the key lesson was teamwork, planning and attention to detail. We had no formal mentor, but we had support from teachers and classmates.'
        }
      },
      {
        titulo: { es: 'Equipo y roles', en: 'Team and roles' },
        lista: [
          { es: 'Roberto Hijano Merkitanov: programación y secretario técnico.', en: 'Roberto Hijano Merkitanov: programming and technical secretary.' },
          { es: 'Rafael Andrés Fernández Núñez: integración y pruebas.', en: 'Rafael Andrés Fernández Núñez: integration and testing.' },
          { es: 'Hibat Allah Zoukkani Raddadi: finanzas (papeletas), montaje del robot, descripción del proyecto y grabación de vídeos.', en: 'Hibat Allah Zoukkani Raddadi: finance (raffle tickets), robot assembly, project description and video recording.' },
          { es: 'Diana Cano Santana: logística, materiales, documentación, redes y diseño.', en: 'Diana Cano Santana: logistics, materials, documentation, networking and design.' }
        ]
      }
    ],

    // Fotos de la galería
    galeria: [
      { src: 'images/dragonware-gantt.jpg', pie: { es: 'Diagrama de Gantt con las tareas del equipo', en: "Gantt chart with the team's tasks" } },
      { src: 'images/dragonware-sorteo.jpg', pie: { es: 'Ticket del sorteo para financiar el robot', en: 'Raffle ticket to fund the robot' } },
      { src: 'images/dragonware-boceto.jpg', pie: { es: 'Bocetos de la carretilla (parte 2)', en: 'Cart sketches (part 2)' } },
      { src: 'images/dragonware-carretilla.jpg', pie: { es: 'Diseño 3D de la carretilla', en: '3D design of the cart' } },
      { src: 'images/dragonware-celula-carga.jpg', pie: { es: 'Esquema de la célula de carga con Arduino', en: 'Load cell wiring with Arduino' } }
    ]
  }

  // ▼▼ PEGA AQUÍ TU PRÓXIMO PROYECTO (acuérdate de la coma "," entre proyectos) ▼▼

];

// Pon false si no quieres que se vea la tarjeta de "Próximo proyecto"
const mostrarTarjetaProximo = true;


/* =====================================================
   CERTIFICACIONES
   Para añadir una: copia un bloque { ... }, pégalo debajo
   y cambia los datos. Guarda la imagen en images/.
     tipo  → 'insignia' | 'certificado' | 'logro'
     clase → 'curso' | 'modulo'
   ===================================================== */
const certificaciones = [
  {
    tipo: 'insignia', clase: 'curso',
    nombre: { es: 'CCNA: Introducción a las redes', en: 'CCNA: Introduction to Networks' },
    imagen: 'images/cisco-insignia.png'
    // Sin fecha: mostrará "Insignia verificada"
  },
  {
    tipo: 'certificado', clase: 'curso',
    nombre: { es: 'CCNA: Introducción a las redes', en: 'CCNA: Introduction to Networks' },
    fecha: { es: '9 de octubre de 2026', en: 'October 9, 2026' },
    imagen: 'images/cisco-certificado.png', teñir: true
  },
  {
    tipo: 'logro', clase: 'modulo',
    nombre: { es: 'Introducción a Cisco Packet Tracer', en: 'Introduction to Cisco Packet Tracer' },
    fecha: { es: '9 de octubre de 2026', en: 'October 9, 2026' },
    imagen: 'images/cisco-logro.png', teñir: true
  },
  {
    tipo: 'certificado', clase: 'modulo',
    nombre: { es: 'Introducción a Cisco Packet Tracer', en: 'Introduction to Cisco Packet Tracer' },
    fecha: { es: '30 de octubre de 2025', en: 'October 30, 2025' },
    imagen: 'images/cisco-certificado.png', teñir: true
  }
];


/* =====================================================
   LO QUE ESTOY ESTUDIANDO
   Para añadir un área: copia un bloque { ... } y cambia los datos.
   "icono" puede ser: 'web' | 'datos' | 'codigo' | 'cubo'
   ===================================================== */
const estudios = [
  {
    icono: 'web',
    titulo: { es: 'Aplicaciones web', en: 'Web applications' },
    items: [
      { es: 'Instalación y despliegue de aplicaciones web', en: 'Installing and deploying web applications' },
      { es: 'Configuración de entornos XAMPP', en: 'Setting up XAMPP environments' },
      { es: 'Desarrollo básico con HTML, CSS y JavaScript', en: 'Basic development with HTML, CSS and JavaScript' },
      { es: 'Gestión de servidores web', en: 'Web server management' },
      { es: 'Publicación y mantenimiento de sitios web', en: 'Publishing and maintaining websites' }
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'XAMPP']
  },
  {
    icono: 'datos',
    titulo: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { es: 'Instalación y configuración de MySQL y MariaDB', en: 'Installing and configuring MySQL and MariaDB' },
      { es: 'Creación y administración de bases de datos', en: 'Creating and administering databases' },
      { es: 'Gestión de usuarios y permisos', en: 'Managing users and permissions' },
      { es: 'Realización de consultas SQL', en: 'Writing SQL queries' }
    ],
    tecnologias: ['MySQL', 'MariaDB', 'SQL']
  },
  {
    icono: 'codigo',
    titulo: { es: 'Programación', en: 'Programming' },
    items: [
      { es: 'Programación básica en Python', en: 'Basic programming in Python' },
      { es: 'Uso de variables, funciones y estructuras de control', en: 'Variables, functions and control structures' }
    ],
    tecnologias: ['Python']
  },
  {
    icono: 'cubo',
    titulo: { es: 'Virtualización y contenedores', en: 'Virtualisation and containers' },
    items: [
      { es: 'Creación y gestión de máquinas virtuales', en: 'Creating and managing virtual machines' },
      { es: 'Uso de Proxmox VE y VirtualBox', en: 'Using Proxmox VE and VirtualBox' },
      { es: 'Gestión de contenedores Docker', en: 'Managing Docker containers' },
      { es: 'Configuración de redes virtuales', en: 'Configuring virtual networks' }
    ],
    tecnologias: ['Proxmox VE', 'VirtualBox', 'Docker']
  }
];


/* =====================================================
   3) CÓDIGO — no hace falta tocarlo
   ===================================================== */

// ---------- Idioma ----------
let idioma = 'es';

// Devuelve el texto en el idioma actual (si no hay inglés, usa el español)
function t(valor) {
  if (typeof valor === 'string') return valor;
  return valor[idioma] || valor.es;
}
// Devuelve un texto fijo de la lista "textos"
function txt(clave) {
  return (textos[idioma] && textos[idioma][clave]) || textos.es[clave] || clave;
}

// ---------- Elementos de la página ----------
const contenedorProyectos = document.getElementById('projects');
const contenedorFiltros   = document.getElementById('filters');
const contenedorCerts     = document.getElementById('certs');
const contenedorEstudios  = document.getElementById('study');
const ventana             = document.getElementById('modal');
const cuerpoVentana       = document.getElementById('modal-body');
const botonCerrar         = document.getElementById('modal-close');

let filtroActual = 'todos';
let proyectoAbierto = null;

// ---------- Textos fijos ----------
function aplicarTextos() {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = txt(el.dataset.i18n);
  });
  botonCerrar.setAttribute('aria-label', txt('modal.close'));
}

// ---------- Filtros ----------
function dibujarFiltros() {
  // Categorías distintas (usamos el texto en español como identificador)
  const categorias = [];
  proyectos.forEach(function (p) {
    if (!categorias.includes(p.categoria.es)) categorias.push(p.categoria.es);
  });

  // Con una sola categoría no hace falta filtro
  if (categorias.length < 2) { contenedorFiltros.hidden = true; return; }
  contenedorFiltros.hidden = false;
  contenedorFiltros.innerHTML = '';

  function crearBoton(valor, etiqueta) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = etiqueta;
    b.setAttribute('aria-pressed', String(filtroActual === valor));
    b.addEventListener('click', function () {
      filtroActual = valor;
      dibujarFiltros();
      dibujarProyectos();
    });
    contenedorFiltros.appendChild(b);
  }
  crearBoton('todos', txt('projects.all'));
  categorias.forEach(function (c) {
    const ejemplo = proyectos.find(function (p) { return p.categoria.es === c; });
    crearBoton(c, t(ejemplo.categoria));
  });
}

// ---------- Tarjetas de proyectos ----------
function dibujarProyectos() {
  contenedorProyectos.innerHTML = '';

  const lista = proyectos.filter(function (p) {
    return filtroActual === 'todos' || p.categoria.es === filtroActual;
  });

  lista.forEach(function (p, i) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'card reveal' + (p.destacado && i === 0 ? ' card--featured' : '');
    tarjeta.tabIndex = 0;
    tarjeta.innerHTML =
      '<div class="card__img"><img src="' + p.portada + '" alt="' + t(p.titulo) + '" loading="lazy"></div>' +
      '<div class="card__body">' +
        '<span class="card__cat">' + t(p.categoria) + '</span>' +
        '<h3>' + t(p.titulo) + '</h3>' +
        '<p class="card__sub">' + t(p.subtitulo) + '</p>' +
        '<p class="card__text">' + t(p.resumen) + '</p>' +
        '<ul class="chips">' + p.tecnologias.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
        '<button class="card__more" type="button">' + txt('projects.view') + '</button>' +
      '</div>';

    // Clic (o Enter) en toda la tarjeta abre el proyecto
    tarjeta.addEventListener('click', function () { abrirProyecto(p.id); });
    tarjeta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') abrirProyecto(p.id);
    });
    contenedorProyectos.appendChild(tarjeta);
  });

  // Tarjeta "Próximo proyecto"
  if (mostrarTarjetaProximo && filtroActual === 'todos') {
    const proximo = document.createElement('article');
    proximo.className = 'card card--soon reveal';
    proximo.innerHTML =
      '<div><div class="plus" aria-hidden="true">+</div>' +
      '<div><h3>' + txt('projects.soonTitle') + '</h3>' +
      '<p>' + txt('projects.soonText') + '</p></div></div>';
    contenedorProyectos.appendChild(proximo);
  }
  activarAparicion();
}

// ---------- Ventana con el detalle del proyecto ----------
function abrirProyecto(id) {
  proyectoAbierto = proyectos.find(function (p) { return p.id === id; });
  if (!proyectoAbierto) return;
  dibujarVentana();
  ventana.showModal();
  ventana.scrollTop = 0;
}

function dibujarVentana() {
  const p = proyectoAbierto;
  if (!p) return;

  let html = '';
  // Cabecera: foto a la izquierda, título y resumen a la derecha
  html += '<div class="modal__head">';
  html += '<img class="modal__cover" src="' + p.portada + '" alt="' + t(p.titulo) + '">';
  html += '<div class="modal__intro">';
  html += '<span class="modal__cat">' + t(p.categoria) + '</span>';
  html += '<h2 id="modal-title">' + t(p.titulo) + '</h2>';
  html += '<p class="modal__sub">' + t(p.subtitulo) + '</p>';
  html += '<p class="modal__summary">' + t(p.resumen) + '</p>';
  html += '<ul class="chips">' + p.tecnologias.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
  html += '</div></div>';
  html += '<div class="modal__content">';

  // Datos rápidos
  if (p.datos) {
    html += '<div class="facts">' + p.datos.map(function (d) {
      return '<div class="fact"><span>' + t(d.etiqueta) + '</span><strong>' + t(d.valor) + '</strong></div>';
    }).join('') + '</div>';
  }

  // Secciones (texto, lista y/o tabla)
  (p.secciones || []).forEach(function (s) {
    html += '<section class="block"><h3>' + t(s.titulo) + '</h3>';
    if (s.tabla) {
      html += '<div class="table-wrap"><table><thead><tr>' +
        s.tabla.cabecera.map(function (c) { return '<th>' + t(c) + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
        s.tabla.filas.map(function (fila) {
          return '<tr>' + fila.map(function (c) { return '<td>' + t(c) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>';
    }
    if (s.texto) html += '<p>' + t(s.texto) + '</p>';
    if (s.lista) html += '<ul>' + s.lista.map(function (x) { return '<li>' + t(x) + '</li>'; }).join('') + '</ul>';
    html += '</section>';
  });

  // Galería
  if (p.galeria && p.galeria.length) {
    html += '<section class="block"><h3>' + txt('modal.gallery') + '</h3><div class="gallery">' +
      p.galeria.map(function (g) {
        return '<figure><img src="' + g.src + '" alt="' + t(g.pie) + '" loading="lazy"><figcaption>' + t(g.pie) + '</figcaption></figure>';
      }).join('') + '</div></section>';
  }
  html += '</div>';
  cuerpoVentana.innerHTML = html;
}

botonCerrar.addEventListener('click', function () { ventana.close(); });
// Clic fuera de la ventana = cerrar
ventana.addEventListener('click', function (e) { if (e.target === ventana) ventana.close(); });
ventana.addEventListener('close', function () { proyectoAbierto = null; });

// ---------- Certificaciones ----------
function dibujarCertificaciones() {
  contenedorCerts.innerHTML = certificaciones.map(function (c) {
    const pie = c.fecha
      ? txt('certs.issued') + ' <b>' + t(c.fecha) + '</b>'
      : '<b>' + txt('certs.verified') + '</b>';
    return '<article class="cert reveal">' +
      '<div class="cert__main">' +
        '<span class="cert__tag">' + txt('certs.type.' + c.tipo) + '</span>' +
        '<div class="cert__img"><img class="' + (c['teñir'] ? 'tint' : '') + '" src="' + c.imagen + '" alt="" loading="lazy"></div>' +
        '<div class="cert__kind">' + txt('certs.kind.' + c.clase) + '</div>' +
        '<h3>' + t(c.nombre) + '</h3>' +
      '</div>' +
      '<div class="cert__foot">' + pie + '</div>' +
    '</article>';
  }).join('');
  activarAparicion();
}

// ---------- Lo que estoy estudiando ----------
const iconos = {
  web:    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  datos:  '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6.5c0 1.7 3.6 3 8 3s8-1.3 8-3V5.5M4 12v6.5c0 1.7 3.6 3 8 3s8-1.3 8-3V12"/></svg>',
  codigo: '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
  cubo:   '<svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>'
};
function dibujarEstudios() {
  contenedorEstudios.innerHTML = estudios.map(function (e) {
    return '<article class="study__card reveal">' +
      '<div class="study__icon">' + (iconos[e.icono] || iconos.codigo) + '</div>' +
      '<h3>' + t(e.titulo) + '</h3>' +
      '<ul class="study__list">' + e.items.map(function (x) { return '<li>' + t(x) + '</li>'; }).join('') + '</ul>' +
      '<ul class="chips">' + e.tecnologias.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
    '</article>';
  }).join('');
  activarAparicion();
}

// ---------- Aparición suave al hacer scroll ----------
let observador = null;
function activarAparicion() {
  const elementos = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  if (!observador) {
    observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); observador.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
  }
  elementos.forEach(function (el) { observador.observe(el); });
}

// ---------- Cambio de idioma ----------
function cambiarIdioma(nuevo, guardar) {
  idioma = nuevo;
  document.documentElement.lang = nuevo;
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === nuevo));
  });
  if (guardar) { try { localStorage.setItem('idioma', nuevo); } catch (e) {} }

  aplicarTextos();
  dibujarFiltros();
  dibujarProyectos();
  dibujarCertificaciones();
  dibujarEstudios();
  if (ventana.open) dibujarVentana();   // si hay un proyecto abierto, lo traduce
}
document.querySelectorAll('.lang button').forEach(function (b) {
  b.addEventListener('click', function () { cambiarIdioma(b.dataset.lang, true); });
});

// ---------- Arranque ----------
(function iniciar() {
  let guardado = null;
  try { guardado = localStorage.getItem('idioma'); } catch (e) {}
  const delNavegador = (navigator.language || 'es').slice(0, 2) === 'en' ? 'en' : 'es';
  cambiarIdioma(guardado || delNavegador, false);
  activarAparicion();
})();
