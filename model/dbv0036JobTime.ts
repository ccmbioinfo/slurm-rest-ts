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
import { Dbv0036JobTimeSystem } from './dbv0036JobTimeSystem';
import { Dbv0036JobTimeTotal } from './dbv0036JobTimeTotal';
import { Dbv0036JobTimeUser } from './dbv0036JobTimeUser';

/**
* Time properties
*/
export class Dbv0036JobTime {
    /**
    * Total time elapsed
    */
    'elapsed'?: number;
    /**
    * Total time eligible to run
    */
    'eligible'?: number;
    /**
    * Timestamp of when job ended
    */
    'end'?: number;
    /**
    * Timestamp of when job started
    */
    'start'?: number;
    /**
    * Timestamp of when job submitted
    */
    'submission'?: number;
    /**
    * Timestamp of when job last suspended
    */
    'suspended'?: number;
    'system'?: Dbv0036JobTimeSystem;
    'total'?: Dbv0036JobTimeTotal;
    'user'?: Dbv0036JobTimeUser;
    /**
    * Job wall clock time limit
    */
    'limit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "elapsed",
            "baseName": "elapsed",
            "type": "number"
        },
        {
            "name": "eligible",
            "baseName": "eligible",
            "type": "number"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number"
        },
        {
            "name": "submission",
            "baseName": "submission",
            "type": "number"
        },
        {
            "name": "suspended",
            "baseName": "suspended",
            "type": "number"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "Dbv0036JobTimeSystem"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "Dbv0036JobTimeTotal"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "Dbv0036JobTimeUser"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036JobTime.attributeTypeMap;
    }
}
