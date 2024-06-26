import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render('index', {
      ...this.appService.getHello(),
      head: {
        title: 'Home',
      },
      copyright: new Date().getFullYear(),
    });
  }
}
