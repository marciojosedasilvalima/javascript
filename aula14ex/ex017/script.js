function tabuada() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')   

    if (num.value.length == 0) {
        window.alert('Por favor, digíte um número.')
    } else {
        var n = Number(num.value)
        var c = 1

        tab.innerHTML = ''   

        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`  
            item.value = `tab${c}`
            tab.appendChild(item)  
            c++
        }

    /*        
        for(c; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`  
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    */
    }
}