var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzc4NzEwMjEsImV4cCI6MTY5MjM4NjIyMSwiZGF0YSI6eyJpZCI6Ijc3IiwiZW1haWwiOiJhcnouMzY1QGdtYWlsLmNvbSJ9fQ.AKeNoP7d0ip44qlYpp_Zm0FAmYpf05yGdODsyKREnBw');
  fetch("https://pruebas.mipgenlinea.com/alertRecord", {
    method: "POST",
    body: datos,
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
              <br>
              ${data["detail"]}
          </div>
        `;

        console.log(data);
        console.log(data["detail"]);
        form.reset();
      }
    });
});
