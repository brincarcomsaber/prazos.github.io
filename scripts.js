document.addEventListener('DOMContentLoaded', () => {
  const addProcessForm = document.getElementById('addProcessForm');

  if (addProcessForm) {
    addProcessForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const processNumber = document.getElementById('processNumber').value;
      const partyName = document.getElementById('partyName').value;
      const court = document.getElementById('court').value;
      const dueDate = document.getElementById('dueDate').value;
      
      // Salvando dados no localStorage
      const process = { processNumber, partyName, court, dueDate };
      let processes = JSON.parse(localStorage.getItem('processes')) || [];
      processes.push(process);
      localStorage.setItem('processes', JSON.stringify(processes));

      alert('Processo adicionado com sucesso!');
      addProcessForm.reset();
    });
  }

  // Exibir prazos no dashboard
  const overview = document.getElementById('overview');
  if (overview) {
    let processes = JSON.parse(localStorage.getItem('processes')) || [];
    processes.forEach(process => {
      const processDiv = document.createElement('div');
      processDiv.className = 'process';
      processDiv.innerHTML = `
        <h3>${process.processNumber}</h3>
        <p><strong>Parte:</strong> ${process.partyName}</p>
        <p><strong>Tribunal:</strong> ${process.court}</p>
        <p><strong>Data de Vencimento:</strong> ${process.dueDate}</p>
      `;
      overview.appendChild(processDiv);
    });
  }
});
