import { EstadosProyectosEnum } from "../enums/estados-proyectos.enum.js";
import type { Cliente } from "./cliente.entity.js";
import type { Tarea } from "./tarea.entity.js";
export declare class Proyecto {
    id: number;
    nombre: string;
    estado: EstadosProyectosEnum;
    idCliente: number;
    cliente: Cliente;
    tareas: Tarea[];
}
