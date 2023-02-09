var btn1 = document.getElementById("btn1");
var answer = document.getElementById("answer1");

var btn2 = document.getElementById("btn2");
var answer2 = document.getElementById("answer2");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/getPasswordAgent", {
    method: "POST",
    body: JSON.stringify({
      email: "arz.955@gmail.com",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer1.innerHTML = `
                       ${data["result"]}
                  `;
      } else {
        answer1.innerHTML += `
                    ${data["detail"][0]["password"]}
                  `;
      }
    });
});

btn2.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/getPasswordCustomer", {
    method: "POST",
    body: JSON.stringify({
      email: "arz.95@gmail.com",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer2.innerHTML = `
                   ${data["result"]}
              `;
      } else {
        answer2.innerHTML += `
                ${data["detail"][0]["password"]}
              `;
      }
    });
});
