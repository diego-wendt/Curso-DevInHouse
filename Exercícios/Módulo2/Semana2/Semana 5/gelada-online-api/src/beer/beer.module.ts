import { Module } from '@nestjs/common';
import { Database } from 'src/database/database';
import { BeerController } from './beer.controller';
import { BeerService } from './beer.service';

@Module({
  controllers: [BeerController],
  providers: [BeerService, Database],
})
export class BeerModule {}
