import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiCodeResponse, ApiResponse} from '@common/api'
import { TestException } from './app.exception';

@Controller('person')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
