import { CreateClienteDto } from "./create-cliente.dto.js";
import { EstadosClientesEnum } from "../../enums/estados-clientes.enum.js";
export declare class UpdateClienteDto extends CreateClienteDto {
    estado: EstadosClientesEnum;
}
