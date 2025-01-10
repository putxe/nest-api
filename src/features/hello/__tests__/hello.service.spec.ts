import { HelloService } from '../hello.service';

describe('HelloService', () => {
  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const helloService = new HelloService();
      const result = helloService.getHello();

      expect(result).toBe('Hello World!');
    });
  });
});
