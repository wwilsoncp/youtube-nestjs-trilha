import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  public findAll(): User[] {
    return this.usersService.findAll();
  }
  @Post()
  @ApiBody({ type: UserDto })
  public create(@Body() user: UserDto): User {
    return this.usersService.create(user);
  }
}
