export class DefaultApiResponse<T> {
  result?: T;
  statusCode?: number;
  success: boolean;
  errorMessage: string;

  constructor(
    result: T,
    statusCode: number,
    success: boolean,
    errorMessage: string
  ) {
    this.result = result;
    this.statusCode = statusCode;
    this.success = success;
    this.errorMessage = errorMessage;
  }
}
