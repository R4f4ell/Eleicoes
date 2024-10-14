function digitar(numero) {
    let tela = document.getElementById("tela");
    if (tela.value.length < 2) { // Limita a entrada a 2 dígitos
        tela.value += numero;
    }
}

function corrigir() {
    document.getElementById("tela").value = "";
}

function branco() {
    document.getElementById("tela").value = "BRANCO";
}

function confirmar() {
    let valor = document.getElementById("tela").value;
    if (valor !== "") {
        if(valor !== '10' && valor !== '20' && valor !== '30' && valor !== 'BRANCO'){
            alert("Digite o número correto de seu candidato")
            corrigir()
        } else {
        alert("Voto confirmado: " + valor);
        corrigir(); // Limpa a tela após confirmar
        }
    } else {
        alert("Por favor, insira o número de seu candidato ou escolha branco.");
    }
}
