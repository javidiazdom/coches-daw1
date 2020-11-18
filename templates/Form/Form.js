const title = document.getElementById('titl');
const email = document.getElementById('email');
const description = document.getElementById('descr');
const category = document.getElementById('category');
const fileInput = document.getElementById('img');

function validarForm(event) {
    //event.preventDefault();
    //var correcto = true;
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(!expresion.test(email.value)) {
        //correcto = false;
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
    }

    if(category.value == '') {
        //correcto = false;
        event.preventDefault();
        document.getElementById('4').innerHTML='Escoja una';
        category.focus();
    } else {
        document.getElementById('4').innerHTML='';
    }

    if(description.value < 20 || description.value > 1200) {
        event.preventDefault();
        //correcto = false;
        document.getElementById('5').innerHTML='Descipción incorrecta';
        description.focus();
    } else {
        document.getElementById('5').innerHTML='';
    }
}