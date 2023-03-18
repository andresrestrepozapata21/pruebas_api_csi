var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzg0NjAyODksImV4cCI6MTY5Mjk3NTQ4OSwiZGF0YSI6eyJpZCI6IjYwIiwiZW1haWwiOiJhcnouMzRAZ21haWwuY29tIn19.I93KP1VE3WAZRpnnFnzPOHq5VEgoyQOadnbvCHch4O8');
  fetch("https://pruebas.mipgenlinea.com/tripPictureRecord", {
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
