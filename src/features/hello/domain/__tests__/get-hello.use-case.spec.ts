import { GetHelloUseCase } from '../get-hello.use-case';

describe('GetHelloUseCase', () => {
  describe('execute', () => {
    it('should return a new Hello World!', () => {
      const getHelloUseCase = new GetHelloUseCase();

      const hello = getHelloUseCase.execute();

      expect(hello.message).toBe('Hello World!');
    });
  });
});
