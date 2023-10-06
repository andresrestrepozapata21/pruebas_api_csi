var form = document.getElementById("form1");
var answer = document.getElementById("answer");

var form2 = document.getElementById("form2");
var answer2 = document.getElementById("answer2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  fetch("https://apicsi.mipgenlinea.com/uploadDocumentsCustomer", {
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
          </div>
        `;
        form.reset();
      }
    });
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form2);
  fetch("https://pruebas.mipgenlinea.com/uploadDocumentsAgent", {
    method: "POST",
    body: datos,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === "error") {
        answer2.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${data["result"]}
              </div>
            `;
      } else {
        answer2.innerHTML = `
          <div class="alert alert-success" role="alert">
                ${data["result"]}
            </div>
          `;
        form2.reset();
      }
    });
});
