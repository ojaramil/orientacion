function calcularResultado() {
    // Obtener el formulario
    const form = document.getElementById("eqTest");

    // Obtener todas las respuestas
    const respuestas = new FormData(form);

    // Inicializar el puntaje
    let puntaje = 0;

    // Calcular el puntaje sumando los valores de las respuestas de la 1 a la 60
    for (let i = 1; i <= 60; i++) {
        puntaje += parseInt(respuestas.get(`q${i}`)) || 0;
    }

    // Determinar el resultado en función del puntaje
    let resultadoTexto = "";
    let resultadoClase = "";

    if (puntaje <= 32) {
        resultadoTexto = `Tu puntaje es ${puntaje}: Bajo (la media de las personas con síndrome de Asperger o autismo de alto funcionamiento es de 20)`;
        resultadoClase = "bajo";
    } else if (puntaje >= 33 && puntaje <= 52) {
        resultadoTexto = `Tu puntaje es ${puntaje}: Medio (la media femenina es de 47 y la masculina de 42)`;
        resultadoClase = "medio";
    } else if (puntaje >= 53 && puntaje <= 63) {
        resultadoTexto = `Tu puntaje es ${puntaje}: Sobre la media`;
        resultadoClase = "alto";
    } else if (puntaje >= 64 && puntaje <= 80) {
        resultadoTexto = `Tu puntaje es ${puntaje}: Muy alto`;
        resultadoClase = "alto";
    }

    // Mostrar el resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = resultadoTexto;
    resultadoDiv.className = `resultado ${resultadoClase}`;

    // Mostrar la interpretación del resultado
    const interpretacionDiv = document.getElementById("interpretacion");
    interpretacionDiv.innerHTML = `
        <h3>¿Cómo interpretar tu resultado?</h3>
        <p>Simon Baron-Cohen sugiere las siguientes puntuaciones para interpretar los resultados obtenidos al completar el cuestionario:</p>
        <ul>
            <li><strong>0-32</strong>: Bajo (la media de las personas con síndrome de Asperger o autismo de alto funcionamiento es de 20).</li>
            <li><strong>33-52</strong>: Medio (la media femenina es de 47 y la masculina de 42).</li>
            <li><strong>53-63</strong>: Sobre la media.</li>
            <li><strong>64-80</strong>: Muy alto.</li>
        </ul>
        <p>Este test no es un diagnóstico oficial. Si tienes dudas sobre tu resultado o tu salud mental, consulta a un profesional.</p>
    `;
}
