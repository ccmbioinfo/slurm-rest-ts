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
import { Dbv0036Error } from './dbv0036Error';

export class Dbv0036ResponseClusterDelete {
    /**
    * Slurm errors
    */
    'errors'?: Array<Dbv0036Error>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Dbv0036Error>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036ResponseClusterDelete.attributeTypeMap;
    }
}

