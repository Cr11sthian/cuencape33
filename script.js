const lugaresLabel = document.getElementById("lugaresLabel");
const lugaresSelect = document.getElementById("lugares");
const historialDiv = document.getElementById("historial");
const historialList = document.getElementById("historialList");

function seleccionarActividad() {
  const actividadSelect = document.getElementById("actividad");
  const actividad = actividadSelect.value;

  if (actividad === "Brunchpe" || actividad === "Almuerzope" || actividad === "cenape" || actividad === "Museo") {
    lugaresLabel.style.display = "block";
    lugaresSelect.style.display = "block";
    actualizarOpcionesLugar();
  } else {
    lugaresLabel.style.display = "none";
    lugaresSelect.style.display = "none";
  }
}

function actualizarOpcionesLugar() {
  const lugares = obtenerLugares();
  lugaresSelect.innerHTML = "";
  lugares.forEach(lugar => {
    const option = document.createElement("option");
    option.value = lugar;
    option.text = lugar;
    lugaresSelect.appendChild(option);
  });
}

function finalizarSeleccion() {
  const actividadSelect = document.getElementById("actividad");
  const lugaresSelect = document.getElementById("lugares");
  const diaSelect = document.getElementById("dia");

  const actividad = actividadSelect.value;
  const lugar = lugaresSelect.value;
  const dia = diaSelect.value;

  if (actividad && dia) {
    const historialItem = document.createElement("li");
    historialItem.textContent = `Día ${dia}: Actividad - ${actividad}, Lugar - ${lugar || "N/A"}`;
    historialList.appendChild(historialItem);
    historialDiv.style.display = "block";
  }

  reiniciarInterfaz();
}

function generarCronograma() {
  const historialItems = historialList.getElementsByTagName("li");
  if (historialItems.length > 0) {
    let cronograma = "Cronograma:\n";
    Array.from(historialItems).forEach(item => {
      cronograma += item.textContent + "\n";
    });

    alert(cronograma);
  } else {
    alert("No hay selecciones en el historial.");
  }
}

function reiniciarInterfaz() {
  const actividadSelect = document.getElementById("actividad");
  const lugaresSelect = document.getElementById("lugares");
  const diaSelect = document.getElementById("dia");

  actividadSelect.value = "";
  lugaresSelect.value = "";
  diaSelect.value = "Jueves";

  lugaresLabel.style.display = "none";
  lugaresSelect.style.display = "none";

  actividadSelect.focus();
}
