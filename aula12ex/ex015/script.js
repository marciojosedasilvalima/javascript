function verificar() {
    var data = new Date()   
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')    
        var idade = ano - Number(fano.value)
        var genero = ''
        // Cria uma tag img no modelo.html - <img>
        var img = document.createElement('img')
        // Cria um id pra a tag <img> no modelo.html - <img id='foto'>
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 &&  idade < 11) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 &&  idade < 11) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-f.png')             
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}