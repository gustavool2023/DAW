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
import { InjectRepository } from "@nestjs/typeorm";
import { Proyecto } from "../entities/proyecto.entity.js";
import { Repository, In } from "typeorm";
import { EstadosProyectosEnum } from "../enums/estados-proyectos.enum.js";
import { BadRequestException, forwardRef, Inject, Injectable } from "@nestjs/common";
import { ListProyectoDTO } from "../dtos/output/list-proyecto.dto.js";
import { ProyectoDTO } from "../dtos/output/proyecto.dto.js";
import { ListTareaDTO } from "../dtos/output/list-tarea.dto.js";
import { ListClienteDTO } from "../dtos/output/list-cliente.dto.js";
let ProyectosService = class ProyectosService {
    repository;
    clientesService;
    constructor(repository, clientesService) {
        this.repository = repository;
        this.clientesService = clientesService;
    }
    async crearProyecto(dto) {
        const proyecto = this.repository.create(dto);
        proyecto.estado = EstadosProyectosEnum.ACTIVO;
        const clienteActivo = await this.clientesService.existeClienteActivoPorId(dto.idCliente);
        if (!clienteActivo) {
            throw new BadRequestException('Se debe especificar un cliente activo para el proyecto');
        }
        await this.repository.save(proyecto);
        return { id: proyecto.id };
    }
    async actualizarProyecto(id, dto) {
        const proyecto = await this.repository.findOne({ where: { id } });
        if (!proyecto) {
            throw new BadRequestException('Proyecto no encontrado');
        }
        const clienteActivo = await this.clientesService.existeClienteActivoPorId(dto.idCliente);
        if (!clienteActivo) {
            throw new BadRequestException('Se debe especificar un cliente activo para el proyecto');
        }
        this.repository.merge(proyecto, dto);
        await this.repository.save(proyecto);
    }
    async obtenerProyectos() {
        const proyectos = await this.repository.find({ relations: { cliente: true }, order: { id: 'ASC' } });
        const dtoList = [];
        for (const p of proyectos) {
            const dto = new ListProyectoDTO();
            dto.id = p.id;
            dto.nombre = p.nombre;
            dto.estado = p.estado;
            dto.cliente = new ListClienteDTO();
            dto.cliente.id = p.cliente.id;
            dto.cliente.nombre = p.cliente.nombre;
            dto.cliente.estado = p.cliente.estado;
            dtoList.push(dto);
        }
        return dtoList;
    }
    async obtenerProyecto(id) {
        const proyecto = await this.repository.findOne({ where: { id }, relations: { cliente: true, tareas: true }, order: { tareas: { id: 'ASC' } } });
        if (!proyecto) {
            throw new BadRequestException('Proyecto no encontrado');
        }
        const dto = new ProyectoDTO();
        dto.nombre = proyecto.nombre;
        dto.estado = proyecto.estado;
        dto.cliente = proyecto.cliente.nombre;
        const tareas = [];
        for (const t of proyecto.tareas) {
            const tareaDto = new ListTareaDTO();
            tareaDto.id = t.id;
            tareaDto.descripcion = t.descripcion;
            tareaDto.estado = t.estado;
            tareas.push(tareaDto);
        }
        dto.tareas = tareas;
        return dto;
    }
    async existeProyectoPorIdCliente(idCliente) {
        const existe = await this.repository.exists({ where: { cliente: { id: idCliente }, estado: In([EstadosProyectosEnum.ACTIVO, EstadosProyectosEnum.FINALIZADO]) } });
        return existe;
    }
};
ProyectosService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Proyecto)),
    __param(1, Inject(forwardRef(() => "CLIENTES_SERVICE"))),
    __metadata("design:paramtypes", [Repository, Function])
], ProyectosService);
export { ProyectosService };
//# sourceMappingURL=proyectos.service.js.map