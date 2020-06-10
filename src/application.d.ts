import { APIGatewayProxyEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda';
import { ResultHandle } from './router';

export declare abstract class Application {
  constructor(event: APIGatewayProxyEvent, context: Context, callback: Callback<APIGatewayProxyResult>);
  public event: APIGatewayProxyEvent;
  public context: Context;
  public callback: Callback<APIGatewayProxyResult>;
  public path(): string;
  public next(error?: Error): ResultHandle;
  public json(data: object): Callback<APIGatewayProxyResult>;
  /**
   * Custom your context in here
   */
  protected abstract contextBuilder(): void;
}
