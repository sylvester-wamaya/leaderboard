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
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    const playerScore = new GameObject(nameInput.value, scoreInput.value)
    console.log (playerScore)
})



export default formSection;