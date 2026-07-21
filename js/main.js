const enlaces = document.querySelectorAll('.modulo__enlace[aria-disabled="true"]');

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (evento) {

        evento.preventDefault();

        const modulo = evento.currentTarget;
        const nombre = modulo.querySelector(".modulo__nombre").textContent;

        alert(`El módulo "${nombre}" todavía está en construcción.`);
    });
});