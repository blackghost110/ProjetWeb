import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AppControllerHelloWorld} from "./app.swagger";

@ApiTags('Route de base')
//@ApiResponse({ summary : 'acces operation', description : "No acces"})
@ApiResponse({ status : 456, description : "No acces"})
@ApiResponse({ status : 200, description : "Database"})
@Controller('person')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation(AppControllerHelloWorld)
  @Get('detail/:id')
  getHello(): string {
    return this.appService.getHello();
  }

}
