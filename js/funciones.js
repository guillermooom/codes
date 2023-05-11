if(document.addEventListener){
	window.addEventListener("load",comienzo);
}else if(document.attachEvent){
	window.attachEvent("onload",comienzo);
}
var fondos = ["beldum.png", "metang.png" ,"metagross.png","mega.png"];
var posicion=0;
var botonSel=["btns1", "btns2", "btns3", "btns4"];
var reloj;


function comienzo(){
    let btnIzq = document.getElementById("izq");
    let btnDer = document.getElementById("der");
    reloj = setInterval(cambiar_imagen,5000);

    if(document.addEventListener){
        btnIzq.addEventListener("click",fondo_izq);
        btnDer.addEventListener("click",fondo_der);
        for (let i=0; i < botonSel.length;i++){
            let cosa = document.getElementById(botonSel[i]);
             cosa.addEventListener("click",function (){
                cambio_fondo(i)});
        }
       
    }else if (document.attachEvent){
        btnIzq.attachEvent("onclick",fondo_izq);
        btnDer.attachEvent("onclick",fondo_der);
        cosa.attachEvent("onclick",cambio_fondo);
    }
}

function cambiar_imagen(){
    posicion=(posicion+1)%fondos.length;
    document.getElementById(botonSel[posicion]).click();
}

function cambio_fondo(pos){
    clearInterval(reloj);
    let carru = document.getElementById("carrusel");
    carru.style.backgroundImage = "url(./img/" + fondos[pos] + ")";
    posicion =pos;
    reloj = setInterval(cambiar_imagen,5000);
}


function fondo_der(){
    console.log(posicion);
    posicion=(posicion +1) % fondos.length;
    document.getElementById(botonSel[posicion]).click();
}

function fondo_izq(){
    console.log(posicion);
    posicion=posicion==0? fondos.length-1 : posicion-1;
    document.getElementById(botonSel[posicion]).click();
}