var btn1 = document.getElementById("btn1");
var answer = document.getElementById("answer1");


btn1.addEventListener("click", (e) => {
  fetch("https://apicsi.csisecurity.co/expirationPlanUser", {
    method: "POST",
    body: JSON.stringify({
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTYwMTk2MTEsImV4cCI6MTcxMDUzNDgxMSwiZGF0YSI6eyJpZCI6IjI0OSIsImVtYWlsIjoidXNlcnRlc3RAY3Npc2VjdXJpdHkuY28ifX0.Jy4OC3vtXYfYwqsqaXriIHv0LRejG81vsu6ZZQTrips",
      id_usuario_cliente: 249
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer1.innerHTML = `
                       ${data["result"]}
                  `;
      } else {
        answer1.innerHTML += `
                    ${data["detail"]["fecha_vencimiento"]}
                  `;
      }
    });
});
