import { Controller, Get, Inject } from '@nestjs/common';
import { Player } from '../domain/player.entity';
import { GetPlayersUseCase } from '../domain/get-players.use-case';
import {
  PLAYER_REPOSITORY,
  PlayerRepository,
} from '../domain/player.repository';

@Controller('players')
export class PlayerController {
  private getPlayersUseCase: GetPlayersUseCase;

  constructor(@Inject(PLAYER_REPOSITORY) playerRepository: PlayerRepository) {
    this.getPlayersUseCase = new GetPlayersUseCase(playerRepository);
  }

  @Get()
  getAll(): Promise<Player[]> {
    return this.getPlayersUseCase.execute();
  }
}
