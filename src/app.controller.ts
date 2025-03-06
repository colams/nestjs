import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchFileParams, SearchFileResult } from './types/searchFile';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('name')
  getName(): string {
    return 'test name';
  }

  @Post('ee')
  getEE(): string {
    return 'test ee';
  }
}

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello2(params: SearchFileParams): SearchFileResult[] {
    return this.appService.getHello2();
  }
}
