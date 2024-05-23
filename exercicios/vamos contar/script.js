//coletando variaveis

function calcular(){
    //coletando dados
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)            
        var f = Number(fim.value)        
        var p = Number(passo.value)            
        
        if (p <= 0) {
            p = 1
            alert('passo = 1')    
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += '\u{1f3c1}'
        }
}