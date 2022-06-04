import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    FirstModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'trilhadb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
