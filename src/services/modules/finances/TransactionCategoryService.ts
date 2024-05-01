import { DefaultApiFetchResult } from "@/models/api/DefaultApiFetchResult";
import { DefaultApiResponse } from "@/models/api/DefaultApiResponse";
import { TransactionCategoryDto } from "@/models/modules/financeTransactionCategory/TransactionCategoryDto";
import api from "../../api";

const CONTROLLER_AREA = "finances";
const CONTROLLER_NAME = "transactioncategory";

export class TransactionCategoryService {
  public async getAllFinanceTransactionCategories(): Promise<
    DefaultApiResponse<DefaultApiFetchResult<TransactionCategoryDto>>
  > {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}`;
      const response = await api.get(endpoint);
      return response.data as DefaultApiResponse<
        DefaultApiFetchResult<TransactionCategoryDto>
      >;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }
}
