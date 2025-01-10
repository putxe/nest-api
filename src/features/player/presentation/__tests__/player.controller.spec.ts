import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from '../player.controller';
import { PlayerService } from '../../application/player.service';

const mockPlayerService = {
  getAll: jest.fn(),
};

describe('PlayerController', () => {
  let playerController: PlayerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [
        {
          provide: PlayerService,
          useValue: mockPlayerService,
        },
      ],
    }).compile();

    playerController = app.get<PlayerController>(PlayerController);

    mockPlayerService.getAll.mockReset();
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

      mockPlayerService.getAll.mockReturnValueOnce(expected);

      const players = await playerController.getAll();

      expect(players).toEqual(expected);
      expect(mockPlayerService.getAll).toHaveBeenCalledTimes(1);
    });
  });
});
