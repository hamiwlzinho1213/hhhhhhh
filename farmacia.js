const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")





frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    resp1.innerText = `Valor da compra R$ ${valor.toFixed(2)}`

    let valParcelas
    let numParcelas = Math.floor(valor / 20)


    if(numParcelas > 6){
        valParcelas = valor / 6
        resp2.innerText = `Pode pagar em: 6 x de: R$ ${valParcelas.toFixed(2)}`

    } else if(numParcelas <=1){


    } else {
        valParcelas = valor/numParcelas
        resp2.innerText = `Pode pagar em: ${numParcelas} x de R$ ${valParcelas.toFixed(2)}`
    }
    
})

frm.addEventListener("reset", (e) => {
    resp1.innerText = " "
    resp2.innerText = " "
})