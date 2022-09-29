import { app } from "./app";
import { startConnection } from './database/db'

startConnection()
app.listen(3000);
console.log("Corriendo en puerto 3000");
