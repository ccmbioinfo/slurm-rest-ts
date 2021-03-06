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
import { V0036JobProperties } from './v0036JobProperties';

export class V0036JobSubmission {
    /**
    * Executable script (full contents) to run in batch step
    */
    'script': string;
    'job'?: V0036JobProperties;
    /**
    * Properties of an HetJob
    */
    'jobs'?: Array<V0036JobProperties>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "script",
            "baseName": "script",
            "type": "string"
        },
        {
            "name": "job",
            "baseName": "job",
            "type": "V0036JobProperties"
        },
        {
            "name": "jobs",
            "baseName": "jobs",
            "type": "Array<V0036JobProperties>"
        }    ];

    static getAttributeTypeMap() {
        return V0036JobSubmission.attributeTypeMap;
    }
}

