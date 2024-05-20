import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
    constructor(
        @InjectRepository(Expense)
        private readonly expensesRepository: Repository<Expense>,
    ) {}

    create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
        const expense = this.expensesRepository.create(createExpenseDto);
        return this.expensesRepository.save(expense);
    }

    findAll(): Promise<Expense[]> {
        return this.expensesRepository.find();
    }

    findOne(id: number): Promise<Expense> {
        return this.expensesRepository.findOne({ where: { id } });
    }

    async update(id: number, updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
        await this.expensesRepository.update(id, updateExpenseDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.expensesRepository.delete(id);
    }
}
