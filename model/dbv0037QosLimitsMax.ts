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
import { Dbv0036QosLimitsMaxAccruing } from './dbv0036QosLimitsMaxAccruing';
import { Dbv0036QosLimitsMaxJobs } from './dbv0036QosLimitsMaxJobs';
import { Dbv0036QosLimitsMaxWallClock } from './dbv0036QosLimitsMaxWallClock';
import { Dbv0037QosLimitsMaxTres } from './dbv0037QosLimitsMaxTres';

/**
* Limits on max settings
*/
export class Dbv0037QosLimitsMax {
    'wallClock'?: Dbv0036QosLimitsMaxWallClock;
    'jobs'?: Dbv0036QosLimitsMaxJobs;
    'accruing'?: Dbv0036QosLimitsMaxAccruing;
    'tres'?: Dbv0037QosLimitsMaxTres;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "wallClock",
            "baseName": "wall_clock",
            "type": "Dbv0036QosLimitsMaxWallClock"
        },
        {
            "name": "jobs",
            "baseName": "jobs",
            "type": "Dbv0036QosLimitsMaxJobs"
        },
        {
            "name": "accruing",
            "baseName": "accruing",
            "type": "Dbv0036QosLimitsMaxAccruing"
        },
        {
            "name": "tres",
            "baseName": "tres",
            "type": "Dbv0037QosLimitsMaxTres"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037QosLimitsMax.attributeTypeMap;
    }
}
