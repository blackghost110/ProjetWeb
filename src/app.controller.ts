import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestException } from './app.exception';

@Controller('person')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get('detail/:id')
  getHello(): string {
    return this.appService.getHello();
  }*/
  @Get()
  getHello(): string {
    throw new TestException();
  }
  @Get('list')
  public list(){}
}
