    var form = document.getElementById("form1");
    var answer = document.getElementById("answer");
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let datos = new FormData(form);
      datos.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODQ5NDA5MjcsImV4cCI6MTY5OTQ1NjEyNywiZGF0YSI6eyJpZCI6IjYiLCJlbWFpbCI6ImFyekBnbWFpbC5jb20ifX0.mhZYtK4yPFR1xyd8saAHOzdThLSS5tqu8prWbm99jpc');
      fetch("https://apicsi.mipgenlinea.com/stopRecord", {
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
    