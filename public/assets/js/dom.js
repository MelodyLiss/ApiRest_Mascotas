const navItems = document.querySelectorAll('.nav-item');
const seccionesIndividuales = document.querySelectorAll('.seccionesIndividuales');

const cambiarSeccion = () => {
    navItems.forEach((link, index) => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault();
            navItems.forEach(item => item.querySelector('a').classList.remove('active'));
            link.querySelector('a').classList.add('active');
            seccionesIndividuales.forEach(seccion => seccion.style.display = 'none');
            seccionesIndividuales[index].style.display = 'block';
        });
    });
};

export{
    cambiarSeccion
}