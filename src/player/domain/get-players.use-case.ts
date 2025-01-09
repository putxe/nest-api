import { Player } from './player.entity';
import { PlayerRepository } from './player.repository';

export class GetPlayersUseCase {
  constructor(private readonly playerRepository: PlayerRepository) {}

  async execute(): Promise<Player[]> {
    const players = await this.playerRepository.getAll();
    return players;
  }
}
