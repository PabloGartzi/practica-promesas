/****************Variables****************/
const mostrar = document.querySelector("#mostrar");
const mostrarContainer = document.querySelector("#mostrarContainer") 
const fragment = document.createDocumentFragment();
const chivato = true

const persona = {
    id:1,
    nombre: "Benito",
    usuario: "benitocamelas@gmail.com"
}

/*****************************************************************
                            PROMESAS
******************************************************************/


// /****************Eventos****************/
// mostrar.addEventListener("click", () => {
//     mostrarContainer.style.display = "none"
//     setTimeout(() => {
//         mostrarUsuario()
//             .then(()=>{
//                 pintarObjeto()
//             })
//             .catch((error)=>{
//                 pintarError(error)
//             })
//     }, 2000)
// });


// /****************Funciones****************/
// const mostrarUsuario = () =>{
//     const promesa = new Promise((resolve,reject)=>{
//         if (chivato){
//             resolve("Todo bien")
//         }
//         else{
//             reject("Usuario no encontrado")
//         }
//     })
//     return promesa;
// }

// const pintarMensaje = (mensaje) =>{
//     mostrarContainer.innerHTML="";
//     mostrarContainer.style.display = "block"
//     const parrafo = document.createElement("P");
//     parrafo.textContent = mensaje
//     return parrafo
// }

// const pintarObjeto = () =>{
//     Object.keys(persona).forEach((elemento)=>{
//         if(elemento != "id"){
//             fragment.append(pintarMensaje(`${elemento}: ${persona[elemento]}`));
//         }
//     })
//     mostrarContainer.append(fragment)
// }

// const pintarError = (mensaje) => {
//     mostrarContainer.append(pintarMensaje(mensaje))
// }





/*****************************************************************
                            ASINCRONO
******************************************************************/

/****************Eventos****************/
mostrar.addEventListener("click", () => {
    mostrarContainer.style.display = "none"
    setTimeout(() => {
        mostrarUsuario()
            .then(()=>{
                pintarObjeto()
            })
            .catch((error)=>{
                pintarError(error)
            })
    }, 2000)
});


/****************Funciones****************/
const mostrarUsuario = async () =>{
    
    try{
        if(chivato){
            return "Todo bien"
        }else{
            throw "Usuario no encontrado"
        }
    }
    catch(error){
        throw error
    }
}

const pintarMensaje = (mensaje) =>{
    mostrarContainer.innerHTML="";
    mostrarContainer.style.display = "block"
    const parrafo = document.createElement("P");
    parrafo.textContent = mensaje
    return parrafo
}

const pintarObjeto = () =>{
    Object.keys(persona).forEach((elemento)=>{
        if(elemento != "id"){
            fragment.append(pintarMensaje(`${elemento}: ${persona[elemento]}`));
        }
    })
    mostrarContainer.append(fragment)
}

const pintarError = (mensaje) => {
    mostrarContainer.append(pintarMensaje(mensaje))
}
