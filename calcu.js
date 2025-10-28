 function obterNumeros() {
            var ap1 = document.getElementById("ap1").value;
            var ap2 = document.getElementById("ap2").value;
            
            var num1 = parseFloat(ap1);
            var num2 = parseFloat(ap2);

            var resultDisplay = document.querySelector(".resul");

            if (isNaN(num1) || isNaN(num2)) {
                resultDisplay.textContent = "Erro: Por favor, insira números válidos nos dois campos.";
                // Limpa os campos após a operação
                document.getElementById("ap1").value = '';
                document.getElementById("ap2").value = '';
                return null; // Retorna null para indicar erro
            }
            
            // Limpa os campos após a operação
            document.getElementById("ap1").value = '';
            document.getElementById("ap2").value = '';

            return { num1: num1, num2: num2, resultDisplay: resultDisplay };
        }

        function soma() {
            var data = obterNumeros();
            if (data === null) return; // Sai se houver erro nos números

            var resultado = data.num1 + data.num2;
            data.resultDisplay.textContent = "Resultado: " + resultado;
        }

        function multiplicacao() {
            var data = obterNumeros();
            if (data === null) return;

            var resultado = data.num1 * data.num2;
            data.resultDisplay.textContent = "Resultado: " + resultado;
        }

        function divisao() {
            var data = obterNumeros();
            if (data === null) return;

            if (data.num2 === 0) {
                data.resultDisplay.textContent = "Erro: Divisão por zero não é permitida!";
                return;
            }
            var resultado = data.num1 / data.num2;
            data.resultDisplay.textContent = "Resultado: " + resultado;
        }
