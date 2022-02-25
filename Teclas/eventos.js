document.addEventListener("keydown", dibujarTeclado);
var c=document.getElementById("area_de_dibujo");
var papel = c.getContext("2d");
var x = 200;
var y = 200;
px=1000;
lados =4;
dibujarLinea("green", x-1, y-1, x+1, y+1,  papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth= 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("green", 0, 0, 1000, 0, papel);
dibujarLinea("green", 1000, 0, 1000,1000, papel);
dibujarLinea("green", 1000, 1000, 0,1000, papel);
dibujarLinea("green", 0, 1000, 0,0, papel);

function dibujarTeclado(evento)
{
    var colour = "green";    
    var mov = 10;
    switch(evento.keyCode)
        {
            case keyCode = 40:
                dibujarLinea(colour, x, y, x, y +  mov, papel);
                y = y +  mov;
                console.log("abajo")
            break;
            case keyCode = 38:
                dibujarLinea(colour, x, y, x, y -  mov, papel);
                y = y - mov;
                console.log("arriba")
            break;    
            case keyCode = 37:
                dibujarLinea(colour, x, y, x - mov, y, papel);
                x = x - mov;
                console.log("izq")
            break;
            case keyCode = 39:
                dibujarLinea(colour, x, y, x + mov, y, papel);
                x = x + mov;
                console.log("der")
            break;  
        }
}
