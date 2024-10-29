
const findAllMascotas = async () => {
    const respuesta = await fetch('http://localhost:3000/mascotas');
    const datos = await respuesta.json();
    return datos
}

export{
    findAllMascotas
}