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
      mockPlayerService.getAll.mockReturnValueOnce([]);

      const players = await playerController.getAll();

      expect(players).toEqual([]);
      expect(mockPlayerService.getAll).toHaveBeenCalledTimes(1);
    });
  });
});
