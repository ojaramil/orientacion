document.getElementById("diagnosticForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Inicializamos el puntaje total
    let totalScore = 0;

    // Sumamos los valores de cada respuesta
    for (let i = 1; i <= 30; i++) {
        let value = document.querySelector(`input[name="q${i}"]:checked`).value;
        totalScore += parseInt(value);
    }

    // Determinamos el resultado basado en el puntaje total
    let resultText = "";
    if (totalScore <= 50) {
        resultText = "Es poco probable que presentes rasgos asociados con el Asperger.";
    } else if (totalScore <= 100) {
        resultText = "Podrías presentar algunos rasgos asociados con el Asperger. Considera buscar más información.";
    } else {
        resultText = "Es recomendable que consultes a un profesional, ya que presentas varios rasgos asociados con el Asperger.";
    }

    // Mostramos el resultado
    document.getElementById("result").textContent = resultText;
});
