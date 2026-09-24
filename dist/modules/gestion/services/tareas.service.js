var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tarea } from "../entities/tarea.entity.js";
import { Repository } from "typeorm";
import { EstadosTareasEnum } from "../enums/estados-tareas.enum.js";
let TareasService = class TareasService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async crearTarea(idProyecto, dto) {
        const tarea = this.repository.create(dto);
        tarea.estado = EstadosTareasEnum.PENDIENTE;
        tarea.idProyecto = idProyecto;
        await this.repository.save(tarea);
        return { id: tarea.id };
    }
    async editarTarea(idTarea, dto) {
        const tarea = await this.repository.findOne({
            where: {
                id: idTarea
            }
        });
        if (!tarea) {
            throw new BadRequestException("La tarea indicada no existe");
        }
        this.repository.merge(tarea, dto);
        await this.repository.save(tarea);
    }
};
TareasService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Tarea)),
    __metadata("design:paramtypes", [typeof (_a = typeof Repository !== "undefined" && Repository) === "function" ? _a : Object])
], TareasService);
export { TareasService };
//# sourceMappingURL=tareas.service.js.map