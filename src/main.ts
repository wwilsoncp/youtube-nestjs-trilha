import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Trilha NestJS')
    .setDescription('Descrição da API de trilha com nestjs')
    .setVersion('1.0')
    .addTag('trilha')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // http://localhost:8000/api vai exibir a documentação, porém precisa criar os DTOs e as anotações necessárias nos métodos
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();
