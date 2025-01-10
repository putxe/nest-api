import { Injectable } from '@nestjs/common';
import { Player } from 'src/features/player/domain/player.entity';
import { PlayerRepository } from 'src/features/player/domain/player.repository';

@Injectable()
export class LocalPlayerRepository implements PlayerRepository {
  async getAll(): Promise<Player[]> {
    return [
      new Player(1, 'Zinedine Zidane', 38),
      new Player(2, 'Ronaldinho', 45),
      new Player(3, 'Lionel Messi', 37),
    ];
  }
}
