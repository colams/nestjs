import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("name")
  getName(): string {
    return 'test name';
  }

  @Get("ee")
  getEE(): string {
    return 'test ee';
  }
}

// @Controller('cats')
// export class CatsController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello2(): string {
//     return this.appService.getHello2();
//   }
// }
