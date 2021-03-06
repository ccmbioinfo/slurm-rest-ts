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
import { V0036Partition } from './v0036Partition';

export class V0036PartitionsResponse {
    /**
    * slurm errors
    */
    'errors'?: Array<V0036Error>;
    /**
    * partition info
    */
    'partitions'?: Array<V0036Partition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<V0036Error>"
        },
        {
            "name": "partitions",
            "baseName": "partitions",
            "type": "Array<V0036Partition>"
        }    ];

    static getAttributeTypeMap() {
        return V0036PartitionsResponse.attributeTypeMap;
    }
}

