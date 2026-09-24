import { LoginDTO } from "../dtos/input/login.dto.js";
import { AuthService } from "../services/auth.service.js";
export declare class LoginController {
    private readonly service;
    constructor(service: AuthService);
    login(dto: LoginDTO): Promise<{
        accessToken: string;
    }>;
}
