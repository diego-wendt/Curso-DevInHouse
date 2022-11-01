import { Injectable, ConflictException } from '@nestjs/common';
import { parse } from 'path';
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

  public async searchBeers(page, size) {
    const beers = await this.database.getBeers();

    const startIndex = parseInt(page) * parseInt(size);
    const endIndex = startIndex + parseInt(size);

    if (startIndex >= beers.length) {
      return [];
    }

    const newList = beers.slice(startIndex, endIndex);
    return newList;
  }

  public async deleteBeer(name: string) {
    const beers = await this.database.getBeers();
    const newList = beers.filter((beer) => beer.name != name);
    this.database.saveBeers(newList);
  }

  public async updateBeer(name, beer) {
    const beers = await this.database.getBeers();

    const editedBeers = beers.map((item) => {
      if (item.name.toLowerCase() == name.toLowerCase()) {
        item.name = beer.name;
        item.description = beer.description;
        item.supplierName = beer.supplierName;
        item.type = beer.type;
        return item;
      }
      return item;
    });
    this.database.saveBeers(editedBeers);
  }
}
