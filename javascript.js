document.addEventListener("DOMContentLoaded", () => {
  const mapaDeMesas = document.getElementById("mapa-de-mesas");
  const mesas = [
      { id: 1, cadeiras: 4, localizacao: "Perto da janela", estado: "disponivel" },
      { id: 2, cadeiras: 6, localizacao: "Centro do salão", estado: "ocupado" },
      { id: 3, cadeiras: 2, localizacao: "Área externa", estado: "reservado" },
      { id: 4, cadeiras: 4, localizacao: "Perto da entrada", estado: "disponivel" },
  ];
  
  mesas.forEach(mesa => {
      const divMesa = document.createElement("div");
      divMesa.className = "mesa";
      divMesa.dataset.estado = mesa.estado;

      divMesa.innerHTML = `
          <h3>Mesa ${mesa.id}</h3>
          <p><strong>Cadeiras:</strong> ${mesa.cadeiras}</p>
          <p><strong>Localização:</strong> ${mesa.localizacao}</p>
          <p class="estado-atual"><strong>Estado:</strong> ${formatarEstado(mesa.estado)}</p>
      `;

      divMesa.style.backgroundColor = obterCorEstado(mesa.estado);

      divMesa.addEventListener("click", () => {
          mesa.estado = alternarEstado(mesa.estado);
          divMesa.dataset.estado = mesa.estado;
          divMesa.querySelector(".estado-atual").innerHTML = `<strong>Estado:</strong> ${formatarEstado(mesa.estado)}`;
          divMesa.style.backgroundColor = obterCorEstado(mesa.estado);
      });

      mapaDeMesas.appendChild(divMesa);
  });

  function alternarEstado(estadoAtual) {
      const estados = ["disponivel", "ocupado", "reservado"];
      const proximoEstado = (estados.indexOf(estadoAtual) + 1) % estados.length;
      return estados[proximoEstado];
  }

  function formatarEstado(estado) {
      return estado.charAt(0).toUpperCase() + estado.slice(1);
  }

  function obterCorEstado(estado) {
      switch (estado) {
          case "disponivel":
              return "green";
          case "ocupado":
              return "red";
          case "reservado":
              return "orange";
          default:
              return "#fff";
      }
  }
});
