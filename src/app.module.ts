// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    ExpensesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',        // Set type to SQLite
      database: 'db.sqlite', // Path to the SQLite file
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,     // Synchronize the database schema on startup
    }),
  ],
})
export class AppModule {}
