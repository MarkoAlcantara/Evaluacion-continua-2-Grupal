function crearBoton() {
    const texto = document.getElementById('btnText').value;
  
    if (texto.trim() === "") {
      alert("Ingresa texto para el botón.");
      return;
    }
  
    setTimeout(() => {
      const nuevoBoton = document.createElement("button");
      nuevoBoton.textContent = texto;
      nuevoBoton.onclick = () => alert("Hiciste clic en: " + texto);
      document.getElementById("btnContainer").appendChild(nuevoBoton);
  
  
      document.getElementById('btnText').value = "";
    }, 300);
  }