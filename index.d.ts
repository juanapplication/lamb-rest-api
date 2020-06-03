import { Application } from './src/application';
import { APIGatewayProxyResult } from 'aws-lambda';

export * from './src/application';
export * from './src/router';

export class LambRestAPI {
  public static handler(options?: {
    app?: Application,
  }):APIGatewayProxyResult;
}

