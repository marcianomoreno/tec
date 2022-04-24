import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('drums')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDrums() {
    console.log('controller:getDrums');
    return this.appService.getDrums();
  }

  @Get(':id')
  getDrumById(@Param('id', ParseIntPipe) id: number) {
    console.log('controller:getDrumById');
    return this.appService.getDrumById(id);
  }

  @Post()
  addDrum() {
    console.log('controller:addDrum');
    return this.appService.addDrum();
  }

  @Put(':id')
  updateDrum() {
    console.log('controller:updateDrum');
    return this.appService.updateDrum();
  }

  @Patch(':id')
  partialUpdateDrum() {
    console.log('controller:partialUpdateDrum');
    return this.appService.partialUpdateDrum();
  }


  @Delete(':id')
  deleteDrum(@Param('id', ParseIntPipe) id: number) {
    console.log('controller:deleteDrum');
    return this.appService.deleteDrum(id);
  }
}
