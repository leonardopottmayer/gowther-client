export class CreateWalletDto {
  name: string;
  description: string;
  balance: number;
  isInvestment: boolean;
  isPhysical: boolean;

  constructor(
    name: string,
    description: string,
    balance: number,
    isInvestment: boolean,
    isPhysical: boolean
  ) {
    this.name = name;
    this.description = description;
    this.balance = balance;
    this.isInvestment = isInvestment;
    this.isPhysical = isPhysical;
  }
}
