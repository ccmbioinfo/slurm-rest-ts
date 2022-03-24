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
import { Dbv0036AssociationMaxJobsPer } from './dbv0036AssociationMaxJobsPer';

/**
* Max jobs settings
*/
export class Dbv0036AssociationMaxJobs {
    'per'?: Dbv0036AssociationMaxJobsPer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "per",
            "baseName": "per",
            "type": "Dbv0036AssociationMaxJobsPer"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036AssociationMaxJobs.attributeTypeMap;
    }
}

