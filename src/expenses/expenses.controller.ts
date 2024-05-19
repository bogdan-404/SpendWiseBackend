import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) {}

    @Get()
    findAll() {
        return this.expensesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.expensesService.findOne(id);
    }

    @Post()
    create(@Body() expense: Expense) {
        return this.expensesService.create(expense);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() expenseData: Partial<Expense>) {
        return this.expensesService.update(id, expenseData);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.expensesService.remove(id);
    }
}
