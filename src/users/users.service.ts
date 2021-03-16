import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, Users } from './schemas/user.schemas';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UserDocument>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<Users> {
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findById(id).update(updateUserDto);
  }

  remove(id: string) {
    return this.userModel.findById(id).remove();
  }
}
