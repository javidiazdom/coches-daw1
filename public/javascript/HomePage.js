window.onload = populateSelect();

function setData (content) {
    content.forEach((element, index) => {
        document.getElementsByClassName('title')[index].innerText = element.title
        document.getElementsByClassName('body')[index].innerText = element.sections[0].body.substring(0, 80) + "..."
        const now = new Date()
        const created = new Date(element.created_at)
        var diference = new Date(now.getTime() - created.getTime());
    });
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
    xhr.open('GET', 'http://localhost:8080/HomePage.json');
    xhr.send();
}
