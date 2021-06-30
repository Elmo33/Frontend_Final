function redirect(name){
    var el = document.getElementById(name)
    el.addEventListener('click', function (event) {
        window.location = `${name}.html`
    });
}
redirect("index")
redirect("chat")
redirect("posts")

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}