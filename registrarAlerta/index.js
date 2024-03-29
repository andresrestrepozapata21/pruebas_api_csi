var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTQ0NTk3MjcsImV4cCI6MTcwODk3NDkyNywiZGF0YSI6eyJpZCI6IjIzMiIsImVtYWlsIjoiYXJ6Ljk1MDIwM0BnbWFpbC5jb20ifX0.lqx-kk8x6Fcn32OpULl3JEPta8LAyyMoCz11JR3P9cA');
  fetch("https://apicsi.csisecurity.co/alertRecord", {
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
