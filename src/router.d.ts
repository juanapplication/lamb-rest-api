export declare class Router {
  protected path: string;
  public static routes: Map<string, any>;
  public get routes(): Map<string, any>;
  protected buildPath(method: string, resource: string): string;
  public get(path: string, ...handers: any);
  public post(path: string, ...handers: any);
  public put(path: string, ...handers: any);
  public patch(path: string, ...handers: any);
  public delete(path: string, ...handers: any);
}