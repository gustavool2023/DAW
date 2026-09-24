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
import { Body, Controller, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UpdateTareaDto } from "../dtos/input/update-tarea.dto.js";
import { CreateTareaDto } from "../dtos/input/create-tarea.dto.js";
import { ApiBearerAuth } from "@nestjs/swagger";
import { TareasService } from "../services/tareas.service.js";
import { AuthGuard } from "../../auth/guards/auth.guard.js";
let TareasController = class TareasController {
    service;
    constructor(service) {
        this.service = service;
    }
    async crearTarea(dto, idProyecto) {
        return await this.service.crearTarea(idProyecto, dto);
    }
    async actualizarTarea(dto, id) {
        await this.service.editarTarea(id, dto);
    }
};
__decorate([
    ApiBearerAuth(),
    UseGuards(AuthGuard),
    Post(),
    __param(0, Body()),
    __param(1, Param('idProyecto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTareaDto, Number]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "crearTarea", null);
__decorate([
    ApiBearerAuth(),
    UseGuards(AuthGuard),
    Put(':id'),
    __param(0, Body()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateTareaDto, Number]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "actualizarTarea", null);
TareasController = __decorate([
    Controller('proyectos/:idProyecto/tareas'),
    __metadata("design:paramtypes", [TareasService])
], TareasController);
export { TareasController };
//# sourceMappingURL=tareas.controller.js.map