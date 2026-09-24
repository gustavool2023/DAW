import { CreateProyectoDto } from "../dtos/input/create-proyecto.dto.js";
import { UpdateProyectoDto } from "../dtos/input/update-proyecto.dto.js";
import { ListProyectoDTO } from "../dtos/output/list-proyecto.dto.js";
import { ProyectoDTO } from "../dtos/output/proyecto.dto.js";
import { ProyectosService } from "../services/proyectos.service.js";
export declare class ProyectosController {
    private readonly service;
    constructor(service: ProyectosService);
    crearProyecto(dto: CreateProyectoDto): Promise<{
        id: number;
    }>;
    actualizarProyecto(dto: UpdateProyectoDto, id: number): Promise<void>;
    obtenerProyectos(): Promise<ListProyectoDTO[]>;
    obtenerProyecto(id: number): Promise<ProyectoDTO>;
}
