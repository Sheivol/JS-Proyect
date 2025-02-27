function mostrarPrecio() {
    var vehiculo = document.getElementById("vehiculo").value;
    var precios = {
        "pequeño": "10.000",
        "mediano": "15.000",
        "grande": "20.000"
    };

    var precio = precios[vehiculo] || "No disponible";
    document.getElementById("precio").innerText = "El precio del lavado es: $" + precio;
}

var servicios = ["Cera protectora", "Lavado de motor", "Aspirado interior", "Limpieza de vidrios"];

function mostrarServicios() {
    var listaServicios = document.getElementById("servicios-lista");
    listaServicios.innerHTML = "";

    servicios.forEach(function(servicio) {
        var li = document.createElement("li");
        li.innerText = servicio;
        listaServicios.appendChild(li);
    });
}