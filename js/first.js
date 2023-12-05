const startButton = document.querySelector("footer > :first-child")

const closeButton = document.querySelector("dialog > form > button")
const userName = document.querySelector("dialog > form > input#player-name")
let user = document.querySelector("main > span:first-child > p")

const dialog = document.querySelector("dialog")
startButton.addEventListener("click", ()=>{
    dialog.showModal()
})

closeButton.addEventListener("click", ()=>{
    user.innerHTML = userName.value
    userName.value =""
})

const inputUser = document.querySelector("dialog > form > p:first-of-type > input")
const nameLabel = document.querySelector("dialog > form > p:first-of-type > label")

inputUser.addEventListener("focus", ()=>{
    nameLabel.classList.add("yes-value")
    
})

inputUser.addEventListener("blur", ()=>{
        if(inputUser.value === ""){
            nameLabel.classList.remove("yes-value")
        }else return
})