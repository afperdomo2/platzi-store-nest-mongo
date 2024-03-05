import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: any) {
    const parsedId = Number(value);
    if (isNaN(parsedId)) {
      throw new BadRequestException(`Id:${value} is not a number`);
    }
    return parsedId;
  }
}
