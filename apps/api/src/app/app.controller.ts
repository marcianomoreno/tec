import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('drums')
  getDrums() {
    return this.appService.getDrums();
  }

  @Post('addDrum')
  addDrum() {
    return this.appService.addDrum();
  }
}
