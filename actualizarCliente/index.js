var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODc4ODI4OTUsImV4cCI6MTcwMjM5ODA5NSwiZGF0YSI6eyJpZCI6IjkxIiwiZW1haWwiOiJkaWVnb0BnbWFpbC5jb20ifX0.q0kjpSHKRHWux6J1wz7AIkG8ZvauhJTi_5fju2eukbQ');
  fetch("https://apicsi.csisecurity.co/putCustomer", {
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
