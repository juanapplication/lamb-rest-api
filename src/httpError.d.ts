export declare class HttpError extends Error {
  constructor(message: string, statusCode?: number);
  public statusCode: number;
  public body: string;
}
