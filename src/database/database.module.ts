import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Configuração do postgres
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'docker',
      database: 'trilha',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // Configuração do sqlite
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'trilhadb',
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    //   // entities: [UserEntity],
    //   synchronize: true,
    // }),
  ],
})
export class DatabaseModule {}
