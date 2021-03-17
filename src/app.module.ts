import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
<<<<<<< HEAD
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster0.t6hdz.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
=======
    MongooseModule.forRoot(
      'mongodb+srv://username:GPVmY6RP6fgUPEfN@cluster0.t6hdz.mongodb.net/addorremove?retryWrites=true&w=majority',
>>>>>>> 6df8f6aa7cd9b16a0cf32bf2897d96d211af7196
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
