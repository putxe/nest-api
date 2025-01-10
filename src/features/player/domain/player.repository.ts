import { Player } from './player.entity';

export interface PlayerRepository {
  getAll(): Promise<Player[]>;
}

export const PLAYER_REPOSITORY = 'PLAYER_REPOSITORY';
