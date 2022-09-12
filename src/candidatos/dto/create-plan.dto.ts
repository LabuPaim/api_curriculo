import { ApiProperty } from "@nestjs/swagger";

export class CreateCandidatoDto {
    @ApiProperty({type: String})
    candidato: String;

    @ApiProperty({type: Number})
    timeMinutes: Number;
}
