import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';

@Injectable()
export class ExpensesService {
    constructor(
        @InjectRepository(Expense)
        private readonly expensesRepository: Repository<Expense>,
    ) {}

    findAll(): Promise<Expense[]> {
        return this.expensesRepository.find();
    }

    findOne(id: number): Promise<Expense> {
        return this.expensesRepository.findOneBy({ id });
    }

    create(expense: Expense): Promise<Expense> {
        return this.expensesRepository.save(expense);
    }

    async update(id: number, expenseData: Partial<Expense>): Promise<void> {
        await this.expensesRepository.update(id, expenseData);
    }

    async remove(id: number): Promise<void> {
        await this.expensesRepository.delete(id);
    }
}
