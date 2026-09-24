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
import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateProyectoDto } from "../dtos/input/create-proyecto.dto.js";
import { UpdateProyectoDto } from "../dtos/input/update-proyecto.dto.js";
import { ApiBearerAuth, ApiOkResponse } from "@nestjs/swagger";
import { ListProyectoDTO } from "../dtos/output/list-proyecto.dto.js";
import { ProyectosService } from "../services/proyectos.service.js";
import { AuthGuard } from "../../auth/guards/auth.guard.js";
let ProyectosController = class ProyectosController {
    service;
    constructor(service) {
        this.service = service;
    }
    async crearProyecto(dto) {
        return await this.service.crearProyecto(dto);
    }
    async actualizarProyecto(dto, id) {
        await this.service.actualizarProyecto(id, dto);
    }
    async obtenerProyectos() {
        return await this.service.obtenerProyectos();
    }
    async obtenerProyecto(id) {
        return await this.service.obtenerProyecto(id);
    }
};
__decorate([
    ApiBearerAuth(),
    UseGuards(AuthGuard),
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProyectoDto]),
    __metadata("design:returntype", Promise)
], ProyectosController.prototype, "crearProyecto", null);
__decorate([
    ApiBearerAuth(),
    UseGuards(AuthGuard),
    Put(':id'),
    __param(0, Body()),
    __param(1, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateProyectoDto, Number]),
    __metadata("design:returntype", Promise)
], ProyectosController.prototype, "actualizarProyecto", null);
__decorate([
    ApiBearerAuth(),
    ApiOkResponse({ type: ListProyectoDTO, isArray: true }),
    UseGuards(AuthGuard),
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProyectosController.prototype, "obtenerProyectos", null);
__decorate([
    ApiBearerAuth(),
    UseGuards(AuthGuard),
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProyectosController.prototype, "obtenerProyecto", null);
ProyectosController = __decorate([
    Controller('proyectos'),
    __metadata("design:paramtypes", [ProyectosService])
], ProyectosController);
export { ProyectosController };
//# sourceMappingURL=proyectos.controller.js.map