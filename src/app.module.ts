import { Module } from '@nestjs/common';
import { HelloController } from './features/hello/hello.controller';
import { HelloService } from './features/hello/hello.service';
import { PlayerController } from './features/player/presentation/player.controller';
import { LocalPlayerRepository } from './infrastructure/local/local-player.repository';
import { PLAYER_REPOSITORY } from './features/player/domain/player.repository';

@Module({
  imports: [],
  controllers: [HelloController, PlayerController],
  providers: [
    HelloService,
    {
      provide: PLAYER_REPOSITORY,
      useClass: LocalPlayerRepository,
    },
  ],
})
export class AppModule {}
