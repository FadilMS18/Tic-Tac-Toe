const dialog = document.querySelector("dialog")


const startButton = document.querySelector("footer > :first-child")
startButton.addEventListener("click", ()=>{
    dialog.showModal()
})