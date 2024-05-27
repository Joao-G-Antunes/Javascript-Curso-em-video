
//funcao par ou impar
function parimp(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(parimp(1))


//funcao soma
function soma(n1 =0 , n2= 0) {
    return n1 + n2
}

console.log(soma(2,))


//funcao em variavel
var v = function(x) {
    return x*2
}

console.log(v(4))    


//funcao fatorial
function fatorial(n) {
    var fat = 1
    for(c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))


//funcao fatorial 2
function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}

console.log(fatorial2(6))