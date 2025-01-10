import { Controller, Get } from '@nestjs/common';
import { PlayerService } from '../application/player.service';
import { Player } from '../domain/player.entity';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async getAll(): Promise<Player[]> {
    return this.playerService.getAll();
  }
}
