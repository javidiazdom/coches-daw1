$(document).ready(function () {
    $.get({
        url: "./Car-Visualizer.json",
        success: (response, status) => setData(response, status)
    })
})

function setData(response,status) {
    const content = response.contenido;
    $(".containercar")[0].innerHTML = '';

    content.forEach((element, index) => {
        var item = document.createElement("div");
        item.className = "item";
        var img = document.createElement("img");
        img.src = element.foto;
        item.appendChild(img);
        var carName = document.createElement("div");
        carName.className = "bordertext";
        carName.appendChild(document.createElement("center"))
        carName.childNodes[0].innerHTML = element.nombre;
        carName.childNodes[0].className = "cartext";
        item.appendChild(carName)
        item.onclick = () => {
            window.location.replace("");
        }
        var containerEsp = document.createElement("div");
        containerEsp.className = "containeresp";
        var tag = document.createElement("h2");
        tag.innerHTML = element.nombre;
        var category = document.createElement("h3");
        category.innerHTML = element.categoria
        var time = document.createElement("h4");
        time.innerHTML = element.minutos
        containerEsp.appendChild(tag)
        containerEsp.appendChild(category)
        containerEsp.appendChild(time)
        $(".containercar")[0].appendChild(item);
        $(".containercar")[0].appendChild(containerEsp)
    });
}