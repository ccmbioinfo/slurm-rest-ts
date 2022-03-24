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
* Max TRES minutes per settings
*/
export class Dbv0036QosLimitsMaxTresMinutesPer {
    /**
    * TRES list of attributes
    */
    'job'?: Array<object>;
    /**
    * TRES list of attributes
    */
    'account'?: Array<object>;
    /**
    * TRES list of attributes
    */
    'user'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "job",
            "baseName": "job",
            "type": "Array<object>"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "Array<object>"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036QosLimitsMaxTresMinutesPer.attributeTypeMap;
    }
}
