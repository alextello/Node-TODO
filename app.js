const { argv } = require("./config/yargs");
const colors = require("colors");
const {
  crear,
  getListado,
  actualizar,
  borrar,
} = require("./por-hacer/por-hacer");
const comando = argv._[0];
switch (comando) {
  case "crear":
    const tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    const listado = getListado();
    for (const tarea of listado) {
      console.log("=======POR HACER=======".green);
      console.log(tarea.descripcion);
      console.log("ESTADO: ", tarea.completado);
      console.log("=======================".green);
    }
    break;
  case "actualizar":
    const resp = actualizar(argv.descripcion, argv.completado);
    if (resp) {
      console.log("Actualizado");
    } else {
      console.log("No se encontró");
    }
    break;
  case "borrar":
    const borrado = borrar(argv.descripcion);
    if (borrado) {
      console.log("La tarea se ha borrado");
    } else {
      console.log("No se encontró");
    }
    break;
  default:
    console.log("comando no reconocido");

    break;
}
