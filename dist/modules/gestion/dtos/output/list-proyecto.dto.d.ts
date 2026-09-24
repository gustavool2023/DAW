import { EstadosProyectosEnum } from "../../enums/estados-proyectos.enum.js";
import { ListClienteDTO } from "./list-cliente.dto.js";
export declare class ListProyectoDTO {
    id: number;
    nombre: string;
    estado: EstadosProyectosEnum;
    cliente: ListClienteDTO;
}
