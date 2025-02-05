let amigos = [];

const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal_paragraph');

// Función para mostrar el modal
function mostrarModal() {
    modal.classList.add('modal--show');
}

// Función para cerrar el modal
function cerrarModal() {
    modal.classList.remove('modal--show');
}


// Función para limpiar el campo de texto
function limpiar() {
    document.getElementById('amigo').value = '';
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    nombre = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
    if (nombre == '') {
        modalText.textContent = "Creo que olvidaste escribir el nombre de tu amigo";
        mostrarModal();
    }
    else{
        if (amigos.includes(nombre)) {
            modalText.textContent = nombre + " ya está en la lista, intenta con un nombre diferente o pensaremos que te quedaste sin amigos";
            mostrarModal();
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
        modalText.textContent = "No puedes iniciar el sorteo sin amigos. Por favor, agrega amigos a la lista";
        mostrarModal();
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    console.log(amigoSeleccionado);
    modalText.textContent = "Tendrás que hacerle un bonito regalo a: " + amigoSeleccionado;
    mostrarModal();
}