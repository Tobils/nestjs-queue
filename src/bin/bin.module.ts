import { Module } from '@nestjs/common';
import { BinService } from './bin.service';
import { BinController } from './bin.controller';
import { BullModule } from '@nestjs/bull';
import { QueueEnumm } from 'src/utils/queue.enum';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'bin-queue',
    }),
  ],
  controllers: [BinController],
  providers: [BinService],
})
export class BinModule {}
