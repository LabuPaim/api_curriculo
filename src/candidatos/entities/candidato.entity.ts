import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CandidatoDocument = Candidato & Document;


@Schema()
export class Candidato {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  idade: string;

  @Prop([String])
  stack: string[];

  @Prop()
  educacao: string;

  @Prop()
  profissional: string;

  @Prop([String])
  conhecimento: string[];

  @Prop()
  descricao: string;

  @Prop({ required: true })
  foto: string;
}

export const CandidatoSchema = SchemaFactory.createForClass(Candidato);