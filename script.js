function buscarCotacao() {
    const valor = parseFloat(document.getElementById("valor").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
  
    if (isNaN(valor)) {
      alert("Por favor, insira um valor válido.");
      return;
    }
    
    const apiKey = "85784a02c633203b6443be9b";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${moedaOrigem}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.result === "success") {
          const taxa = data.conversion_rates[moedaDestino];
          const valorConvertido = (valor * taxa).toFixed(2);
          document.getElementById("resultado").textContent = `${valor} ${moedaOrigem} = ${valorConvertido} ${moedaDestino}`;
        } else {
          alert("Erro ao buscar a cotação. Tente novamente.");
        }
      })
      .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao conectar à API. Verifique sua conexão com a internet.");
      });
  }
