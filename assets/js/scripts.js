function actualizarContador() {
    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('contador');
    const botonEnviar = document.getElementById('btn-enviar');

    if (!textarea || !contador || !botonEnviar) return;

    const max = parseInt(textarea.getAttribute('maxlength'));
    const actual = textarea.value.length;
    const restante = max - actual;

    contador.textContent = restante;

    // Cambia color si queda poco espacio
    contador.style.color = restante <= 100 ? '#dc3545' : '#ffffff';

    // Habilita o deshabilita botón con animación
    if (actual === 0) {
        botonEnviar.disabled = true;
        botonEnviar.classList.remove('btn-success');
        botonEnviar.classList.add('btn-outline-light');
    } else {
        botonEnviar.disabled = false;
        botonEnviar.classList.remove('btn-outline-light');
        botonEnviar.classList.add('btn-success');
    }
}

// Función para mostrar alerta de éxito al enviar formulario
function manejarEnvioFormulario(event) {
    event.preventDefault(); // evitar envío real para demo

    const alerta = document.getElementById('alerta-exito');
    alerta.style.display = 'block';
    alerta.classList.add('show'); // bootstrap fade in

    // Opcional: ocultar alerta después de 3 segundos
    setTimeout(() => {
        alerta.classList.remove('show');
        alerta.style.display = 'none';
    }, 3000);

    // Resetear formulario y contador
    const form = event.target;
    form.reset();
    actualizarContador();
}

window.onload = function () {
    actualizarContador();

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', manejarEnvioFormulario);
    }
};
