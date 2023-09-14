import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({example: '13342312981'})
  userName: string

  @IsInt()
  @ApiProperty({example: 'd1dad1'})
  password: string

  @ApiProperty({example: '14719841@qq.com'})
  email: string
}
