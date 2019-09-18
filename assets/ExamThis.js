// const persona = {
//   name: "ismael",
//   saludar: function(name) {
//     console.log(`hola ${this.name}`);
//   }
// };

// persona.saludar();

// const saludo = persona.saludar;
// //No obtiene this porque hace referencia
// //a la funcion donde no existe en el contexto
// //name (closures);
// saludo();

function saludar() {
  console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}

const ismael = {
  name: "Ismael",
  apellido: "Barrios"
};

saludar.call(ismael);

function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}

caminar.call(ismael, 400, "norte");

caminar.apply(ismael, [500, "sur"]);

const oscar = {
  name: "Oscar",
  apellido: "Sanchez"
};

const DanielSaluda = saludar.bind(oscar);
DanielSaluda();

const DanielCamina = caminar.bind(oscar);
DanielCamina(1000, "Este");

const IsmaelCamina = caminar.bind(oscar, 2000);
IsmaelCamina("Norte");
