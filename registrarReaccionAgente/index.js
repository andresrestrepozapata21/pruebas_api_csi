var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://pruebas.mipgenlinea.com/reactionAgentAlert", {
    method: "POST",
    body: JSON.stringify({
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzc1Mzg4NzIsImV4cCI6MTY5MjA1NDA3MiwiZGF0YSI6eyJpZCI6IjI0IiwiZW1haWwiOiJhcnpAZ21haWwuY29tIn19.TAHFoVjhh1SkiHRer5tmbCEaQU70vmilyPPbRYLj1f8",
      latitud: 4.265434,
      longitud: -75.928713,
      fk_id_usuario_agente: 24,
      fk_id_alerta: 122,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === "error") {
        answer.innerHTML = `
          <div class="alert alert-danger" role="alert">
              ${data["result"]}
            </div>
          `;
      } else {
        answer.innerHTML = `
        <div class="alert alert-success" role="alert">
              ${data["result"]}
              <br>
          </div>
        `;

        console.log(data);
      }
    });
});
