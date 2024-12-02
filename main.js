document.getElementById("form-deposito").addEventListener("submit", function (event) {
    event.preventDefault();

    const numeroA = parseFloat(document.getElementById("maisAlto").value);
    const numeroB = parseFloat(document.getElementById("maisBaixo").value);

    if (numeroA > numeroB) {
        alert("Número A é maior que número B. Tudo certo!");
    } else {
        alert("Incorreto O número A deve ser maior que o número B.");
    }
});