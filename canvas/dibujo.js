var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");  
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width; 
var lienzo = d.getContext("2d")

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
var lineas = parseInt(texto.value);
var l=0;
var xf, yf;
var colour = "green";
var espacio = ancho/lineas;

for(l = 0; l < lineas; l+=1)
{
    xi = l * espacio;
    yf = l * espacio;
    dibujarLinea(colour,xi,0,1000, yf);
}

for(l = 0; l < lineas; l+=1)
{
    xi = l * espacio;
    yf = l * espacio;
    dibujarLinea(colour,0,yf,xi,1000);
}
}

