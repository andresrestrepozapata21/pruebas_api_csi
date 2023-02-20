var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY5MDIxMzIsImV4cCI6MTY3Njk4ODUzMiwiZGF0YSI6eyJpZCI6IjEiLCJlbWFpbCI6ImFyei45NTAyMDNAZ21haWwuY29tIn19.4j66TMuC2q5vUWBGI4xIYESCmhJSSJOoSxA4_QNWzaY');
  fetch("https://pruebas.mipgenlinea.com/serviceRecord", {
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
