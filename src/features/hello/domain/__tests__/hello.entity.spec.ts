import { Hello } from '../hello.entity';

describe('HelloEntity', () => {
  describe('constructor', () => {
    it('should create a new instance of HelloEntity', () => {
      const hello = new Hello('Hello World!');
      expect(hello.message).toBe('Hello World!');
    });
  });
});
