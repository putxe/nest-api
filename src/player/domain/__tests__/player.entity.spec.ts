import { Player } from '../player.entity';

describe('PlayerEntity', () => {
  describe('constructor', () => {
    it('should create a new Player entity', () => {
      const player = new Player(1, 'John Doe', 30);
      expect(player.id).toBe(1);
      expect(player.name).toBe('John Doe');
      expect(player.age).toBe(30);
    });
  });
});
