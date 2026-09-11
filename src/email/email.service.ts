import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto.js';
import { MailService } from '../mail/mail.service.js';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailService,
  ) { }
  async create(createEmailDto: CreateEmailDto) {
    try {
      console.log("SENDING EMAIL:", createEmailDto)
      await this.mailerService.sendMail({
        to: createEmailDto.to,
        subject: createEmailDto.subject,
        text: createEmailDto.text,
        html: createEmailDto.html,
      });
      return {
        statusCode: 200,
        message: 'Email envoyé avec succès',
      };
    } catch (error) {
      console.error('Erreur envoi email:', error);

      throw new InternalServerErrorException(
        'Erreur lors de l’envoi de l’email',
      );
    }
  }
}
