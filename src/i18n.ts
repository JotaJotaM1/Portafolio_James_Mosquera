import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage =
    typeof window !== "undefined" ? localStorage.getItem("lang") : null;

const resources = {
    en: {
        translation: {
            nav: {
                work: "Work",
                about: "About",
                contact: "Contact"
            },
            hero: {
                badge: "Front-End Developer",
                title: {
                    line1: "Crafting Digital",
                    emphasis: "Experiences",
                    line2: "with",
                    line3: "Clean Code"
                },
                subtitle: "Specialized in building pixel-perfect, performant interfaces with modern frameworks and design systems. I turn complex problems into simple, beautiful, and intuitive designs.",
                ctaWork: "View Work",
                ctaContact: "Contact Me",
                projectStatus: "Project Status"
            },
            about: {
                title: "About Me",
                p1: "I'm a Front-End Developer based in Barcelona, focused on building clean, accessible, high-performance web experiences with modern technologies.",
                p2: "I work with startups and small teams to deliver fast, well-structured applications with strong attention to UI/UX, performance, and SEO. Outside of coding, I explore front-end trends and refine my skills through personal projects.",
                github: "GitHub",
                linkedin: "LinkedIn",
                downloadCv: "Download CV",
                locationLabel: "Location",
                locationValue: "Barcelona, Spain",
                stats: {
                    experience: "Experience",
                    projects: "Projects",
                    clients: "Happy Clients",
                    years: "Years"
                }
            },
            work: {
                title: "Featured Projects",
                subtitle: "Case studies showcasing high-performance UI implementation & comprehensive design systems.",
                viewProject: "View Project",
                openProjectAria: "Open {{title}} project",
                projects: {
                    gcConstructionTitle: "GC Construction",
                    gcConstructionDesc: "Responsive construction company landing page",
                    fullReadyTitle: "Full Ready",
                    fullReadyDesc: "Commercial landing page with modern UI",
                    restaurantMenuTitle: "Restaurant Menu",
                    restaurantMenuDesc: "QR-based restaurant menu for mobile devices",
                    testimonialsSliderTitle: "Testimonials Slider",
                    testimonialsSliderDesc: "Interactive testimonials slider",
                    testimonialsGridTitle: "Testimonials Grid",
                    testimonialsGridDesc: "Grid-based testimonial layout",
                    newsletterTitle: "Newsletter Sign Up",
                    newsletterDesc: "Newsletter form with success state",
                    faqTitle: "FAQ Accordion",
                    faqDesc: "Accessible FAQ accordion component",
                    quoterTitle: "Quoter",
                    quoterDesc: "Random quotes app",
                    socialLinksTitle: "Social Links Profile",
                    socialLinksDesc: "Compact social profile card",
                    blogPreviewTitle: "Blog Preview Card",
                    blogPreviewDesc: "Blog preview UI card"
                }
            },
            techstack: {
                title: "Powering Experiences With"
            },
            services: {
                title: "Services & Skills",
                subtitle: "What I bring to your project",
                items: {
                    uiTitle: "UI Implementation",
                    uiDesc: "Pixel-perfect conversion from designs to production-ready code with attention to detail.",
                    dsTitle: "Design Systems",
                    dsDesc: "Building scalable component libraries and design tokens that ensure consistency.",
                    perfTitle: "Performance",
                    perfDesc: "Optimizing load times, rendering performance, and Core Web Vitals for speed.",
                    seoTitle: "SEO Basics",
                    seoDesc: "Implementing semantic HTML and structured data for better search visibility.",
                    a11yTitle: "Accessibility",
                    a11yDesc: "WCAG-compliant interfaces with screen reader support and inclusive design.",
                    collabTitle: "Collaboration",
                    collabDesc: "Working closely with designers and back-end teams to deliver cohesive products."
                }
            },
            contact: {
                title: "Let's Work Together",
                subtitle: "Have a project in mind or just want to say hi? Feel free to send me a message.",
                ctaTitle: "Ready to bring your next idea to life?",
                ctaBody: "I help brands and startups build fast, accessible, and beautiful web experiences. Tell me about your project and I’ll get back to you quickly.",
                copyEmail: "Copy email",
                copyEmailCopied: "Copied",
                formDemoNote: "Demo form — validation only (no email delivery).",
                form: {
                    name: "Name",
                    email: "Email",
                    subject: "Subject",
                    message: "Message",
                    namePlaceholder: "John Doe",
                    emailPlaceholder: "john@example.com",
                    subjectPlaceholder: "Project Inquiry",
                    messagePlaceholder: "Tell me about your project...",
                    submit: "Send Message",
                    sending: "Sending..."
                },
                validation: {
                    required: "This field is required.",
                    email: "Please enter a valid email address."
                },
                status: "Message sent. Thank you — I will get back to you soon.",
                statusDemo: "Demo: form validation only. Email delivery is not enabled yet.",
                statusError: "Something went wrong. Please try again."
            },
            footer: {
                rights: "© 2026 James Mosquera. All rights reserved."
            },
            theme: {
                dark: "Switch to dark mode",
                light: "Switch to light mode"
            },
            language: {
                label: "Language",
                en: "EN",
                es: "ES"
            }
        }
    },
    es: {
        translation: {
            nav: {
                work: "Proyectos",
                about: "Sobre mí",
                contact: "Contacto"
            },
            hero: {
                badge: "Desarrollador Front-End",
                title: {
                    line1: "Creando",
                    emphasis: "Experiencias",
                    line2: "Digitales con",
                    line3: "Código Limpio"
                },
                subtitle: "Especializado en crear interfaces pixel-perfect y de alto rendimiento con frameworks modernos y sistemas de diseño. Transformo problemas complejos en soluciones simples y atractivas.",
                ctaWork: "Ver Proyectos",
                ctaContact: "Contáctame",
                projectStatus: "Estado del proyecto"
            },
            about: {
                title: "Sobre mí",
                p1: "Soy Front-End Developer en Barcelona, enfocado en crear experiencias web limpias, accesibles y de alto rendimiento con tecnologías modernas.",
                p2: "Trabajo con startups y equipos pequeños para entregar aplicaciones rápidas y bien estructuradas, con fuerte atención a UI/UX, performance y SEO. Fuera del código, exploro tendencias front-end y mejoro mis habilidades con proyectos personales.",
                github: "GitHub",
                linkedin: "LinkedIn",
                downloadCv: "Descargar CV",
                locationLabel: "Ubicación",
                locationValue: "Barcelona, España",
                stats: {
                    experience: "Experiencia",
                    projects: "Proyectos",
                    clients: "Clientes felices",
                    years: "Años"
                }
            },
            work: {
                title: "Proyectos destacados",
                subtitle: "Casos de estudio que muestran implementación UI de alto rendimiento y sistemas de diseño completos.",
                viewProject: "Ver proyecto",
                openProjectAria: "Abrir proyecto {{title}}",
                projects: {
                    gcConstructionTitle: "GC Construction",
                    gcConstructionDesc: "Landing responsive para empresa de construcción",
                    fullReadyTitle: "Full Ready",
                    fullReadyDesc: "Landing comercial con UI moderna",
                    restaurantMenuTitle: "Menú de restaurante",
                    restaurantMenuDesc: "Menú con QR para móviles",
                    testimonialsSliderTitle: "Slider de testimonios",
                    testimonialsSliderDesc: "Slider interactivo de testimonios",
                    testimonialsGridTitle: "Grid de testimonios",
                    testimonialsGridDesc: "Diseño de testimonios en grid",
                    newsletterTitle: "Suscripción a newsletter",
                    newsletterDesc: "Formulario con estado de éxito",
                    faqTitle: "Acordeón de FAQ",
                    faqDesc: "Componente de FAQ accesible",
                    quoterTitle: "Quoter",
                    quoterDesc: "App de citas aleatorias",
                    socialLinksTitle: "Perfil de enlaces sociales",
                    socialLinksDesc: "Tarjeta compacta de perfil social",
                    blogPreviewTitle: "Tarjeta de blog",
                    blogPreviewDesc: "Tarjeta de vista previa de blog"
                }
            },
            techstack: {
                title: "Tecnologías con las que trabajo"
            },
            services: {
                title: "Servicios y habilidades",
                subtitle: "Lo que aporto a tu proyecto",
                items: {
                    uiTitle: "Implementación UI",
                    uiDesc: "Conversión pixel-perfect de diseños a código listo para producción.",
                    dsTitle: "Sistemas de diseño",
                    dsDesc: "Componentes escalables y design tokens para mantener consistencia.",
                    perfTitle: "Rendimiento",
                    perfDesc: "Optimización de carga, render y Core Web Vitals.",
                    seoTitle: "SEO básico",
                    seoDesc: "HTML semántico y datos estructurados para mejor visibilidad.",
                    a11yTitle: "Accesibilidad",
                    a11yDesc: "Interfaces con WCAG, soporte a lectores de pantalla e inclusión.",
                    collabTitle: "Colaboración",
                    collabDesc: "Trabajo cercano con diseño y back-end para un producto sólido."
                }
            },
            contact: {
                title: "Trabajemos juntos",
                subtitle: "¿Tienes un proyecto en mente o solo quieres saludar? Envíame un mensaje.",
                ctaTitle: "¿Listo para dar vida a tu próxima idea?",
                ctaBody: "Ayudo a marcas y startups a construir experiencias web rápidas, accesibles y atractivas. Cuéntame tu proyecto y te responderé pronto.",
                copyEmail: "Copiar correo",
                copyEmailCopied: "Copiado",
                formDemoNote: "Formulario demo — solo validación (sin envío de email).",
                form: {
                    name: "Nombre",
                    email: "Email",
                    subject: "Asunto",
                    message: "Mensaje",
                    namePlaceholder: "Juan Pérez",
                    emailPlaceholder: "juan@ejemplo.com",
                    subjectPlaceholder: "Consulta de proyecto",
                    messagePlaceholder: "Cuéntame sobre tu proyecto...",
                    submit: "Enviar mensaje",
                    sending: "Enviando..."
                },
                validation: {
                    required: "Este campo es obligatorio.",
                    email: "Ingresa un email válido."
                },
                status: "Mensaje enviado. Gracias — te responderé pronto.",
                statusDemo: "Demo: solo validación de formulario. El envío de email aún no está habilitado.",
                statusError: "Algo salió mal. Inténtalo de nuevo."
            },
            footer: {
                rights: "© 2026 James Mosquera. Todos los derechos reservados."
            },
            theme: {
                dark: "Cambiar a modo oscuro",
                light: "Cambiar a modo claro"
            },
            language: {
                label: "Idioma",
                en: "EN",
                es: "ES"
            }
        }
    }
} as const;

i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
