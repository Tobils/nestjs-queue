import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueueEnumm } from 'src/utils/queue.enum';
import { QueueBinConsumer } from './queue-bin.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'bin-queue',
    }),
  ],
  providers: [QueueBinConsumer],
  exports: [QueueBinConsumer],
})
export class QueueModule {}
