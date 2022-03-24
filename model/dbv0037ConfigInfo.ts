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
import { Dbv0037Account } from './dbv0037Account';
import { Dbv0037Association } from './dbv0037Association';
import { Dbv0037Error } from './dbv0037Error';
import { Dbv0037Qos } from './dbv0037Qos';
import { Dbv0037User } from './dbv0037User';
import { Dbv0037Wckey } from './dbv0037Wckey';

export class Dbv0037ConfigInfo {
    /**
    * Slurm errors
    */
    'errors'?: Array<Dbv0037Error>;
    /**
    * Array of TRES
    */
    'tres'?: Array<Array<object>>;
    /**
    * Array of accounts
    */
    'accounts'?: Array<Dbv0037Account>;
    /**
    * Array of associations
    */
    'associations'?: Array<Dbv0037Association>;
    /**
    * Array of users
    */
    'users'?: Array<Dbv0037User>;
    /**
    * Array of qos
    */
    'qos'?: Array<Dbv0037Qos>;
    /**
    * Array of wckeys
    */
    'wckeys'?: Array<Dbv0037Wckey>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Dbv0037Error>"
        },
        {
            "name": "tres",
            "baseName": "tres",
            "type": "Array<Array<object>>"
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<Dbv0037Account>"
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "Array<Dbv0037Association>"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<Dbv0037User>"
        },
        {
            "name": "qos",
            "baseName": "qos",
            "type": "Array<Dbv0037Qos>"
        },
        {
            "name": "wckeys",
            "baseName": "wckeys",
            "type": "Array<Dbv0037Wckey>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037ConfigInfo.attributeTypeMap;
    }
}

