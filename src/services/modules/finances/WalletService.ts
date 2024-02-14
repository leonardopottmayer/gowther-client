import { UpdateWalletDto } from "@/models/modules/financeWallet/UpdateWalletDto";
import { DefaultApiFetchResult } from "@/models/api/DefaultApiFetchResult";
import { DefaultApiResponse } from "@/models/api/DefaultApiResponse";
import { CreateWalletDto } from "@/models/modules/financeWallet/CreateWalletDto";
import { WalletDto } from "@/models/modules/financeWallet/WalletDto";
import api from "../../api";

const CONTROLLER_AREA = "finances";
const CONTROLLER_NAME = "wallet";

export class WalletService {
  public async getUserWallets(): Promise<
    DefaultApiResponse<DefaultApiFetchResult<WalletDto>>
  > {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user`;
      const response = await api.get(endpoint);
      return response.data as DefaultApiResponse<
        DefaultApiFetchResult<WalletDto>
      >;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async createWallet(
    params: CreateWalletDto
  ): Promise<DefaultApiResponse<number>> {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user`;
      const response = await api.post(endpoint, params);
      return response.data as DefaultApiResponse<number>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async updateWallet(
    walletId: number,
    params: UpdateWalletDto
  ): Promise<DefaultApiResponse<boolean>> {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user/${walletId}`;
      const response = await api.put(endpoint, params);
      return response.data as DefaultApiResponse<boolean>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async deleteWallet(
    walletId: number
  ): Promise<DefaultApiResponse<boolean>> {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user/${walletId}`;
      const response = await api.delete(endpoint);
      return response.data as DefaultApiResponse<boolean>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }
}
