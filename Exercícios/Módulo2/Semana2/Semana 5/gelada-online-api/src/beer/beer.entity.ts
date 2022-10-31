import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { BeerType } from './type.beer.enum';

export class Beer {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  s;
  supplierName: string;

  @IsNotEmpty()
  @IsEnum(BeerType)
  type: BeerType;
}
