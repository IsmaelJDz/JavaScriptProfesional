const persona = {
  name: "ismael",
  saludar: function(name) {
    console.log(`hola ${this.name}`);
  }
};

persona.saludar();

const saludo = persona.saludar;
//No obtiene this porque hace referencia
//a la funcion donde no existe en el contexto
//name (closures);
saludo();
