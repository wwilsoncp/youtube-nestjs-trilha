import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from './database/user.entity';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  public async findAll(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }
  @Get(':id')
  public async findById(@Param() param: string[]): Promise<UserEntity> {
    const id: number = param['id'];
    const userEntity = await this.usersService.findById(id);

    if (!userEntity) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado.',
        auxMessage: `Não existe usuário cadastrado com id: ${id}.`,
      });
    }
    return userEntity;
  }

  @Post()
  @ApiBody({ type: UserDto })
  public async create(@Body() user: UserDto): Promise<UserEntity> {
    return await this.usersService.create(user);
  }
}
