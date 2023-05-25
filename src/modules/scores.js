import gameObject from "./game.js";
const listing = () => {
 
  const ul = document.createElement('ul');
  const scoreHead = document.createElement('div');
  const container = document.createElement('section');
  const refresh = document.createElement('button');



const fetchData = async()=>{
    const response = await fetch("https://reqres.in/api/users")
    const jsonData = await response.json()
    
      const scores = await jsonData.data

      while(ul.firstChild){
        ul.removeChild(ul.firstChild)
      }

        for (let i = 0; i < scores.length; i += 1) {
            const li = document.createElement('li');
            const name = 'Name';
            li.innerHTML = `
                ${name}: ${scores[i].first_name}`;
            ul.appendChild(li);
          }      
        
    
}  

fetchData()


const postData = async()=>{
    const options = {
        method: "POST",
        headers: data ? { "Content-Type" : "Application/json" } : {},   
        body: ScoreData,
    }
    
    const response = await fetch("https://reqres.in/api/users",options) 
        

}  


  scoreHead.id = "score-h"
  scoreHead.innerHTML = `
<h2>Recent scores</h2>
`;
  refresh.type = "button"
  refresh.textContent = "Refresh"
  scoreHead.appendChild(refresh)
  container.appendChild(scoreHead);
  container.appendChild(ul);

  refresh.addEventListener("click", fetchData)
    
  return container;
};


export default listing;




