const listing = () => {
 
  const ul = document.createElement('ul');
  const scoreHead = document.createElement('div');
  const container = document.createElement('section');
  const refresh = document.createElement('button');



const fetchData = ()=>{
    fetch("https://reqres.in/api/users")
    .then(response=>response.json())
    .then(responseData => {
      const scores =    responseData.data

        for (let i = 0; i < scores.length; i += 1) {
            const li = document.createElement('li');
            const name = 'Name';
            li.innerHTML = `
                ${name}: ${scores[i].first_name}`;
            ul.appendChild(li);
          }      
        
    })
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




