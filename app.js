let amigos = [];

// Función para limpiar el campo de texto
function limpiar() {
    document.getElementById('amigo').value = '';
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == '') {
       alert('Creo que olvidaste escribir el nombre de tu amigo');
    }
    else{
        if (amigos.includes(nombre)) {
            alert('No todos tus amigos se pueden llamar igual. Por favor, escribe un nombre diferente');
            return;
        }
        else {
            amigos.push(nombre);
            limpiar();
            console.log(amigos);
            mostrarAmigos();
        }
    }
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No puedes iniciar el sorteo sin amigos. Por favor, agrega amigos a la lista');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    alert('Tendrás que hacerle un bonito regalo a: ' + amigoSeleccionado);
}