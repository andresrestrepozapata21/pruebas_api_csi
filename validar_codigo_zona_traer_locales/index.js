var btn1 = document.getElementById("btn1");
var answer1 = document.getElementById("answer1");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/checkZoneCode", {
    method: "POST",
    body: JSON.stringify({
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzc5NDE1ODIsImV4cCI6MTY5MjQ1Njc4MiwiZGF0YSI6eyJpZCI6Ijc3IiwiZW1haWwiOiJhcnouMzY1QGdtYWlsLmNvbSJ9fQ.BZE2zMfkR35pgypIQwt-cuRfpR8eIdVmr7nul3imcoc",
      id_zona: 3,
      codigo_zona: "PAL2023",
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

        if(data["result"] == 3){
            if (data["detail"]["zona"]["patrocinada_zona"] === "1") {
                var zona_patrocinada = "Zona Patrocinada";
            } else {
                var zona_patrocinada = "Zona NO Patrocinada";
            }

            var items = "";
            for (const iterator of data["detail"]["establecimientos"]) {
                items += `
                <div>
                <img src="https://pruebas.mipgenlinea.com/${iterator["ruta_imagen_establecimiento"]}" width="150" height="150"> </img>
                <h2>${iterator["nombre_establecimiento"]}</h2>
                <h2>${iterator["nombre_promocion"]}</h2>
                <p>${iterator["descripcion_corta_promocion"]}</p>
                </div>
                <br>
                `;
            }
            
            answer1.innerHTML = `
            <h1>${zona_patrocinada}</h1>
            <img src="https://pruebas.mipgenlinea.com/${data["detail"]["zona"]["ruta_imagen_zona"]}" alt="">
            <h1>${data["detail"]["zona"]["descripcion_zona"]}</h1>
            
            <h2>adicionales para ti</h2>
            
            <div>
            ${items}
            </div>
            `;
        }else{
            answer1.innerHTML = `
                 ${data["result"]}
            `;
        }
    }
    });
});
