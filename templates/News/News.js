window.onload = populateSelect();

function setData (content) {

    for (var i = 0; i < content.noticias.length; i++) {
        node = document.getElementById(i);
        node.childNodes[1].src = content.noticias[i].imagen;
        node.childNodes[3].childNodes[1].innerHTML = content.noticias[i].titulo;
        node.childNodes[3].childNodes[3].innerHTML = content.noticias[i].categoria;
        node.childNodes[3].childNodes[5].innerHTML = content.noticias[i].descripcion;
        node.childNodes[3].childNodes[7].innerHTML = "⏳"+content.noticias[i].minutos;
    }

    foto = document.getElementById(5);
    foto.childNodes[1].src = content.noticias[0].imagen;
}

function populateSelect() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var content = JSON.parse(xhr.responseText);
            console.log(content)
            setData(content);
        }
    }
    xhr.open('GET', './News.json');
    xhr.send();
}