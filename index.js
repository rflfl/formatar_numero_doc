function rg(n) {
    if (n.length == 10) {
        let a = n.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        return a
    } else if (n.length == 9) {
        let a = n.replace(/^(\d{2})(\d{3})(\d{3})((\d{1})|(\w{1}))/, "$1.$2.$3-$4")
        return a
    } else if (n.length == 8) {
        let a = n.replace(/^(\d{1})(\d{3})(\d{3})((\d{1})|(\w{1}))/, "$1.$2.$3-$4")
        return a
    } else {
        let a = n.replace(/^(\d{7})((\d{1})|(\w{1}))/, "$1-$2")
        return a
    }
}

function cnpjFormat(num){
    let formatado = num.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    return formatado;
}
