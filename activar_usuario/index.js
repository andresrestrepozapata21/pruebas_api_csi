var btn1 = document.getElementById("btn1");
var answer1 = document.getElementById("answer1");

var btn2 = document.getElementById("btn2");
var answer2 = document.getElementById("answer2");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/putCustomerActivate", {
    method: "PUT",
    body: JSON.stringify({
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzYzODc0MzIsImV4cCI6MTY3NjQ3MzgzMiwiZGF0YSI6eyJpZCI6IjI4IiwiZW1haWwiOiJhcnouOTU1QGdtYWlsLmNvbSJ9fQ._NSOeFrHRY6_La3xhGagI6-Qo__aLstdCRyhZprKCig",
      id_usuario_cliente: 4,
      activo_usuario_cliente: 1,
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
  fetch("https://pruebas.mipgenlinea.com/putAgentActivate", {
    method: "PUT",
    body: JSON.stringify({
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzYzODc0MzIsImV4cCI6MTY3NjQ3MzgzMiwiZGF0YSI6eyJpZCI6IjI4IiwiZW1haWwiOiJhcnouOTU1QGdtYWlsLmNvbSJ9fQ._NSOeFrHRY6_La3xhGagI6-Qo__aLstdCRyhZprKCig",
      id_usuario_agente: 22,
      activo_usuario_agente: 1,
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
