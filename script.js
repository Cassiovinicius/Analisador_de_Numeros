let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else
        return false
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('valor invalido já encontrado na lista ou fora dos parâmetros.')
    }
    num.value = '' // criado este recurso para zera a entrada para nao ter que ficar apagando a todo momento
    num.focus()  //função para retorna o curso com foco onde onde esta o cursor
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0] 
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos] // nesta caso como esta acontecendo o loop todo retorno ele soma com valores na posição pos
            if(valores[pos] > maior)
            maior = valores[pos] // se o numero de valores[pos] for maior que maior, maior recebe valores[pos]
            if(valores[pos] < menor) 
            menor = valores[pos] // se o numero de valores [pos] for menor que menor, menor receber valores[pos] subscreve menor
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo , temos ${tot} números cadastrado.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> A soma todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p> A media dos valores digitados é ${media}</p>`
        
    }
}