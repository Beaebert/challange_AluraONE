let Amigo = []; //el array dónde se guardaran los nombres
//la función que se activa con el boton
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); //toma el valor del campo html
    let nombreAmigo = inputAmigo.value; //el valor tomado se guarda en una variable para luego comparar
if (nombreAmigo === "") {
    alert ("No ha escrito ningun valor, por favor escriba nuevamente");
    return;
}
    Amigo.push(nombreAmigo); //se lleva el valor al array
    console.log(Amigo); //muestra el valor en la consola del navegador
    inputAmigo.value = ""; // "limpio" el espacio en memoria usado por inputAmigo
    inputAmigo.focus(); //para que permanezca activo el cursor en el input html
    mostrarAmigo(); //llamado a la siguiente funcion
}

//funcion mostrar, esta fuera del proceso activado por el boton html (la funcion agregar)
function mostrarAmigo() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    for (let i = 0; i < Amigo.length; i++) {
        let element = document.createElement("li");
        element.textContent = Amigo[i];
        listaDeAmigos.appendChild(element);
    }
}

function sortearAmigo() {
    if (Amigo.length == 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoElegido = Amigo [Math.floor (Math.random() * Amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo elegido es: ${amigoElegido}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}
