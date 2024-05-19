import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ExpensesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}