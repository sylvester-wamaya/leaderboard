import GameObject from "./game.js"
const formContainer = document.createElement("div")
const form = document.createElement("form")
const submit = document.createElement("button")
const nameInput = document.createElement("input")
const scoreInput = document.createElement("input")

const formSection = () => {

formContainer.innerHTML = `
<h2>Recent scores</h2>
`
    nameInput.type = "text"
    nameInput.placeholder = "Your name"
    nameInput.name = "name"
    scoreInput.type = "text"
    scoreInput.placeholder = "Your score"
    scoreInput.name = "score"
   

    submit.type = "submit"
    submit.textContent = "Submit"
    
    form.appendChild(nameInput)
    form.appendChild(scoreInput)
    form.appendChild(submit)
    formContainer.appendChild(form)
    return formContainer

}

const postData = () =>{

    submit.addEventListener("click", async (e)=>{
        e.preventDefault()
        const playerScore = new GameObject(nameInput.value.trim(), scoreInput.value.trim())
        form.reset()
        
        
            const options = {
                method: "POST",
                headers: { 
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(playerScore),
            };
            
            await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wamaya/scores/", options) 
            .then(response => response.json())          
        
         
           
    })
}




export {formSection, postData}