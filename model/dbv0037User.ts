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
import { Dbv0036UserDefault } from './dbv0036UserDefault';
import { Dbv0037CoordinatorInfo } from './dbv0037CoordinatorInfo';
import { Dbv0037UserAssociations } from './dbv0037UserAssociations';

/**
* User description
*/
export class Dbv0037User {
    /**
    * Description of administrator level
    */
    'administratorLevel'?: string;
    'associations'?: Dbv0037UserAssociations;
    /**
    * List of assigned coordinators
    */
    'coordinators'?: Array<Dbv0037CoordinatorInfo>;
    '_default'?: Dbv0036UserDefault;
    /**
    * User name
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "administratorLevel",
            "baseName": "administrator_level",
            "type": "string"
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "Dbv0037UserAssociations"
        },
        {
            "name": "coordinators",
            "baseName": "coordinators",
            "type": "Array<Dbv0037CoordinatorInfo>"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "Dbv0036UserDefault"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0037User.attributeTypeMap;
    }
}

