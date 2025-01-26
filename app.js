let amigos = [];

function limpiar() {
    document.getElementById('amigo').value = '';
}

// agregar amigos al array a traves del input y el boton
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre == '') {
       alert('No puede ingresar un nombre vacío, por favor ingrese un nombre');
    }
    else{
        if (amigos.includes(nombre)) {
            alert('El nombre ya se encuentra en la lista de amigos');
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

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía, agrega algunos amigos antes de comenzar el sorteo');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    alert('El amigo seleccionado es: ' + amigoSeleccionado);
}