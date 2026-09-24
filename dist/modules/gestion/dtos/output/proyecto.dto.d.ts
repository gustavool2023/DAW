import { EstadosProyectosEnum } from "../../enums/estados-proyectos.enum.js";
import { ListTareaDTO } from "./list-tarea.dto.js";
export declare class ProyectoDTO {
    nombre: string;
    estado: EstadosProyectosEnum;
    cliente: string;
    tareas: ListTareaDTO[];
}
