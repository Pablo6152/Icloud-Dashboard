const url = "https://www.icloud.com/mail/"
// let apps = document.querySelector("app-grid-item")

Array.from(document.getElementsByClassName("app-grid-item"))
    .forEach(function(element){
        element.addEventListener('click', function(e) {
            window.open(`https://www.icloud.com/${e.currentTarget.id}`)
        })
    });

// apps.addEventListener('click', function(e) {
//     console.log(e.target)
// })

