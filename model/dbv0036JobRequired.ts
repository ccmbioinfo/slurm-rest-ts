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
* Job run requirements
*/
export class Dbv0036JobRequired {
    /**
    * Required number of CPUs
    */
    'cPUs'?: number;
    /**
    * Required amount of memory (MiB)
    */
    'memory'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cPUs",
            "baseName": "CPUs",
            "type": "number"
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036JobRequired.attributeTypeMap;
    }
}

