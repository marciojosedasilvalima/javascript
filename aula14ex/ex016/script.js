function contar() {
    var ini   = document.getElementById('txti')
    var fim   = document.getElementById('txtf')
    var passo = document.getElementById('txtp') 
    var resp  = document.querySelector('div#resp')       

    if (ini.value.length == 0) {  
        resp.innerHTML = 'Impossível contar, Início deve ser preenchido.'
    } else if  (fim.value.length == 0) { 
        resp.innerHTML = 'Impossível contar, Fim deve ser preenchido.'
    } else {  
        resp.innerHTML = `Contando: </br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (passo.value.length == 0 || passo.value == 0) { 
            window.alert('Passo inválido! Considerando PASSO 1.')
            p.value = 1
        }

        if (i < f) { // Contagem crescente
            for(var c = i; c <= f ; c += p) {            
                resp.innerHTML += `${c} \u{1F449} `
            }    
        } else { // Contagem regressiva
            for(var c = i; c >= f ; c -= p) {            
                resp.innerHTML += `${c} \u{1F449} `
            }
        }

        resp.innerHTML += `\u{1F3C1}`
        // ou `&#x1F3C1`               
       
    } 
}