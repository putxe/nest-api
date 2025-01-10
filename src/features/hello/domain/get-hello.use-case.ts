import { Hello } from './hello.entity';

export class GetHelloUseCase {
  constructor() {}

  execute(): Hello {
    return new Hello('Hello World!');
  }
}
