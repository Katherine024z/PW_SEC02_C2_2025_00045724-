// Ordenar columnas en filas
function ordenarColumnas() {
  const secciones = document.getElementById("secciones");
  secciones.style.flexDirection = "column"; // Cambia de fila a columna
  secciones.style.alignItems = "justify";
}
// Cambiar título del Header
function cambiarTitulo() {
  document.getElementById("titulo").textContent = "HTML & CSS: Curso práctico avanzado";
}

// Cambiar colores de títulos y textos
function cambiarColorTexto() {
  const secciones = document.querySelectorAll(".ciudad");
  secciones.forEach(sec => {
    sec.querySelector("h2").style.color = "red";
    sec.querySelectorAll("p").forEach(p => {
      p.style.color = "darkorchid";
      p.style.fontFamily = "Verdana";
    });
  });
}

// Agregar imagen en el Footer
function agregarImagen() {
  const footer = document.getElementById("footer");
  if (!document.querySelector("#footer img")) { // evita duplicar si ya existe una imagen
    let img = document.createElement("img");
    img.src = "https://dyrinelcom.com/sitio-en-construccion.jpg"; // imagen externa
    footer.appendChild(img);
  }
}
