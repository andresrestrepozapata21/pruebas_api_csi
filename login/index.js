var btn1 = document.getElementById("btn1");
var answer1 = document.getElementById("answer1");

var btn2 = document.getElementById("btn2");
var answer2 = document.getElementById("answer2");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/customerLogin", {
    method: "POST",
    body: JSON.stringify({
      email: "diegoarbelaez.co@gmail.com",
      password: "12345",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer1.innerHTML = `
                 ${data["result"]}
            `;
      } else {
        if (data["result"] == 3) {
          answer1.innerHTML = `
          <div class="alert alert-success" role="alert">
          <h2>${data["detail"][0]["id_usuario_cliente"]}</h2>
          <h2>${data["detail"][0]["email"]}</h2>
          <h2>${data["detail"][0]["token"]}</h2>
          <h2>${data["detail"][0]["token_exp"]}</h2>
          <h2>${data["detail"][0]["activo_usuario_cliente"]}</h2>
          </div>
          `;
        } else {
          answer1.innerHTML = `
                 ${data["result"]}
            `;
        }
      }
    });
});

btn2.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/agentLogin", {
    method: "POST",
    body: JSON.stringify({
      email: "arz.955@gmail.com",
      password: "andres",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer2.innerHTML = `
                 ${data["result"]}
            `;
      } else {
        if (data["result"] == 3) {
          answer2.innerHTML = `
          <div class="alert alert-success" role="alert">
          <h2>${data["detail"][0]["id_usuario_agente"]}</h2>
          <h2>${data["detail"][0]["email"]}</h2>
          <h2>${data["detail"][0]["token"]}</h2>
          <h2>${data["detail"][0]["token_exp"]}</h2>
          <h2>${data["detail"][0]["activo_usuario_agente"]}</h2>
          </div>
          `;
        } else {
          answer2.innerHTML = `
          ${data["result"]}
     `;
        }
      }
    });
});
