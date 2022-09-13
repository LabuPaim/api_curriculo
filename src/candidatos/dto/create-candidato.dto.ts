import { ApiProperty } from "@nestjs/swagger";

export class CreateCandidatoDto {
    @ApiProperty({type: String, required: true})
    nome: String;

    @ApiProperty({type: String, required: true})
    idade: String;

    @ApiProperty({type: [String]})
    stack: String[];

    @ApiProperty({type: String})
    educacao: String;

    @ApiProperty({type: String})
    profissional: String;

    @ApiProperty({type: [String]})
    conhecimento: String[];

    @ApiProperty({type: String})
    descricao: String;

    @ApiProperty({type: String, required: true})
    foto: String;

}
