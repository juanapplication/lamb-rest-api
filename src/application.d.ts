import { APIGatewayProxyEvent, Context, Callback, APIGatewayProxyResult } from 'aws-lambda';

export declare class Application {
  constructor(event: APIGatewayProxyEvent, context: Context, callback: Callback<APIGatewayProxyResult>);
  public event: APIGatewayProxyEvent;
  public context: Context;
  public callback: Callback<APIGatewayProxyResult>;
  public path(): string;
  public next(error?: Error): Promise<APIGatewayProxyResult | Error | void | undefined>;
}
