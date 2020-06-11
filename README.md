# Lamb-rest-api

## About

Mapping handler lambda function request to rest API request. 

## Example

- serverless.yml

```yaml

...
functions:
  hello:
    handler: handler.hello
    events:
      - http:
          method: GET
          path: hello
  
...

```

- routes.ts
```typescript
import { Router, Application } from 'lamb-rest-api';

const routes = new Router();
routes.get('/hello', (app: Application) => {
  return {
    httpStatus: 200,
    body: JSON.stringify({
      event: app.event,
    }, null, 2);
  }
});
```

- handler.ts
```typescript
import { APIGatewayProxyHandler } from 'aws-lambda';
import { LambRestAPI } from 'lamb-rest-api';
import './routes.ts';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = LambRestAPI.handler();
```

## Custom Application

- application-builder.ts
```typescript
import { Application } from 'lamb-rest-api';

class MyApplication extends Application {
  constructor(event, context, callback) {
    super(event, context, callback);
  }

  public contextBuilder() {
    // custom your data
    const event$ = this.event;
    const context$ = this.context;
    // ...
  }
}
```

- handler.ts
```typescript
import { MyApplication } from './application-builder.ts';

export const hello: APIGatewayProxyHandler = LambRestAPI.handler({
  application: MyApplication,
});
```