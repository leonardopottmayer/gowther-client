import { DefaultApiFetchResult } from "@/models/api/DefaultApiFetchResult";
import { DefaultApiResponse } from "@/models/api/DefaultApiResponse";
import { TransactionSubcategoryDto } from "@/models/modules/financeTransactionSubcategory/TransactionSubcategoryDto";
import api from "../../api";

const CONTROLLER_AREA = "finances";
const CONTROLLER_NAME = "transactionsubcategory";

export class TransactionSubcategoryService {
  public async getAllFinanceTransactionSubcategories(): Promise<
    DefaultApiResponse<DefaultApiFetchResult<TransactionSubcategoryDto>>
  > {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}`;
      const response = await api.get(endpoint);
      return response.data as DefaultApiResponse<
        DefaultApiFetchResult<TransactionSubcategoryDto>
      >;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }

  public async getAllFinanceTransactionSubcategoriesByTransactionCategoryId(
    transactionCategoryId: number
  ): Promise<
    DefaultApiResponse<DefaultApiFetchResult<TransactionSubcategoryDto>>
  > {
    try {
      const endpoint = `/api/v1/${CONTROLLER_AREA}/${CONTROLLER_NAME}/transactionCategory/${transactionCategoryId}`;
      const response = await api.get(endpoint);
      return response.data as DefaultApiResponse<
        DefaultApiFetchResult<TransactionSubcategoryDto>
      >;
    } catch (err: any) {
      throw new Error(err.response?.data.errorMessage);
    }
  }
}
