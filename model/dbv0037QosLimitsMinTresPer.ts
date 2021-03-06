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
* Min tres per settings
*/
export class Dbv0037QosLimitsMinTresPer {
    /**
    * TRES list of attributes
    */
    'job'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "job",
            "baseName": "job",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037QosLimitsMinTresPer.attributeTypeMap;
    }
}

