export class TransactionDto {
  id: number;
  description: string;
  value: number;
  originWalletId: number;
  destinationWalletId: number;
  transactionCategoryId: number;
  transactionSubcategoryId: number;
  transactionDate: string;
  userId: number;

  constructor(
    id: number,
    description: string,
    value: number,
    originWalletId: number,
    destinationWalletId: number,
    transactionCategoryId: number,
    transactionSubcategoryId: number,
    transactionDate: string,
    userId: number
  ) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.originWalletId = originWalletId;
    this.destinationWalletId = destinationWalletId;
    this.transactionCategoryId = transactionCategoryId;
    this.transactionSubcategoryId = transactionSubcategoryId;
    this.transactionDate = transactionDate;
    this.userId = userId;
  }
}
