var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "./images/tile.png",
  cargaOK: false
}
var vaca = {
  url: "./images/vaca.png",
  cargaOK: false
  }
var cerdo = {
  url: "./images/cerdo.png",
  cargaOK: false
  }
var pollo = {
  url: "./images/pollo.png",
  cargaOK: false
  }  ;


var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK && cerdo.cargaOK && pollo.cargaOK )
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var xv = x * aleatorio(0,60);
        var yv = y * aleatorio(0,60);
        var xc = x * 35;
        var yc = y  * 35;
        var xp = x * 67;
        var yp = y * 45;
        console.log(xv,yv,xc,yc,xp,yp)

        papel.drawImage(vaca.imagen, xv, yv);
        papel.drawImage(cerdo.imagen, xc, yc);
        papel.drawImage(pollo.imagen, xp, yp);
      }
  }    
  
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}