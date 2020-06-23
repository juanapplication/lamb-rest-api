import { Application } from './application';
import { APIGatewayProxyResult, Callback } from 'aws-lambda';

export type HandleFunction = (app: Application) => ResultHandle | Promise<ResultHandle>;
export type ResultHandle = APIGatewayProxyResult | (Callback<APIGatewayProxyResult> | void);

export declare class Router {
  protected path: string;
  public static routes: Map<string, HandleFunction | Array<HandleFunction>>;
  public get routes(): Map<string, HandleFunction | Array<HandleFunction>>;
  protected buildPath(method: string, resource: string): string;
  public get(path: string, ...handers: Array<HandleFunction>): void;
  public post(path: string, ...handers: Array<HandleFunction>): void;
  public put(path: string, ...handers: Array<HandleFunction>): void;
  public patch(path: string, ...handers: Array<HandleFunction>): void;
  public delete(path: string, ...handers: Array<HandleFunction>): void;
}