import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { PaginationParamsDto } from 'src/share/dots/pagination-params.dto'

@Controller('users')
@ApiTags('用户管理')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  @ApiOperation({
    summary: '新增用户',
  })
  @ApiResponse({
    type: CreateUserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    throw new HttpException('自定义错误111', HttpStatus.CONFLICT)
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(
    @Query() query: PaginationParamsDto
  ) {
    const env = this.configService.get('database')
    console.log('env', env)
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
