function ex01(){
    var n1, n2, sub
    n1= prompt("Digite um valor:")
    n2= prompt("Digite outro valor:")
    if(n2 <= n1){
        sub= parseInt(n1)-parseInt(n2)
        alert("O resultado da subtração é: "+sub)
    }
    else{
        alert("O segundo valor deve ser menor que o primeiro")
    }
}

function ex02(){
    var n1, n2, n3, mult
    n1= prompt("Digite um valor:")
    n2= prompt("Digite outro valor:")
    n3= prompt("Digite outro valor:")
    mult= parseInt(n1)*parseInt(n2)*parseInt(n3)
    alert("O resultado da multiplicação é: "+mult)
}

function ex03(){
    var n1, qua
    n1= prompt("Digite um valor: ")
    qua= parseInt(n1)*parseInt(n1)
    alert("O resultado é "+qua)
}

function ex04(){
    var n1, after, before
    n1= prompt("Digite um valor: ")
    after= parseInt(n1)+1
    before= parseInt(n1)-1
    alert("O antecessor é "+before+" e o sucessor é "+after)
}