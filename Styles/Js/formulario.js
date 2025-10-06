document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("miFormulario");
  const resultado = document.getElementById("resultado");
  const info = document.getElementById("info");
  const cerrarBtn = document.getElementById("cerrar");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = parseInt(document.getElementById("edad").value.trim());

    // Validaciones
    if (nombre === "" || apellidos === "") {
      alert("El nombre y los apellidos no pueden estar vacíos.");
      return;
    }

    if (isNaN(edad) || edad <= 0) {
      alert("La edad debe ser un número mayor a 0.");
      return;
    }

    // Mostrar resultados
    info.innerHTML = `
      <strong>Nombre:</strong> ${nombre}<br>
      <strong>Apellidos:</strong> ${apellidos}<br>
      <strong>Edad:</strong> ${edad}
    `;

    resultado.style.display = "block";
  });

  // Botón cerrar
  cerrarBtn.addEventListener("click", () => {
    resultado.style.display = "none";
    formulario.reset();
    document.getElementById("nombre").focus();
  });
});
