const frm = document.querySelector("form")
const resp = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const pessoas = Number(frm.inNumero.value)
    const peixe = Number(frm.inPeixe.value)
    let resultado

    if(peixe > pessoas) {
    resultado = (pessoas * 20) + ((peixe + pessoas) * 12)
    } else {
    resultado = pessoas * 20
    }

  resp.innerText = `N° de pessoas: ${pessoas}\n
                    N° de peixes: ${peixe}\n
                    Pagar: R$ ${resultado.toFixed(2)}`


 })