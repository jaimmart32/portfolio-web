document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects");
    const skillIcons = document.querySelectorAll(".skill-icon");

    // Datos de proyectos (por Añadir todo_django_2 y proyectos neoland(HTML,CSS,Javascript))
    const projectsData = {
        c: [
            { title: "Minishell", description: "Minishell es una implementación personalizada de un shell de Unix basada en Bash, desarrollada en C. Este proyecto reproduce el comportamiento básico de una terminal, permitiendo ejecutar comandos, gestionar procesos, redirecciones y más...", github: "https://github.com/jaimmart32/minishell/" },
            { title: "Cube3D", description: "cub3D es un proyecto gráfico en C inspirado en el clásico Wolfenstein 3D. Implementa un motor gráfico en 2.5D mediante raycasting, permitiendo explorar un mapa en primera persona en tiempo real. Usando la librería MiniLibX para renderizado y gestión de eventos.", github: "https://github.com/jaimmart32/cub3d/" },
            { title: "Philosophers", description: "Philosophers es una implementación del clásico problema de los filósofos comensales, un ejercicio fundamental en concurrencia. El objetivo es gestionar múltiples hilos (o procesos) que comparten recursos (tenedores) sin caer en condiciones de carrera (race conditions) ni en deadlocks. Este proyecto pone a prueba la habilidad de trabajar con multithreading, sincronización con mutexes y temporización precisa, además de asegurar la integridad de los datos en situaciones de alta concurrencia.", github: "https://github.com/jaimmart32/sofistas/" },
            { title: "Push Swap", description: "Push Swap es un proyecto centrado en la lógica algorítmica y la optimización. El objetivo es ordenar una lista de enteros usando un conjunto limitado de operaciones sobre dos pilas: `a` y `b`. El reto es diseñar un programa que calcule y ejecute la secuencia más eficiente de movimientos posibles para ordenar la lista. Este proyecto pone a prueba las habilidades en estructuras de datos, manipulación de listas, diseño de algoritmos eficientes y control de errores.", github: "https://github.com/jaimmart32/42/tree/main/push_swap"},
            { title: "LibFT", description: "Libft es una librería personalizada en C que reimplementa un conjunto de funciones estándar de la libc. Tiene como objetivo construir una base sólida en programación en C, trabajando desde cero con funciones de manipulación de memoria, strings, listas y más.", github: "https://github.com/jaimmart32/42/tree/main/libft"}
        ],
        cpp: [
            { title: "ft_IRC", description: "ft_irc es una implementación en C++ de un servidor IRC (Internet Relay Chat). El objetivo es entender los fundamentos de las comunicaciones en red, la arquitectura cliente-servidor y los protocolos de comunicación, todo ello aplicando buenas prácticas de diseño en C++.", github: "https://github.com/jaimmart32/ft_IRC/" },
            { title: "CPP Modules", description: "CPP Modules es una serie de 10 módulos diseñados para aprender de forma progresiva y sólida los fundamentos del lenguaje C++ moderno.. A través de ejercicios prácticos, se abordan desde conceptos básicos como clases y punteros, hasta características más avanzadas como herencia múltiple, templates, excepciones o containers de la STL.", github: "https://github.com/jaimmart32/CPP_modules/" },
        ],
        python: [
            { title: "ft_Transcendence", description: "ft_transcendence consiste en el desarrollo de una plataforma web de videojuegos completamente funcional. En este caso, la aplicación fue desarrollada con Python (Django) como backend, Bootstrap  y JavaScript para el frontend, y PostgreSQL como base de datos. El objetivo del proyecto es combinar múltiples disciplinas: desarrollo web, autenticación, ciberseguridad, API REST, comunicación en tiempo real, e integración de lógica de juego.", github: "https://github.com/jaimmart32/ft_transcendence/" },
            { title: "Learning Log", description: "Learning Log es una aplicación web desarrollada con Python y Django, que permite a los usuarios registrar y gestionar temas sobre los que están aprendiendo, junto con entradas relacionadas.", github: "https://github.com/jaimmart32/learning_DJapp/" }
        ],
        javascript: [
            { title: "ft_Transcendence", description: "ft_transcendence consiste en el desarrollo de una plataforma web de videojuegos completamente funcional. En este caso, la aplicación fue desarrollada con Python (Django) como backend, Bootstrap  y JavaScript para el frontend, y PostgreSQL como base de datos. El objetivo del proyecto es combinar múltiples disciplinas: desarrollo web, autenticación, ciberseguridad, API REST, comunicación en tiempo real, e integración de lógica de juego.", github: "https://github.com/jaimmart32/ft_transcendence/" },
            { title: "Proyecto JS2", description: "Otro proyecto en JavaScript.", github: "#" }
        ],
        css: [
            { title: "ft_Transcendence", description: "ft_transcendence consiste en el desarrollo de una plataforma web de videojuegos completamente funcional. En este caso, la aplicación fue desarrollada con Python (Django) como backend, Bootstrap  y JavaScript para el frontend, y PostgreSQL como base de datos. El objetivo del proyecto es combinar múltiples disciplinas: desarrollo web, autenticación, ciberseguridad, API REST, comunicación en tiempo real, e integración de lógica de juego.", github: "https://github.com/jaimmart32/ft_transcendence/" },
            { title: "Proyecto CSS2", description: "Otro proyecto en CSS.", github: "#" }
        ],
        html: [
            { title: "ft_Transcendence", description: "ft_transcendence consiste en el desarrollo de una plataforma web de videojuegos completamente funcional. En este caso, la aplicación fue desarrollada con Python (Django) como backend, Bootstrap  y JavaScript para el frontend, y PostgreSQL como base de datos. El objetivo del proyecto es combinar múltiples disciplinas: desarrollo web, autenticación, ciberseguridad, API REST, comunicación en tiempo real, e integración de lógica de juego.", github: "https://github.com/jaimmart32/ft_transcendence/" },
            { title: "Proyecto HTML2", description: "Otro proyecto en HTML.", github: "#" }
        ]
    };

    // Función para actualizar los proyectos según el lenguaje seleccionado
    function updateProjects(skill) {
        projectsContainer.innerHTML = ""; // Limpiar contenido anterior

        if (projectsData[skill] && projectsData[skill].length > 0) {
            projectsData[skill].forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");
                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.github}" target="_blank">Ver en GitHub</a>
                `;
                projectsContainer.appendChild(projectCard);
            });
        } else {
            projectsContainer.innerHTML = "<p>No hay proyectos para esta tecnología.</p>";
        }
    }

    // Asignar evento de clic a cada ícono de lenguaje
    skillIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const skill = icon.getAttribute("data-skill");
            updateProjects(skill);
        });
    });
});
