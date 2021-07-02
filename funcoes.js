
function roletar() {
    const resLendario = Math.ceil(Math.random() * chancesLendario)
    if (resLendario == 1) {
        
        resultado.innerHTML += `<strong>${sortearLendario(garantidoLendario)}</strong> || `
        chancesLendario = 90
    } else {
        //errou lendario
        chancesLendario--
        const resEpico = Math.ceil(Math.random() * chancesEpico)
        if (resEpico == 1) {
            resultado.innerHTML += "Epico || "
            chancesEpico = 10
        } else {
            resultado.innerHTML += "Comum || "
            chancesEpico--
        }
    }
}

function sortearLendario(garantido) {
    if (garantido) {
        garantidoLendario = false

        return bannerLendario.value

    } else {
        const cLendario = Math.ceil(Math.random() * 2)
        if (cLendario == 1) {
            return bannerLendario.value
        } else {
            garantidoLendario = true
            const qualLendario = Math.ceil(Math.random() * listagemLendarios.length)
            return listagemLendarios[qualLendario - 1]
        }
    }
}