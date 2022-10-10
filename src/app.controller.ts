import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/BSM")
  bsm():string {
    return this.appService.bsm();
  }
  @Get("/OBJETIVO")
  bj():string {
    return this.appService.bj();
  }
}
