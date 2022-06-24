function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} hora(s).`
        img.src = 'imagens/manha.jpg'
        window.document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
        img.src = 'imagens/tarde.jpg'
        window.document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
        img.src = 'imagens/noite.jpg'
        window.document.body.style.background = '#515154'
    }
}