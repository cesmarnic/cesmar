//Asignar el evento click al boton btnTheme
document.getElementById('btnTheme').addEventListener("click", changeTheme);

//Funcion para cambiar el tema
function changeTheme(){
    // Si el data-bs-theme en la etiqueta html es light, cambiar a dark
    if(document.documentElement.getAttribute('data-bs-theme') === 'light'){
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.getElementById('btnTheme').setAttribute('class', 'btn btn-outline-light me-2');
        document.getElementById('themeIcon').setAttribute('class', 'bi bi-moon-fill');
    }else{
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.getElementById('btnTheme').setAttribute('class', 'btn btn-outline-dark me-2');
        document.getElementById('themeIcon').setAttribute('class', 'bi bi-sun-fill');
    }
}
