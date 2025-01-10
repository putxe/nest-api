import { LocalPlayerRepository } from '../local-player.repository';

describe('LocalPlayerRepository', () => {
  describe('getAll', () => {
    it('should return all players', async () => {
      const localPlayerRepository = new LocalPlayerRepository();

      const players = await localPlayerRepository.getAll();

      expect(players).toHaveLength(3);
      expect(players[0].name).toBe('Zinedine Zidane');
      expect(players[1].name).toBe('Ronaldinho');
      expect(players[2].name).toBe('Lionel Messi');
    });
  });
});
