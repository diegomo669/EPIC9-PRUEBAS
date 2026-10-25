import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  ServiceUnavailableException,
} from '@nestjs/common';

import { z } from 'zod';

import { submitSurveySchema } from '../schemas/surveys.schemas';

@Controller('surveys')
export class SubmitSurveyController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async submit(@Body() body: unknown) {
    const result = submitSurveySchema.safeParse(body);

    if (!result.success) {
      throw new BadRequestException({
        message: 'Datos de encuesta invalidos',
        errors: z.flattenError(result.error),
      });
    }

    // Pendiente: conectar el caso de uso y repositorio Prisma.
    // No responder éxito hasta guardar realmente la encuesta.
    throw new ServiceUnavailableException(
      'Persistencia de encuestas aun no integrada',
    );
  }
}