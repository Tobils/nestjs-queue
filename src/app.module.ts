import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Bull from 'bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueModule } from './queue/queue.module';
import { QueueEnumm } from './utils/queue.enum';
import { BinModule } from './bin/bin.module';
require('dotenv').config();

const bullConfig: Bull.QueueOptions = {
  redis: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
  },
};

console.log({ bullConfig });

@Module({
  imports: [
    QueueModule,
    BullModule.forRoot(bullConfig),
    BullModule.registerQueue({
      name: 'bin-queue',
    }),
    ConfigModule.forRoot(),
    BinModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
