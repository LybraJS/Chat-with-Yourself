const parent = document.querySelector('#chatbox');
const input = document.querySelector('input');
const button = document.querySelector("button");
let switchUser = true;
const date = new Date();


function createMessage() {

    if (input.value) {
        const markup = `<div id='${switchUser ? 'left-message' : 'right-message'}'>
                            <div id='${switchUser ? 'img-cont-left' : 'img-cont-right'}'>
                                <img src="${switchUser ? './assets/P.jpeg' : './assets/M.jpeg'}"/>
                            </div>
                            <div id='${switchUser ? 'message-box-left' : 'message-box-right'}'>
                                <p>${input.value}</p>
                                <span id="time">${new Intl.DateTimeFormat("en-US", {
                                    hour: "numeric",
                                    minute: "numeric",
                                }).format(date)}</span>   
                            </div>
                        </div>`;
    
        parent.innerHTML += markup;
        input.value='';
        switchUser = !switchUser;
    }
    
}

input.addEventListener("keydown", function(event) {

if (event.keyCode === 13) {
  event.preventDefault();
  button.click();
}
});
