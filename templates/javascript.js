const title = document.getElementById('titl');
const email = document.getElementById('email');
const div = document.getElementById('div');
const description = document.getElementById('descr');
const category = document.forms["form"]["category"];


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarForm);
});


function validarForm(evento) {
    evento.preventDefault();

    if(title.value.length > 10 || title.value.length == 0) {
        title.classList.remove("sinborde");
        title.classList.add("error");
    } else {
        title.classList.remove("error");
        title.classList.add("sinborde");
    }

    this.submit();
}