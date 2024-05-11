import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import * as hbs from 'express-handlebars';

import { HandlebarsConfigs } from './config/handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(HandlebarsConfigs.public);
  app.setBaseViewsDir(HandlebarsConfigs.views);

  app.engine(
    'hbs',
    hbs.engine({
      extname: 'hbs',
      defaultLayout: 'main',
      helpers: HandlebarsConfigs.helpers,
      partialsDir: HandlebarsConfigs.partials,
      layoutsDir: HandlebarsConfigs.layouts,
    }),
  );
  app.setViewEngine('hbs');

  await app.listen(3002);
}
bootstrap();
