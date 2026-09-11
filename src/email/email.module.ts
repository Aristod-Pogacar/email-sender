import { Module } from '@nestjs/common';
import { EmailService } from './email.service.js';
import { EmailController } from './email.controller.js';
import { MailService } from '../mail/mail.service.js';

@Module({
  controllers: [EmailController],
  providers: [EmailService, MailService],
})
export class EmailModule { }
