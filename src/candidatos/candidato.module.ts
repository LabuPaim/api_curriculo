import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatoService } from './candidato.service';
import { CandidatoController } from './candidato.controller';
import { Candidato, CandidatoSchema } from './entities/candidato.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Candidato.name , schema: CandidatoSchema }])],
  controllers: [CandidatoController],
  providers: [CandidatoService]
})
export class CandidatoModule {}
