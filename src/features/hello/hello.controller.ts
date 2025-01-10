import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';
import { Hello } from './hello.entity';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): Hello {
    return this.helloService.getHello();
  }
}
