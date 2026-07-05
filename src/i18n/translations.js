export const translations = {
  es: {
    nav: {
      tours: "Tours",
      whyUs: "Por qué nosotros",
      customerExperiences: "Reseñas",
      gallery: "Galeria",
      contactUs: "Contáctanos",
      switchLanguage: "Switch to English",
    },
    hero: {
      title: "Still Wild Nature",
      subtitle: "Experiencia de Caminata Nocturna en Monteverde",
    },
    tours: {
      label: "Tours",
      heading: "Experiencias únicas diseñadas para cada tipo de viajero",
      details: "Detalles",
      reserve: "Reservar",
    },
    whyUs: {
      label: "Por qué explorar Monteverde con nosotros",
      heading:
        "Experiencias auténticas guiadas por la pasión, el conocimiento y un profundo respeto por la naturaleza.",
      guideName: "Dauner Alvarado",
      guideBio1:
        "No solo estás reservando un tour, estás dando un paso hacia una conexión más profunda con la naturaleza.",
      guideBio2:
        "En Still Wild Nature, cada experiencia está diseñada para bajar el ritmo, observar y sentir de verdad la magia del bosque nuboso. Ya sea el silencio de la caminata nocturna o los primeros sonidos del bosque al amanecer, te ayudamos a ver Monteverde de una forma que permanece contigo mucho después de tu visita.",
    },
    customerExperiences: {
      heading: "Experiencias de Clientes",
      reviewsOn: "reseñas en",
      reviewButton: "Califícanos en Google",
    },
    footer: {
      information: "Información",
      tours: "Tours",
      whyUs: "Por qué nosotros",
      customerExperiences: "Reseñas",
      gallery: "Galeria",
      contact: "Contacto",
      email: "Correo",
      phone: "Teléfono",
      language: "Idioma",
      rights: "© 2026 Still Wild Nature. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      tours: "Tours",
      whyUs: "Why us",
      customerExperiences: "Customer experiences",
      gallery: "Gallery",
      contactUs: "Contact us",
      switchLanguage: "Cambiar a Español",
    },
    hero: {
      title: "Still Wild Nature",
      subtitle: "Night Walk Experience in Monteverde",
    },
    tours: {
      label: "Tours",
      heading: "Unique experiences designed for every type of traveler",
      details: "Details",
      reserve: "Reserve",
    },
    whyUs: {
      label: "Why Explore Monteverde With Us",
      heading:
        "Authentic experiences guided by passion, knowledge, and a deep respect for nature.",
      guideName: "Dauner Alvarado",
      guideBio1:
        "You're not just booking a tour - You're stepping into a deeper connection with nature.",
      guideBio2:
        "At Still Wild Nature, every experience is crafted to slow down, observe, and truly feel the magic of the cloud forest. Whether it's the silence of the night walk or the first sounds of the forest at sunrise, we help you see Monteverde in a way that stays with you long after your visit.",
    },
    customerExperiences: {
      heading: "Customer Experiences",
      reviewsOn: "reviews on",
      reviewButton: "Review us on Google",
    },
    footer: {
      information: "Information",
      tours: "Tours",
      whyUs: "Why us",
      customerExperiences: "Customer experiences",
      gallery: "Gallery",
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      language: "Language",
      rights: "© 2026 Still Wild Nature. All rights reserved",
    },
  },
};

export function getTranslations(lang) {
  return translations[lang] ?? translations.es;
}
