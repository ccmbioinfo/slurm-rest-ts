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

export class Dbv0036Error {
    /**
    * Error number
    */
    'errno'?: number;
    /**
    * Error message
    */
    'error'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errno",
            "baseName": "errno",
            "type": "number"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036Error.attributeTypeMap;
    }
}

