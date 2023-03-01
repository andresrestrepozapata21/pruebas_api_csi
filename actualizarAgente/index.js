var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzc3MTAwNTksImV4cCI6MTY5MjIyNTI1OSwiZGF0YSI6eyJpZCI6IjI0IiwiZW1haWwiOiJhcnpAZ21haWwuY29tIn19.POyq2TBDNph8oOp9qCrjBIIznGXhSQsmtnLiL-oxlKc');
  fetch("https://pruebas.mipgenlinea.com/putAgent", {
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
