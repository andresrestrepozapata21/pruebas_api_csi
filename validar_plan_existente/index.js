var btn2 = document.getElementById("btn2");
var answer2 = document.getElementById("answer2");

btn2.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/validateExistingPlan", {
    method: "POST",
    body: JSON.stringify({
      "id_usuario_cliente": 4,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer2.innerHTML = `
                   ${data["result"]}
              `;
      } else {
        answer2.innerHTML += `
                ${data["result"]}
              `;
      }
    });
});
