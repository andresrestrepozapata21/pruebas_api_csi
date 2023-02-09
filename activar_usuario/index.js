var btn1 = document.getElementById("btn1");
var answer1 = document.getElementById("answer1");

var btn2 = document.getElementById("btn2");
var answer2 = document.getElementById("answer2");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/putCustomer", {
    method: "PUT",
    body: JSON.stringify({
        "id_usuario_cliente": 55,
        "activo_usuario_cliente": 1
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
        answer1.innerHTML = `
                 ${data["result"]}
         `;
      }
    });
});

btn2.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/putAgent", {
    method: "PUT",
    body: JSON.stringify({
        "id_usuario_agente": 30,
        "activo_usuario_agente": 1
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
            answer2.innerHTML = `
                     ${data["result"]}
             `;
          }
    });
});
