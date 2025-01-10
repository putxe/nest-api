import { Controller, Get } from '@nestjs/common';
import { Hello } from '../domain/hello.entity';
import { GetHelloUseCase } from '../domain/get-hello.use-case';

@Controller()
export class HelloController {
  private getHelloUseCase: GetHelloUseCase;

  constructor() {
    this.getHelloUseCase = new GetHelloUseCase();
  }

  @Get()
  getHello(): Hello {
    return this.getHelloUseCase.execute();
  }
}
