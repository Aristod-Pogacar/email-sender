import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { CreateEmailDto } from '../email/dto/create-email.dto.js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    private transporter;

    constructor(private readonly configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('MAIL_HOST'),
            port: Number(this.configService.get<string>('MAIL_PORT') || 587),
            secure: false,
            auth: {
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASSWORD'),
            },
        });
    }

    async sendMail(createEmailDto: CreateEmailDto) {
        return this.transporter.sendMail({
            from: `"No Reply" <${this.configService.get<string>('MAIL_USER')}>`,
            to: createEmailDto.to,
            subject: createEmailDto.subject,
            text: createEmailDto.text,
            html: createEmailDto.html,
        });
    }
}