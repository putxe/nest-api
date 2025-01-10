import { Injectable } from '@nestjs/common';
import { Hello } from './hello.entity';

@Injectable()
export class HelloService {
  getHello(): Hello {
    return new Hello('Hello World!');
  }
}
