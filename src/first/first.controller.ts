import { Controller, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { FirstService } from './first.service';

@Controller('first')
export class FirstController {
  constructor(private firstService: FirstService) {}
  @Get()
  public firstMethod() {
    return this.firstService.firstMethod();
  }
  @Get('notfound')
  public firstMethodDataNotFound() {
    throw new NotFoundException({
      statusCode: HttpStatus.NOT_FOUND,
      message: 'Registro não encontrado.',
      auxMessage:
        'Mensagem auxiliar para o usuário sobre o registro não encontrado',
    });
  }
}
