import { Test, TestingModule } from '@nestjs/testing';
import { Hello } from '../../domain/hello.entity';
import { HelloController } from '../hello.controller';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [],
    }).compile();

    helloController = app.get<HelloController>(HelloController);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(helloController.getHello()).toEqual(new Hello('Hello World!'));
    });
  });
});
