
function validaidade() {
    //coleta a idade
    var ano = new Date ()
    anoatual = ano.getFullYear()
    var mensagem = window.document.getElementById('mostraidade')
    var anoquenasceu = window.document.getElementById('iidade')
    var idade  = anoatual - Number(anoquenasceu.value)
    var img = window.document.getElementById('iimagem') 
    //coleta o sexo
    /*const sexOptions = document.getElementsByName('sexo');
            let selectedSex = null;
            // Itera sobre os elementos para encontrar o selecionado
            for (const option of sexOptions) {
                if (option.checked) {
                    selectedSex = option.value;
                    break;
                }
    
            }*/
    selectedSex = ''
    var sexo = window.document.getElementsByName('sexo')
    if  (sexo[0].checked) {
        selectedSex = 'Homem'
    } else if (sexo[1].checked) {
        selectedSex = 'Mulher'
    }
    //imagem 
    
    if (idade <= 10 && selectedSex == 'Mulher') {
        img.src = 'img/criança-F.png'
    } else if (idade <= 10 && selectedSex == 'Homem') {
        img.src = 'img/criança-M.png'
    } else if (idade > 10 && idade < 18 && selectedSex == 'Mulher') {
        img.src = 'img/adolescente-F.png'
    } else if (idade > 10 && idade < 18 && selectedSex == 'Homem') {
        img.src = 'img/adolescente-M.png'
    } else if (idade >= 18 && idade < 60 && selectedSex == 'Mulher') {
        img.src = 'img/adulto-F.png'
    } else if (idade >= 18 && idade < 60 && selectedSex == 'Homem') {
        img.src = 'img/adulto-M.png'
    } else if (idade > 60 && selectedSex == 'Mulher') {
        img.src = 'img/idoso-F.png'
    } else if (idade > 60 && selectedSex == 'Homem') {
        img.src = 'img/idoso-M.png'
    }
        
    //verifica falta de dados
    if (Number(anoquenasceu.value) < 1900 || Number(anoquenasceu.value) > anoatual) {
        mensagem.innerHTML = 'Digite um ano válido!'
        img.src = 'img/null.png'
    }  else if (selectedSex == ''){
        mensagem. innerHTML = 'Por favor, selecione um sexo' 
        img.src = 'img/null.png'           
    }   else {
            mensagem.innerHTML = `Detectamos um(a) ${selectedSex} de ${idade} anos`}
}


