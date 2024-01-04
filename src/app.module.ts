import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { url } from 'inspector';
import { NoteModule } from 'modules/notes/notes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/notes'),
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}