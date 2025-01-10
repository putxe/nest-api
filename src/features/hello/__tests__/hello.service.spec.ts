import { Hello } from '../hello.entity';
import { HelloService } from '../hello.service';

describe('HelloService', () => {
  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const helloService = new HelloService();
      const result = helloService.getHello();

      expect(result).toEqual(new Hello('Hello World!'));
    });
  });
});
