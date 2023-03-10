var btn1 = document.getElementById("btn1");
var answer = document.getElementById("answer1");

var btn2 = document.getElementById("btn2");
var answer2 = document.getElementById("answer2");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/getPlans", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer1.innerHTML = `
  
                 ${data["result"]}
            `;
      } else {
        for (const iterator of data["detail"]) {
          answer1.innerHTML += `
            <img src="https://pruebas.mipgenlinea.com/${iterator["ruta_imagen_plan"]}" alt="">
            <br>
            <h2>${iterator["tipo_plan"]}</h2>
            <br>
            <h2>${iterator["precio_plan"]}</h2>
            <br>
            <h2>${iterator["descripcion_plan"]}</h2>
            <br>
            `;
        }
      }
    });
});

btn2.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/getPlan", {
    method: "POST",
    body: JSON.stringify({
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzYzODg4MDQsImV4cCI6MTY3NjQ3NTIwNCwiZGF0YSI6eyJpZCI6IjEzIiwiZW1haWwiOiJkaWVnb2FyYmVsYWV6LmNvQGdtYWlsLmNvbSJ9fQ.qgguMiTLrbubVX_5QKJtwNYv3Vp3KqWjE9x3Ydt3hKw",
      id_plan: 10,
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
            <img src="https://pruebas.mipgenlinea.com/${data["detail"][0]["ruta_imagen_plan"]}" alt="">
            <br>
            <h2>${data["detail"][0]["tipo_plan"]}</h2>
            <br>
            <h2>${data["detail"][0]["precio_plan"]}</h2>
            <br>
            <h2>${data["detail"][0]["descripcion_plan"]}</h2>
            <br>
            `;
      }
    });
});
