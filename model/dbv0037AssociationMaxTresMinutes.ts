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
import { Dbv0037AssociationMaxTresMinutesPer } from './dbv0037AssociationMaxTresMinutesPer';

/**
* Max TRES minutes settings
*/
export class Dbv0037AssociationMaxTresMinutes {
    'per'?: Dbv0037AssociationMaxTresMinutesPer;
    /**
    * TRES list of attributes
    */
    'total'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "per",
            "baseName": "per",
            "type": "Dbv0037AssociationMaxTresMinutesPer"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037AssociationMaxTresMinutes.attributeTypeMap;
    }
}

