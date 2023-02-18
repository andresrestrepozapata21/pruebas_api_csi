var btn1 = document.getElementById("btn1");
var answer1 = document.getElementById("answer1");

btn1.addEventListener("click", (e) => {
  fetch("https://pruebas.mipgenlinea.com/customerRecord", {
    method: "POST",
    body: JSON.stringify({
      Enfermedades_base: "alergias, diabetes",
      nombre_usuario_cliente: "Andres",
      apellido_usuario_cliente: "Zapata",
      telefono_usuario_cliente: "3186337855",
      cedula_usuario_cliente: "1113331782",
      tipo_de_sangre: "O+",
      direccion_usuario_cliente: "reservada",
      email: "arz.361@gmail.com",
      arl: "Positiva",
      password: "12345",
      alergias: "renitis",
      eps: "neuva EPS",
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
        answer1.innerHTML = `
                 ${data["result"]}<br>
                 ${data["lastId"]}
                 
                 `;
                 id = data["lastId"];
      }
    });
});