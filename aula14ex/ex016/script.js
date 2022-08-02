function contar() {
    var ini   = document.getElementById('numini')
    var fim   = document.getElementById('numfim')
    var passo = document.getElementById('numpasso') 
    var resp  = document.querySelector('div#resp')   

   // var i = Number(ini.value)
   
    if (ini.value.length == 0) {  
        resp.innerHTML = 'Impossível contar, Início deve ser preenchido.'
    } else if  (fim.value.length == 0) { 
        resp.innerHTML = 'Impossível contar, Fim deve ser preenchido.'
    } else if (Number(ini.value) > Number(fim.value)) {
        resp.innerHTML = 'Início não pode ser maior que o fim.'
    } else {
        if (passo.value.length == 0 || passo.value == 0) { 
            window.alert('Passo inválido! Considerando PASSO 1.')
            passo.value = 1
        }
 
        resp.innerHTML = ``
        for(i = Number(ini.value); i <= Number(fim.value); i = i + Number(passo.value)) {            
            resp.innerHTML += `${i} &#x1F449 `
        }  
        resp.innerHTML += `&#x1F3C1`             
    
    } 
}