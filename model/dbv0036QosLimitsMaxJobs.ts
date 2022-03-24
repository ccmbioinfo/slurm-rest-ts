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
import { Dbv0036QosLimitsMaxJobsPer } from './dbv0036QosLimitsMaxJobsPer';

/**
* Limits on jobs settings
*/
export class Dbv0036QosLimitsMaxJobs {
    'per'?: Dbv0036QosLimitsMaxJobsPer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "per",
            "baseName": "per",
            "type": "Dbv0036QosLimitsMaxJobsPer"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036QosLimitsMaxJobs.attributeTypeMap;
    }
}

