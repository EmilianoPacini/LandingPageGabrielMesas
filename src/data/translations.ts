export type Language = 'es' | 'en' | 'pt';

export const translations = {
  es: {
    navbar: {
      services: "Experiencia",
      about: "Especificaciones", 
      gallery: "Galería",
      story: "Historia",
      faq: "Preguntas Frecuentes",
      contact: "Contacto",
    },
    hero: {
      title: "",
    subtitle: "TRANSFORMÁ TU ESPACIO EN UNA EXPERIENCIA INFINITA",
      scroll: "SCROLL"
    },
    features: {
      title: "DISEÑO QUE",
      subtitle: "TRASCIENDE",
      capsTitle: "Experiencia Exclusiva",
      sysActive: "ESTILO.PURO",
      list: [
         { title: "Ilusión Óptica", description: "Apagada, tu mesa es un espejo negro impecable que aporta sobriedad y elegancia. Encendida, la tecnología de reflexión profunda crea una nitidez tan real que parece que podrías caer dentro, con la tranquilidad de que está diseñada para durar toda la vida." },
         { title: "Profundidad Viva", description: "El diseño del Neon Flex genera un caos visual fascinante que nunca se ve igual desde dos ángulos distintos." },
         { title: "Pulido Brillante y Pegado Profesional", description: "Cada borde ha sido tratado como una joya para que el tacto sea suave y seguro. El ensamble profesional garantiza una geometría perfecta: un túnel infinito que no se deforma ni desvía." },
         { title: "\"No estamos vendiendo una mesa común. Estamos vendiendo el fin de la monotonía en tu hogar. Con la Abyss Edition de Studio Infinius, llevás a tu casa una pieza de ingeniería numerada que transforma un rincón común en el centro de todas las conversaciones. Calidad de rascacielos, diseño de autor y una profundidad que no tiene límites.\"", description: "" }
      ]
    },
    specs: {
      title: "ESPECIFICACIONES",
      subtitle: "TÉCNICAS",
      capsTitle: "Análisis Técnico",
      list: [
        { title: "Vidrio Infinito", description: "Cristal laminado espejado de 8mm que produce una ilusión óptica impecable y profunda." },
        { title: "Neon Flex Inteligente", description: "Sistema lumínico programable que permite elegir entre modos estáticos minimalistas o efectos rítmicos que reaccionan al sonido ambiente." },
        { title: "Dimensiones", description: "Dimensiones personalizables, pensadas para cualquier espacio." },
        { title: "Base", description: "La base de la Abyss Edition está fabricada con madera de pino macizo seleccionado que garantiza una estabilidad dimensional superior para soportar el peso de la pieza." }
      ]
    },
    gallery: {
      title: "LAS",
      subtitle: "VISIONES",
      visualRecords: "Registros Visuales"
    },
     story: {
      origin: "El Origen",
      title: "FORJADO EN",
      subtitle: "SILENCIO",
      creator: "- Gabriel Mesas, Creador",
      p1: "No comenzó como un producto. Comenzó como una obsesión. La búsqueda de capturar el infinito dentro de un espacio finito.",
      p2: "Cientos de prototipos. Miles de horas calibrando ángulos, probando vidrios, perfeccionando la luz. Lo que ves no es solo una mesa; es una ventana a otra dimensión.",
      p3: "Cada pieza se construye bajo pedido, asegurando que la visión permanezca pura e intacta."
    },

    faq: {
      title: "PREGUNTAS",
      subtitle: "FRECUENTES",
      list: [
        { q: "¿Es resistente el vidrio?", a: "Utilizamos vidrio templado de 8mm, diseñado para soportar el uso diario como mesa de centro." },
        { q: "¿Cómo se alimenta?", a: "Se conecta a cualquier tomacorriente estándar de 110/220V. Incluye cable discreto de alta resistencia." },
        { q: "¿Puedo personalizar las luces?", a: "Sí, incluye control por App y control remoto. Millones de colores y modos rítmicos musicales." },
        { q: "¿Hacen envíos a todo el país?", a: "Realizamos envíos asegurados a toda Argentina." },
        { q: "¿Cuál es el tiempo de entrega?", a: "Al ser piezas de autor, el tiempo de producción es de 10 a 15 días hábiles." }
      ]
    },
    scrollShowcase: {
        panels: {
            elegant: "LA PIEZA QUE REDEFINE TU ESPACIO",
            gamer: "ELEVA TU SETUP A OTRA DIMENSION",
            party: "EL CENTRO DE TUS GRANDES MOMENTOS"
        }
    },

    cta: {
        acquire: "ADQUIERE EL",
        infinite: "INFINITO",
        limited: "Producción limitada. No te quedes sin la tuya.",
        preorder: "SOLICITAR PRESUPUESTO",
        secure: "PAGO SEGURO",
        whatsappMessage: "Hola, estoy interesado en presupuestar la mesa Studio Infinius Abyss Edition. Me gustaría recibir más información."
    },
    footer: {
      brand: "STUDIO INFINIUS",
      copyright: "© 2026 Studio Infinius. Diseñado en Argentina.",
      readyTitle: "¿Listo para trascender?",
      ctaButton: "Solicitar Presupuesto"
    }
  },
  en: {
    navbar: {
      services: "Experience",
      about: "Specs",
      gallery: "Gallery",
      story: "Story",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      title: "",
      subtitle: "TRANSFORM YOUR SPACE INTO AN INFINITE EXPERIENCE",
      scroll: "SCROLL"
    },
    features: {
      title: "DESIGN THAT",
      subtitle: "TRANSCENDS",
      capsTitle: "Exclusive Experience",
      sysActive: "PURE.STYLE",
       list: [
         { title: "Optical Illusion", description: "When off, your table is a flawless black mirror offering sobriety and elegance. When on, deep reflection technology creates a sharpness so real you feel you could fall in, with the peace of mind that it's designed to last a lifetime." },
         { title: "Living Depth", description: "The Neon Flex design generates fascinating visual chaos that never looks the same from two different angles." },
         { title: "Brilliant Polish & Professional Bonding", description: "Every edge has been treated like a jewel for a smooth, safe touch. Professional assembly guarantees perfect geometry: an infinite tunnel that never warps or deviates." },
         { title: "\"We're not selling a common table. We're selling the end of monotony in your home. With the Studio Infinius Abyss Edition, you bring home a numbered piece of engineering that transforms a common corner into the center of every conversation. Skyscraper quality, designer authorship, and depth without limits.\"", description: "" }
      ]
    },
    specs: {
      title: "TECHNICAL",
      subtitle: "SPECS",
      capsTitle: "Blueprint Analysis",
       list: [
        { title: "Infinity Glass", description: "Mirrored laminated 8mm glass that produces a deep, flawless optical illusion." },
        { title: "Smart Neon Flex", description: "Programmable lighting system allowing choice between minimalist static modes or rhythmic effects that react to ambient sound." },
        { title: "Dimensions", description: "Customizable dimensions, designed for any space." },
        { title: "Base", description: "The Abyss Edition base is crafted from selected solid pine wood, ensuring superior dimensional stability to support the piece's weight." }
      ]
    },
     gallery: {
      title: "THE",
      subtitle: "VISIONS",
      visualRecords: "Visual Records"
    },
    story: {
      origin: "The Origin",
      title: "FORGED IN",
      subtitle: "SILENCE",
      creator: "- Gabriel Mesas, Creator",
      p1: "It didn't start as a product. It started as an obsession. The quest to capture infinity within a finite space.",
      p2: "Hundreds of prototypes. Thousands of hours calibrating angles, testing glass, perfecting light. What you see is not just a table; it is a window to another dimension.",
      p3: "Each piece is built to order, ensuring the vision remains pure and intact."
    },
    faq: {
      title: "FREQUENTLY ASKED",
      subtitle: "QUESTIONS",
      list: [
        { q: "Is the glass durable?", a: "We use 8mm tempered glass, designed to withstand daily use as a coffee table." },
        { q: "How is it powered?", a: "Connects to any standard 110/220V outlet. Includes a discreet, high-durability cable." },
        { q: "Can I customize the lights?", a: "Yes, includes App and remote control. Millions of colors and music rhythmic modes." },
        { q: "Do you ship internationally?", a: "We ship insured within Argentina and internationally upon request." },
        { q: "What is the lead time?", a: "As bespoke pieces, production time is 15 to 20 business days." }
      ]
    },
    scrollShowcase: {
        panels: {
            elegant: "THE PIECE THAT REDEFINES YOUR SPACE",
            gamer: "ELEVATE YOUR SETUP TO ANOTHER DIMENSION",
            party: "THE CENTER OF YOUR GREATEST MOMENTS"
        }
    },

    cta: {
        acquire: "ACQUIRE THE",
        infinite: "INFINITE",
        limited: "Limited production run. Each unit is serialized and comes with a certificate of authenticity.",
        preorder: "PRE-ORDER NOW",
        secure: "SECURE CHECKOUT // ENCRYPTED",
        whatsappMessage: "Hello, I am interested in getting a quote for the Studio Infinius Abyss Edition table. I would like to receive more information."
    },
    footer: {
      brand: "STUDIO INFINIUS",
      copyright: "© 2026 Studio Infinius. Designed in Argentina.",
      readyTitle: "Ready to transcend?",
      ctaButton: "Request Quote"
    }
  },
  pt: {
    navbar: {
      services: "Experiência",
      about: "Especificações",
      gallery: "Galeria",
      story: "História",
      faq: "Perguntas Frequentes",
      contact: "Contato",
    },
    hero: {
      title: "",
      subtitle: "TRANSFORME SEU ESPAÇO EM UMA EXPERIÊNCIA INFINITA",
      scroll: "SCROLL"
    },
    features: {
      title: "DESIGN QUE",
      subtitle: "TRANSCENDE",
      capsTitle: "Experiência Exclusiva",
      sysActive: "ESTILO.PURO",
       list: [
         { title: "Ilusão de Óptica", description: "Apagada, sua mesa é um espelho preto impecável que traz sobriedade e elegância. Acesa, a tecnologia de reflexão profunda cria uma nitidez tão real que parece que você poderia cair dentro, com a tranquilidade de que foi projetada para durar a vida toda." },
         { title: "Profundidade Viva", description: "O design do Neon Flex gera um caos visual fascinante que nunca parece o mesmo de dois ângulos diferentes." },
         { title: "Polimento Brilhante e Colagem Profissional", description: "Cada borda foi tratada como uma joia para um toque suave e seguro. A montagem profissional garante geometria perfeita: um túnel infinito que não deforma nem desvia." },
         { title: "\"Não estamos vendendo uma mesa comum. Estamos vendendo o fim da monotonia em sua casa. Com a Abyss Edition da Studio Infinius, você leva para casa uma peça de engenharia numerada que transforma um canto comum no centro de todas as conversas. Qualidade de arranha-céu, design autoral e uma profundidade sem limites.\"", description: "" }
      ]
    },
    specs: {
      title: "ESPECIFICAÇÕES",
      subtitle: "TÉCNICAS",
      capsTitle: "Análise Técnica",
        list: [
        { title: "Vidro Infinito", description: "Vidro laminado espelhado de 8mm que produz uma ilusão de óptica impecável e profunda." },
        { title: "Neon Flex Inteligente", description: "Sistema de iluminação programável que permite escolher entre modos estáticos minimalistas ou efeitos rítmicos que reagem ao som ambiente." },
        { title: "Dimensões", description: "Dimensões personalizáveis, pensadas para qualquer espaço." },
        { title: "Base", description: "A base da Abyss Edition é fabricada com madeira de pinho maciço selecionado que garante estabilidade dimensional superior para suportar o peso da peça." }
      ]
    },
    gallery: {
      title: "AS",
      subtitle: "VISÕES",
      visualRecords: "Registros Visuais"
    },
    story: {
      origin: "A Origem",
      title: "FORJADO NO",
      subtitle: "SILÊNCIO",
      creator: "- Gabriel Mesas, Criador",
      p1: "Não começou como um produto. Começou como uma obsessão. A busca por capturar o infinito dentro de um espaço finito.",
      p2: "Centenas de protótipos. Milhares de horas calibrando ângulos, testando vidros, aperfeiçoando a luz. O que você vê não é apenas uma mesa; é uma janela para outra dimensão.",
      p3: "Cada peça é construída sob encomenda, garantindo que a visão permaneça pura e intacta."
    },
    faq: {
      title: "PERGUNTAS",
      subtitle: "FREQUENTES",
      list: [
        { q: "O vidro é resistente?", a: "Usamos vidro temperado de 8mm, projetado para suportar o uso diário como mesa de centro." },
        { q: "Como é alimentado?", a: "Conecta-se a qualquer tomada padrão de 110/220V. Inclui cabo discreto de alta resistência." },
        { q: "Posso personalizar as luzes?", a: "Sim, inclui controle via App e controle remoto. Milhões de cores e modos rítmicos musicais." },
        { q: "Fazem entregas internacionais?", a: "Realizamos envios com seguro em toda a Argentina e envios internacionais sob consulta." },
        { q: "Qual é o prazo de entrega?", a: "Por serem peças autorais, o tempo de produção é de 15 a 20 dias úteis." }
      ]
    },
    scrollShowcase: {
        panels: {
             elegant: "A PEÇA QUE REDEFINE SEU ESPAÇO",
             gamer: "ELEVE SEU SETUP PARA OUTRA DIMENSÃO",
             party: "O CENTRO DOS SEUS GRANDES MOMENTOS"
        }
    },

    cta: {
        acquire: "ADQUIRA O",
        infinite: "INFINITO",
        limited: "Produção limitada. Cada unidade é serializada e vem com um certificado de autenticidade.",
        preorder: "PRÉ-ENCOMENDA AGORA",
        secure: "PAGAMENTO SEGURO // CRIPTOGRAFADO",
        whatsappMessage: "Olá, estou interessado em orçar a mesa Studio Infinius Abyss Edition. Gostaria de receber mais informações."
    },
    footer: {
      brand: "STUDIO INFINIUS",
      copyright: "© 2026 Studio Infinius. Projetado na Argentina.",
      readyTitle: "Pronto para transcender?",
      ctaButton: "Solicitar Orçamento"
    }
  }
};
