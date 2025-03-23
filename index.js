var leftarrow = window.document.getElementById("leftarrow")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var rightarrow = window.document.getElementById("rightarrow")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    rightarrow.style = "display:none"
    leftarrow.style = "display:flex; margin-top:65px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    rightarrow.style = "display:flex; margin-top:45px"
    leftarrow.style = "display:none"
}

