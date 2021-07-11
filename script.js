const destino = document.getElementById("destiny");
const divHead = document.createElement("div");
const parag = document.createElement("p");
const text = document.createTextNode("hola amigos. Que tal, como estan?");
destino.appendChild(divHead);
divHead.appendChild(parag);
parag.appendChild(text);
/*
destino.style.display = "flex";
destino.style.flex-direction = "column";
*/
const imagen =  document.createElement("figure");
const imag = document.createElement("img")
destino.appendChild(imagen);
imagen.appendChild(imag);
imag.src = "url(./img/logo.jpg)"

const explan = document.createElement("figcaption");
imagen.appendChild(explan)
explan.innerText = "imagen";

const lin = document.createElement("a");
lin.href = "https://facebook.com";
destino.appendChild(lin);
lin.innerText = "facebbok";

const lis = document.createElement("ul");
const dat1 = document.createElement("td");
const dat2 = document.createElement("td");
const dat3 = document.createElement("td");
/*const lin = document.createElement("li");
*/
 destino.appendChild(lis);
lis.appendChild(dat1).innerText = "primera"
lis.appendChild(dat2).innerText = "segunda"
lis.appendChild(dat3).innerText = "trercera"
