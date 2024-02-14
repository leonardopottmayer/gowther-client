export class UpdateTransactionDto {
  description: string;
  value: number;
  originWalletId: number | null;
  destinationWalletId: number | null;
  transactionCategoryId: number;
  transactionSubcategoryId: number;
  transactionDate: string;

  constructor(
    description: string,
    value: number,
    originWalletId: number | null,
    destinationWalletId: number | null,
    transactionCategoryId: number,
    transactionSubcategoryId: number,
    transactionDate: string
  ) {
    this.description = description;
    this.value = value;
    this.originWalletId = originWalletId;
    this.destinationWalletId = destinationWalletId;
    this.transactionCategoryId = transactionCategoryId;
    this.transactionSubcategoryId = transactionSubcategoryId;
    this.transactionDate = transactionDate;
  }
}
