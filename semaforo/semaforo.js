const img = document.getElementById("img")
const buttons = document.getElementById("buttons")
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()


}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0


const changeColor = () => {
    const colors = ["red", "yellow", "green"]
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}


const turnOn = {
    "red": () => img.src = "./img/vermelho.png",
    "yellow": () => img.src = "./img/amarelo.png",
    "green": () => img.src = "./img/verde.png",
    "automatic": () => intervalId = setInterval(changeColor, 1000)
    //setInterval executa o codigo a cada intervalo de tempo que voce determinar dentro do parenteses nesse caso ele executa a função chace color a cada 1000mls
}
buttons.addEventListener("click", trafficLight)