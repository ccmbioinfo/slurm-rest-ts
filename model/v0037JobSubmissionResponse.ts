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
import { V0037Error } from './v0037Error';

export class V0037JobSubmissionResponse {
    /**
    * slurm errors
    */
    'errors'?: Array<V0037Error>;
    /**
    * new job ID
    */
    'jobId'?: number;
    /**
    * new job step ID
    */
    'stepId'?: string;
    /**
    * Message to user from job_submit plugin
    */
    'jobSubmitUserMsg'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<V0037Error>"
        },
        {
            "name": "jobId",
            "baseName": "job_id",
            "type": "number"
        },
        {
            "name": "stepId",
            "baseName": "step_id",
            "type": "string"
        },
        {
            "name": "jobSubmitUserMsg",
            "baseName": "job_submit_user_msg",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V0037JobSubmissionResponse.attributeTypeMap;
    }
}

