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
import { Dbv0036AssociationMaxJobs } from './dbv0036AssociationMaxJobs';
import { Dbv0036AssociationMaxPer } from './dbv0036AssociationMaxPer';
import { Dbv0036AssociationMaxTres } from './dbv0036AssociationMaxTres';

/**
* Max settings
*/
export class Dbv0036AssociationMax {
    'jobs'?: Dbv0036AssociationMaxJobs;
    'per'?: Dbv0036AssociationMaxPer;
    'tres'?: Dbv0036AssociationMaxTres;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jobs",
            "baseName": "jobs",
            "type": "Dbv0036AssociationMaxJobs"
        },
        {
            "name": "per",
            "baseName": "per",
            "type": "Dbv0036AssociationMaxPer"
        },
        {
            "name": "tres",
            "baseName": "tres",
            "type": "Dbv0036AssociationMaxTres"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036AssociationMax.attributeTypeMap;
    }
}

