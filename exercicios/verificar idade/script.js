function calcular() {
    var ano = new Date ()
    anoatual = ano.getFullYear() 
    var idade = window.document.getElementById('iidade')
    idade = Number(idade.value)
    idade.innerHTML = idade
    var mensagem = window.document.getElementById('mostraidade')
    mensagem.innerHTML = `Detectamos uma pessoa de ${anoatual - idade}`
}