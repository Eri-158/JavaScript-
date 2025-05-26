function sumar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var suma = n1+n2+n3;
    document.getElementById("total").value = suma;
}

function obtener_texto1(){
    var a = document.getElementById("sumar").value;
    alert(a)
}
function obtener_texto2(){
    var a = document.getElementById("h2").textContent;
    alert(a)
}

function agregar(){ //sustituye lo que hay dentro del div
    document.getElementById("div1").innerHTML = "Hola <input type='text'>";
}
function aumentar(){ //aumenta lo que ya hay
    document.getElementById("div1").append("<br> asdf ");   
}
function eliminar(){ //eliminar todo el div
document.getElementById("div1").remove();
}
function vaciar(){ //vaciar el div
document.getElementById("div1").innerHTML = ""; //Vaciar el div
}
function aumentar_con_html(){ //Permite aumentar utilizando innerHTML
    document.getElementById("div1").innerHTML += "Hola <input type='text'>";
}


document.getElementById("cambiar_fondo").addEventListener("click", function(){
    document.getElementById("midiv").style.background = " #396f71";
});

document.getElementById("cambiar_color").addEventListener("click", function(){
    document.getElementById("midiv").style.color = "rgb(126, 251, 255)";
});

document.getElementById("borde").addEventListener("click", function(){
    document.getElementById("midiv").style.border = "10px solid black"
});

document.getElementById("negrita").addEventListener("click", function(){
    document.getElementById("midiv").style.fontWeight = "bold";
});

document.getElementById("clase").addEventListener("click", function(){
    document.getElementById("midiv").classList.add("miestilo");
});

//El botón con id "x" agregará el estilo "z" al elemento "y"
document.getElementById("quitar_clase").addEventListener("click", function(){
    document.getElementById("midiv").classList.remove("miestilo");
});



