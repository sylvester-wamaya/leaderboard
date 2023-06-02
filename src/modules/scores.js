const listing = () => {
  const ul = document.createElement('ul');
  const scoreHead = document.createElement('div');
  const container = document.createElement('section');
  const refresh = document.createElement('button');

  const fetchData = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wamaya/scores/');
    const jsonData = await response.json();

    const scores = await jsonData.result;

    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    if (scores) {
      for (let i = 0; i < scores.length; i += 1) {
        const li = document.createElement('li');
        li.innerHTML = `
                ${scores[i].user}: ${scores[i].score}`;
        ul.appendChild(li);
      }
    }
  };

  fetchData();

  scoreHead.id = 'score-h';
  scoreHead.innerHTML = `
<h2>Recent scores</h2>
`;
  refresh.type = 'button';
  refresh.id = 'refresh';
  refresh.textContent = 'Refresh';
  scoreHead.appendChild(refresh);
  container.appendChild(scoreHead);
  container.appendChild(ul);

  refresh.addEventListener('click', () => {
    fetchData();
    refresh.classList.remove('animate');
  });

  return container;
};

export default listing;
