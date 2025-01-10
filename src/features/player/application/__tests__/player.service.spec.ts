import { PlayerService } from '../player.service';

const playerRepository = {
  getAll: jest.fn(),
};

describe('PlayerService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('should return all players', async () => {
      playerRepository.getAll.mockResolvedValueOnce([
        { name: 'Zinedine Zidane' },
        { name: 'Ronaldinho' },
        { name: 'Lionel Messi' },
      ]);

      const playerService = new PlayerService(playerRepository);
      const players = await playerService.getAll();

      expect(players).toHaveLength(3);
      expect(players[0].name).toBe('Zinedine Zidane');
      expect(players[1].name).toBe('Ronaldinho');
      expect(players[2].name).toBe('Lionel Messi');
    });
  });
});
