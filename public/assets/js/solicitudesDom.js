import  {findAllMascotas } from "./solicitudes.js";

const rellenarTabla = async () => {
    const campoTabla = document.querySelector('#campoTabla');
    const datosRespuesta = await findAllMascotas();
    console.log(datosRespuesta);
    datosRespuesta.datos.forEach(mascota => {
        campoTabla.innerHTML += `
        <tr>
            <th> ${mascota.id}</th>
            <td> ${mascota.nombre}</td>
            <td> ${mascota.especie}</td>
            <td> ${mascota.raza}</td>
            <td> ${mascota.genero}</td>
            <td> ${mascota.edad}</td>
            <td> ${mascota.cuidador.nombre}</td>
            <td> ${mascota.cuidador.apellido}</td>
            <td> ${mascota.cuidador.rut}</td>
        </tr>
        `;
    });
};

export {
    rellenarTabla
}