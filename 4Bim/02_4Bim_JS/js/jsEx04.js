var n1,n2

n1= parseInt(prompt("Digite o primeiro valor: "))
n2= parseInt(prompt("Digite o segundo valor: "))

if(n1==n2){
    alert(n1+" é igual a "+n2)
}
else{
    if(n1>n2){
        alert(n1+" é maior que "+n2)
    }
    else{
        alert(n2+" é maior que "+n1)
    }
}