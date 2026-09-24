var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { CreateClienteDto } from "./create-cliente.dto.js";
import { EstadosClientesEnum } from "../../enums/estados-clientes.enum.js";
export class UpdateClienteDto extends CreateClienteDto {
    estado;
}
__decorate([
    ApiProperty({ enum: EstadosClientesEnum, example: EstadosClientesEnum.ACTIVO }),
    IsEnum(EstadosClientesEnum),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "estado", void 0);
//# sourceMappingURL=update-cliente.dto.js.map