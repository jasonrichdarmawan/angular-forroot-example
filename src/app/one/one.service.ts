import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN, ENVIRONMENT_UUID_TOKEN, Environment } from '../core/environment';

@Injectable()
export class OneService {

  constructor(
    @Inject(ENVIRONMENT_UUID_TOKEN) environmentUUID: string,
    @Inject(ENVIRONMENT_TOKEN) environment: Environment
  ) {
    console.log("hello world", OneService.name, environmentUUID, environment);
  }
}
