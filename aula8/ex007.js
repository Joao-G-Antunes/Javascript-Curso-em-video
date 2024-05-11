// operadores relacionais
var a = 5 > 2 // maior
var b = 7 < 4 // menor
var c = 8 >= 8 // maior ou igual
var d = 9 <= 7 // menor ou igual
var e = 5 == 5 // igual
var f = 4 != 4 // diferente
console.log(a, b, c, d, e, f)

// operadores logicos

g = 5
h = 8
console.log(true && false) // conjunção
console.log(true && true)
console.log(false || false ) // disjunção
console.log(true || false)
console.log(true || true)
console.log(g > h && h % 2 == 0)

// operador ternario

media = 5.5
var i = media > 7? 'APROVADO' : 'REPROVADO'
console.log(i)
media += 2
var i = media > 7? 'APROVADO' : 'REPROVADO'
console.log (i)