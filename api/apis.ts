export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './openapiApi';
import { OpenapiApi } from './openapiApi';
export * from './slurmApi';
import { SlurmApi } from './slurmApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DefaultApi, OpenapiApi, SlurmApi];
