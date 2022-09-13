import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { Candidato, CandidatoDocument } from './entities/candidato.entity';

@Injectable()
export class CandidatoService {

  constructor(@InjectModel(Candidato.name) private candidatoModel: Model<CandidatoDocument>) {}

  create(createCandidatoDto: CreateCandidatoDto) {
    const candidato = new this.candidatoModel(createCandidatoDto);
    return candidato.save()
  }

  findAll() {
    return this.candidatoModel.find();
  }

  findOne(id: string) {
    return this.candidatoModel.findById(id);
  }

  update(id: string, updateCandidatoDto: UpdateCandidatoDto) {
    return this.candidatoModel.findByIdAndUpdate({_id:id}, {$set: updateCandidatoDto},{new: true});
  }

  remove(id: string) {
    return this.candidatoModel.deleteOne({_id:id}).exec();
  }
}
