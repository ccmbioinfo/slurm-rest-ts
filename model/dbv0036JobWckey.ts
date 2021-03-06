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

/**
* Job assigned wckey details
*/
export class Dbv0036JobWckey {
    /**
    * Job assigned wckey
    */
    'wckey'?: string;
    /**
    * wckey flags
    */
    'flags'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "wckey",
            "baseName": "wckey",
            "type": "string"
        },
        {
            "name": "flags",
            "baseName": "flags",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036JobWckey.attributeTypeMap;
    }
}

