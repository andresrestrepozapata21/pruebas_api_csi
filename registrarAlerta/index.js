var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY2Mzk3NzMsImV4cCI6MTY3NjcyNjE3MywiZGF0YSI6eyJpZCI6IjYiLCJlbWFpbCI6ImFyekBnbWFpbC5jb20ifX0.LcVbNtmSUM5wcV39hXykg_F7onlN3nVG19_hcOKqpI4');
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
          </div>
        `;
        form.reset();
      }
    });
});
