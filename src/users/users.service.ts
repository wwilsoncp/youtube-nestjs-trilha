import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public findAll(): User[] {
    return this.users;
  }

  public create(user: User): User {
    this.users.push(user);
    return user;
  }
}
