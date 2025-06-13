document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los elementos que queremos animar
    const fadeElements = document.querySelectorAll('.fade-in');

    // Opciones para el Intersection Observer
    // threshold: 0.1 significa que el callback se ejecutará cuando el 10% del elemento sea visible
    const observerOptions = {
        root: null, // el viewport
        rootMargin: '0px',
        threshold: 0.1
    };

    // Creamos el observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (es visible)
            if (entry.isIntersecting) {
                // Añadimos la clase 'visible' para activar la transición CSS
                entry.target.classList.add('visible');
                // Dejamos de observar este elemento una vez que ha sido visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Hacemos que el observer observe cada uno de los elementos
    fadeElements.forEach(el => {
        observer.observe(el);
    });

});