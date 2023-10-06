var form = document.getElementById("form1");
var answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos = new FormData(form);
  datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzgzMDU1MzAsImV4cCI6MTY5MjgyMDczMCwiZGF0YSI6eyJpZCI6IjYxIiwiZW1haWwiOiJhcnouMzVAZ21haWwuY29tIn19.xai-_cwJ8DOa-n7kUOYR37k822cD5cpUtAPMjk2GNzU');
  fetch("https://apicsi.mipgenlinea.com/stopUpdate", {
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
