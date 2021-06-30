var send_button = document.getElementsByClassName('ui-button-match')[0];
var input = document.getElementById("room-input")

send_button.addEventListener('click', function (event) {
    let text = document.getElementById('room-input');
    spawn_text(text.value);
    text.value = ""
});
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        let text = document.getElementById('room-input');
        spawn_text(text.value);
        text.value = ""
    }
});


function spawn_text(text) {
    var message_container = document.createElement("div");
    message_container.className = "message-container";

    var message_right = document.createElement("div");
    message_right.className = "message-right";

    var message_flair = document.createElement("div");
    message_flair.className = "message-flair";

    var user_flair = document.createElement("span");
    user_flair.className = "user-flair";
    user_flair.textContent="User";

    var message_text = document.createElement("div");
    message_text.className = "message-text";
    message_text.textContent = text;

    message_flair.appendChild(user_flair)
    message_right.appendChild(message_flair)
    message_right.appendChild(message_text)
    message_container.appendChild(message_right)

    document.getElementById('messages').appendChild(message_container);
}



