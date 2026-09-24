var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { LoginController } from "./controllers/login.controller.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity.js";
import { UsuariosService } from "./services/usuarios.service.js";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "./services/auth.service.js";
import { AuthGuard } from "./guards/auth.guard.js";
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    Module({
        imports: [TypeOrmModule.forFeature([Usuario]),
            JwtModule.registerAsync({
                inject: [ConfigService],
                global: true,
                useFactory: (configService) => ({
                    secret: process.env.JWT_SECRET,
                    signOptions: { expiresIn: '8h' },
                }),
            }),
        ],
        controllers: [LoginController],
        providers: [UsuariosService, AuthService, AuthGuard],
        exports: [AuthGuard]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map