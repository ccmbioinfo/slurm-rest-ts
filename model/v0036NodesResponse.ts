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
import { V0036Node } from './v0036Node';

export class V0036NodesResponse {
    /**
    * slurm errors
    */
    'errors'?: Array<V0036Error>;
    /**
    * nodes info
    */
    'nodes'?: Array<V0036Node>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<V0036Error>"
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<V0036Node>"
        }    ];

    static getAttributeTypeMap() {
        return V0036NodesResponse.attributeTypeMap;
    }
}

