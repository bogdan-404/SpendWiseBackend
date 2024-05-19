import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@Body() expense: Expense) {
    return this.expensesService.create(expense);
  }

  @Get()
  findAll() {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.expensesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() expense: Partial<Expense>) {
    return this.expensesService.update(id, expense);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.expensesService.remove(id);
  }
}
