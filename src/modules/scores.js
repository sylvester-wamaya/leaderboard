
const listing = ()=>{
    const scores = [100, 10, 50, 78, 125, 77, 42]
    const ul = document.createElement("ul")
    const scoreHead = document.createElement("div")
    const container = document.createElement("section")

    for(let i=0; i<scores.length; i++){
        const li = document.createElement("li")
        const name = "name"
        li.innerHTML = `
        ${name}: ${scores[i]}`
        ul.appendChild(li)
    }
scoreHead.innerHTML = `
<div id="score-h">
<h2>Recent scores</h2>
<button type="button">Refresh</button>
</div>
`
container.appendChild(scoreHead)
container.appendChild(ul)
return container
}

export default listing

