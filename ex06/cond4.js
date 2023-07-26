var idade = 68
if (idade < 16) {
    console.log('não vota')
}   else if (idade < 18 || idade >= 67) {
        console.log('voto opcional')
    } else if (idade < 67) {
        console.log('voto obrigatório')
    }
