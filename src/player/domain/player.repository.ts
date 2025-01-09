import { Player } from './player.entity';

export interface PlayerRepository {
  getAll(): Promise<Player[]>;
}
