var btn1 = document.getElementById("btn1");
var answer1 = document.getElementById("answer1");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/homePage", {
    method: "POST",
    body: JSON.stringify({
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzY1NjE5OTUsImV4cCI6MTY3NjY0ODM5NSwiZGF0YSI6eyJpZCI6IjYiLCJlbWFpbCI6ImFyekBnbWFpbC5jb20ifX0.AHYbljfZfQxekdceVjrLVJZfcY6ukm7DRiyPTq4UOdA",
      id_usuario_cliente: 4,
      latitud: 4.265434,
      longitud: -75.928713,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data["status"] !== 200) {
        answer1.innerHTML = `
  
                 ${data["result"]}
            `;
      } else {
        if (data["detail"]["zona"]["patrocinada_zona"] === "1") {
          var zona_patrocinada = "Zona Patrocinada";
        } else {
          var zona_patrocinada = "Zona NO Patrocinada";
        }

        for (const iterator of data["detail"]["alertas_cercanas"]) {
          if (iterator["distancia"] <= 100) {
            var zona_segura = "Zona NO Segura";
          } else {
            var zona_segura = "Estas en una Zona Segura";
          }
        }
        var items = "";

        for (const iterator of data["detail"]["servicios_zona"]) {
          items += `
              <div>
                <object data="https://pruebas.mipgenlinea.com/${iterator["ruta_imagen_servicio"]}" width="150" height="150"> </object>
                <h2>${iterator["descripcion_servicio"]}</h2>
                
              </div>
  
            `;
        }

        answer1.innerHTML = `
          <h1>Bienvenido ${data["detail"]["nombre_usuario_cliente"]}</h1>
          <br>
          <div style="background-color: #FFC107;">
              <h2>${data["detail"]["tipo_plan"]} *</h2>
              <h2>Vence el ${data["detail"]["vencimiento"]}</h2>
          </div>
          <br>
          <div style="background-color: #007bff; color: #FFFFFF;">
              <h2>${zona_patrocinada}</h2>
              <h3>Estas en una ${zona_patrocinada}</h3>
          </div>
          <br>
          <div style="border: 1px solid #28a745; border-radius: 25px ;color: #28a745;"> 
              <h2>${zona_segura}</h2>
          </div>
          <br>
          <h2>En caso de una emergencia presiona 
              el botón que necesites utilizar</h2>
          <br>
          <div>
              ${items}
          </div>
          `;
      }
    });
});
