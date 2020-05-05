const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de tarea por hacer",
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completada o pendiente la tarea",
};

const { argv } = require("yargs")
  .command("crear", "Crea una tarea por hacer", {
    descripcion,
  })
  .command("actualizar", "Crea una tarea por hacer", {
    descripcion,
    completado,
  })
  .command("listar", "Crea una tarea por hacer", {
    listar: {
      alias: "l",
      desc: "Lista las tareas por hacer",
    },
  })
  .command("borrar", "Borra una tarea por hacer", {
    descripcion,
  })
  .help();

module.exports = {
  argv,
};
