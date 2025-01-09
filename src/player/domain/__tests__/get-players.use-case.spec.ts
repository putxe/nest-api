import { GetPlayersUseCase } from '../get-players.use-case';
import { Player } from '../player.entity';

const playerRepository = {
  getAll: jest.fn(),
};

describe('GetPlayersUseCase', () => {
  beforeEach(() => {
    playerRepository.getAll.mockClear();
  });

  describe('execute', () => {
    it('should return all players', async () => {
      playerRepository.getAll.mockResolvedValue([
        new Player(1, 'Zinedine Zidane', 38),
        new Player(2, 'Ronaldinho', 45),
        new Player(3, 'Lionel Messi', 37),
      ]);

      const getPlayersUseCase = new GetPlayersUseCase(playerRepository);
      const players = await getPlayersUseCase.execute();

      expect(players).toHaveLength(3);
      expect(players[0].name).toBe('Zinedine Zidane');
      expect(players[1].name).toBe('Ronaldinho');
      expect(players[2].name).toBe('Lionel Messi');
    });
  });
});
