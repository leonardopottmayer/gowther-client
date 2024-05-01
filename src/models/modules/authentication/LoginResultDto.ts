import { UserDto } from "../user/UserDto";

export class LoginResultDto {
  user: UserDto;
  token: string;

  constructor(user: UserDto, token: string) {
    this.user = user;
    this.token = token;
  }
}
