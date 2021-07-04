function limpar() {
    resultado.innerHTML = ''
    console.log('limpou')
}

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

function sortearLendario(garantidoLend) {
    if (garantidoLend) {
        garantidoLendario = false

        return bannerLendario.value

    } else {
        const chanLendario = Math.ceil(Math.random() * 2)
        if (chanLendario == 1) {
            return bannerLendario.value
        } else {
            garantidoLendario = true

            // Filtrando os Lendarios, removendo da lista o informado no banner
            const listagemLendariosFiltrados = listagemLendarios.filter( (lendario) => {
                if (lendario != bannerLendario.value) {
                    return lendario
                }
            })

            const qualLendario = Math.ceil(Math.random() * listagemLendariosFiltrados.length)
            return listagemLendariosFiltrados[qualLendario - 1]
        }
    }
}

function sortearEpico(garantidoEp) {

    // const listagemEpicosClone = [ ...listagemEpicos]

    if (garantidoEp) {
        garantidoEpico = false

        return qualEpicoDoBanner()

    } else {
        const chanEpico = Math.ceil(Math.random() * 2)
        if (chanEpico == 1) {
            return qualEpicoDoBanner()
        } else {
            garantidoEpico = true

            // Filtrando os Epicos, removendo da lista os que estão no banner
            const listagemEpicosFiltrados = listagemEpicos.filter( (epico) => {
                if (epico != bannerEpico1.value && epico != bannerEpico2.value && epico != bannerEpico3.value) {
                    return epico
                }
            })

            const qualEpicoDaLista = Math.ceil(Math.random() * listagemEpicosFiltrados.length)
            return listagemEpicosFiltrados[qualEpicoDaLista - 1]
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