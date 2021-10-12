import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        protoLoader: '@grpc/proto-loader',
        package: 'hero',
        protoPath: join(__dirname, 'hero/hero.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
