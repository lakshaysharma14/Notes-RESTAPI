import { NestApplication, NestFactory } from "@nestjs/core";
import headers from "fastify-helmet";
import fastifyRateLimiter from "fastify-rate-limit";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { error, warn } from "console";

/**
 * The url endpoint for open api ui
 * @type {string}
 */
export const SWAGGER_API_ROOT = "api/docs";
/**
 * The name of the api
 * @type {string}
 */
export const SWAGGER_API_NAME = "API";
/**
 * A short description of the api
 * @type {string}
 */
export const SWAGGER_API_DESCRIPTION = "API Description";
/**
 * Current version of the api
 * @type {string}
 */
export const SWAGGER_API_CURRENT_VERSION = "1.0.0";


async function bootstrap() {

  const app = await NestFactory.create<NestApplication>(
    AppModule,
    {
      logger: ['error', 'warn'],
    }  
  );

  const options = new DocumentBuilder()
    .setTitle(SWAGGER_API_NAME)
    .setDescription(SWAGGER_API_DESCRIPTION)
    .setVersion(SWAGGER_API_CURRENT_VERSION)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_API_ROOT, app, document);
  
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000, "0.0.0.0");
}

bootstrap();

