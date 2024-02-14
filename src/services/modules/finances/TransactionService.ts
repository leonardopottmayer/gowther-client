import { TransactionWithDescriptionDto } from "@/models/modules/financeTransaction/TransactionWithDescriptionDto";
import { DefaultApiFetchResult } from "@/models/api/DefaultApiFetchResult";
import { DefaultApiResponse } from "@/models/api/DefaultApiResponse";
import { CreateTransactionDto } from "@/models/modules/financeTransaction/CreateTransactionDto";
import { TransactionDto } from "@/models/modules/financeTransaction/TransactionDto";
import api from "../../api";
import { UpdateTransactionDto } from "@/models/modules/financeTransaction/UpdateTransactionDto";

const CONTROLLER_AREA = "finances";
const CONTROLLER_NAME = "transaction";

export class TransactionService {
  public async createTransaction(
    params: CreateTransactionDto
  ): Promise<DefaultApiResponse<number>> {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user`;
      const response = await api.post(endpoint, params);
      return response.data as DefaultApiResponse<number>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async getAllUserTransactions(): Promise<
    DefaultApiResponse<DefaultApiFetchResult<TransactionDto>>
  > {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user`;
      const response = await api.get(endpoint);
      return response.data as DefaultApiResponse<
        DefaultApiFetchResult<TransactionDto>
      >;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async getAllUserTransactionsWithDescription(): Promise<
    DefaultApiResponse<DefaultApiFetchResult<TransactionWithDescriptionDto>>
  > {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user/descriptions`;
      const response = await api.get(endpoint);
      return response.data as DefaultApiResponse<
        DefaultApiFetchResult<TransactionWithDescriptionDto>
      >;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async updateTransaction(
    transactionId: number,
    params: UpdateTransactionDto
  ): Promise<DefaultApiResponse<boolean>> {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user/${transactionId}`;
      const response = await api.put(endpoint, params);
      return response.data as DefaultApiResponse<boolean>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async deleteTransaction(
    transactionId: number
  ): Promise<DefaultApiResponse<boolean>> {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/user/${transactionId}`;
      const response = await api.delete(endpoint);
      return response.data as DefaultApiResponse<boolean>;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }
}
