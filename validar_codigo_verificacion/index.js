var btn1 = document.getElementById("btn1");
var answer1 = document.getElementById("answer1");

var btn2 = document.getElementById("btn2");
var answer2 = document.getElementById("answer2");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/checkAccountCustomer", {
    method: "PUT",
    body: JSON.stringify({
      codigo_verificacion: 422644,
      id_usuario_cliente: 72,
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
  fetch("https://pruebas.mipgenlinea.com/checkAccountAgent", {
    method: "PUT",
    body: JSON.stringify({
      codigo_verificacion: 457845,
      id_usuario_agente: 22,
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
