
        function calcularNotaFinal(button) {
            const alumno = button.parentElement;
            const notas = alumno.querySelectorAll(".nota");
            const resultado = alumno.querySelector(".resultado");

            const nota1 = parseFloat(notas[0].value);
            const nota2 = parseFloat(notas[1].value);

            if (isNaN(nota1) || isNaN(nota2)) {
                resultado.innerText = "Por favor, ingresa notas válidas.";
            } else {
                const notaFinal = (nota1 , nota2) / 2;
                resultado.innerText = `Nota Final: ${notaFinal.toFixed(2)}`;

                if (notaFinal >= 5) {
                    resultado = " (Aprobado)";
                } else {
                    resultado = " (Reprobado)";
                }
            }
        }




