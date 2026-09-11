import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { EmailModule } from './email/email.module.js';
import { MailService } from './mail/mail.service.js';
import { MailModule } from './mail/mail.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    EmailModule,
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule { }
