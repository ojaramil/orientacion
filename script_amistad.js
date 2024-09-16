function calculateScore() {
    let totalScore = 0;

    // Obtener todas las respuestas de los select
    const selects = document.querySelectorAll('select[id^="q"]');
    selects.forEach(select => {
        totalScore += parseInt(select.value) || 0;
    });

    // Pregunta 30: Preferencias
    const preferences = ['contacto_personal', 'email_carta', 'llamadas'];
    preferences.forEach(pref => {
        const selected = document.querySelector(`input[name="${pref}"]:checked`);
        totalScore += selected ? parseInt(selected.value) : 0;
    });

    // Interpretación del puntaje
    let interpretation = '';

    if (totalScore >= 90) {
        interpretation = `Tu puntaje es ${totalScore}. Este puntaje es alto, lo que indica que disfrutas interactuar con otras personas y cultivar relaciones empáticas. Esto se parece a los puntajes obtenidos por adultos sin condiciones del espectro autista.`;
    } else if (totalScore >= 60) {
        interpretation = `Tu puntaje es ${totalScore}. Este puntaje es intermedio, lo que sugiere que tienes una mezcla de comportamientos en tus interacciones sociales. Podrías disfrutar de las amistades, pero no siempre te resulta natural o prioritario.`;
    } else {
        interpretation = `Tu puntaje es ${totalScore}. Este puntaje es bajo, similar al que obtienen personas afectadas por trastornos del espectro autista, como el síndrome de Asperger. Podrías tener dificultades para disfrutar de las relaciones sociales de la misma manera que otros.`;
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `<p>${interpretation}</p>`;
}

    // Display the result and interpretation
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${interpretation}</p>`;
}
