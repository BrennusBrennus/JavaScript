let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function inNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, 1) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (inNumero(num.value) && !inLista(num.value)) {
        valores.push(Number(num.value))
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}