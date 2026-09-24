import { Cliente } from "../entities/cliente.entity.js";
import { CreateClienteDto } from "../dtos/input/create-cliente.dto.js";
import { EstadosClientesEnum } from "../enums/estados-clientes.enum.js";
import { UpdateClienteDto } from "../dtos/input/update-cliente.dto.js";
import { Repository } from "typeorm";
import { ListClienteDTO } from "../dtos/output/list-cliente.dto.js";
import type { ProyectosService } from "./proyectos.service.js";
export declare class ClientesService {
    private readonly repository;
    private readonly proyectosService;
    constructor(repository: Repository<Cliente>, proyectosService: ProyectosService);
    crearCliente(dto: CreateClienteDto): Promise<{
        id: number;
    }>;
    actualizarCliente(id: number, dto: UpdateClienteDto): Promise<void>;
    obtenerClientes(estado: EstadosClientesEnum): Promise<ListClienteDTO[]>;
    existeClienteActivoPorId(id: number): Promise<boolean>;
}
