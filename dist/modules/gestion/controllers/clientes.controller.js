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
import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, Version } from "@nestjs/common";
import { CreateClienteDto } from "../dtos/input/create-cliente.dto.js";
import { ApiBearerAuth, ApiOkResponse, ApiQuery } from "@nestjs/swagger";
import { ListClienteDTO } from "../dtos/output/list-cliente.dto.js";
import { UpdateClienteDto } from "../dtos/input/update-cliente.dto.js";
import { EstadosClientesEnum } from "../enums/estados-clientes.enum.js";
import { ClientesService } from "../services/clientes.service.js";
import { AuthGuard } from "../../auth/guards/auth.guard.js";
let ClientesController = class ClientesController {
    service;
    constructor(service) {
        this.service = service;
    }
    async crearCliente(dto) {
        return await this.service.crearCliente(dto);
    }
    async actualizarCliente(id, dto) {
        await this.service.actualizarCliente(id, dto);
    }
    async obtenerClientes(estado) {
        return await this.service.obtenerClientes(estado);
    }
};
__decorate([
    ApiBearerAuth(),
    UseGuards(AuthGuard),
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "crearCliente", null);
__decorate([
    ApiBearerAuth(),
    UseGuards(AuthGuard),
    Put(":id"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateClienteDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "actualizarCliente", null);
__decorate([
    ApiBearerAuth(),
    ApiOkResponse({ type: ListClienteDTO, isArray: true }),
    ApiQuery({
        name: 'estado',
        required: false,
        enum: EstadosClientesEnum
    }),
    UseGuards(AuthGuard),
    Version("1"),
    Get(),
    __param(0, Query("estado")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "obtenerClientes", null);
ClientesController = __decorate([
    Controller('clientes'),
    __metadata("design:paramtypes", [ClientesService])
], ClientesController);
export { ClientesController };
//# sourceMappingURL=clientes.controller.js.map