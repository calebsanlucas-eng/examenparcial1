document.getElementById("cambiar-tema").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const carrera = document.getElementById("carrera").value;

    if (!nombre || !correo || !carrera) {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    alert("Formulario enviado con éxito.");
    return true;
}

window.onload = function() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const participantesDiv = document.getElementById("participantes-lista");
            data.results.forEach(participante => {
                const div = document.createElement("div");
                div.classList.add("participante");
                div.innerHTML = `
                    <img src="${participante.picture.medium}" alt="${participante.name.first}" />
                    <p>${participante.name.first} ${participante.name.last}</p>
                `;
                participantesDiv.appendChild(div);
            });
        })
        .catch(error => console.error('Error al cargar los participantes:', error));
};

