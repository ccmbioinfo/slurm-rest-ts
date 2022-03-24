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

export class Dbv0037AssociationShortInfo {
    /**
    * Account name
    */
    'account'?: string;
    /**
    * Cluster name
    */
    'cluster'?: string;
    /**
    * Partition name (optional)
    */
    'partition'?: string;
    /**
    * User name
    */
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "string"
        },
        {
            "name": "partition",
            "baseName": "partition",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037AssociationShortInfo.attributeTypeMap;
    }
}

