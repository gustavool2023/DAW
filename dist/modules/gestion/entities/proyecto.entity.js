var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EstadosProyectosEnum } from "../enums/estados-proyectos.enum.js";
let Proyecto = class Proyecto {
    id;
    nombre;
    estado;
    idCliente;
    cliente;
    tareas;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Proyecto.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Proyecto.prototype, "nombre", void 0);
__decorate([
    Column({ type: 'enum', enum: EstadosProyectosEnum }),
    __metadata("design:type", String)
], Proyecto.prototype, "estado", void 0);
__decorate([
    Column({ name: "id_cliente" }),
    __metadata("design:type", Number)
], Proyecto.prototype, "idCliente", void 0);
__decorate([
    ManyToOne("Cliente"),
    JoinColumn({ name: "id_cliente" }),
    __metadata("design:type", Function)
], Proyecto.prototype, "cliente", void 0);
__decorate([
    OneToMany("Tarea", (tarea) => tarea.proyecto),
    __metadata("design:type", Array)
], Proyecto.prototype, "tareas", void 0);
Proyecto = __decorate([
    Entity({ name: 'proyectos' })
], Proyecto);
export { Proyecto };
//# sourceMappingURL=proyecto.entity.js.map