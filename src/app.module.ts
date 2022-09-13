import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatoModule } from './candidatos/candidato.module';
import { RedirectController } from './redirect/redirect.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.8uowe0t.mongodb.net/?retryWrites=true&w=majority`),
    CandidatoModule
  ],
  controllers: [RedirectController],
  providers: [],
})
export class AppModule {}
