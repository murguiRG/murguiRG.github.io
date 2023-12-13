document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Eliminar aria-current de todos los enlaces
        document.querySelectorAll('.nav-link').forEach(link => {
            link.removeAttribute('aria-current');
        });

        // Agregar aria-current al enlace clickeado
        e.currentTarget.setAttribute('aria-current', 'page');
    });
});