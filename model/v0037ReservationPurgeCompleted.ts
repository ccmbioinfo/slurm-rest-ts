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
* If PURGE_COMP flag is set the amount of seconds this reservation will sit idle until it is revoked
*/
export class V0037ReservationPurgeCompleted {
    /**
    * amount of seconds this reservation will sit idle until it is revoked
    */
    'time'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V0037ReservationPurgeCompleted.attributeTypeMap;
    }
}
