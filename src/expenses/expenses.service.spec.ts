import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
      @InjectRepository(Expense)
      private expensesRepository: Repository<Expense>,
  ) {}

  create(expense: Expense): Promise<Expense> {
    return this.expensesRepository.save(expense);
  }

  findAll(): Promise<Expense[]> {
    return this.expensesRepository.find();
  }

  findOne(id: number): Promise<Expense> {
    return this.expensesRepository.findOne(id);
  }

  async update(id: number, expense: Partial<Expense>): Promise<Expense> {
    await this.expensesRepository.update(id, expense);
    return this.expensesRepository.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.expensesRepository.delete(id).then(() => undefined);
  }
}
