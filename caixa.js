const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis(R$10, 50,100)")
        frm.inSaque.focus()
        return
    }

    const notaCem = Math.floor(saque/100)
    let resto = saque % 100
    const notasCiquenta = Math.floor(resto/50)
    resto = resto % 50
    const notaDez = Math.floor(resto/10)

    if (notaCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notaCem}`
    }
    if (notasCiquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCiquenta}`
    }
    if(notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notaDez}`
    }
})

frm.addEventListener("reset", (e) => {
    resp1.innerText = " "
    resp2.innerText = " "
    resp3.innerText = " "
})