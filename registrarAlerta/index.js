var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY5MzE2NzUsImV4cCI6MTY5MTQ0Njg3NSwiZGF0YSI6eyJpZCI6IjQiLCJlbWFpbCI6ImFyei45NUBnbWFpbC5jb20ifX0.PkwOlsrhsPHDVV5RxCkcGj_JQAxfD3iNGQnHZq-phD0');
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
