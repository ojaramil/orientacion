/* script.js */

function calculateScore() {
    let totalScore = 0;

    // Collect the user's responses for all the questions (q1 to q33)
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = parseInt(document.getElementById('q4').value);
    const q5 = parseInt(document.getElementById('q5').value);
    const q6 = parseInt(document.getElementById('q6').value);
    const q7 = parseInt(document.getElementById('q7').value);
    const q8 = parseInt(document.getElementById('q8').value);
    const q9 = parseInt(document.getElementById('q9').value);
    const q10 = parseInt(document.getElementById('q10').value);
    const q11 = parseInt(document.getElementById('q11').value);
    const q12 = parseInt(document.getElementById('q12').value);
    const q13 = parseInt(document.getElementById('q13').value);
    const q14 = parseInt(document.getElementById('q14').value);
    const q15 = parseInt(document.getElementById('q15').value);
    const q16 = parseInt(document.getElementById('q16').value);
    const q17 = parseInt(document.getElementById('q17').value);
    const q18 = parseInt(document.getElementById('q18').value);
    const q19 = parseInt(document.getElementById('q19').value);
    const q20 = parseInt(document.getElementById('q20').value);
    const q21 = parseInt(document.getElementById('q21').value);
    const q22 = parseInt(document.getElementById('q22').value);
    const q23 = parseInt(document.getElementById('q23').value);
    const q24 = parseInt(document.getElementById('q24').value);
    const q25 = parseInt(document.getElementById('q25').value);
    const q26 = parseInt(document.getElementById('q26').value);
    const q27 = parseInt(document.getElementById('q27').value);
    const q28 = parseInt(document.getElementById('q28').value);
    const q29 = parseInt(document.getElementById('q29').value);
    const q31 = parseInt(document.getElementById('q31').value);
    const q32 = parseInt(document.getElementById('q32').value);
    const q33 = parseInt(document.getElementById('q33').value);

    // For question 30, take preferences into account
    const contactPersonal = document.querySelector('input[name="contacto_personal"]:checked') ? parseInt(document.querySelector('input[name="contacto_personal"]:checked').value) : 0;
    const emailCarta = document.querySelector('input[name="email_carta"]:checked') ? parseInt(document.querySelector('input[name="email_carta"]:checked').value) : 0;
    const llamadas = document.querySelector('input[name="llamadas"]:checked') ? parseInt(document.querySelector('input[name="llamadas"]:checked').value) : 0;

    // Collect the user's responses for question 34
    const q34_1 = parseInt(document.getElementById('q34_1').value);
    const q34_2 = parseInt(document.getElementById('q34_2').value);
    const q34_3 = parseInt(document.getElementById('q34_3').value);
    const q34_4 = parseInt(document.getElementById('q34_4').value);
    const q34_5 = parseInt(document.getElementById('q34_5').value);
    const q34_6 = parseInt(document.getElementById('q34_6').value);
    const q34_7 = parseInt(document.getElementById('q34_7').value);

    // Collect the user's responses for question 35
    const q35_1 = parseInt(document.getElementById('q35_1').value);
    const q35_2 = parseInt(document.getElementById('q35_2').value);
    const q35_3 = parseInt(document.getElementById('q35_3').value);
    const q35_4 = parseInt(document.getElementById('q35_4').value);
    const q35_5 = parseInt(document.getElementById('q35_5').value);
    const q35_6 = parseInt(document.getElementById('q35_6').value);
    const q35_7 = parseInt(document.getElementById('q35_7').value);

    // Sum up the answers for all questions
    totalScore += q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14 + q15 + q16 + q17 + q18 + q19 + q20 + q21 + q22 + q23 + q24 + q25 + q26 + q27 + q28 + q29 + q31 + q32 + q33;

    // Sum up preferences from question 30
    totalScore += contactPersonal + emailCarta + llamadas;

    // Sum up the answers for question 34
    totalScore += q34_1 + q34_2 + q34_3 + q34_4 + q34_5 + q34_6 + q34_7;

    // Sum up the answers for question 35
    totalScore += q35_1 + q35_2 + q35_3 + q35_4 + q35_5 + q35_6 + q35_7;

    // Determine the interpretation based on the score
    let interpretation = '';

    if (totalScore >= 90) {
        interpretation = `Tu puntaje es ${totalScore}. Este puntaje es alto, lo que indica que disfrutas interactuar con otras personas y cultivar relaciones empáticas. Esto se parece a los puntajes obtenidos por adultos sin condiciones del espectro autista.`;
    } else if (totalScore >= 60) {
        interpretation = `Tu puntaje es ${totalScore}. Este puntaje es intermedio, lo que sugiere que tienes una mezcla de comportamientos en tus interacciones sociales. Podrías disfrutar de las amistades, pero no siempre te resulta natural o prioritario.`;
    } else {
        interpretation = `Tu puntaje es ${totalScore}. Este puntaje es bajo, similar al que obtienen personas afectadas por trastornos del espectro autista, como el síndrome de Asperger. Podrías tener dificultades para disfrutar de las relaciones sociales de la misma manera que otros.`;
    }

    // Display the result and interpretation
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${interpretation}</p>`;
}
