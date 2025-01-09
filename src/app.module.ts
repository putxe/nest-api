import { Module } from '@nestjs/common';
import { RootController } from './root/root.controller';
import { RootService } from './root/root.service';
import { PlayerController } from './player/presentation/player.controller';
import { PlayerService } from './player/application/player.service';
import { LocalPlayerRepository } from './player/infrastructure/local-player.repository';

@Module({
  imports: [],
  controllers: [RootController, PlayerController],
  providers: [
    RootService,
    PlayerService,
    {
      provide: 'PlayerRepository',
      useClass: LocalPlayerRepository,
    },
  ],
})
export class AppModule {}
