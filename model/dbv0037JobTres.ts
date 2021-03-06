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
* TRES settings
*/
export class Dbv0037JobTres {
    /**
    * TRES list of attributes
    */
    'allocated'?: Array<object>;
    /**
    * TRES list of attributes
    */
    'requested'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allocated",
            "baseName": "allocated",
            "type": "Array<object>"
        },
        {
            "name": "requested",
            "baseName": "requested",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037JobTres.attributeTypeMap;
    }
}

