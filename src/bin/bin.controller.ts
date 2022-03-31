import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BinService } from './bin.service';
import { CreateBinDto } from './dto/create-bin.dto';
import { UpdateBinDto } from './dto/update-bin.dto';

@Controller('bin')
export class BinController {
  constructor(private readonly binService: BinService) {}

  @Post()
  create(@Body() createBinDto: CreateBinDto) {
    return this.binService.create(createBinDto);
  }

  @Get()
  findAll() {
    return this.binService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.binService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBinDto: UpdateBinDto) {
    return this.binService.update(+id, updateBinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.binService.remove(+id);
  }
}
