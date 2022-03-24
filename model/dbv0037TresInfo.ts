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
import { Dbv0037Error } from './dbv0037Error';

export class Dbv0037TresInfo {
    /**
    * Slurm errors
    */
    'errors'?: Array<Dbv0037Error>;
    /**
    * Array of tres
    */
    'tres'?: Array<Array<object>>;

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
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037TresInfo.attributeTypeMap;
    }
}

