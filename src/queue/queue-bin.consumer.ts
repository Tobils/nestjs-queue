import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { QueueJobEnum } from 'src/utils/queue-job.enum';
import { QueueEnumm } from 'src/utils/queue.enum';

@Processor(QueueEnumm.bin)
export class QueueBinConsumer {
  private readonly logger: Logger = new Logger(QueueBinConsumer.name);

  @Process(QueueJobEnum.BinJob)
  async read(job: Job<unknown>) {
    await this.sleep(4000);
    this.logger.debug(`bin job is active ${job.id}`);
    this.logger.log({ job: job.data });
  }

  /**
   *
   * @param ms number of milisecond
   * @returns promise
   */
  sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
