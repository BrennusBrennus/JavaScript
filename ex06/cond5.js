var agora = new Date()
var hora = agora.getHours()
if (hora < 2) {
    console.log(`agora são ${hora} hora`)
} else {
    console.log(`agora são ${hora} horas`)
}
if (hora < 13) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
