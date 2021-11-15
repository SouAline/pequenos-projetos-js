
const calcular = document.getElementById("calcular")

//esta atribuindo o elemento html a variavel const.

function imc() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (nome.value !== "" && altura !== "" && peso !== "") {
        const valorImc = (peso / (altura * altura)).toFixed(1)

        let classificacao = ""
        if (valorImc < 18.5) {
            classificacao = " abaixo do peso."
        } else if (valorImc < 25) {
            classificacao = " com peso ideal. "
        } else if (valorImc < 30) {
            classificacao = " parcialmente acima do peso."
        } else if (valorImc < 35) {
            classificacao = " obesidade grau I."
        } else if (valorImc < 40) {
            classificacao = " obesidade grau II"
        } else {
            classificacao = " obesidade grau III, CUIDADO!!!"
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}.`
    } else {
        resultado.textContent = "Preencha todos os campos!"
    }
}

calcular.addEventListener('click', imc)
//quando clicar vai executar a função imc(que vai ser criada)