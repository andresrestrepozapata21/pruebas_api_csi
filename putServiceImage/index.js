var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY1MDMxNTIsImV4cCI6MTY3NjU4OTU1MiwiZGF0YSI6eyJpZCI6IjEiLCJlbWFpbCI6ImFyei45NTAyMDNAZ21haWwuY29tIn19.fPUEeeL2ee0N4hOB9XG2sJ9yoqoxMwCoXF8KD2PB1TE');
  fetch("https://pruebas.mipgenlinea.com/serviceImageUpdate", {
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
