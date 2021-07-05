function limparResultado() {
    resultado.innerHTML = ''
    inputText.forEach(input => {
        input.value = ''
    })
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

        return qualLendarioDoBanner()

    } else {
        const chanLendario = Math.ceil(Math.random() * 2)
        if (chanLendario == 1) {
            return qualLendarioDoBanner()
        } else {
            garantidoLendario = true

            // Filtrando os Lendarios, removendo da lista o informado no banner
            const listagemLendariosFiltrados = listagemLendarios.filter( (lendario) => {
                if (lendario != qualLendarioDoBanner()) {
                    return lendario
                }
            })

            const qualLendario = Math.ceil(Math.random() * listagemLendariosFiltrados.length)
            return listagemLendariosFiltrados[qualLendario - 1]
        }
    }
}

function qualLendarioDoBanner() {
    let qualLendarioBanner = ''
    if (opcaoBanner.value == 'personagem') {
        qualLendarioBanner = 1
    } else if (opcaoBanner.value == 'arma') {
        qualLendarioBanner = Math.ceil(Math.random() * 2)
    }
    const bannerLendario = document.querySelector(`#bannerLendario${qualLendarioBanner}`)
    return bannerLendario.value
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
    console.log(opcaoBanner.value)
    let qualEpico = ''
    if (opcaoBanner.value == 'personagem') {
        qualEpico = Math.ceil(Math.random() * 3)
    } else if (opcaoBanner.value == 'arma') {
        qualEpico = Math.ceil(Math.random() * 4)
    }
    // const bannerEpicoEscolhido = `#bannerEpico${qualEpico}`
    const bannerEpico = document.querySelector(`#bannerEpico${qualEpico}`)
    
    return bannerEpico.value
}