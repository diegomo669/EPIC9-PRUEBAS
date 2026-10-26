import { Module } from '@nestjs/common';

import { SubmitSurveyController } from './http/controllers/submit-survey.controller';

@Module({
  controllers: [SubmitSurveyController],
  providers: [],
  exports: [],
})
export class SurveysModule {}