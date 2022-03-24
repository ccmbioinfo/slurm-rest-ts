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
import { Dbv0036ClusterInfoAssociations } from './dbv0036ClusterInfoAssociations';
import { Dbv0036ClusterInfoController } from './dbv0036ClusterInfoController';
import { Dbv0036ResponseTres } from './dbv0036ResponseTres';

export class Dbv0036ClusterInfo {
    'controller'?: Dbv0036ClusterInfoController;
    /**
    * List of properties of cluster
    */
    'flags'?: Array<string>;
    /**
    * Cluster name
    */
    'name'?: string;
    /**
    * Assigned nodes
    */
    'nodes'?: string;
    /**
    * Configured select plugin
    */
    'selectPlugin'?: string;
    'associations'?: Dbv0036ClusterInfoAssociations;
    /**
    * Number rpc version
    */
    'rpcVersion'?: number;
    /**
    * List of TRES in cluster
    */
    'tres'?: Array<Dbv0036ResponseTres>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "controller",
            "baseName": "controller",
            "type": "Dbv0036ClusterInfoController"
        },
        {
            "name": "flags",
            "baseName": "flags",
            "type": "Array<string>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "string"
        },
        {
            "name": "selectPlugin",
            "baseName": "select_plugin",
            "type": "string"
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "Dbv0036ClusterInfoAssociations"
        },
        {
            "name": "rpcVersion",
            "baseName": "rpc_version",
            "type": "number"
        },
        {
            "name": "tres",
            "baseName": "tres",
            "type": "Array<Dbv0036ResponseTres>"
        }    ];

    static getAttributeTypeMap() {
        return Dbv0036ClusterInfo.attributeTypeMap;
    }
}

