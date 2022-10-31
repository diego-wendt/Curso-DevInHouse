import { Controller, Body, Post, HttpStatus } from '@nestjs/common';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { Beer } from './beer.entity';
import { BeerService } from './beer.service';

@Controller('beers')
export class BeerController {
  constructor(private service: BeerService) {}

  @Post()
  public async createBeer(@Body() beer: Beer): Promise<NestResponse> {
    const createdBeer: Beer = await this.service.createBeer(beer);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({ Location: `/beers/${createdBeer.name}` })
      .withBody(createdBeer)
      .build();
  }
}
