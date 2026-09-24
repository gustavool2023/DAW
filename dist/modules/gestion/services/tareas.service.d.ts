import { Tarea } from "../entities/tarea.entity.js";
import { Repository } from "typeorm";
import { CreateTareaDto } from "../dtos/input/create-tarea.dto.js";
import { UpdateTareaDto } from "../dtos/input/update-tarea.dto.js";
export declare class TareasService {
    private readonly repository;
    constructor(repository: Repository<Tarea>);
    crearTarea(idProyecto: number, dto: CreateTareaDto): Promise<{
        id: number;
    }>;
    editarTarea(idTarea: number, dto: UpdateTareaDto): Promise<void>;
}
