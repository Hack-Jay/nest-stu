import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Model } from 'mongoose';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatService {
  constructor(@Inject('CAT_MODEL') private readonly catModel: Model<Cat>) {}
  create(createCatDto: CreateCatDto) {
    const createdCat = this.catModel.create(createCatDto);
    return createdCat;
  }

  findAll() {
    return this.catModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
