import { Injectable, Inject } from '@nestjs/common';
import { PlayerRepository } from '../domain/player.repository';
import { Player } from '../domain/player.entity';
import { GetPlayersUseCase } from '../domain/get-players.use-case';

@Injectable()
export class PlayerService {
  private getPlayersUseCase: GetPlayersUseCase;

  constructor(@Inject('PlayerRepository') playerRepository: PlayerRepository) {
    this.getPlayersUseCase = new GetPlayersUseCase(playerRepository);
  }

  getAll(): Promise<Player[]> {
    return this.getPlayersUseCase.execute();
  }
}
