window.onload = populateSelect();

function setData (content) {
    var nodep = document.getElementById(0);
    var nodev = document.getElementById(1);
    const trList = nodep.querySelectorAll('tr');
    trList[1].firstElementChild.innerHTML = content.prestacion[0].p1;
    nodev.childNodes[3].childNodes[3].innerHTML = content.valor[1].v1;
    nodep.childNodes[3].childNodes[1].innerHTML = content.prestacion[0].p2;
    nodev.childNodes[3].childNodes[1].innerHTML = content.valor[1].v2;


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
