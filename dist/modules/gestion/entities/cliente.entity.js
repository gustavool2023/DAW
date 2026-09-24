var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EstadosClientesEnum } from "../enums/estados-clientes.enum.js";
let Cliente = class Cliente {
    id;
    nombre;
    estado;
    proyectos;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Cliente.prototype, "id", void 0);
__decorate([
    Column({ name: "nombre" }),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    Column({ type: 'enum', enum: EstadosClientesEnum }),
    __metadata("design:type", String)
], Cliente.prototype, "estado", void 0);
__decorate([
    OneToMany(("Proyecto"), (proyecto) => proyecto.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "proyectos", void 0);
Cliente = __decorate([
    Entity({ name: "clientes" })
], Cliente);
export { Cliente };
//# sourceMappingURL=cliente.entity.js.map