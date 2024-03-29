import {NestFactory} from '@nestjs/core';
import {AppModule} from './home/app.module';
import {HttpExceptionFilter} from '@common/config/exception';
import {swaggerConfiguration} from "@common/documentation";
import {ValidationException} from "@common/api/exception/validation.exception";
import {Logger, ValidationError, ValidationPipe} from "@nestjs/common";
import {ConfigKey, configManager} from "@common/config";
import {ApiInterceptor} from "@common/api";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(configManager.getValue(ConfigKey.APP_BASE_URL));
  app.enableCors();
  swaggerConfiguration.config(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ApiInterceptor());
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (validationErrors: ValidationError[] = []) => new
    ValidationException(validationErrors)
  }));
  await app.listen(parseInt(configManager.getValue(ConfigKey.APP_PORT), 10));
}
bootstrap().then(() =>{
  const logger = new Logger('Main Logger');
  logger.log('Server is started !!')
});