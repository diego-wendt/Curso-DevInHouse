import { Injectable, ConflictException } from '@nestjs/common';
import { Database } from 'src/database/database';
import { Beer } from './beer.entity';

@Injectable()
export class BeerService {
  constructor(private database: Database) {}

  public async createBeer(beer: Beer): Promise<Beer> {
    const beerExist = await this.beerExist(beer.name);
    if (beerExist) {
      throw new ConflictException({
        statusCode: 409,
        message: 'Nome da cerveja ja existe',
      });
    }
    await this.database.saveBeer(beer);
    return beer;
  }

  public async beerExist(name: string): Promise<Beer> {
    const beers = await this.database.getBeers();
    return beers.find((beer) => beer.name.toLowerCase() == name.toLowerCase());
  }
}
