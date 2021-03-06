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
* Max jobs per settings
*/
export class Dbv0036AssociationMaxJobsPer {
    /**
    * Max wallclock per job
    */
    'wallClock'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "wallClock",
            "baseName": "wall_clock",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036AssociationMaxJobsPer.attributeTypeMap;
    }
}

