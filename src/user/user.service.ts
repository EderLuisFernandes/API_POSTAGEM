import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createFakeUsers(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
      const user = new User();
      user.name = faker.person.fullName();
      user.email = faker.internet.email();
      await this.userRepository.save(user);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
