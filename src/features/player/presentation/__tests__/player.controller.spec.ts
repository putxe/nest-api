import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from '../player.controller';
import { PLAYER_REPOSITORY } from '../../domain/player.repository';

const mockPlayerRepository = {
  getAll: jest.fn(),
};

describe('PlayerController', () => {
  let playerController: PlayerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [
        {
          provide: PLAYER_REPOSITORY,
          useValue: mockPlayerRepository,
        },
      ],
    }).compile();

    playerController = app.get<PlayerController>(PlayerController);

    mockPlayerRepository.getAll.mockReset();
  });

  describe('getAll', () => {
    it('should return the value returned by player service', async () => {
      const expected = [
        {
          name: 'Zinedine Zidane',
          id: 1,
          age: 38,
        },
        {
          name: 'Ronaldinho',
          id: 2,
          age: 45,
        },
        {
          name: 'Lionel Messi',
          id: 3,
          age: 37,
        },
      ];

      mockPlayerRepository.getAll.mockReturnValueOnce(expected);

      const players = await playerController.getAll();

      expect(players).toEqual(expected);
      expect(mockPlayerRepository.getAll).toHaveBeenCalledTimes(1);
    });
  });
});
