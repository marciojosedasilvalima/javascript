function contar() {
    var ini   = document.getElementById('numini')
    var fim   = document.getElementById('numfim')
    var passo = document.getElementById('numpasso') 
    var resp  = document.querySelector('div#resp')   

    
    if (ini.value.length == 0) {  
        resp.innerHTML = 'Impossível contar, Início deve ser preenchido.'
    } else if  (fim.value.length == 0) { 
        resp.innerHTML = 'Impossível contar, Fim deve ser preenchido.'
    } else if (ini.value > fim.value) {
        resp.innerHTML = 'Início não pode ser maior que o fim.'
    } else {
        if (passo.value.length == 0) { 
            window.alert('Passo inválido! Considerando PASSO 1.')        
            passo.value = 1
        } 

        resp.innerHTML = 'Teste'
        
 /*
        for(c.value; c.value <= y.value; c.value = Number(c.value) + Number(p.value)) {
            resp.innerHTML = c.value            
        }                
   */ 
    } 
}