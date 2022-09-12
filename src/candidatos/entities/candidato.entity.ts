import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlanDocument = Candidato & Document;


@Schema()
export class Candidato {
  @Prop()
  candidato: string;

  @Prop()
  timeMinutes: number;
}

export const CandidatoSchema = SchemaFactory.createForClass(Candidato);