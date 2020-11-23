$(document).ready(function () {
    $.get({
        url: "./Car-Visualizer.json",
        success: (response, status) => setData(response, status)
    })
})

function setData(response,status) {
    const content = response.contenido;

    content.forEach((element, index) => {
        $(".item")[index].childNodes[1].src = element.foto
        console.log($(".item")[index].childNodes[3].childNodes[1].childNodes)
        $(".item")[index].childNodes[3].childNodes[1].childNodes[0].innerHTML = element.nombre
    });
}