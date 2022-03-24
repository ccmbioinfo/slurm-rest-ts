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
import { Dbv0036QosLimits } from './dbv0036QosLimits';
import { Dbv0036QosPreempt } from './dbv0036QosPreempt';

/**
* QOS description
*/
export class Dbv0036Qos {
    /**
    * QOS description
    */
    'description'?: string;
    /**
    * List of properties of QOS
    */
    'flags'?: Array<string>;
    /**
    * Database id
    */
    'id'?: string;
    'limits'?: Dbv0036QosLimits;
    'preempt'?: Dbv0036QosPreempt;
    /**
    * QOS priority
    */
    'priority'?: number;
    /**
    * Usage factor
    */
    'usageFactor'?: number;
    /**
    * Usage threshold
    */
    'usageThreshold'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "flags",
            "baseName": "flags",
            "type": "Array<string>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Dbv0036QosLimits"
        },
        {
            "name": "preempt",
            "baseName": "preempt",
            "type": "Dbv0036QosPreempt"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "usageFactor",
            "baseName": "usage_factor",
            "type": "number"
        },
        {
            "name": "usageThreshold",
            "baseName": "usage_threshold",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036Qos.attributeTypeMap;
    }
}
