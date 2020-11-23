window.onload = populateSelect();

function setData (content) {
    var node = document.getElementById(0);
    node.childNodes[1].src = content.contenido[0].foto;
    node.childNodes[3].childNodes[3].childNodes[1].innerHTML = content.contenido[0].titulo
    node.childNodes[3].childNodes[3].childNodes[3].innerHTML = content.contenido[0].tipo
    node.childNodes[5].childNodes[3].innerHTML = content.contenido[0].texto;
    node.childNodes[5].childNodes[5].innerHTML =  "⏳" + content.contenido[0].tiempo;
    node.childNodes[5].childNodes[1].childNodes[1].innerHTML = content.contenido[0].titulo
    node.childNodes[5].childNodes[1].childNodes[3].innerHTML= content.contenido[0].tipo
    for (var i = 1; i < content.contenido.length; i++) {
        node = document.getElementById(i);
        node.childNodes[1].src = content.contenido[i].foto;
        node.childNodes[3].childNodes[1].innerHTML = content.contenido[i].titulo;
        node.childNodes[3].childNodes[3].innerHTML = content.contenido[i].tipo;
        node.childNodes[3].childNodes[5].innerHTML = content.contenido[i].texto;
        node.childNodes[3].childNodes[7].innerHTML = "⏳"+content.contenido[i].tiempo;
        
    }
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
    xhr.open('GET', './HomePage.json');
    xhr.send();
}
