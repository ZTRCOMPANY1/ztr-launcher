fetch('https://ztrcompany1.github.io/servidor-jogos/apps.json')
  .then(res => res.json())
  .then(data => {
    // Renderizar os games
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

    // Renderizar atualizações (dentro do mesmo .then)
    const updatesContainer = document.getElementById('updates-container');
    data.updates.forEach(update => {
      const div = document.createElement('div');
      div.classList.add('update');
      div.innerHTML = `
        <h4>${update.date} - ${update.title}</h4>
        <p>${update.description}</p>
      `;
      updatesContainer.appendChild(div);
    });
  });

function downloadGame(url) {
  const { shell } = require('electron');
  shell.openExternal(url);
}
