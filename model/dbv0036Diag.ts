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
import { Dbv0036DiagRPCs } from './dbv0036DiagRPCs';
import { Dbv0036DiagRollups } from './dbv0036DiagRollups';
import { Dbv0036DiagUsers } from './dbv0036DiagUsers';
import { Dbv0036Error } from './dbv0036Error';

export class Dbv0036Diag {
    /**
    * Slurm errors
    */
    'errors'?: Array<Dbv0036Error>;
    /**
    * Unix timestamp of start time
    */
    'timeStart'?: number;
    'rollups'?: Array<Dbv0036DiagRollups>;
    'rPCs'?: Array<Dbv0036DiagRPCs>;
    'users'?: Array<Dbv0036DiagUsers>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Dbv0036Error>"
        },
        {
            "name": "timeStart",
            "baseName": "time_start",
            "type": "number"
        },
        {
            "name": "rollups",
            "baseName": "rollups",
            "type": "Array<Dbv0036DiagRollups>"
        },
        {
            "name": "rPCs",
            "baseName": "RPCs",
            "type": "Array<Dbv0036DiagRPCs>"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<Dbv0036DiagUsers>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036Diag.attributeTypeMap;
    }
}

