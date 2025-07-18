const formSubmitted = () => {
    const form = document.getElementById('formulario');
    const boton = document.getElementById('button_submit_form');
    const alerta = document.getElementById('alerta-exito');

    if (!form || !boton || !alerta) return;

    // Deshabilitar botón y mostrar ícono de carga
    boton.disabled = true;
    boton.innerHTML = '<i class="fa fa-refresh fa-spin"></i> Enviando...';

    // Mostrar SweetAlert
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '💪🏻 Reserva Enviada',
        text: '📩 Instrucciones en tu correo electrónico',
        showConfirmButton: false,
        timer: 4000
    });

    // Mostrar alerta visual del formulario
    alerta.style.display = 'block';
    alerta.classList.add('show');

    // Ocultar alerta después de 3 segundos
    setTimeout(() => {
        alerta.classList.remove('show');
        alerta.style.display = 'none';
    }, 3000);

    // Reiniciar formulario y contador de caracteres
    setTimeout(() => {
        form.reset();
        actualizarContador();
    }, 3500);

    // Restaurar el botón con texto final
    setTimeout(() => {
        boton.disabled = false;
        boton.innerHTML = 'Reserva Enviada 📨';
    }, 4000);

    // Redireccionar (opcional)
    setTimeout(() => {
        window.location.href = '/Portafolio/';
    }, 6000);
};

function actualizarContador() {
    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('contador');
    const botonEnviar = document.getElementById('button_submit_form');

    if (!textarea || !contador || !botonEnviar) return;

    const max = parseInt(textarea.getAttribute('maxlength')) || 2000;
    const actual = textarea.value.trim().length;
    const restante = max - actual;

    // Actualizar contador visual
    contador.textContent = restante;

    // Cambiar color si queda poco espacio
    contador.style.color = restante <= 100 ? '#dc3545' : '#ffffff';

    // Habilitar o deshabilitar el botón según contenido
    if (actual > 0) {
        botonEnviar.disabled = false;
        botonEnviar.classList.remove('btn-outline-light');
        botonEnviar.classList.add('btn-success');
    } else {
        botonEnviar.disabled = true;
        botonEnviar.classList.remove('btn-success');
        botonEnviar.classList.add('btn-outline-light');
    }
}

window.onload = () => {
    actualizarContador();

    // Escucha cambios en todos los campos del formulario si quieres ampliar validación futura
    document.getElementById('mensaje').addEventListener('input', actualizarContador);
};

