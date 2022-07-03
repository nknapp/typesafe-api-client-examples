/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EncryptedPasswordResponse } from '../models/EncryptedPasswordResponse';
import type { PasswordEncryptionRequest } from '../models/PasswordEncryptionRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param requestBody
     * @returns EncryptedPasswordResponse On success
     * @throws ApiError
     */
    public static encryptPassword(
        requestBody?: PasswordEncryptionRequest,
    ): CancelablePromise<EncryptedPasswordResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/encryptPassword',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
