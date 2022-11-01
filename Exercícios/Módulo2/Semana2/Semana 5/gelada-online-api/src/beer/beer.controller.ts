import {
  Controller,
  Body,
  Post,
  HttpStatus,
  Get,
  Delete,
  Put,
  Query,
  Param,
  HttpCode,
} from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { Beer } from './beer.entity';
import { BeerService } from './beer.service';

@Controller('beers')
export class BeerController {
  constructor(private service: BeerService) {}

  @Get(':beer')
  public async searchBeer(@Param('beer') name: string): Promise<Beer> {
    console.log(name);
    const beer = await this.service.beerExist(name);
    if (!beer) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Beer not found',
      });
    }
    return beer;
  }

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

  @Delete(':beer')
  @HttpCode(204)
  public async deleteBeer(@Param('beer') name: string) {
    await this.service.deleteBeer(name);
  }

  @Put(':beer')
  public async updateBeer(@Body() beer: Beer, @Param('beer') name: string) {
    const beerExist = await this.service.beerExist(name);
    if (!beerExist) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Beer not found',
      });
    }

    await this.service.updateBeer(name, beer);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({ Location: `/beers/${beer.name}` })
      .withBody(beer)
      .build();
  }
}
