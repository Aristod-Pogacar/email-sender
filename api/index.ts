import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from '../src/app.module.js';

const server = express();

async function bootstrap() {
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(server),
    );

    app.enableCors({
        origin: '*',
    });

    await app.init();
}

bootstrap();

export default server;