let themeActive = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-bs-theme', themeActive);

document.getElementById('btnTheme').setAttribute('class', themeActive === 'light' ? 'btn btn-outline-dark me-2' : 'btn btn-outline-light me-2');
document.getElementById('themeIcon').setAttribute('class', themeActive === 'light' ? 'bi bi-sun-fill' : 'bi bi-moon-fill');

//Asignar el evento click al boton btnTheme
document.getElementById('btnTheme').addEventListener("click", changeTheme);

//Funcion para cambiar el tema
function changeTheme(){
    // Si el data-bs-theme en la etiqueta html es light, cambiar a dark
    if(document.documentElement.getAttribute('data-bs-theme') === 'light'){
        themeActive = 'dark';
        document.documentElement.setAttribute('data-bs-theme', themeActive);
        document.getElementById('btnTheme').setAttribute('class', 'btn btn-outline-light me-2');
        document.getElementById('themeIcon').setAttribute('class', 'bi bi-moon-fill');
    }else{
        themeActive = 'light';
        document.documentElement.setAttribute('data-bs-theme', themeActive);
        document.getElementById('btnTheme').setAttribute('class', 'btn btn-outline-dark me-2');
        document.getElementById('themeIcon').setAttribute('class', 'bi bi-sun-fill');
    }
    // Almacenar el valor del tema en el Local Storage
    localStorage.setItem('theme', themeActive);
}