
function roletar() {
    const resLendario = Math.ceil(Math.random() * chancesLendario)
    if (resLendario == 1) {
        
        resultado.innerHTML += `<div class="lendario">${sortearLendario(garantidoLendario)}</div>`
        chancesLendario = 90
    } else {
        //errou lendario
        chancesLendario--
        const resEpico = Math.ceil(Math.random() * chancesEpico)
        if (resEpico == 1) {
            resultado.innerHTML += `<div class="epico">${sortearEpico(garantidoEpico)}<div>`
            chancesEpico = 10
        } else {
            resultado.innerHTML += '<div class="comum">Comum</div>'
            chancesEpico--
        }
    }
}

function sortearLendario(garantidoL) {
    if (garantidoL) {
        garantidoLendario = false

        return bannerLendario.value

    } else {
        const chanLendario = Math.ceil(Math.random() * 2)
        if (chanLendario == 1) {
            return bannerLendario.value
        } else {
            garantidoLendario = true
            const qualLendario = Math.ceil(Math.random() * listagemLendarios.length)
            return listagemLendarios[qualLendario - 1]
        }
    }
}

function sortearEpico(garantidoE) {
    if (garantidoE) {
        garantidoEpico = false

        return qualEpicoDoBanner()

    } else {
        const chanEpico = Math.ceil(Math.random() * 2)
        if (chanEpico == 1) {
            return qualEpicoDoBanner()
        } else {
            garantidoEpico = true
            const qualEpicoDaLista = Math.ceil(Math.random() * listagemEpicos.length)
            return listagemEpicos[qualEpicoDaLista - 1]
        }
    }
}

function qualEpicoDoBanner() {
    const qualEpico = Math.ceil(Math.random() * 3)
    const bannerEpicoEscolhido = `#bannerEpico${qualEpico}`
    const bannerEpico = document.querySelector(`${bannerEpicoEscolhido}`)
    console.log(bannerEpico.value, bannerEpicoEscolhido)
    return bannerEpico.value
}