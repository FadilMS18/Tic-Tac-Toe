let playerName = "" ;
let playGame = (function (){
    const startDialog = document.querySelector("dialog#start-game")

    let giveWarning = (function (){
        const warning = document.querySelector("dialog#warning")
        const dips = Array.from(document.querySelectorAll("main > div"))
        dips.forEach(dip => dip.addEventListener("click", ()=>{
            if(!playerName){
                warning.showModal()
            }
        }))
        const closeWarning = warning.querySelector("button")
        closeWarning.addEventListener("click", ()=> warning.close())
    })()

    const startButton = document.querySelector("footer > :first-child")
    startButton.addEventListener("click", (e)=>{
        if(!playerName){
            const input = document.querySelector("dialog#start-game > p > input")
            const label = document.querySelector("#start-game > p > label")
    
            input.addEventListener("focus", ()=> label.classList.add("yes-value"))
            if(input.value !== ""){
                input.addEventListener("blur", ()=> label.classList.remove("yes-value"))
            }
            startDialog.showModal()
    
            const closeButton = document.querySelector("dialog#start-game > button")
            closeButton.addEventListener("click", (e)=>{ 
                input.value.length <= 3 || input.value.length >=14 ? alert("Please your name at least have to contain 4 characters and under 14 characters") : startDialog.close()
                playerName = input.value
                document.querySelector("main > :first-child > p").textContent = playerName
            })
        }       
    })
})()


// console.log(Boolean(playerName))

