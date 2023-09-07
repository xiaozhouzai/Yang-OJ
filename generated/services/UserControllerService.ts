/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_LoginUserVO_ } from '../models/BaseResponse_LoginUserVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_User_ } from '../models/BaseResponse_Page_User_';
import type { BaseResponse_Page_UserVO_ } from '../models/BaseResponse_Page_UserVO_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';
import type { BaseResponse_TagVO_ } from '../models/BaseResponse_TagVO_';
import type { BaseResponse_User_ } from '../models/BaseResponse_User_';
import type { BaseResponse_UserVO_ } from '../models/BaseResponse_UserVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { TagVO } from '../models/TagVO';
import type { UserAddRequest } from '../models/UserAddRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserPhoneLoginRequest } from '../models/UserPhoneLoginRequest';
import type { UserQueryRequest } from '../models/UserQueryRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserSendMessageRequest } from '../models/UserSendMessageRequest';
import type { UserUpdateMyRequest } from '../models/UserUpdateMyRequest';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * addUser
     * @param userAddRequest userAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserUsingPost(
userAddRequest: UserAddRequest,
): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/add',
            body: userAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * addTag
     * @param tagVo tagVo
     * @returns BaseResponse_TagVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addTagUsingPost(
tagVo: TagVO,
): CancelablePromise<BaseResponse_TagVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/add/tag',
            body: tagVo,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteUser
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteUserByIds
     * @param ids ids
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteUserByIdsUsingDelete(
ids: Array<number>,
): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/delete/all',
            body: ids,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getUserById
     * @param id id
     * @returns BaseResponse_User_ OK
     * @throws ApiError
     */
    public static getUserByIdUsingGet(
id?: number,
): CancelablePromise<BaseResponse_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get',
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
     * getLoginUser
     * @returns BaseResponse_LoginUserVO_ OK
     * @throws ApiError
     */
    public static getLoginUserUsingGet(): CancelablePromise<BaseResponse_LoginUserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get/login',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserVOById
     * @param id id
     * @returns BaseResponse_UserVO_ OK
     * @throws ApiError
     */
    public static getUserVoByIdUsingGet(
id?: number,
): CancelablePromise<BaseResponse_UserVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get/vo',
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
     * listUserByPage
     * @param userQueryRequest userQueryRequest
     * @returns BaseResponse_Page_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserByPageUsingPost(
userQueryRequest: UserQueryRequest,
): CancelablePromise<BaseResponse_Page_User_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list/page',
            body: userQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listUserVOByPage
     * @param userQueryRequest userQueryRequest
     * @returns BaseResponse_Page_UserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserVoByPageUsingPost(
userQueryRequest: UserQueryRequest,
): CancelablePromise<BaseResponse_Page_UserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list/page/vo',
            body: userQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogin
     * @param userLoginRequest userLoginRequest
     * @returns BaseResponse_LoginUserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
userLoginRequest: UserLoginRequest,
): CancelablePromise<BaseResponse_LoginUserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login',
            body: userLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userPhoneLogin
     * @param userPhoneLoginRequest userPhoneLoginRequest
     * @returns BaseResponse_LoginUserVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userPhoneLoginUsingPost(
userPhoneLoginRequest: UserPhoneLoginRequest,
): CancelablePromise<BaseResponse_LoginUserVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login/phone',
            body: userPhoneLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogout
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLogoutUsingPost(): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/logout',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userRegister
     * @param userRegisterRequest userRegisterRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userRegisterUsingPost(
userRegisterRequest: UserRegisterRequest,
): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/register',
            body: userRegisterRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * sendMsg
     * @param userSendMessageRequest userSendMessageRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static sendMsgUsingPost(
userSendMessageRequest: UserSendMessageRequest,
): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/sendMsg',
            body: userSendMessageRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateUser
     * @param userUpdateRequest userUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserUsingPost(
userUpdateRequest: UserUpdateRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/update',
            body: userUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateMyUser
     * @param userUpdateMyRequest userUpdateMyRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateMyUserUsingPost(
userUpdateMyRequest: UserUpdateMyRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/update/my',
            body: userUpdateMyRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
