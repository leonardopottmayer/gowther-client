import { UserDto } from "../user/UserDto";

export class JwtDecodedToken {
  jti: string;
  iat: number;
  userRole: string;
  userIsAdmin: boolean;
  exp: number;
  iss: string;
  aud: string;
  user: UserDto;

  constructor(
    jti: string,
    iat: number,
    userRole: string,
    userIsAdmin: boolean,
    exp: number,
    iss: string,
    aud: string,
    user: UserDto
  ) {
    this.jti = jti;
    this.iat = iat;
    this.userRole = userRole;
    this.userIsAdmin = userIsAdmin;
    this.exp = exp;
    this.iss = iss;
    this.aud = aud;
    this.user = user;
  }
}
