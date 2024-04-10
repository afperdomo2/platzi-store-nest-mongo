import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import { AppModule } from './app.module';

config();
const configService = new ConfigService();
const PORT = configService.get('PORT');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      /**
       * Si se establece en verdadero, el validador eliminará del objeto validado,
       * cualquier propiedad que no tenga ningún decorador.
       *
       * Consejo: si ningún otro decorador es adecuado para tu propiedad, utiliza este:
       * @Allow — decorator
       */
      whitelist: true,

      /**
       * Si se establece en verdadero, en lugar de eliminar las propiedades que no
       * están en la lista blanca, el validador lanzará un error.
       */
      forbidNonWhitelisted: true,

      /**
       * Si se establece en verdadero, el validador intentará transformar los tipos de
       * las propiedades para que coincidan con el tipo definido en el esquema.
       */
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Platzi NestJS - Mongoose')
    .setDescription('API del curso de NestJS')
    .setVersion('1.0')
    .addTag('store')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(PORT);
  console.info(`🚀 Server running on port: ${PORT}`);
}
bootstrap();
