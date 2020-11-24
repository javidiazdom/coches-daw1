window.onload = populateSelect();

function setData (content) {
    var title = document.getElementById('title');
    title.innerHTML = content.titulo;
    var node = document.getElementById(0);
    node.childNodes[3].src = content.apartados[0].foto;
    node.childNodes[1].childNodes[1].childNodes[3].innerHTML = content.apartados[0].titulo2;
    node.childNodes[1].childNodes[3].innerHTML = content.apartados[0].texto;
    var node2 = document.getElementById(1);
    node2.childNodes[1].src = content.apartados[1].foto;
    node2.childNodes[3].childNodes[1].childNodes[1].innerHTML = content.apartados[1].titulo2;
    node2.childNodes[3].childNodes[3].innerHTML = content.apartados[1].texto;
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
    xhr.open('GET', './Review.json');
    xhr.send();
}