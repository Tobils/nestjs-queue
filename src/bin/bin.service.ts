import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { QueueBinConsumer } from 'src/queue/queue-bin.consumer';
import { QueueJobEnum } from 'src/utils/queue-job.enum';
import { QueueEnumm } from 'src/utils/queue.enum';
import { CreateBinDto } from './dto/create-bin.dto';
import { UpdateBinDto } from './dto/update-bin.dto';

@Injectable()
export class BinService {
  constructor(
    @InjectQueue('bin-queue')
    private readonly queue: Queue,
  ) {}
  private readonly logger: Logger = new Logger(BinService.name);

  async create(createBinDto: CreateBinDto) {
    this.logger.log('This action adds a new bin');
    this.queue.add('bin-job', {
      createBinDto,
    });
    return createBinDto;
  }

  async findAll() {
    return `This action returns all bin`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} bin`;
  }

  async update(id: number, updateBinDto: UpdateBinDto) {
    return `This action updates a #${id} bin`;
  }

  async remove(id: number) {
    return `This action removes a #${id} bin`;
  }
}
