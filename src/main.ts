import {NestFactory} from '@nestjs/core';
import {AppModule} from './home/app.module';
import {HttpExceptionFilter} from '@common/config/exception';
import {swaggerConfiguration} from "@common/documentation";
import {ValidationException} from "@common/api/exception/validation.exception";
import {ValidationError, ValidationPipe} from "@nestjs/common";
import {ConfigKey, configManager} from "@common/config";
import {ApiInterceptor} from "@common/api";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ApiInterceptor());
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (validationErrors: ValidationError[] = []) => new
    ValidationException(validationErrors)
  }));
  swaggerConfiguration.config(app);
  await app.listen(configManager.getValue(ConfigKey.DB_PORT));
}
bootstrap().then();


// notion de controlleur ? question exam