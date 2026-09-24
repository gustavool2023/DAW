var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { UsuariosService } from "./usuarios.service.js";
let AuthService = class AuthService {
    usuariosService;
    jwtService;
    constructor(usuariosService, jwtService) {
        this.usuariosService = usuariosService;
        this.jwtService = jwtService;
    }
    async login(dto) {
        const usuario = await this.usuariosService.buscarUsuarioActivoPorNombre(dto.nombre);
        if (!usuario) {
            throw new UnauthorizedException("Usuario no encontrado");
        }
        if (!bcrypt.compareSync(dto.clave, usuario.clave)) {
            throw new UnauthorizedException();
        }
        const payload = { nombre: usuario.nombre, sub: usuario.id };
        return {
            accessToken: this.jwtService.sign(payload)
        };
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [UsuariosService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map