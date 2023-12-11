import { Controller } from '@nestjs/common';

import { ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Route de base')
//@ApiResponse({ summary : 'acces operation', description : "No acces"})
@ApiResponse({ status : 456, description : "No acces"})
@ApiResponse({ status : 200, description : "Database"})
@Controller('person')
export class AppController {

}
