import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatoService } from './plan.service';
import { CandidatoController } from './plan.controller';
import { Candidato, CandidatoSchema } from './entities/candidato.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Candidato.name , schema: CandidatoSchema }])],
  controllers: [CandidatoController],
  providers: [CandidatoService]
})
export class PlanModule {}
