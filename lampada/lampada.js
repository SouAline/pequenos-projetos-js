const turnOnOff = document.getElementById("turnOnOff")
const lamp = document.getElementById("lamp")

function isLampBroken() {
    return lamp.src.indexOf("quebrada") > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "./img/ligada.jpg"
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "./img/desligada.jpg"
    }
}

function lampBroken() {
    if (!isLampBroken()) {
        lamp.src = "./img/quebrada.jpg"
    }
}

function lampOnOff() {
    if (!isLampBroken()) {
        if (turnOnOff.textContent == "LIGAR") {
            lampOn()
            turnOnOff.textContent = "DESLIGAR"//MUDA O TEXTO DO BOTÃO PARA DESLIGADO
        } else {
            lampOff()
            turnOnOff.textContent = "LIGAR"
        }
    }
}

turnOnOff.addEventListener("click", lampOnOff)//quando clicar vai chamar o metodo que faz a lampada ligar
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroken)
