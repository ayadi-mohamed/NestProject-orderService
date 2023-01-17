import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { AddRequestApp, GetRequestApp, RemoveRequestApp, RestoreRequestApp, SearchRequestApp, SoftDltRequestApp, stateEnum, UpdateRequestApp, UpdateResponseApp } from './proto/application.pb';

export class AddRequestDto implements AddRequestApp {
  
  @IsNumber()
  public idOffer: number;

  @IsNumber()
  public idUser: number;
}
export class GetRequestAppDto implements GetRequestApp {
  @IsNumber()
  idApp: number;
  
  @IsNumber()
  public idOffer: number;

  @IsNumber()
  public idUser: number;
}
export class SearchRequestAppDto implements SearchRequestApp {
  @IsNumber()
  @IsOptional()
  idApp: number;
  
  @IsNumber()
  @IsOptional()
  public idOffer: number;

  @IsNumber()
  public idUser: number;

  @IsEnum(stateEnum)
  @IsOptional()
  public state: stateEnum
}
export class RemoveRequestAppDto implements RemoveRequestApp {
  @IsNumber()
  idApp: number;
  
  @IsNumber()
  public idUser: number;

}

export class UpdateRequestDto implements UpdateRequestApp {
  @IsNumber()
  idApp: number; 

  @IsNumber()
  @IsOptional()
  public idOffer: number;
  @IsNumber()
  public idUser: number;
  
  @IsEnum(stateEnum)
  @IsOptional()
  public state: stateEnum
}
export class SoftDltRequestAppDto implements SoftDltRequestApp {
  @IsNumber()
  public idApp: number;
  
  @IsNumber()
  public idUser: number;

}
export class RestoreRequestAppDto implements RestoreRequestApp {
  @IsNumber()
  public idApp: number;
  
  @IsNumber()
  public idUser: number;

}