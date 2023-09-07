/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_UserBlog_ } from '../models/BaseResponse_List_UserBlog_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_UserBlog_ } from '../models/BaseResponse_Page_UserBlog_';
import type { BaseResponse_UserBlog_ } from '../models/BaseResponse_UserBlog_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { UserBlogAddRequest } from '../models/UserBlogAddRequest';
import type { UserBlogQueryRequest } from '../models/UserBlogQueryRequest';
import type { UserBlogUpdateRequest } from '../models/UserBlogUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserBlogControllerService {

    /**
     * addUserBlog
     * @param userBlogAddRequest userBlogAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserBlogUsingPost(
userBlogAddRequest: UserBlogAddRequest,
): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blog/add',
            body: userBlogAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteUserBlog
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserBlogUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blog/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserBlogById
     * @param id id
     * @returns BaseResponse_UserBlog_ OK
     * @throws ApiError
     */
    public static getUserBlogByIdUsingGet(
id?: string,
): CancelablePromise<BaseResponse_UserBlog_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserBlogList
     * @returns BaseResponse_List_UserBlog_ OK
     * @throws ApiError
     */
    public static getUserBlogListUsingGet(): CancelablePromise<BaseResponse_List_UserBlog_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blog/get/myblog',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listUserBlogByPage
     * @param userBlogQueryRequest userBlogQueryRequest
     * @returns BaseResponse_Page_UserBlog_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserBlogByPageUsingPost(
userBlogQueryRequest: UserBlogQueryRequest,
): CancelablePromise<BaseResponse_Page_UserBlog_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blog/list/page',
            body: userBlogQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listMyUserBlogByPage
     * @param userBlogQueryRequest userBlogQueryRequest
     * @returns BaseResponse_Page_UserBlog_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyUserBlogByPageUsingPost(
userBlogQueryRequest: UserBlogQueryRequest,
): CancelablePromise<BaseResponse_Page_UserBlog_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blog/my/list/page',
            body: userBlogQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateUserBlog
     * @param userBlogUpdateRequest userBlogUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserBlogUsingPost(
userBlogUpdateRequest: UserBlogUpdateRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blog/update',
            body: userBlogUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateMyBlog
     * @param content content
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateMyBlogUsingPost(
content: string,
id: string,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blog/update/user',
            query: {
                'content': content,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
