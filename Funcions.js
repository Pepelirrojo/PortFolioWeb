let request = new XMLHttpRequest();
request.open('GET', "info.json");
request.responseType = 'json';
function lee_json() {
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            const response = request.response;
            document.getElementById("nombrePerfil").innerHTML = response.nombre;
            document.getElementById("fotoPerfil").src = response.foto;
            document.getElementById("telefPerfil").innerHTML += response.telefono;
            document.getElementById("mailPerfil").innerHTML += response.mail;
            document.getElementById("descripPerfil").innerHTML = response.descripcion;
        }
    };
    request.send();
}