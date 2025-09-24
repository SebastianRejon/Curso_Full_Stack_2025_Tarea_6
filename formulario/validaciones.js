const miFormulario = document.getElementById('contactForm');
const miNombre = document.getElementById('nombre');
const miEmail = document.getElementById('email');
const miMensaje = document.getElementById('mensaje');
const successMessage = document.getElementById('successMessage');

// Oculta mensajes de error al escribir
miNombre.addEventListener('input', () => {
    document.getElementById('invalidoNombre').style.display = 'none';
});
miEmail.addEventListener('input', () => {
    document.querySelector('.invalidoCorreo').style.display = 'none';
});
miMensaje.addEventListener('input', () => {
    document.getElementById('invalidoMensaje').style.display = 'none';
});


miFormulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let nombreValido = esNombreValido(miNombre);
    if (!nombreValido[0]) {
        let invalidoNombre = document.getElementById('invalidoNombre');
        invalidoNombre.innerHTML = nombreValido[1];
        invalidoNombre.style.display = 'block';
    }

    let mensajeValido = esMensajeValido(miMensaje);
    if (!mensajeValido[0]) {
        let invalidoMensaje = document.getElementById('invalidoMensaje');
        invalidoMensaje.innerHTML = mensajeValido[1];
        invalidoMensaje.style.display = 'block';
    }

    let correoValido = esCorreoValido(miEmail);
    if (!correoValido[0]) {
        let invalidoCorreo = document.querySelector('.invalidoCorreo');
        invalidoCorreo.innerHTML = correoValido[1];
        invalidoCorreo.style.display = 'block';
    }

    if (nombreValido[0] && mensajeValido[0] && correoValido[0]) {
        successMessage.classList.remove('d-none');
        miFormulario.reset();
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 3000);
    }
});

function esNombreValido(m) {
    if (m.value == "") {
        return [false, "No puede dejar vacio el nombre!"];
    }
    if (m.value.length < 3) {
        return [false, "No puede haber nombre menor a tres caracteres!"];
    }
    if (/\d/.test(m.value)) {
        return [false, "Los nombres no pueden contener o ser numeros!"];
    }
    if (/^\s+/.test(m.value)) {
        return [false, "Los nombres no pueden empezar con espacios en blanco!"];
    }
    return [true];
}

function esMensajeValido(men) {
    if (men.value == "") {
        return [false, "No puede dejar vacio el mensaje!"];
    }
    if (men.value.length < 3) {
        return [false, "No puede mensajes menores a tres caracteres!"];
    }
    if (/^\s+/.test(men.value)) {
        return [false, "Los mensajes no pueden empezar con espacios en blanco!"];
    }
    return [true];
}

function esCorreoValido(men) {
    if (men.value == "") {
        return [false, "No puede dejar vacio el Correo!"];
    }
    // Validacion de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(men.value)) {
        return [false, "El formato del correo no es válido!"];
    }
    return [true];
}      