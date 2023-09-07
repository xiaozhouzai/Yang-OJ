/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QueueControllerService {

    /**
     * add
     * @param name name
     * @returns any OK
     * @throws ApiError
     */
    public static addUsingPost(
name?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/queue/add',
            query: {
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * get
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static getUsingPost(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/queue/get',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
