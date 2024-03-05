import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

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
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Platzi NestJS')
    .setDescription('API del curso de NestJS')
    .setVersion('1.0')
    .addTag('store')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
