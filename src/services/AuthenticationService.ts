import { DefaultApiResponse } from "../models/api/DefaultApiResponse";
import { LoginRequestDto } from "../models/modules/authentication/LoginRequestDto";
import { LoginResultDto } from "../models/modules/authentication/LoginResultDto";
import api from "./api";

const CONTROLLER = "authentication";

export class AuthenticationService {
  public async login(
    params: LoginRequestDto
  ): Promise<DefaultApiResponse<LoginResultDto>> {
    try {
      const endpoint = `/api/${CONTROLLER}/login`;
      const response = await api.post(endpoint, params);
      return response.data as DefaultApiResponse<LoginResultDto>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async register(
    params: LoginRequestDto
  ): Promise<DefaultApiResponse<number>> {
    try {
      const endpoint = `/api/${CONTROLLER}/register`;
      const response = await api.post(endpoint, params);
      return response.data as DefaultApiResponse<number>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }
}
