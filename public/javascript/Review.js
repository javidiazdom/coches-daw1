window.onload = populateSelect();

function setData (content) {
    var title = document.getElementById('title');
    title.innerHTML = content.title;
    var container = document.getElementsByClassName('review-container')[0];
    container.innerHTML = "";
    content.sections.forEach(element => {
        var section = document.createElement("section")
        section.className = "review-section"
        var content = document.createElement("div")
        content.className = "content";
        var span = document.createElement("span")
        var image = document.createElement("img")
        var h2 = document.createElement("h2")
        h2.innerText = element.title
        image.src = element.picture_url
        var text = document.createElement("p")
        text.innerText = element.body
        span.appendChild(h2)
        content.appendChild(span)
        content.appendChild(text)
        section.appendChild(content)
        section.appendChild(image)
        container.appendChild(section)
    });
    document.getElementById('Specifications').href = '/coches/'+content.id+'/specifications'
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
    xhr.open('GET', 'http://localhost:8080/Review.json');
    xhr.send();
}