import { RootService } from '../root.service';

describe('RootService', () => {
  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const rootService = new RootService();
      const result = rootService.getHello();

      expect(result).toBe('Hello World!');
    });
  });
});
