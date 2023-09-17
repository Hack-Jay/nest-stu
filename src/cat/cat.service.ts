import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Model } from 'mongoose';
import { Cat } from './interfaces/cat.interface';
import { PaginationParamsDto } from 'src/share/dots/pagination-params.dto';

@Injectable()
export class CatService {
  constructor(@Inject('CAT_MODEL') private readonly catModel: Model<Cat>) {}
  create(createCatDto: CreateCatDto) {
    const createdCat = this.catModel.create(createCatDto);
    return createdCat;
  }

  async findAll({ pageSize, page }: PaginationParamsDto) {
    // return this.catModel.find().exec();
    const result = await this.catModel
      .find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .exec();
    console.log('result', result);
    return result;
    // 100 => 第二页 5 6-10
    // return {
    //   data, count
    // }
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
