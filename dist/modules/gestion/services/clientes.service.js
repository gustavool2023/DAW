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
import { InjectRepository } from "@nestjs/typeorm";
import { Cliente } from "../entities/cliente.entity.js";
import { EstadosClientesEnum } from "../enums/estados-clientes.enum.js";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { Repository } from "typeorm";
import { ListClienteDTO } from "../dtos/output/list-cliente.dto.js";
import { BadRequestException, forwardRef, Inject } from "@nestjs/common";
let ClientesService = class ClientesService {
    repository;
    proyectosService;
    constructor(repository, proyectosService) {
        this.repository = repository;
        this.proyectosService = proyectosService;
    }
    async crearCliente(dto) {
        const cliente = this.repository.create(dto);
        cliente.estado = EstadosClientesEnum.ACTIVO;
        await this.repository.save(cliente);
        return { id: cliente.id };
    }
    async actualizarCliente(id, dto) {
        const cliente = await this.repository.findOneBy({ id });
        if (!cliente) {
            throw new BadRequestException('Cliente no encontrado');
        }
        const relacionadoConProyectos = await this.proyectosService.existeProyectoPorIdCliente(id);
        if (relacionadoConProyectos && dto.estado === EstadosClientesEnum.BAJA) {
            throw new BadRequestException('No se puede dar de baja un cliente con proyectos relacionados');
        }
        this.repository.merge(cliente, dto);
        await this.repository.save(cliente);
    }
    async obtenerClientes(estado) {
        const whereCondition = {};
        if (estado) {
            whereCondition.estado = estado;
        }
        const clientes = await this.repository.find({ select: { id: true, nombre: true, estado: true }, order: { id: 'ASC' }, where: whereCondition });
        const dtoList = [];
        for (const c of clientes) {
            const dto = new ListClienteDTO();
            dto.id = c.id;
            dto.nombre = c.nombre;
            dto.estado = c.estado;
            dtoList.push(dto);
        }
        return dtoList;
    }
    async existeClienteActivoPorId(id) {
        const existe = await this.repository.exists({ where: { id, estado: EstadosClientesEnum.ACTIVO } });
        return existe;
    }
};
ClientesService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Cliente)),
    __param(1, Inject(forwardRef(() => "PROYECTOS_SERVICE"))),
    __metadata("design:paramtypes", [typeof (_a = typeof Repository !== "undefined" && Repository) === "function" ? _a : Object, Function])
], ClientesService);
export { ClientesService };
//# sourceMappingURL=clientes.service.js.map