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
import { Dbv0036JobArrayLimitsMax } from './dbv0036JobArrayLimitsMax';

/**
* Limits on array settings
*/
export class Dbv0036JobArrayLimits {
    'max'?: Dbv0036JobArrayLimitsMax;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "max",
            "baseName": "max",
            "type": "Dbv0036JobArrayLimitsMax"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036JobArrayLimits.attributeTypeMap;
    }
}
