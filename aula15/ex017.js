var num = [5, 8, 4,]
num[3] = 6 //adiciona o valor 6 no indice 3
num.push(7) //adiciona o valor 7 ao array adicionando +1 indice

console.log(`Nosso vetor é o ${num}`);



var tamanho =  num.length //tamanho do array
console.log(tamanho)

var ordenar = num.sort()// organiza em ordem crescente
console.log(ordenar)


//tradicional
for (var c = 0; c < tamanho; c++) {
    console.log(`INDICE: ${c}, VALOR: ${num[c]}`)
}

/*
maneira simplificada 
for (var c in num) {
    console.log(num[c])
}
*/


num.indexOf(7) //procurar a posicao do valor 
console.log(num.indexOf(7))

var acharnum = num.indexOf(13) // == -1 : o valor n esta presente no array
if (acharnum == -1) {
    console.log('Valor nao encontrado')
}