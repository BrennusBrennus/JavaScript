function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dias = data.getDate()


    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    dia.innerHTML = `Hoje é dia ${dias}`

    if (hora >= 0 && hora < 13) {
            //BOM DIA!
            img.src = 'imagens/diaremo.png'
            document.body.style.background = 'rgb(220, 220, 139)'
    } else if (hora >= 13 && hora < 18) {
            //BOA TARDE!
            img.src = 'imagens/tarderemo.png'
            document.body.style.background = 'rgb(203, 159, 76)'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noiteremo.png'
        document.body.style.background = 'rgb(33, 33, 48)'
    }
}