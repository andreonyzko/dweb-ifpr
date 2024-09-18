var a=[4,8,3,5,9]

for(var cont=0;cont<5;cont++){
    document.write("<p>"+a[cont]+"</p>")
}

var lista=["Gervronelson",1880,"Estrada A","Irati",80.5]
lista.push("84500-000")
lista.push("Rio Bonito")
lista.pop()
lista.shift();
lista.unshift("André");
lista.indexOf(1880);
for(var i=0;i<lista.length;i++){
    document.write("<p>"+lista[i]+"</p>")
}