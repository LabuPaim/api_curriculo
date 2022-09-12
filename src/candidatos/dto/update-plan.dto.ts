import { PartialType } from '@nestjs/swagger';
import { CreateCandidatoDto } from './create-plan.dto';

export class UpdateCandidatoDto extends PartialType(CreateCandidatoDto) {}
