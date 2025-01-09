import { Injectable } from '@nestjs/common';
import { PlayerRepository } from '../domain/player.repository';
import { Player } from '../domain/player.entity';

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
