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
* State properties of job
*/
export class Dbv0036JobState {
    /**
    * Current state of job
    */
    'current'?: string;
    /**
    * Last reason job didn\'t run
    */
    'previous'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036JobState.attributeTypeMap;
    }
}

