"use strict";

/* =========================================
   1. CONTENIDO EDUCATIVO Y CUESTIONARIOS
========================================= */

// Cada pregunta contiene: enunciado, opciones y respuesta correcta.
const pregunta = (enunciado, opciones, correcta) => ({
    enunciado, opciones, correcta
});

const temas = {
    lengua: {
        "Básico": [
            {
                id: "ideas",
                nombre: "Ideas principales y secundarias",
                explicacion: "La idea principal expresa el mensaje central de un texto. Las ideas secundarias aportan detalles, ejemplos o razones que ayudan a comprenderla.",
                procedimiento: "Lee el texto completo, identifica de qué trata y pregúntate qué información es indispensable. Después localiza los ejemplos y detalles que amplían esa idea.",
                ejemplo: "Texto: Las abejas son importantes para la naturaleza. Transportan polen entre flores y ayudan a que muchas plantas se reproduzcan.\nIdea principal: Las abejas son importantes para la naturaleza.\nIdea secundaria: Transportan polen entre flores.",
                preguntas: [
                    pregunta("¿Qué expresa la idea principal?", [
                        "El mensaje central del texto",
                        "Un detalle sin importancia",
                        "El nombre del autor"
                    ], 0),
                    pregunta("¿Para qué sirven las ideas secundarias?", [
                        "Para cambiar el tema",
                        "Para ampliar la idea principal",
                        "Para eliminar información"
                    ], 1),
                    pregunta("¿Qué debes hacer primero para comprender un texto?", [
                        "Leerlo completo",
                        "Copiar la última oración",
                        "Contar sus palabras"
                    ], 0)
                ]
            },
            {
                id: "tipos-texto",
                nombre: "Tipos de texto",
                explicacion: "Los textos pueden ser narrativos, descriptivos, expositivos, argumentativos o instructivos. Cada tipo tiene una finalidad distinta.",
                procedimiento: "Observa qué pretende hacer el texto: contar acontecimientos, describir algo, explicar información, defender una opinión o dar instrucciones.",
                ejemplo: "Una receta explica cómo preparar un alimento, por lo que es un texto instructivo. Una noticia informa sobre un acontecimiento.",
                preguntas: [
                    pregunta("¿Qué tipo de texto cuenta acontecimientos?", [
                        "Narrativo",
                        "Instructivo",
                        "Argumentativo"
                    ], 0),
                    pregunta("¿Cuál busca defender una opinión con razones?", [
                        "Descriptivo",
                        "Argumentativo",
                        "Narrativo"
                    ], 1),
                    pregunta("¿Qué tipo de texto explica cómo hacer algo?", [
                        "Poético",
                        "Narrativo",
                        "Instructivo"
                    ], 2)
                ]
            },
            {
                id: "personajes",
                nombre: "Identificación de personajes",
                explicacion: "Los personajes son quienes participan en una narración. El protagonista ocupa el papel central; los personajes secundarios acompañan o influyen en la historia.",
                procedimiento: "Identifica quién realiza las acciones, qué quiere conseguir y cómo se relaciona con los demás personajes.",
                ejemplo: "En un cuento donde Ana rescata a un perro, Ana puede ser la protagonista y el perro un personaje importante de la historia.",
                preguntas: [
                    pregunta("¿Quién suele ocupar el papel central?", [
                        "El protagonista",
                        "El narrador siempre",
                        "El lector"
                    ], 0),
                    pregunta("¿Qué debes observar para identificar personajes?", [
                        "Solo el título",
                        "Sus acciones y relaciones",
                        "El número de páginas"
                    ], 1),
                    pregunta("¿Qué función puede tener un personaje secundario?", [
                        "Apoyar o influir en la historia",
                        "Eliminar todos los acontecimientos",
                        "Ser siempre el autor"
                    ], 0)
                ]
            }
        ],
        "Intermedio": [
            {
                id: "narracion",
                nombre: "Elementos de la narración",
                explicacion: "Una narración incluye personajes, narrador, espacio, tiempo y acontecimientos. La trama organiza lo que sucede en la historia.",
                procedimiento: "Localiza quién cuenta los hechos, quién participa, dónde y cuándo ocurren y cuáles son los acontecimientos principales.",
                ejemplo: "María caminó por el bosque al amanecer y encontró una casa abandonada. Personaje: María. Espacio: bosque. Tiempo: amanecer.",
                preguntas: [
                    pregunta("¿Quién cuenta la historia?", [
                        "El narrador",
                        "El escenario",
                        "El conflicto"
                    ], 0),
                    pregunta("¿Dónde ocurren los hechos?", [
                        "En el tiempo",
                        "En el espacio",
                        "En el diálogo"
                    ], 1),
                    pregunta("¿Qué organiza los acontecimientos?", [
                        "La trama",
                        "El índice",
                        "La portada"
                    ], 0)
                ]
            },
            {
                id: "estructura-texto",
                nombre: "Estructura de un texto",
                explicacion: "Muchos textos se organizan en introducción, desarrollo y conclusión. La introducción presenta el tema; el desarrollo lo explica y la conclusión cierra las ideas.",
                procedimiento: "Busca la presentación del tema, identifica los párrafos que amplían la información y localiza el cierre o síntesis final.",
                ejemplo: "Introducción: se presenta la contaminación. Desarrollo: se explican causas y consecuencias. Conclusión: se proponen acciones para reducirla.",
                preguntas: [
                    pregunta("¿Qué parte presenta el tema?", [
                        "Conclusión",
                        "Introducción",
                        "Anexo"
                    ], 1),
                    pregunta("¿Dónde se explican las ideas con mayor detalle?", [
                        "Desarrollo",
                        "Título",
                        "Portada"
                    ], 0),
                    pregunta("¿Qué suele hacer la conclusión?", [
                        "Introducir personajes nuevos",
                        "Cerrar o sintetizar las ideas",
                        "Borrar el tema"
                    ], 1)
                ]
            },
            {
                id: "parrafo-conectores",
                nombre: "Estructura del párrafo y conectores",
                explicacion: "Un párrafo reúne oraciones relacionadas con una idea. Los conectores expresan relaciones como adición, contraste, causa, consecuencia u orden.",
                procedimiento: "Identifica la idea que une las oraciones y utiliza conectores adecuados para relacionarlas sin perder la coherencia.",
                ejemplo: "Estudió con constancia; por eso, mejoró sus resultados. El conector 'por eso' expresa consecuencia.",
                preguntas: [
                    pregunta("¿Qué une las oraciones de un párrafo?", [
                        "Una idea relacionada",
                        "Cualquier palabra al azar",
                        "Un número de página"
                    ], 0),
                    pregunta("¿Qué relación expresa 'sin embargo'?", [
                        "Adición",
                        "Contraste",
                        "Tiempo futuro"
                    ], 1),
                    pregunta("¿Qué expresa 'por lo tanto'?", [
                        "Consecuencia",
                        "Descripción física",
                        "Duda ortográfica"
                    ], 0)
                ]
            }
        ],
        "Complejo": [
            {
                id: "resumen-parafrasis",
                nombre: "Resumen y paráfrasis",
                explicacion: "Un resumen presenta brevemente las ideas esenciales. Una paráfrasis explica el contenido de una fuente con palabras propias, manteniendo su significado.",
                procedimiento: "Lee el texto, identifica sus ideas esenciales y redacta una versión clara. En una paráfrasis, reformula las ideas y reconoce la fuente cuando corresponda.",
                ejemplo: "Original: El ejercicio regular favorece la salud.\nResumen: El ejercicio beneficia la salud.\nParáfrasis: Realizar actividad física de manera constante ayuda al bienestar.",
                preguntas: [
                    pregunta("¿Cuál es la finalidad de un resumen?", [
                        "Conservar las ideas esenciales con brevedad",
                        "Copiar cada oración",
                        "Cambiar el tema"
                    ], 0),
                    pregunta("¿Qué hace una paráfrasis?", [
                        "Cambia el significado original",
                        "Expresa la idea con palabras propias",
                        "Elimina toda la información"
                    ], 1),
                    pregunta("Si utilizas ideas ajenas, ¿qué debes hacer?", [
                        "Presentarlas siempre como propias",
                        "Reconocer la fuente cuando corresponda",
                        "Ocultar el origen"
                    ], 1)
                ]
            },
            {
                id: "analisis-textos",
                nombre: "Análisis de textos complejos",
                explicacion: "Analizar un texto implica examinar su propósito, argumentos, evidencias, tono, contexto y posibles interpretaciones.",
                procedimiento: "Identifica la tesis, distingue argumentos de opiniones, revisa las evidencias y considera el contexto y la intención del autor.",
                ejemplo: "Afirmación: 'La lectura diaria puede mejorar el vocabulario'. Evidencia posible: resultados de una investigación sobre lectura y aprendizaje. Es necesario revisar la fuente antes de aceptar la conclusión.",
                preguntas: [
                    pregunta("¿Qué es una tesis en un texto argumentativo?", [
                        "La postura central que se defiende",
                        "El número de párrafos",
                        "Una palabra desconocida"
                    ], 0),
                    pregunta("¿Qué permite valorar una evidencia?", [
                        "Su relación y confiabilidad",
                        "El tamaño de la letra",
                        "El color de la portada"
                    ], 0),
                    pregunta("¿Qué conviene distinguir al analizar un texto?", [
                        "Hechos, opiniones y argumentos",
                        "Solo las comas",
                        "Únicamente el título"
                    ], 0)
                ]
            },
            {
                id: "figuras-retoricas",
                nombre: "Figuras retóricas",
                explicacion: "Las figuras retóricas son recursos expresivos que aportan fuerza, belleza o énfasis al lenguaje. Algunos ejemplos son la metáfora, el símil, la personificación y la hipérbole.",
                procedimiento: "Observa si la expresión compara, atribuye cualidades humanas, exagera o establece una relación figurada entre ideas.",
                ejemplo: "Metáfora: 'Tus ojos son estrellas'. Símil: 'Brilla como una estrella'. Personificación: 'El viento susurraba'. Hipérbole: 'Te esperé mil años'.",
                preguntas: [
                    pregunta("¿Qué figura aparece en 'El viento susurraba'?", [
                        "Personificación",
                        "Hipérbole",
                        "Enumeración"
                    ], 0),
                    pregunta("¿Qué figura utiliza 'como' para comparar?", [
                        "Símil",
                        "Ironía necesariamente",
                        "Anáfora"
                    ], 0),
                    pregunta("¿Qué figura exagera intencionalmente?", [
                        "Hipérbole",
                        "Definición",
                        "Conector"
                    ], 0)
                ]
            }
        ]
    },

    matematicas: {
        "Básico": [
            {
                id: "operaciones",
                nombre: "Operaciones básicas",
                explicacion: "La suma reúne cantidades, la resta calcula una diferencia, la multiplicación representa grupos iguales y la división reparte una cantidad en partes iguales.",
                procedimiento: "Identifica la operación adecuada. En cálculos combinados, resuelve primero paréntesis, luego multiplicaciones y divisiones y finalmente sumas y restas.",
                ejemplo: "8 + 4 = 12\n10 - 3 = 7\n5 × 3 = 15\n12 ÷ 4 = 3",
                preguntas: [
                    pregunta("¿Cuánto es 27 + 15?", [
                        "32", "42", "52"
                    ], 1),
                    pregunta("¿Cuánto es 8 × 7?", [
                        "54", "56", "64"
                    ], 1),
                    pregunta("¿Cuánto es 36 ÷ 6?", [
                        "5", "6", "7"
                    ], 1)
                ]
            },
            {
                id: "fracciones",
                nombre: "Fracciones",
                explicacion: "Una fracción representa partes de un todo. El numerador indica cuántas partes se consideran y el denominador en cuántas partes iguales se divide el todo.",
                procedimiento: "Para sumar fracciones con el mismo denominador, suma los numeradores. Si los denominadores son diferentes, busca un denominador común. Simplifica cuando sea posible.",
                ejemplo: "1/4 + 2/4 = 3/4.\nPara 1/2 + 1/3, utiliza denominador común 6: 3/6 + 2/6 = 5/6.",
                preguntas: [
                    pregunta("¿Cuánto es 2/7 + 3/7?", [
                        "5/7", "5/14", "6/7"
                    ], 0),
                    pregunta("¿Cuánto es 1/2 de 10?", [
                        "2", "5", "10"
                    ], 1),
                    pregunta("¿Cuál es la forma simplificada de 4/8?", [
                        "2/4", "1/2", "4/4"
                    ], 1)
                ]
            },
            {
                id: "geometria",
                nombre: "Figuras geométricas",
                explicacion: "Las figuras geométricas tienen propiedades como lados, vértices, ángulos y medidas. El perímetro mide el contorno y el área mide la superficie.",
                procedimiento: "Identifica la figura y sus medidas. Para un rectángulo, área = base × altura y perímetro = 2 × (base + altura). Para un cuadrado, área = lado².",
                ejemplo: "Rectángulo de base 5 cm y altura 3 cm:\nÁrea = 5 × 3 = 15 cm².\nPerímetro = 2 × (5 + 3) = 16 cm.",
                preguntas: [
                    pregunta("¿Cómo se calcula el área de un rectángulo?", [
                        "Base × altura",
                        "Base + altura",
                        "2 × base"
                    ], 0),
                    pregunta("¿Cuántos lados tiene un hexágono?", [
                        "5", "6", "8"
                    ], 1),
                    pregunta("¿Qué mide el perímetro?", [
                        "La superficie interior",
                        "El contorno de una figura",
                        "Su volumen siempre"
                    ], 1)
                ]
            },
            {
                id: "decimal",
                nombre: "Multiplicación con punto decimal",
                explicacion: "La multiplicación decimal permite multiplicar números que contienen una parte entera y otra decimal.",
                procedimiento: "Multiplica como si no hubiera punto decimal. Después cuenta las cifras decimales de ambos factores en total y coloca el punto en el producto para conservar esa cantidad de cifras.",
                ejemplo: "2.5 × 1.2: multiplica 25 × 12 = 300. Hay dos cifras decimales en total, por lo que el resultado es 3.00 = 3.",
                preguntas: [
                    pregunta("¿Cuánto es 2.5 × 2?", [
                        "4.5", "5", "5.5"
                    ], 1),
                    pregunta("¿Cuánto es 1.2 × 3?", [
                        "3.6", "36", "4.2"
                    ], 0),
                    pregunta("¿Cuánto es 0.5 × 0.4?", [
                        "2", "0.2", "0.02"
                    ], 2)
                ]
            }
        ],
        "Intermedio": [
            {
                id: "sistemas",
                nombre: "Sistema de ecuaciones",
                explicacion: "Un sistema de ecuaciones contiene dos o más ecuaciones que deben cumplirse simultáneamente. La solución son los valores que satisfacen todas ellas.",
                procedimiento: "Puedes utilizar sustitución, igualación o eliminación. Despeja una variable o combina las ecuaciones; después verifica los valores en las ecuaciones originales.",
                ejemplo: "x + y = 7; x - y = 1. Al sumar ambas ecuaciones: 2x = 8, así que x = 4. Entonces y = 3.",
                preguntas: [
                    pregunta("Si x + y = 7 y x - y = 1, ¿cuánto vale x?", [
                        "3", "4", "5"
                    ], 1),
                    pregunta("¿Qué significa resolver un sistema?", [
                        "Encontrar valores que satisfacen las ecuaciones",
                        "Borrar una ecuación",
                        "Cambiar todos los signos"
                    ], 0),
                    pregunta("Si x + y = 10 y x = 6, ¿cuánto vale y?", [
                        "4", "6", "16"
                    ], 0)
                ]
            },
            {
                id: "funciones",
                nombre: "Funciones y gráficas",
                explicacion: "Una función relaciona cada valor de entrada con exactamente un valor de salida. Una gráfica representa visualmente esa relación en un plano de coordenadas.",
                procedimiento: "Sustituye el valor de x en la función, calcula y y representa los pares ordenados (x, y) en el plano cartesiano.",
                ejemplo: "Si y = 2x + 1 y x = 3, entonces y = 2(3) + 1 = 7. El punto correspondiente es (3, 7).",
                preguntas: [
                    pregunta("Si y = 2x + 1, ¿cuánto vale y cuando x = 3?", [
                        "6", "7", "8"
                    ], 1),
                    pregunta("¿Cómo se escribe un punto del plano?", [
                        "(x, y)", "(x + y)", "x/y siempre"
                    ], 0),
                    pregunta("¿Qué representa una gráfica?", [
                        "Una relación entre valores",
                        "Solo una operación sin datos",
                        "Una lista de palabras"
                    ], 0)
                ]
            },
            {
                id: "algebra",
                nombre: "Álgebra básica",
                explicacion: "El álgebra utiliza letras y símbolos para representar números desconocidos o variables. Las expresiones algebraicas combinan números, variables y operaciones.",
                procedimiento: "Reduce términos semejantes, aplica la propiedad distributiva cuando sea necesario y conserva la igualdad al realizar la misma operación en ambos lados de una ecuación.",
                ejemplo: "3x + 2x = 5x.\nSi x + 4 = 9, resta 4 en ambos lados: x = 5.",
                preguntas: [
                    pregunta("¿Cuánto es 3x + 2x?", [
                        "5x", "5x²", "6x"
                    ], 0),
                    pregunta("Resuelve: x + 6 = 10.", [
                        "x = 4", "x = 16", "x = 6"
                    ], 0),
                    pregunta("¿Cuál es el resultado de 2(x + 3)?", [
                        "2x + 3", "2x + 6", "x + 6"
                    ], 1)
                ]
            }
        ],
        "Complejo": [
            {
                id: "cuadraticas",
                nombre: "Ecuaciones cuadráticas",
                explicacion: "Una ecuación cuadrática tiene la forma ax² + bx + c = 0, donde a es distinto de cero. Puede resolverse por factorización, completando el cuadrado o mediante la fórmula general.",
                procedimiento: "Identifica a, b y c. Elige un método apropiado y calcula las raíces. En la fórmula general, el discriminante b² - 4ac ayuda a determinar el tipo de soluciones reales.",
                ejemplo: "x² - 5x + 6 = 0.\nFactoriza: (x - 2)(x - 3) = 0.\nSoluciones: x = 2 y x = 3.",
                preguntas: [
                    pregunta("¿Cuál es la forma general de una cuadrática?", [
                        "ax² + bx + c = 0",
                        "ax + b = 0",
                        "x + y = z" 
                    ], 0),
                    pregunta("¿Cuáles son las soluciones de x² - 5x + 6 = 0?", [
                        "2 y 3", "-2 y -3", "1 y 6"
                    ], 0),
                    pregunta("En ax² + bx + c = 0, ¿qué condición debe cumplir a?", [
                        "Debe ser cero",
                        "Debe ser distinto de cero",
                        "Debe ser siempre uno"
                    ], 1)
                ]
            },
            {
                id: "diferencial",
                nombre: "Cálculo diferencial",
                explicacion: "El cálculo diferencial estudia las tasas de cambio y las derivadas. La derivada indica cómo cambia una función respecto de su variable.",
                procedimiento: "Utiliza las reglas de derivación. Por ejemplo, la regla de la potencia indica que la derivada de xⁿ es n·xⁿ⁻¹. Simplifica el resultado.",
                ejemplo: "Si f(x) = x³, entonces f'(x) = 3x². Si f(x) = 4x² + 2x, entonces f'(x) = 8x + 2.",
                preguntas: [
                    pregunta("¿Cuál es la derivada de x²?", [
                        "x", "2x", "x³"
                    ], 1),
                    pregunta("¿Cuál es la derivada de x³?", [
                        "3x²", "x²", "3x"
                    ], 0),
                    pregunta("¿Cuál es la derivada de 5x?", [
                        "5", "5x²", "x"
                    ], 0)
                ]
            },
            {
                id: "integral",
                nombre: "Cálculo integral",
                explicacion: "El cálculo integral estudia la acumulación de cantidades. Las integrales definidas permiten calcular áreas con signo bajo una curva, mientras que las indefinidas representan familias de antiderivadas.",
                procedimiento: "Para integrar potencias, utiliza la regla de la potencia: la integral de xⁿ es xⁿ⁺¹/(n+1) + C, siempre que n sea distinto de -1. En una integral definida, evalúa la antiderivada en el límite superior y resta su valor en el inferior.",
                ejemplo: "La integral indefinida de 2x es x² + C, porque la derivada de x² es 2x.",
                preguntas: [
                    pregunta("¿Cuál es una antiderivada de 2x?", [
                        "x² + C", "2 + C", "2x² + C"
                    ], 0),
                    pregunta("¿Qué representa C en una integral indefinida?", [
                        "Una constante de integración",
                        "El límite superior siempre",
                        "Una variable obligatoriamente"
                    ], 0),
                    pregunta("¿Cómo se evalúa una integral definida usando una antiderivada F?", [
                        "F(límite superior) - F(límite inferior)",
                        "Se suman los límites",
                        "Se multiplica por cero"
                    ], 0)
                ]
            }
        ]
    }
};


/* =========================================
   2. REFERENCIAS A LOS ELEMENTOS HTML
========================================= */

const $ = (selector) => document.querySelector(selector);

const seccionRegistro = $("#seccionRegistro");
const contenidoEducativo = $("#contenidoEducativo");
const formRegistro = $("#formRegistro");
const formLogin = $("#formLogin");
const mensajeRegistro = $("#mensajeRegistro");
const estadoSesion = $("#estadoSesion");

let materiaActual = null;
let nivelActual = "Básico";
let temaActual = null;
let respuestasBloqueadas = false;


/* =========================================
   3. PETICIONES AL SERVIDOR
========================================= */

async function pedir(url, opciones = {}) {
    const respuesta = await fetch(url, {
        ...opciones,
        headers: {
            "Content-Type": "application/json",
            ...(opciones.headers || {})
        }
    });

    const datos = await respuesta.json().catch(() => ({}));

    if (!respuesta.ok) {
        throw new Error(datos.mensaje || "Ocurrió un error.");
    }

    return datos;
}

function mostrarMensaje(texto, esError = false) {
    mensajeRegistro.textContent = texto;
    mensajeRegistro.style.color = esError ? "#b91c1c" : "#166534";
}

function mostrarAplicacion(nombre) {
    seccionRegistro.hidden = true;
    contenidoEducativo.hidden = false;
    $("#nombreEstudiante").textContent = nombre;
    estadoSesion.textContent = "Sesión iniciada";
    cargarAvance();
}


/* =========================================
   4. REGISTRO E INICIO DE SESIÓN
========================================= */

formRegistro.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const datos = {
        nombre: $("#nombre").value.trim(),
        edad: $("#edad").value,
        ocupacion: $("#ocupacion").value,
        contrasena: $("#contrasena").value
    };

    try {
        const resultado = await pedir("/api/registro", {
            method: "POST",
            body: JSON.stringify(datos)
        });

        formRegistro.reset();
        mostrarAplicacion(resultado.nombre);
    } catch (error) {
        mostrarMensaje(error.message, true);
    }
});

formLogin.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    try {
        const resultado = await pedir("/api/login", {
            method: "POST",
            body: JSON.stringify({
                nombre: $("#nombreLogin").value.trim(),
                contrasena: $("#contrasenaLogin").value
            })
        });

        formLogin.reset();
        mostrarAplicacion(resultado.nombre);
    } catch (error) {
        mostrarMensaje(error.message, true);
    }
});


/* =========================================
   5. RECUPERAR SESIÓN EXISTENTE
========================================= */

async function recuperarSesion() {
    try {
        const datos = await pedir("/api/sesion");
        mostrarAplicacion(datos.nombre);
    } catch {
        seccionRegistro.hidden = false;
        contenidoEducativo.hidden = true;
    }
}


/* =========================================
   6. SELECCIÓN DE MATERIA
========================================= */

document.querySelectorAll("[data-materia]").forEach((boton) => {
    boton.addEventListener("click", () => {
        materiaActual = boton.dataset.materia;

        $("#tituloMateria").textContent =
            materiaActual === "lengua"
                ? "Lengua y Comunicación"
                : "Matemáticas";

        $("#seccionTemas").scrollIntoView({ behavior: "smooth" });
        mostrarTemas();
    });
});


/* =========================================
   7. SELECCIÓN DE NIVEL
========================================= */

document.querySelectorAll("[data-nivel]").forEach((boton) => {
    boton.addEventListener("click", () => {
        nivelActual = boton.dataset.nivel;

        document.querySelectorAll("[data-nivel]").forEach((elemento) => {
            elemento.classList.toggle("activo", elemento === boton);
        });

        mostrarTemas();
    });
});


/* =========================================
   8. MOSTRAR LOS TEMAS
========================================= */

function mostrarTemas() {
    const lista = $("#listaTemas");
    lista.replaceChildren();

    if (!materiaActual) {
        lista.textContent = "Selecciona una materia para continuar.";
        return;
    }

    const disponibles = temas[materiaActual][nivelActual];

    disponibles.forEach((tema, indice) => {
        const tarjeta = document.createElement("button");
        tarjeta.type = "button";
        tarjeta.className = "tema-card";

        const titulo = document.createElement("strong");
        titulo.textContent = `${indice + 1}. ${tema.nombre}`;

        const detalle = document.createElement("span");
        detalle.textContent = "Leer explicación y realizar prueba →";

        tarjeta.append(titulo, detalle);
        tarjeta.addEventListener("click", () => abrirTema(tema));

        lista.appendChild(tarjeta);
    });
}


/* =========================================
   9. ABRIR EXPLICACIÓN DEL TEMA
========================================= */

function abrirTema(tema) {
    temaActual = tema;
    respuestasBloqueadas = false;

    $("#seccionLeccion").hidden = false;
    $("#nivelTema").textContent = nivelActual;
    $("#tituloTema").textContent = tema.nombre;
    $("#explicacionTema").textContent = tema.explicacion;
    $("#procedimientoTema").textContent = tema.procedimiento;
    $("#ejemploTema").textContent = tema.ejemplo;

    $("#resultadoPrueba").hidden = true;
    $("#formPrueba").hidden = false;

    dibujarPreguntas();

    $("#seccionLeccion").scrollIntoView({ behavior: "smooth" });
}


/* =========================================
   10. DIBUJAR LAS PREGUNTAS
========================================= */

function dibujarPreguntas() {
    const contenedor = $("#preguntasPrueba");
    contenedor.replaceChildren();

    temaActual.preguntas.forEach((item, indice) => {
        const grupo = document.createElement("fieldset");
        grupo.className = "pregunta";

        const leyenda = document.createElement("legend");
        leyenda.textContent = `${indice + 1}. ${item.enunciado}`;
        grupo.appendChild(leyenda);

        item.opciones.forEach((opcion, numero) => {
            const etiqueta = document.createElement("label");
            etiqueta.className = "opcion";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `pregunta-${indice}`;
            radio.value = String(numero);
            radio.required = true;

            const texto = document.createElement("span");
            texto.textContent = opcion;

            etiqueta.append(radio, texto);
            grupo.appendChild(etiqueta);
        });

        contenedor.appendChild(grupo);
    });
}


/* =========================================
   11. CALIFICAR LA PRUEBA
========================================= */

$("#formPrueba").addEventListener("submit", async (evento) => {
    evento.preventDefault();

    if (!temaActual || respuestasBloqueadas) return;

    const preguntas = temaActual.preguntas;
    let aciertos = 0;

    preguntas.forEach((item, indice) => {
        const seleccionada = document.querySelector(
            `input[name="pregunta-${indice}"]:checked`
        );

        if (
            seleccionada &&
            Number(seleccionada.value) === item.correcta
        ) {
            aciertos++;
        }
    });

    respuestasBloqueadas = true;

    $("#formPrueba").hidden = true;
    $("#resultadoPrueba").hidden = false;

    const porcentaje = Math.round(
        (aciertos / preguntas.length) * 100
    );

    $("#puntajeFinal").className = "puntaje-grande";
    $("#puntajeFinal").textContent =
        `${aciertos} de ${preguntas.length} puntos · ${porcentaje}%`;

    if (porcentaje === 100) {
        $("#retroalimentacion").textContent =
            "¡Excelente! Contestaste todas correctamente.";
    } else if (porcentaje >= 67) {
        $("#retroalimentacion").textContent =
            "¡Buen trabajo! Repasa las respuestas que te faltaron.";
    } else {
        $("#retroalimentacion").textContent =
            "Sigue practicando. Vuelve a leer la explicación e inténtalo de nuevo.";
    }

    try {
        await pedir("/api/resultados", {
            method: "POST",
            body: JSON.stringify({
                materia: materiaActual === "lengua"
                    ? "Lengua y Comunicación"
                    : "Matemáticas",
                tema: temaActual.nombre,
                nivel: nivelActual,
                puntaje: aciertos,
                total: preguntas.length
            })
        });

        await cargarAvance();
    } catch (error) {
        $("#retroalimentacion").textContent +=
            ` Aviso: no se pudo guardar el resultado. ${error.message}`;
    }

    $("#resultadoPrueba").scrollIntoView({ behavior: "smooth" });
});


/* =========================================
   12. REPETIR LA PRUEBA
========================================= */

$("#repetirPrueba").addEventListener("click", () => {
    if (temaActual) abrirTema(temaActual);
});


/* =========================================
   13. VOLVER A LOS TEMAS
========================================= */

$("#volverTemas").addEventListener("click", () => {
    $("#seccionLeccion").hidden = true;
    $("#seccionTemas").scrollIntoView({ behavior: "smooth" });
});


/* =========================================
   14. CONSULTAR Y MOSTRAR EL AVANCE
========================================= */

async function cargarAvance() {
    try {
        const datos = await pedir("/api/avance");
        const resultados = datos.resultados;

        $("#pruebasCompletadas").textContent = resultados.length;

        const puntos = resultados.reduce(
            (suma, resultado) => suma + resultado.puntaje, 0
        );

        const posibles = resultados.reduce(
            (suma, resultado) => suma + resultado.total, 0
        );

        const promedio = posibles
            ? Math.round((puntos / posibles) * 100)
            : 0;

        $("#promedioAvance").textContent = `${promedio}%`;

        const historial = $("#historialAvance");
        historial.replaceChildren();

        if (resultados.length === 0) {
            historial.textContent =
                "Todavía no tienes pruebas registradas. ¡Comienza con un tema!";
            return;
        }

        resultados.forEach((resultado) => {
            const fila = document.createElement("div");
            fila.className = "registro-historial";

            const titulo = document.createElement("strong");
            titulo.textContent = resultado.tema;

            const detalle = document.createElement("span");
            const fecha = new Date(
                resultado.fecha.replace(" ", "T") + "Z"
            );

            const fechaTexto = Number.isNaN(fecha.getTime())
                ? resultado.fecha
                : fecha.toLocaleString("es-MX");

            detalle.textContent =
                `${resultado.materia} · ${resultado.nivel} · ` +
                `${resultado.puntaje}/${resultado.total} puntos · ${fechaTexto}`;

            fila.append(titulo, detalle);
            historial.appendChild(fila);
        });
    } catch (error) {
        $("#historialAvance").textContent =
            `No se pudo cargar el avance: ${error.message}`;
    }
}

$("#actualizarAvance").addEventListener("click", cargarAvance);


/* =========================================
   15. CERRAR SESIÓN
========================================= */

$("#cerrarSesion").addEventListener("click", async () => {
    try {
        await pedir("/api/logout", { method: "POST" });

        contenidoEducativo.hidden = true;
        seccionRegistro.hidden = false;
        estadoSesion.textContent = "Registro de estudiante";
        materiaActual = null;
        temaActual = null;

        mostrarMensaje("Sesión cerrada correctamente.");
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        mostrarMensaje(error.message, true);
    }
});


/* =========================================
   16. INICIAR LA PÁGINA
========================================= */

mostrarTemas();
recuperarSesion();