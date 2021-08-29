const contenedor = document.querySelector(".contenedor-peliculas")
usuarioCalificaciones = []
function creoPelicula (nombre, anio, calificacion) {
    img = `<img src="movie.jpg">`
    nombre = `<h2> Pelicula: ${nombre}</h2>`
    anio = `<h3> Año: ${anio}</h3>`
    calificacion = `<h3>Calificación: ${calificacion}</h3>`
    return [img, nombre, anio, calificacion]
}

function registroCalificacion (calificacion) {
    usuarioCalificaciones.push(calificacion)
    let promedio = 0
    console.log(usuarioCalificaciones)
    if (usuarioCalificaciones.length === 5) {
        for (i of usuarioCalificaciones) {
            promedio = promedio + parseInt(usuarioCalificaciones)
        }
        promedio = promedio / 5
        if (promedio <= 5) {
            alert("Tenes mal gusto")
            
        }else{
            alert("Tenes buen gusto")
        }
        promedio = 0
        usuarioCalificaciones = []
    }
    console.log(usuarioCalificaciones)
}

for (var i = 1; i <= 20 ; i++) {
    let anioRandom = Math.round(Math.random()*10000+23) 
    let calificacionRandom = Math.round(Math.random()*10)
    let pelicula = creoPelicula (`Pelicula ${i}`, anioRandom,calificacionRandom)
    let div = document.createElement("DIV")
    div.addEventListener('click',()=>registroCalificacion(calificacionRandom))
    div.tabIndex=i
    div.classList.add(`peli-${i}`, 'movie')
    div.innerHTML = pelicula[0] + pelicula[1] + pelicula[2] + pelicula[3]
    contenedor.appendChild(div)

}

