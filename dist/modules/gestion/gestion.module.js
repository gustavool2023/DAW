var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { ClientesController } from "./controllers/clientes.controller.js";
import { TareasController } from "./controllers/tareas.controller.js";
import { ProyectosController } from "./controllers/proyectos.controller.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Proyecto } from "./entities/proyecto.entity.js";
import { Cliente } from "./entities/cliente.entity.js";
import { Tarea } from "./entities/tarea.entity.js";
import { TareasService } from "./services/tareas.service.js";
import { ProyectosService } from "./services/proyectos.service.js";
import { ClientesService } from "./services/clientes.service.js";
import { AuthModule } from "../auth/auth.module.js";
let GestionModule = class GestionModule {
};
GestionModule = __decorate([
    Module({
        imports: [TypeOrmModule.forFeature([Tarea, Cliente, Proyecto]), AuthModule],
        controllers: [ClientesController, TareasController, ProyectosController],
        providers: [TareasService,
            ProyectosService,
            ClientesService,
            {
                provide: "PROYECTOS_SERVICE",
                useExisting: ProyectosService
            }, {
                provide: "CLIENTES_SERVICE",
                useExisting: ClientesService
            }],
        exports: []
    })
], GestionModule);
export { GestionModule };
//# sourceMappingURL=gestion.module.js.map