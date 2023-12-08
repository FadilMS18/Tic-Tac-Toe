let playGame = (function (){
    let playerName = ""
    const startDialog = document.querySelector("dialog#start-game")

    window.addEventListener("DOMContentLoaded", giveWarning)

    function giveWarning(){
        const warning = document.querySelector("dialog#warning")
        const dips = Array.from(document.querySelectorAll("main > div"))
        dips.forEach(dip => dip.addEventListener("click", ()=>{
            if(!playerName){
                warning.showModal()
                const closeWarning = warning.querySelector("button")
                closeWarning.addEventListener("click", ()=> warning.close())     
            }
        }))
    }


    const startButton = document.querySelector("footer > :first-child")
    startButton.addEventListener("click", ()=>{
        if(!playerName){
            window.addEventListener("keydown", (e)=>{
                if(e.key === "Escape"){
                    alert("Input your name before escaping 😊")
                    e.preventDefault()
                } 
            })

            const input = document.querySelector("dialog#start-game > p > input")
            const label = document.querySelector("#start-game > p > label")
    
            input.addEventListener("focus", ()=> label.classList.add("yes-value"))
            if(input.value !== ""){
                input.addEventListener("blur", ()=> label.classList.remove("yes-value"))
            }
            startDialog.showModal()
    
            const closeButton = document.querySelector("dialog#start-game > button")
            closeButton.addEventListener("click", ()=>{ 

                input.value.length <= 3 || input.value.length >=14 ? alert("Please your name at least have to contain 4 characters and under 14 characters") : startDialog.close()
                input.value.length >= 4 && input.value.length <=13 ? playerName = input.value : playerName ="Player"
                document.querySelector("main > :first-child > p").textContent = playerName
            })
        }       
    })

    let getPlayer = ()=> playerName
    function startGame(){
        if(getPlayer().length){
            return true
        }else return false
    }
    let resetPlayer = ()=>{
        document.querySelector("main > :first-child > p").textContent = "Player"
        document.querySelector("dialog#start-game > p > input").value = ""
        document.querySelector("#start-game > p > label").classList.remove("yes-value")
        playerName = ""
    } 

    return {
        getPlayer,startGame,resetPlayer
    }
})()


