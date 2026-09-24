import { EstadosTareasEnum } from "../enums/estados-tareas.enum.js";
import type { Proyecto } from "./proyecto.entity.js";
export declare class Tarea {
    id: number;
    descripcion: string;
    estado: EstadosTareasEnum;
    idProyecto: number;
    proyecto: Proyecto;
}
