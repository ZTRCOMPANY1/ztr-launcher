fetch('https://ztrcompany1.github.io/servidor-jogos/game.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('game-container');
    data.games.forEach(game => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <button onclick="downloadGame('${game.download}')">Baixar</button>
      `;
      container.appendChild(div);
    });
  });

function downloadGame(url) {
  const { shell } = require('electron');
  shell.openExternal(url);
}
