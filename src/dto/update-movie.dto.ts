import { IsString, IsNumber, } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}

// export class UpdateMovieDto {
//
//   @IsString()
//   readonly title?: string;
//
//   @IsNumber()
//   readonly year?: number;
//
//   @IsString()
//   readonly genres?: string[];
// }
