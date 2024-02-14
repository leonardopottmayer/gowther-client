import { JwtDecodedToken } from "../models/modules/authentication/JwtDecodedToken";
import { UserDto } from "../models/modules/user/UserDto";

export const extractTokenInformation = (
  token: string
): JwtDecodedToken | null => {
  if (!token) {
    return null;
  }

  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");

  const jwtRawPayload = JSON.parse(window.atob(base64));
  const decodedToken = fromTokenPayload(jwtRawPayload);

  return decodedToken;
};

const fromTokenPayload = (payload: any): JwtDecodedToken => {
  const userData = new UserDto(
    payload.sub,
    payload.user_name,
    payload.user_username,
    payload.user_email
  );

  return new JwtDecodedToken(
    payload.jti,
    payload.iat,
    payload.user_role,
    payload.user_is_admin,
    payload.exp,
    payload.iss,
    payload.aud,
    userData
  );
};
