window.onload = function cargarDocentes() {
    // Load the docentes.json file
    fetch('../assets/js/docentes.json')
        .then(response => response.json())
        .then(data => {
            // Loop through each level in the JSON file
            for (let nivel in data) {
                // Get the level name
                let nivelName = nivel;
                // Get the docentes array for the current level
                let docentes = data[nivel];
                console.log(docentes) 
                // Create the HTML for the current level
                let html = `
                    <h4 class="text-center mt-5 mb-3">${nivelName}</h4>
                    <div class="row gy-4 row-cols-2 row-cols-md-3">
                `;
                // Loop through each docente in the current level
                for (let i = 0; i < docentes.length; i++) {
                    // Get the docente data
                    let docente = docentes[i];
                    // Create the HTML for the current docente
                    let docenteHtml = `
                        <div class="col">
                            <div class="card border-0 shadow-none h-100">
                                <div class="card-body text-center d-flex flex-column align-items-center p-0">
                                    <img src="${docente.foto}" width="130" height="130" class="rounded-circle mb-3 fit-cover">
                                    <h5 class="fw-bold  card-title mb-0">${docente.nombre}</h5>
                    `;
                    // Add the cargo if it exists
                    if (docente.cargo) {
                        docenteHtml += `<p class="text-muted card-text mb-2">${docente.cargo}</p>`;
                    }
                    // Add the materia if it exists
                    if (docente.materia) {
                        docenteHtml += `<p class="text-muted card-text mb-2">${docente.materia}</p>`;
                    }
                    // Close the HTML for the current docente
                    docenteHtml += `
                                </div>
                            </div>
                        </div>
                    `;
                    // Add the HTML for the current docente to the HTML for the current level
                    html += docenteHtml;
                }
                // Close the HTML for the current level
                html += `
                    </div>
                `;
                // Add the HTML inside the div with the id of docentesDiv
                document.querySelector('#docentesDiv').innerHTML += html;
            }
        })
        .catch(error => console.error(error));
}