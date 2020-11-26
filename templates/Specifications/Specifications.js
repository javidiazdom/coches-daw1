window.onload = populateSelect();

function setData (content) {
    var nodep = document.getElementById(0);
    const trList = nodep.querySelectorAll('tr');
    trList[1].firstElementChild.innerHTML = content.prestacion[0].p1;
    trList[1].lastElementChild.innerHTML = content.valor[0].v1;
    trList[2].firstElementChild.innerHTML = content.prestacion[0].p2;
    trList[2].lastElementChild.innerHTML = content.valor[0].v2;
    trList[3].firstElementChild.innerHTML = content.prestacion[0].p3;
    trList[3].lastElementChild.innerHTML = content.valor[0].v3;
    trList[4].firstElementChild.innerHTML = content.prestacion[0].p4;
    trList[4].lastElementChild.innerHTML = content.valor[0].v4;
    trList[5].firstElementChild.innerHTML = content.prestacion[0].p5;
    trList[5].lastElementChild.innerHTML = content.valor[0].v5;
    trList[6].firstElementChild.innerHTML = content.prestacion[0].p6;
    trList[6].lastElementChild.innerHTML = content.valor[0].v6;
    var nodev = document.getElementById(1);
    const lista = nodev.querySelectorAll('tr');
    lista[1].firstElementChild.innerHTML = content.prestacion[0].p7;
    lista[1].lastElementChild.innerHTML = content.valor[0].v7;
    lista[2].firstElementChild.innerHTML = content.prestacion[0].p8;
    lista[2].lastElementChild.innerHTML = content.valor[0].v8;
    lista[3].firstElementChild.innerHTML = content.prestacion[0].p9;
    lista[3].lastElementChild.innerHTML = content.valor[0].v9;
    lista[4].firstElementChild.innerHTML = content.prestacion[0].p10;
    lista[4].lastElementChild.innerHTML = content.valor[0].v10;
    lista[5].firstElementChild.innerHTML = content.prestacion[0].p11;
    lista[5].lastElementChild.innerHTML = content.valor[0].v11;
    lista[6].firstElementChild.innerHTML = content.prestacion[0].p12;
    lista[6].lastElementChild.innerHTML = content.valor[0].v12;
    lista[7].firstElementChild.innerHTML = content.prestacion[0].p13;
    lista[7].lastElementChild.innerHTML = content.valor[0].v13; 
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
    xhr.open('GET', './Specifications.json');
    xhr.send();
}
