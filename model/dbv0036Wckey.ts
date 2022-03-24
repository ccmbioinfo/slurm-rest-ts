/**
 * Slurm Rest API
 * API to access and control Slurm.
 *
 * The version of the OpenAPI document: 0.0.37
 * Contact: sales@schedmd.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Dbv0036Wckey {
    /**
    * List of assigned accounts
    */
    'accounts'?: Array<string>;
    /**
    * Cluster name
    */
    'cluster'?: string;
    /**
    * wckey database unique id
    */
    'id'?: number;
    /**
    * wckey name
    */
    'name'?: string;
    /**
    * wckey user
    */
    'user'?: string;
    /**
    * List of properties of wckey
    */
    'flags'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<string>"
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "flags",
            "baseName": "flags",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036Wckey.attributeTypeMap;
    }
}

