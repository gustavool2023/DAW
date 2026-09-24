var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module.js';
import { GestionModule } from './modules/gestion/gestion.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [ConfigModule.forRoot({
                isGlobal: true
            }),
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '5432'),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: false,
                autoLoadEntities: true,
                logging: process.env.DB_LOGGING === 'true',
                logger: 'advanced-console',
            }),
            AuthModule,
            GestionModule],
        controllers: [],
        providers: [],
        exports: []
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map