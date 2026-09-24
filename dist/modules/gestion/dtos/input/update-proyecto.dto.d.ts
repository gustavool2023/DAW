import { CreateProyectoDto } from "./create-proyecto.dto.js";
import { EstadosProyectosEnum } from "../../enums/estados-proyectos.enum.js";
export declare class UpdateProyectoDto extends CreateProyectoDto {
    estado: EstadosProyectosEnum;
}
