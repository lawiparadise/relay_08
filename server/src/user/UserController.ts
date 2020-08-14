import { Controller, Injectable, Post, Body } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@src/user/User";
import { Repository, Connection } from "typeorm";
import { UserControllerDto } from "./UserControllerDto";

@Controller("/users")
@Injectable()
export class UserController {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private connection: Connection
    ) {}

    @Post("/signup")
    async signUp(
        @Body() requestDto: UserControllerDto.SignUpRequestDto
    ): Promise<UserControllerDto.SignUpResponseDto> {
        const existedUser: User | undefined = await this.usersRepository.findOne({
            where: {
                nickname: requestDto.nickname
            }
        });

        if (existedUser !== undefined) {
            throw new Error("해당 닉네임을 가진 사용자가 이미 존재합니다.");
        }

        const user = await this.usersRepository.save(
            new User(requestDto.name, requestDto.nickname)
        );

        return new UserControllerDto.SignUpResponseDto(user.id, user.name, user.nickname);
    }
}
