import { JwtService } from "@nestjs/jwt";
import { LoginDTO } from "../dtos/input/login.dto.js";
import { UsuariosService } from "./usuarios.service.js";
export declare class AuthService {
    private readonly usuariosService;
    private jwtService;
    constructor(usuariosService: UsuariosService, jwtService: JwtService);
    login(dto: LoginDTO): Promise<{
        accessToken: string;
    }>;
}
