export class WalletDto {
  key?: any;
  id: number;
  name: string;
  description: string;
  balance: number;
  isInvestment: boolean;
  isPhysical: boolean;

  constructor(
    id: number,
    name: string,
    description: string,
    balance: number,
    isInvestment: boolean,
    isPhysical: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.balance = balance;
    this.isInvestment = isInvestment;
    this.isPhysical = isPhysical;
  }
}
