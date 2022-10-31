import fs from 'fs';
import { Beer } from 'src/beer/beer.entity';

export class Database {
  private FILENAME = 'beers.json';

  public getBeers(): Beer[] {
    const beersInFile = fs.readFileSync(this.FILENAME).toString();
    const beers = JSON.parse(beersInFile);
    return beers;
  }

  public saveBeer(beer: Beer) {
    fs.writeFileSync(this.FILENAME, JSON.stringify([...this.getBeers(), beer]));
  }

  public saveBeers(beers: Beer[]) {
    fs.writeFileSync(this.FILENAME, JSON.stringify(beers));
  }
}
