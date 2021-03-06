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
import { V0036Error } from './v0036Error';
import { V0036JobResponseProperties } from './v0036JobResponseProperties';

export class V0036JobsResponse {
    /**
    * slurm errors
    */
    'errors'?: Array<V0036Error>;
    /**
    * job descriptions
    */
    'jobs'?: Array<V0036JobResponseProperties>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<V0036Error>"
        },
        {
            "name": "jobs",
            "baseName": "jobs",
            "type": "Array<V0036JobResponseProperties>"
        }    ];

    static getAttributeTypeMap() {
        return V0036JobsResponse.attributeTypeMap;
    }
}

