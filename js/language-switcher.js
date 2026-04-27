// Language Switcher System

// Dynamic date generation function
function getEventDate(lang) {
  const months = {
    es: [
      "ENERO",
      "FEBRERO",
      "MARZO",
      "ABRIL",
      "MAYO",
      "JUNIO",
      "JULIO",
      "AGOSTO",
      "SEPTIEMBRE",
      "OCTUBRE",
      "NOVIEMBRE",
      "DICIEMBRE",
    ],
    en: [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ],
  };
  //Tiempo Actual
  var date = new Date();
  const today = date.getDay();
  const month = date.getMonth(); //Retorna el número del mes 0 = enero.
  var dia = date.getDate();

  return `${[dia]} ${months[lang][month]}`;
}

const translations = {
  es: {
    // Navigation and header
    "nav-home": "Inicio",
    "nav-about": "Acerca de",
    "nav-projects": "Trabajos",
    "nav-contact": "Contacto",
    "my-projects": "Mis Proyectos",
    developer: "desarrollador:",

    // Main sections
    "about-title": "Sobre mí",
    "about-description":
      "Ingeniero en informática, amante de la tecnología, los idiomas, los deportes y de las series en Netflix. Apasionado por la programación.",
    "software-developer": "Desarrollador de Software",
    "about-description-2":
      "Autodidacta, trabajador, responsable, trabajo en equipo, experiencia como líder de proyectos informáticos.",

    // Personal info
    profession: "Profesión",
    phone: "Tlf",
    city: "Ciudad",
    age: "Edad",
    email: "Email",
    available: "Para trabajar",
    nationality: "Nacionalidad",

    // Values
    "profession-value": "Ingeniero en Informática",
    "phone-value": "+58 4149616206",
    "city-value": "Maracaibo, Venezuela",
    "email-value": "carlossilvestri9@gmail.com",
    "available-value": "Disponible",
    "nationality-value": "Venezolana e Italiana",

    // About paragraph
    "about-paragraph":
      "Me considero una persona muy trabajadora, responsable, atenta a los detalles y muy perfeccionista. Me gusta aprender nuevas tecnologías y ser líder. Hablo inglés, italiano y español. Conozco muchos lenguajes de programación, los que más me gustan son Java, JavaScript y PHP.",

    // CV button
    "cv-button": "CV",

    // Projects section
    "web-projects": "Páginas web",
    "visit-project": "Visitar Proyecto",

    // Project translations
    "project-tusoluteca-title": "Tusoluteca",
    "project-tusoluteca-desc":
      "Encuentra el servicio perfecto para tus necesidades, sin complicaciones.",
    "project-zirkul-title": "Zirkul",
    "project-zirkul-desc":
      "Zirkul permite que los equipos de ciberseguridad puedan administrar de forma fácil y automatizada.",
    "project-indicadores-title": "Indicadores Arequipa",
    "project-indicadores-desc":
      "Explora y compara los indicadores de la gestión pública en Arequipa",
    "project-blog-title": "Blog de Dulces",
    "project-blog-desc": "Recetas y consejos para crear dulces caseros",
    "project-cripto-title": "Blog de Criptomonedas",
    "project-cripto-desc":
      "Información actualizada sobre el mundo de las criptomonedas",
    "project-moda-title": "Tienda de Moda",
    "project-moda-desc": "E-commerce para una tienda de ropa y accesorios",
    "project-restaurante-title": "Restaurante All Grill",
    "project-restaurante-desc":
      "Sitio web para un restaurante con menú digital y reservas en línea",
    "project-personal-title": "Sitio Web Personal",
    "project-personal-desc":
      "Sitio web personal con información sobre un abogado y profesor",
    "project-maracaibo-title": "Maracaibo Cocina",
    "project-maracaibo-desc":
      "Sitio web para una cocina con menú digital y reservas en línea",
    "project-lee-title": "Lee y Piensa",
    "project-lee-desc":
      "Sitio web para encontrar libros y artículos de interés",

    // Skills section
    "skills-title": "Habilidades",
    "skills-description":
      "Aqui podrás ver algunas de mis habilidades, así como su dominio.",

    // Resume section
    "resume-title": "Resumen",
    "resume-description":
      "Aquí podrás encontrar mi experiencia y algunos cursos que he realizado.",
    education: "Educación",
    "education-student": "Ingeniero en Informática",
    "education-university": "Universidad Rafael Belloso Chacín, Maracaibo, VEN",

    // Courses
    "course-angular": "Angular: De cero a experto (Angular 10+)",
    "course-nodejs": "Node.js - Bootcamp Desarrollo Web inc. MVC y REST APIs",
    "course-vue": "Vue JS - Aprende a Crear Aplicaciones Web Modernas con Vue",
    "course-js": "Javascript Moderno Guía Definitiva Construye +15 Proyectos",
    "course-web":
      "Desarrollo Web Completo con HTML5, CSS3, JS, AJAX PHP y MySQL",
    "course-android":
      "Android y Kotlin Desde Cero a Profesional Completo +45 horas",
    "course-cisco": "CISCO IT Essentials",
    "course-scrum": "Scrum Foundations Professional Certificate (SFPC)",
    "course-italian": "Curso de Italiano Comunicacional",
    "course-english": "Inglés para adultos",
    "course-bachelor": "Bachiller en Ciencias",

    // Event info
    "event-date": "10-12 AGOSTO",
    "event-city": "ZULIA, VEN.",

    // Footer
    "contact-title": "Contacto",
    "contact-description":
      "Puedes escribirme a mi correo: carlossilvestri9@gmail.com y a mi WhatsApp +584149616206.",
  },
  en: {
    // Navigation and header
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "my-projects": "My Projects",
    developer: "developer:",

    // Main sections
    "about-title": "About Me",
    "about-description":
      "Software Engineer, technology lover, languages, sports and Netflix series enthusiast. Passionate about programming.",
    "software-developer": "Software Developer",
    "about-description-2":
      "Self-taught, hardworking, responsible, team player, experience as IT project leader.",

    // Personal info
    profession: "Profession",
    phone: "Phone",
    city: "City",
    age: "Age",
    email: "Email",
    available: "Available for",
    nationality: "Nationality",

    // Values
    "profession-value": "Software Engineer",
    "phone-value": "+58 4149616206",
    "city-value": "Maracaibo, Venezuela",
    "email-value": "carlossilvestri9@gmail.com",
    "available-value": "Available",
    "nationality-value": "Venezuelan and Italian",

    // About paragraph
    "about-paragraph":
      "I consider myself a very hardworking, responsible, detail-oriented and very perfectionist person. I like to learn new technologies and be a leader. I speak English, Italian and Spanish. I know many programming languages, the ones I like most are Java, JavaScript and PHP.",

    // CV button
    "cv-button": "Resume",

    // Projects section
    "web-projects": "Web Projects",
    "visit-project": "Visit Project",

    // Project translations
    "project-tusoluteca-title": "Tusoluteca",
    "project-tusoluteca-desc":
      "Find the perfect service for your needs, without complications.",
    "project-zirkul-title": "Zirkul",
    "project-zirkul-desc":
      "Zirkul allows cybersecurity teams to easily and automatically manage.",
    "project-indicadores-title": "Arequipa Indicators",
    "project-indicadores-desc":
      "Explore and compare public management indicators in Arequipa",
    "project-blog-title": "Sweets Blog",
    "project-blog-desc": "Recipes and tips for creating homemade sweets",
    "project-cripto-title": "Cryptocurrency Blog",
    "project-cripto-desc":
      "Updated information about the world of cryptocurrencies",
    "project-moda-title": "Fashion Store",
    "project-moda-desc": "E-commerce for a clothing and accessories store",
    "project-restaurante-title": "All Grill Restaurant",
    "project-restaurante-desc":
      "Website for a restaurant with digital menu and online reservations",
    "project-personal-title": "Personal Website",
    "project-personal-desc":
      "Personal website with information about a lawyer and professor",
    "project-maracaibo-title": "Maracaibo Kitchen",
    "project-maracaibo-desc":
      "Website for a kitchen with digital menu and online reservations",
    "project-lee-title": "Read and Think",
    "project-lee-desc": "Website to find books and articles of interest",

    // Skills section
    "skills-title": "Skills",
    "skills-description":
      "Here you can see some of my skills and their proficiency level.",

    // Resume section
    "resume-title": "Resume",
    "resume-description":
      "Here you can find my experience and some courses I have taken.",
    education: "Education",
    "education-student": "Software Engineering Student",
    "education-university": "Rafael Belloso Chacín University, Maracaibo, VEN",

    // Courses
    "course-angular": "Angular: From Zero to Expert (Angular 10+)",
    "course-nodejs":
      "Node.js - Web Development Bootcamp inc. MVC and REST APIs",
    "course-vue": "Vue JS - Learn to Create Modern Web Applications with Vue",
    "course-js": "Modern Javascript Definitive Guide Build +15 Projects",
    "course-web":
      "Complete Web Development with HTML5, CSS3, JS, AJAX PHP and MySQL",
    "course-android":
      "Android and Kotlin From Zero to Professional Complete +45 hours",
    "course-cisco": "CISCO IT Essentials",
    "course-scrum": "Scrum Foundations Professional Certificate (SFPC)",
    "course-italian": "Communicational Italian Course",
    "course-english": "English for Adults",
    "course-bachelor": "Bachelor of Science",

    // Event info
    "event-date": "10-12 AUGUST",
    "event-city": "ZULIA, VEN.",

    // Footer
    "contact-title": "Contact",
    "contact-description":
      "You can write to my email: carlossilvestri9@gmail.com and my WhatsApp +584149616206.",
  },
};

// Initialize language switcher
function initLanguageSwitcher() {
  // Get saved language or default to Spanish
  let currentLang = localStorage.getItem("selectedLanguage") || "es";

  // Set initial language
  setLanguage(currentLang);

  // Add click event listeners to language buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);
      localStorage.setItem("selectedLanguage", lang);
    });
  });
}

// Set language function
function setLanguage(lang) {
  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add("active");

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all translatable elements
  updateTranslations(lang);
}

// Update translations
function updateTranslations(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (key === "event-date") {
      element.textContent = getEventDate(lang);
    } else if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update CV link based on language
  const cvLink = document.querySelector('a[href*="docs.google.com/document"]');
  if (cvLink) {
    if (lang === "en") {
      cvLink.href =
        "https://docs.google.com/document/d/12mbrLvvAiJpVOge5U6EXvRYn7_GHvqOp/edit?usp=sharing&ouid=109111566914297993521&rtpof=true&sd=true";
    } else {
      cvLink.href =
        "https://docs.google.com/document/d/1gbM6JjS1FY2NqOpsuGVNzuv-UtaO3TM8";
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initLanguageSwitcher);

// Export for use in other files
window.languageSwitcher = {
  setLanguage,
  translations,
};
