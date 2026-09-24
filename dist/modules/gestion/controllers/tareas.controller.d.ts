import { UpdateTareaDto } from "../dtos/input/update-tarea.dto.js";
import { CreateTareaDto } from "../dtos/input/create-tarea.dto.js";
import { TareasService } from "../services/tareas.service.js";
export declare class TareasController {
    private readonly service;
    constructor(service: TareasService);
    crearTarea(dto: CreateTareaDto, idProyecto: number): Promise<{
        id: number;
    }>;
    actualizarTarea(dto: UpdateTareaDto, id: number): Promise<void>;
}
