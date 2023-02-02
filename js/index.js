Array.from(document.getElementsByClassName("hover"))
    .forEach(function(element){
        element.addEventListener('click', function(e) {
            if(e.currentTarget.id === "iCloud"){
                window.open(`https://www.icloud.com`)
            } else { window.open(`https://www.icloud.com/${e.currentTarget.id}`) }
        })
    });


Array.from(document.getElementsByClassName("hover"))
    .forEach(function(element){
        element.addEventListener('mouseover', function(e) {
            document.getElementById(e.currentTarget.id).classList.add("is-highlighted")
        })
    });

Array.from(document.getElementsByClassName("hover"))
    .forEach(function(element){
        element.addEventListener('mouseout', function(e) {
            document.getElementById(e.currentTarget.id).classList.remove("is-highlighted")
        })
    });


