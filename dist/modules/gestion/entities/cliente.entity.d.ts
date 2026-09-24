import { EstadosClientesEnum } from "../enums/estados-clientes.enum.js";
import type { Proyecto } from "./proyecto.entity.js";
export declare class Cliente {
    id: number;
    nombre: string;
    estado: EstadosClientesEnum;
    proyectos: Proyecto[];
}
