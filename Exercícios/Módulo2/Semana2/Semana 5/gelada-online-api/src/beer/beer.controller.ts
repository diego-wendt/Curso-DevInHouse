import { Controller, Body, Post, HttpStatus, Get, Query } from '@nestjs/common';
import { query } from 'express';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { Beer } from './beer.entity';
import { BeerService } from './beer.service';

@Controller('beers')
export class BeerController {
  constructor(private service: BeerService) {}

  @Get()
  public async searchBeers(@Query('page') page = 0, @Query('size') size = 10) {
    return await this.service.searchBeers(page, size);
  }

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
