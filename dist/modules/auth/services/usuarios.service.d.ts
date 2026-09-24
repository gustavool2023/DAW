import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity.js";
export declare class UsuariosService {
    private readonly repository;
    constructor(repository: Repository<Usuario>);
    buscarUsuarioActivoPorNombre(nombre: string): Promise<Usuario | null>;
}
