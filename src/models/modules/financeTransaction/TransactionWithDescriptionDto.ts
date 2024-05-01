export class TransactionWithDescriptionDto {
  id: number;
  description: string;
  value: number;
  originWalletId: number;
  originWalletName: string;
  destinationWalletId: number;
  destinationWalletName: string;
  transactionCategoryId: number;
  transactionCategoryName: string;
  transactionSubcategoryId: number;
  transactionSubcategoryName: string;
  transactionDate: string;
  userId: number;
  createdAt: string;

  constructor(
    id: number,
    description: string,
    value: number,
    originWalletId: number,
    originWalletName: string,
    destinationWalletId: number,
    destinationWalletName: string,
    transactionCategoryId: number,
    transactionCategoryName: string,
    transactionSubcategoryId: number,
    transactionSubcategoryName: string,
    transactionDate: string,
    userId: number,
    createdAt: string
  ) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.originWalletId = originWalletId;
    this.originWalletName = originWalletName;
    this.destinationWalletId = destinationWalletId;
    this.destinationWalletName = destinationWalletName;
    this.transactionCategoryId = transactionCategoryId;
    this.transactionCategoryName = transactionCategoryName;
    this.transactionSubcategoryId = transactionSubcategoryId;
    this.transactionSubcategoryName = transactionSubcategoryName;
    this.transactionDate = transactionDate;
    this.userId = userId;
    this.createdAt = createdAt;
  }
}
