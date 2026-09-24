import { EstadosTareasEnum } from "../../enums/estados-tareas.enum.js";
import { CreateTareaDto } from "./create-tarea.dto.js";
export declare class UpdateTareaDto extends CreateTareaDto {
    estado: EstadosTareasEnum;
}
