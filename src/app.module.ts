import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as ormConfig from '../ormconfig.json';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig as TypeOrmModuleOptions)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
