const title = document.getElementById('titl');
const email = document.getElementById('email');
const description = document.getElementById('descr');
const category = document.getElementById('category');
const fileInput = document.getElementById('img');

function validarForm(event) {
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(!expresion.test(email.value)) {
        event.preventDefault();
        document.getElementById('1').innerHTML='Email incorrecto';
        email.focus();
    } else {
        document.getElementById('1').innerHTML='';
    }

    if(title.value.length > 25 || title.value.trim().length === 0) { 
        event.preventDefault();
        document.getElementById('2').innerHTML='Título incorrecto';
        title.focus();
    } else {
        document.getElementById('2').innerHTML='';
    }

    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        event.preventDefault();
        document.getElementById('3').innerHTML='Imagen incorrecta';
    } else {
        document.getElementById('3').innerHTML='';
        var reader = new FileReader();
        reader.addEventListener("load",() => {
            localStorage.setItem("inputImage", reader.result);
        })
        reader.readAsDataURL(fileInput.files[0]);
    }

    if(category.value == '') {
        event.preventDefault();
        document.getElementById('4').innerHTML='Escoja una opción';
        category.focus();
    } else {
        document.getElementById('4').innerHTML='';
    }

    if(description.value < 20 || description.value > 1200) {
        event.preventDefault();
        document.getElementById('5').innerHTML='Descipción incorrecta';
        description.focus();
    } else {
        document.getElementById('5').innerHTML='';
    }
}