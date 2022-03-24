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
import { Dbv0036JobStepStepTresRequested } from './dbv0036JobStepStepTresRequested';

/**
* TRES usage
*/
export class Dbv0036JobStepStepTres {
    'requested'?: Dbv0036JobStepStepTresRequested;
    'consumed'?: Dbv0036JobStepStepTresRequested;
    /**
    * TRES list of attributes
    */
    'allocated'?: Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requested",
            "baseName": "requested",
            "type": "Dbv0036JobStepStepTresRequested"
        },
        {
            "name": "consumed",
            "baseName": "consumed",
            "type": "Dbv0036JobStepStepTresRequested"
        },
        {
            "name": "allocated",
            "baseName": "allocated",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036JobStepStepTres.attributeTypeMap;
    }
}

