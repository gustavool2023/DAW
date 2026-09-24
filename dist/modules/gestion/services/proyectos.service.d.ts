import { CreateProyectoDto } from "../dtos/input/create-proyecto.dto.js";
import { Proyecto } from "../entities/proyecto.entity.js";
import { Repository } from "typeorm";
import { UpdateProyectoDto } from "../dtos/input/update-proyecto.dto.js";
import { ListProyectoDTO } from "../dtos/output/list-proyecto.dto.js";
import { ProyectoDTO } from "../dtos/output/proyecto.dto.js";
import type { ClientesService } from "./clientes.service.js";
export declare class ProyectosService {
    private readonly repository;
    private readonly clientesService;
    constructor(repository: Repository<Proyecto>, clientesService: ClientesService);
    crearProyecto(dto: CreateProyectoDto): Promise<{
        id: number;
    }>;
    actualizarProyecto(id: number, dto: UpdateProyectoDto): Promise<void>;
    obtenerProyectos(): Promise<ListProyectoDTO[]>;
    obtenerProyecto(id: number): Promise<ProyectoDTO>;
    existeProyectoPorIdCliente(idCliente: number): Promise<boolean>;
}
