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

/**
* Slurm statistics
*/
export class V0037DiagStatistics {
    /**
    * partition records packed
    */
    'partsPacked'?: number;
    /**
    * generation time
    */
    'reqTime'?: number;
    /**
    * data since
    */
    'reqTimeStart'?: number;
    /**
    * Server thread count
    */
    'serverThreadCount'?: number;
    /**
    * Agent queue size
    */
    'agentQueueSize'?: number;
    /**
    * Agent count
    */
    'agentCount'?: number;
    /**
    * Agent thread count
    */
    'agentThreadCount'?: number;
    /**
    * DBD Agent queue size
    */
    'dbdAgentQueueSize'?: number;
    /**
    * Latency for 1000 calls to gettimeofday()
    */
    'gettimeofdayLatency'?: number;
    /**
    * Main Schedule max cycle
    */
    'scheduleCycleMax'?: number;
    /**
    * Main Schedule last cycle
    */
    'scheduleCycleLast'?: number;
    /**
    * Main Schedule cycle iterations
    */
    'scheduleCycleTotal'?: number;
    /**
    * Average time for Schedule Max cycle
    */
    'scheduleCycleMean'?: number;
    /**
    * Average depth for Schedule Max cycle
    */
    'scheduleCycleMeanDepth'?: number;
    /**
    * Main Schedule Cycles per minute
    */
    'scheduleCyclePerMinute'?: number;
    /**
    * Main Schedule Last queue length
    */
    'scheduleQueueLength'?: number;
    /**
    * Job submitted
    */
    'jobsSubmitted'?: number;
    /**
    * Job started
    */
    'jobsStarted'?: number;
    /**
    * Job completed
    */
    'jobsCompleted'?: number;
    /**
    * Job cancelled
    */
    'jobsCanceled'?: number;
    /**
    * Job failed
    */
    'jobsFailed'?: number;
    /**
    * Job pending
    */
    'jobsPending'?: number;
    /**
    * Job running
    */
    'jobsRunning'?: number;
    /**
    * Job states timestamp
    */
    'jobStatesTs'?: number;
    /**
    * Total backfilled jobs (since last slurm start)
    */
    'bfBackfilledJobs'?: number;
    /**
    * Total backfilled jobs (since last stats cycle start)
    */
    'bfLastBackfilledJobs'?: number;
    /**
    * Total backfilled heterogeneous job components
    */
    'bfBackfilledHetJobs'?: number;
    /**
    * Backfill Schedule Total cycles
    */
    'bfCycleCounter'?: number;
    /**
    * Backfill Schedule Mean cycle
    */
    'bfCycleMean'?: number;
    /**
    * Backfill Schedule Max cycle time
    */
    'bfCycleMax'?: number;
    /**
    * Backfill Schedule Last depth cycle
    */
    'bfLastDepth'?: number;
    /**
    * Backfill Schedule Mean cycle (try sched)
    */
    'bfLastDepthTry'?: number;
    /**
    * Backfill Schedule Depth Mean
    */
    'bfDepthMean'?: number;
    /**
    * Backfill Schedule Depth Mean (try sched)
    */
    'bfDepthMeanTry'?: number;
    /**
    * Backfill Schedule Last cycle time
    */
    'bfCycleLast'?: number;
    /**
    * Backfill Schedule Last queue length
    */
    'bfQueueLen'?: number;
    /**
    * Backfill Schedule Mean queue length
    */
    'bfQueueLenMean'?: number;
    /**
    * Last cycle timestamp
    */
    'bfWhenLastCycle'?: number;
    /**
    * Backfill Schedule currently active
    */
    'bfActive'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "partsPacked",
            "baseName": "parts_packed",
            "type": "number"
        },
        {
            "name": "reqTime",
            "baseName": "req_time",
            "type": "number"
        },
        {
            "name": "reqTimeStart",
            "baseName": "req_time_start",
            "type": "number"
        },
        {
            "name": "serverThreadCount",
            "baseName": "server_thread_count",
            "type": "number"
        },
        {
            "name": "agentQueueSize",
            "baseName": "agent_queue_size",
            "type": "number"
        },
        {
            "name": "agentCount",
            "baseName": "agent_count",
            "type": "number"
        },
        {
            "name": "agentThreadCount",
            "baseName": "agent_thread_count",
            "type": "number"
        },
        {
            "name": "dbdAgentQueueSize",
            "baseName": "dbd_agent_queue_size",
            "type": "number"
        },
        {
            "name": "gettimeofdayLatency",
            "baseName": "gettimeofday_latency",
            "type": "number"
        },
        {
            "name": "scheduleCycleMax",
            "baseName": "schedule_cycle_max",
            "type": "number"
        },
        {
            "name": "scheduleCycleLast",
            "baseName": "schedule_cycle_last",
            "type": "number"
        },
        {
            "name": "scheduleCycleTotal",
            "baseName": "schedule_cycle_total",
            "type": "number"
        },
        {
            "name": "scheduleCycleMean",
            "baseName": "schedule_cycle_mean",
            "type": "number"
        },
        {
            "name": "scheduleCycleMeanDepth",
            "baseName": "schedule_cycle_mean_depth",
            "type": "number"
        },
        {
            "name": "scheduleCyclePerMinute",
            "baseName": "schedule_cycle_per_minute",
            "type": "number"
        },
        {
            "name": "scheduleQueueLength",
            "baseName": "schedule_queue_length",
            "type": "number"
        },
        {
            "name": "jobsSubmitted",
            "baseName": "jobs_submitted",
            "type": "number"
        },
        {
            "name": "jobsStarted",
            "baseName": "jobs_started",
            "type": "number"
        },
        {
            "name": "jobsCompleted",
            "baseName": "jobs_completed",
            "type": "number"
        },
        {
            "name": "jobsCanceled",
            "baseName": "jobs_canceled",
            "type": "number"
        },
        {
            "name": "jobsFailed",
            "baseName": "jobs_failed",
            "type": "number"
        },
        {
            "name": "jobsPending",
            "baseName": "jobs_pending",
            "type": "number"
        },
        {
            "name": "jobsRunning",
            "baseName": "jobs_running",
            "type": "number"
        },
        {
            "name": "jobStatesTs",
            "baseName": "job_states_ts",
            "type": "number"
        },
        {
            "name": "bfBackfilledJobs",
            "baseName": "bf_backfilled_jobs",
            "type": "number"
        },
        {
            "name": "bfLastBackfilledJobs",
            "baseName": "bf_last_backfilled_jobs",
            "type": "number"
        },
        {
            "name": "bfBackfilledHetJobs",
            "baseName": "bf_backfilled_het_jobs",
            "type": "number"
        },
        {
            "name": "bfCycleCounter",
            "baseName": "bf_cycle_counter",
            "type": "number"
        },
        {
            "name": "bfCycleMean",
            "baseName": "bf_cycle_mean",
            "type": "number"
        },
        {
            "name": "bfCycleMax",
            "baseName": "bf_cycle_max",
            "type": "number"
        },
        {
            "name": "bfLastDepth",
            "baseName": "bf_last_depth",
            "type": "number"
        },
        {
            "name": "bfLastDepthTry",
            "baseName": "bf_last_depth_try",
            "type": "number"
        },
        {
            "name": "bfDepthMean",
            "baseName": "bf_depth_mean",
            "type": "number"
        },
        {
            "name": "bfDepthMeanTry",
            "baseName": "bf_depth_mean_try",
            "type": "number"
        },
        {
            "name": "bfCycleLast",
            "baseName": "bf_cycle_last",
            "type": "number"
        },
        {
            "name": "bfQueueLen",
            "baseName": "bf_queue_len",
            "type": "number"
        },
        {
            "name": "bfQueueLenMean",
            "baseName": "bf_queue_len_mean",
            "type": "number"
        },
        {
            "name": "bfWhenLastCycle",
            "baseName": "bf_when_last_cycle",
            "type": "number"
        },
        {
            "name": "bfActive",
            "baseName": "bf_active",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V0037DiagStatistics.attributeTypeMap;
    }
}

