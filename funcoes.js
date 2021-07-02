
function roletar() {
    const resLendario = Math.ceil(Math.random() * chancesLendario)
    if (resLendario == 1) {
        resultado.innerHTML += "Lendario || "
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