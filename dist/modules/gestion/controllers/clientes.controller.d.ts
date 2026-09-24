import { CreateClienteDto } from "../dtos/input/create-cliente.dto.js";
import { ListClienteDTO } from "../dtos/output/list-cliente.dto.js";
import { UpdateClienteDto } from "../dtos/input/update-cliente.dto.js";
import { EstadosClientesEnum } from "../enums/estados-clientes.enum.js";
import { ClientesService } from "../services/clientes.service.js";
export declare class ClientesController {
    private readonly service;
    constructor(service: ClientesService);
    crearCliente(dto: CreateClienteDto): Promise<{
        id: number;
    }>;
    actualizarCliente(id: number, dto: UpdateClienteDto): Promise<void>;
    obtenerClientes(estado: EstadosClientesEnum): Promise<ListClienteDTO[]>;
}
