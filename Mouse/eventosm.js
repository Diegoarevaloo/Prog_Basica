document.addEventListener("mousedown", dibujarMouse);
var c=document.getElementById("area_de_dibujo");
var papel = c.getContext("2d");
var x = 200;
var y = 200;

dibujarLinea("green", x-1, y-1, x+1, y+1, papel);

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

function dibujarMouse(evento)
{
    var colour = "green";  
    console.log(evento)
    alert("Este es el evento:" + MouseEvent.type)  
}    

