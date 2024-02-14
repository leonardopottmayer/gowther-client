export class TransactionSubcategoryDto {
  id: number;
  name: string;
  description: string;
  transactionCategoryId: number;

  constructor(
    id: number,
    name: string,
    description: string,
    transactionCategoryId: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.transactionCategoryId = transactionCategoryId;
  }
}
