// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Implementar una función para agregar amigos
function agregarAmigo() {
    // 2.1 Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios innecesarios

    // 2.2 Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 2.3 Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // 2.4 Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista de amigos
    actualizarListaAmigos();
}

// 3. Implementar una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // 3.1 Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // 3.2 Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // 3.3 Iterar sobre el arreglo
    amigos.forEach((amigo) => {
        // 3.4 Crear y agregar elementos a la lista
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

// 4. Implementar una función para sortear los amigos
function sortearAmigo() {
    // 4.1 Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("Por favor, añade nombres antes de sortear.");
        return;
    }

    // 4.1 Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 4.1 Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4.1 Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;
}
