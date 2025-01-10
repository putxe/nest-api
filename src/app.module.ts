import { Module } from '@nestjs/common';
import { HelloController } from './features/hello/hello.controller';
import { HelloService } from './features/hello/hello.service';
import { PlayerController } from './features/player/presentation/player.controller';
import { PlayerService } from './features/player/application/player.service';
import { LocalPlayerRepository } from './infrastructure/local/local-player.repository';

@Module({
  imports: [],
  controllers: [HelloController, PlayerController],
  providers: [
    HelloService,
    PlayerService,
    {
      provide: 'PlayerRepository',
      useClass: LocalPlayerRepository,
    },
  ],
})
export class AppModule {}
