import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({ message: 'Hello World!' });
  });

  it('/players (GET)', () => {
    return request(app.getHttpServer())
      .get('/players')
      .expect(200)
      .expect([
        { id: 1, name: 'Zinedine Zidane', age: 38 },
        { id: 2, name: 'Ronaldinho', age: 45 },
        { id: 3, name: 'Lionel Messi', age: 37 },
      ]);
  });
});
