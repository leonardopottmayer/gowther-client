export class Formatter {
  formatMoney(value: number | string): string {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  formatISODateString(value: Date | string): string {
    return value instanceof Date
      ? value.toISOString()
      : new Date(value).toISOString();
  }

  formatLocaleDateString(value: Date | string): string {
    return value instanceof Date
      ? value.toLocaleDateString()
      : new Date(value).toLocaleDateString();
  }
}
