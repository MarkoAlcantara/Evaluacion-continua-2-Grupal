let ancho = 4;
let alto = 9;

let resultado = "";
for (let i = 0; i < ancho; i++) {         
  for (let j = 0; j < alto; j++) {      
    if (i === 0 || i === ancho - 1 || j === 0 || j === alto - 1) {
      resultado += "*";
    } else {
      resultado += " ";
    }
  }
  resultado += "\n"; 
}

console.log(resultado);
