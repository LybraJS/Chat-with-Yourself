let parent = document.querySelector('#chatbox')
//let leftMessage = document.querySelector('#left-message')

let leftMessage = ` <div id='left-message'>
                        <div id='img-cont-left'>
                            <img src="./assets/P.jpeg"/>
                        </div>
                        <div id='message-box-left'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <span id="time">9:41 AM</span>   
                        </div>
                    </div>`;

let rightMessage = `<div id='right-message'>
                        <div id='message-box-right'>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr!</p>
                            <span id="time">9:41 AM</span>   
                        </div>
                        <div id='img-cont-right'>
                            <img src="./assets/M.jpeg"/>
                        </div>
                    </div>`


console.log(leftMessage)

function chatMessage() {
    let inputValue = document.querySelector(input);
    
    
    if (parent.lastChild == rightMessage) {
        console.log('working!')
    }

}

console.log(parent.lastChild)
