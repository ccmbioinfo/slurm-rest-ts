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

export class JobProperties {
    /**
    * Charge resources used by this job to specified account.
    */
    'account'?: string;
    /**
    * Define the job accounting and profiling sampling intervals.
    */
    'accountGatherFreqency'?: string;
    /**
    * Arguments to the script.
    */
    'argv'?: Array<string>;
    /**
    * Submit a job array, multiple jobs to be executed with identical parameters. The indexes specification identifies what array index values should be used.
    */
    'array'?: string;
    /**
    * features required for batch script\'s node
    */
    'batchFeatures'?: string;
    /**
    * Submit the batch script to the Slurm controller immediately, like normal, but tell the controller to defer the allocation of the job until the specified time.
    */
    'beginTime'?: string;
    /**
    * Burst buffer specification.
    */
    'burstBuffer'?: string;
    /**
    * Specifies features that a federated cluster must have to have a sibling job submitted to it.
    */
    'clusterConstraints'?: string;
    /**
    * An arbitrary comment.
    */
    'comment'?: string;
    /**
    * node features required by job.
    */
    'constraints'?: string;
    /**
    * Count of specialized threads per node reserved by the job for system operations and not used by the application.
    */
    'coreSpecification'?: number;
    /**
    * Restrict node selection to nodes with at least the specified number of cores per socket.
    */
    'coresPerSocket'?: number;
    /**
    * Cpu binding
    */
    'cpuBinding'?: string;
    /**
    * Cpu binding hint
    */
    'cpuBindingHint'?: string;
    /**
    * Request that job steps initiated by srun commands inside this sbatch script be run at some requested frequency if possible, on the CPUs selected for the step on the compute node(s).
    */
    'cpuFrequency'?: string;
    /**
    * Number of CPUs requested per allocated GPU.
    */
    'cpusPerGpu'?: string;
    /**
    * Advise the Slurm controller that ensuing job steps will require ncpus number of processors per task.
    */
    'cpusPerTask'?: number;
    /**
    * Instruct Slurm to connect the batch script\'s standard output directly to the file name.
    */
    'currentWorkingDirectory'?: string;
    /**
    * Remove the job if no ending is possible before this deadline (start > (deadline - time[-min])).
    */
    'deadline'?: string;
    /**
    * Do not reboot nodes in order to satisfied this job\'s feature specification if the job has been eligible to run for less than this time period.
    */
    'delayBoot'?: number;
    /**
    * Defer the start of this job until the specified dependencies have been satisfied completed.
    */
    'dependency'?: string;
    /**
    * Specify alternate distribution methods for remote processes.
    */
    'distribution'?: string;
    /**
    * Dictionary of environment entries.
    */
    'environment'?: object;
    'exclusive'?: string | boolean | null;
    /**
    * Load new login environment for user on job node.
    */
    'getUserEnvironment'?: boolean;
    /**
    * Specifies a comma delimited list of generic consumable resources.
    */
    'gres'?: string;
    /**
    * Specify generic resource task binding options.
    */
    'gresFlags'?: JobProperties.GresFlagsEnum;
    /**
    * Requested binding of tasks to GPU.
    */
    'gpuBinding'?: string;
    /**
    * Requested GPU frequency.
    */
    'gpuFrequency'?: string;
    /**
    * GPUs per job.
    */
    'gpus'?: string;
    /**
    * GPUs per node.
    */
    'gpusPerNode'?: string;
    /**
    * GPUs per socket.
    */
    'gpusPerSocket'?: string;
    /**
    * GPUs per task.
    */
    'gpusPerTask'?: string;
    /**
    * Specify the job is to be submitted in a held state (priority of zero).
    */
    'hold'?: boolean;
    /**
    * If a job has an invalid dependency, then Slurm is to terminate it.
    */
    'killOnInvalidDependency'?: boolean;
    /**
    * Specification of licenses (or other resources available on all nodes of the cluster) which must be allocated to this job.
    */
    'licenses'?: string;
    /**
    * Notify user by email when certain event types occur.
    */
    'mailType'?: string;
    /**
    * User to receive email notification of state changes as defined by mail_type.
    */
    'mailUser'?: string;
    /**
    * This parameter is a group among the groups of the user.
    */
    'mcsLabel'?: string;
    /**
    * Bind tasks to memory.
    */
    'memoryBinding'?: string;
    /**
    * Minimum real memory per cpu (MB).
    */
    'memoryPerCpu'?: number;
    /**
    * Minimum memory required per allocated GPU.
    */
    'memoryPerGpu'?: number;
    /**
    * Minimum real memory per node (MB).
    */
    'memoryPerNode'?: number;
    /**
    * Minimum number of CPUs per node.
    */
    'minimumCpusPerNode'?: number;
    /**
    * If a range of node counts is given, prefer the smaller count.
    */
    'minimumNodes'?: boolean;
    /**
    * Specify a name for the job allocation.
    */
    'name'?: string;
    /**
    * Run the job with an adjusted scheduling priority within Slurm.
    */
    'nice'?: string;
    /**
    * Do not automatically terminate a job if one of the nodes it has been allocated fails.
    */
    'noKill'?: boolean;
    'nodes'?: number | Array<number> | null;
    /**
    * Open the output and error files using append or truncate mode as specified.
    */
    'openMode'?: JobProperties.OpenModeEnum = OpenModeEnum_Append;
    /**
    * Request a specific partition for the resource allocation.
    */
    'partition'?: string;
    /**
    * Request a specific job priority.
    */
    'priority'?: string;
    /**
    * Request a quality of service for the job.
    */
    'qos'?: string;
    /**
    * Specifies that the batch job should eligible to being requeue.
    */
    'requeue'?: boolean;
    /**
    * Allocate resources for the job from the named reservation.
    */
    'reservation'?: string;
    /**
    * When a job is within sig_time seconds of its end time, send it the signal sig_num.
    */
    'signal'?: string;
    /**
    * Restrict node selection to nodes with at least the specified number of sockets.
    */
    'socketsPerNode'?: number;
    /**
    * Spread the job allocation over as many nodes as possible and attempt to evenly distribute tasks across the allocated nodes.
    */
    'spreadJob'?: boolean;
    /**
    * Instruct Slurm to connect the batch script\'s standard error directly to the file name.
    */
    'standardError'?: string;
    /**
    * Instruct Slurm to connect the batch script\'s standard input directly to the file name specified.
    */
    'standardIn'?: string;
    /**
    * Instruct Slurm to connect the batch script\'s standard output directly to the file name.
    */
    'standardOut'?: string;
    /**
    * Advises the Slurm controller that job steps run within the allocation will launch a maximum of number tasks and to provide for sufficient resources.
    */
    'tasks'?: number;
    /**
    * Request the maximum ntasks be invoked on each core.
    */
    'tasksPerCore'?: number;
    /**
    * Request the maximum ntasks be invoked on each node.
    */
    'tasksPerNode'?: number;
    /**
    * Request the maximum ntasks be invoked on each socket.
    */
    'tasksPerSocket'?: number;
    /**
    * Count of specialized threads per node reserved by the job for system operations and not used by the application.
    */
    'threadSpecification'?: number;
    /**
    * Restrict node selection to nodes with at least the specified number of threads per core.
    */
    'threadsPerCore'?: number;
    /**
    * Step time limit.
    */
    'timeLimit'?: number;
    /**
    * Minimum run time in minutes.
    */
    'timeMinimum'?: number;
    /**
    * Do not begin execution until all nodes are ready for use.
    */
    'waitAllNodes'?: boolean;
    /**
    * Specify wckey to be used with job.
    */
    'wckey'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "accountGatherFreqency",
            "baseName": "account_gather_freqency",
            "type": "string"
        },
        {
            "name": "argv",
            "baseName": "argv",
            "type": "Array<string>"
        },
        {
            "name": "array",
            "baseName": "array",
            "type": "string"
        },
        {
            "name": "batchFeatures",
            "baseName": "batch_features",
            "type": "string"
        },
        {
            "name": "beginTime",
            "baseName": "begin_time",
            "type": "string"
        },
        {
            "name": "burstBuffer",
            "baseName": "burst_buffer",
            "type": "string"
        },
        {
            "name": "clusterConstraints",
            "baseName": "cluster_constraints",
            "type": "string"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "constraints",
            "baseName": "constraints",
            "type": "string"
        },
        {
            "name": "coreSpecification",
            "baseName": "core_specification",
            "type": "number"
        },
        {
            "name": "coresPerSocket",
            "baseName": "cores_per_socket",
            "type": "number"
        },
        {
            "name": "cpuBinding",
            "baseName": "cpu_binding",
            "type": "string"
        },
        {
            "name": "cpuBindingHint",
            "baseName": "cpu_binding_hint",
            "type": "string"
        },
        {
            "name": "cpuFrequency",
            "baseName": "cpu_frequency",
            "type": "string"
        },
        {
            "name": "cpusPerGpu",
            "baseName": "cpus_per_gpu",
            "type": "string"
        },
        {
            "name": "cpusPerTask",
            "baseName": "cpus_per_task",
            "type": "number"
        },
        {
            "name": "currentWorkingDirectory",
            "baseName": "current_working_directory",
            "type": "string"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "string"
        },
        {
            "name": "delayBoot",
            "baseName": "delay_boot",
            "type": "number"
        },
        {
            "name": "dependency",
            "baseName": "dependency",
            "type": "string"
        },
        {
            "name": "distribution",
            "baseName": "distribution",
            "type": "string"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "object"
        },
        {
            "name": "exclusive",
            "baseName": "exclusive",
            "type": "string | boolean"
        },
        {
            "name": "getUserEnvironment",
            "baseName": "get_user_environment",
            "type": "boolean"
        },
        {
            "name": "gres",
            "baseName": "gres",
            "type": "string"
        },
        {
            "name": "gresFlags",
            "baseName": "gres_flags",
            "type": "JobProperties.GresFlagsEnum"
        },
        {
            "name": "gpuBinding",
            "baseName": "gpu_binding",
            "type": "string"
        },
        {
            "name": "gpuFrequency",
            "baseName": "gpu_frequency",
            "type": "string"
        },
        {
            "name": "gpus",
            "baseName": "gpus",
            "type": "string"
        },
        {
            "name": "gpusPerNode",
            "baseName": "gpus_per_node",
            "type": "string"
        },
        {
            "name": "gpusPerSocket",
            "baseName": "gpus_per_socket",
            "type": "string"
        },
        {
            "name": "gpusPerTask",
            "baseName": "gpus_per_task",
            "type": "string"
        },
        {
            "name": "hold",
            "baseName": "hold",
            "type": "boolean"
        },
        {
            "name": "killOnInvalidDependency",
            "baseName": "kill_on_invalid_dependency",
            "type": "boolean"
        },
        {
            "name": "licenses",
            "baseName": "licenses",
            "type": "string"
        },
        {
            "name": "mailType",
            "baseName": "mail_type",
            "type": "string"
        },
        {
            "name": "mailUser",
            "baseName": "mail_user",
            "type": "string"
        },
        {
            "name": "mcsLabel",
            "baseName": "mcs_label",
            "type": "string"
        },
        {
            "name": "memoryBinding",
            "baseName": "memory_binding",
            "type": "string"
        },
        {
            "name": "memoryPerCpu",
            "baseName": "memory_per_cpu",
            "type": "number"
        },
        {
            "name": "memoryPerGpu",
            "baseName": "memory_per_gpu",
            "type": "number"
        },
        {
            "name": "memoryPerNode",
            "baseName": "memory_per_node",
            "type": "number"
        },
        {
            "name": "minimumCpusPerNode",
            "baseName": "minimum_cpus_per_node",
            "type": "number"
        },
        {
            "name": "minimumNodes",
            "baseName": "minimum_nodes",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nice",
            "baseName": "nice",
            "type": "string"
        },
        {
            "name": "noKill",
            "baseName": "no_kill",
            "type": "boolean"
        },
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "number | Array<number>"
        },
        {
            "name": "openMode",
            "baseName": "open_mode",
            "type": "JobProperties.OpenModeEnum"
        },
        {
            "name": "partition",
            "baseName": "partition",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "string"
        },
        {
            "name": "qos",
            "baseName": "qos",
            "type": "string"
        },
        {
            "name": "requeue",
            "baseName": "requeue",
            "type": "boolean"
        },
        {
            "name": "reservation",
            "baseName": "reservation",
            "type": "string"
        },
        {
            "name": "signal",
            "baseName": "signal",
            "type": "string"
        },
        {
            "name": "socketsPerNode",
            "baseName": "sockets_per_node",
            "type": "number"
        },
        {
            "name": "spreadJob",
            "baseName": "spread_job",
            "type": "boolean"
        },
        {
            "name": "standardError",
            "baseName": "standard_error",
            "type": "string"
        },
        {
            "name": "standardIn",
            "baseName": "standard_in",
            "type": "string"
        },
        {
            "name": "standardOut",
            "baseName": "standard_out",
            "type": "string"
        },
        {
            "name": "tasks",
            "baseName": "tasks",
            "type": "number"
        },
        {
            "name": "tasksPerCore",
            "baseName": "tasks_per_core",
            "type": "number"
        },
        {
            "name": "tasksPerNode",
            "baseName": "tasks_per_node",
            "type": "number"
        },
        {
            "name": "tasksPerSocket",
            "baseName": "tasks_per_socket",
            "type": "number"
        },
        {
            "name": "threadSpecification",
            "baseName": "thread_specification",
            "type": "number"
        },
        {
            "name": "threadsPerCore",
            "baseName": "threads_per_core",
            "type": "number"
        },
        {
            "name": "timeLimit",
            "baseName": "time_limit",
            "type": "number"
        },
        {
            "name": "timeMinimum",
            "baseName": "time_minimum",
            "type": "number"
        },
        {
            "name": "waitAllNodes",
            "baseName": "wait_all_nodes",
            "type": "boolean"
        },
        {
            "name": "wckey",
            "baseName": "wckey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return JobProperties.attributeTypeMap;
    }
}

export namespace JobProperties {
    export enum GresFlagsEnum {
        DisableBinding = <any> 'disable-binding',
        EnforceBinding = <any> 'enforce-binding'
    }
    export enum OpenModeEnum {
        Append = <any> 'append',
        Truncate = <any> 'truncate'
    }
}
