window.onload = populateSelect();

function setData (content) {
    const prestaciones = content.prestacion;
    const values = content.valor;
    const table1 = document.getElementById('0');
    const table2 = document.getElementById('1');
    table1.innerHTML = '';
    table2.innerHTML = '';
    var t1header = document.createElement('th')
    t1header.colSpan = 2;
    t1header.innerHTML = 'Prestaciones';
    table1.appendChild(t1header)
    var t2header = document.createElement('th')
    t2header.colSpan = 2;
    t2header.innerHTML = 'Dimensiones, Peso';
    table2.appendChild(t2header)
    for (var i = 0; i < 5; i++) {
        var row = document.createElement('tr');
        var description = document.createElement('td');
        description.innerHTML = prestaciones[i];
        var value = document.createElement('td');
        value.innerHTML = values[i];
        row.appendChild(description);
        row.appendChild(value);
        table1.appendChild(row)
    }
    for (var i = 5; i < 10; i++) {
        var row = document.createElement('tr');
        var description = document.createElement('td');
        description.innerHTML = prestaciones[i];
        var value = document.createElement('td');
        value.innerHTML = values[i];
        row.appendChild(description);
        row.appendChild(value);
        table2.appendChild(row)
    }
}


function populateSelect() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var content = JSON.parse(xhr.responseText);
            setData(content);
        }
    }
    xhr.open('GET', './Specifications.json');
    xhr.send();
}
