import localVarRequest from 'request';

export * from './dbv0036Account';
export * from './dbv0036AccountInfo';
export * from './dbv0036AccountResponse';
export * from './dbv0036Association';
export * from './dbv0036AssociationDefault';
export * from './dbv0036AssociationMax';
export * from './dbv0036AssociationMaxJobs';
export * from './dbv0036AssociationMaxJobsPer';
export * from './dbv0036AssociationMaxPer';
export * from './dbv0036AssociationMaxPerAccount';
export * from './dbv0036AssociationMaxTres';
export * from './dbv0036AssociationMaxTresMinutes';
export * from './dbv0036AssociationMaxTresMinutesPer';
export * from './dbv0036AssociationMaxTresPer';
export * from './dbv0036AssociationMin';
export * from './dbv0036AssociationShortInfo';
export * from './dbv0036AssociationUsage';
export * from './dbv0036AssociationsInfo';
export * from './dbv0036ClusterInfo';
export * from './dbv0036ClusterInfoAssociations';
export * from './dbv0036ClusterInfoController';
export * from './dbv0036ConfigInfo';
export * from './dbv0036ConfigResponse';
export * from './dbv0036CoordinatorInfo';
export * from './dbv0036Diag';
export * from './dbv0036DiagRPCs';
export * from './dbv0036DiagRollups';
export * from './dbv0036DiagTime';
export * from './dbv0036DiagTime1';
export * from './dbv0036DiagUsers';
export * from './dbv0036Error';
export * from './dbv0036Job';
export * from './dbv0036JobArray';
export * from './dbv0036JobArrayLimits';
export * from './dbv0036JobArrayLimitsMax';
export * from './dbv0036JobArrayLimitsMaxRunning';
export * from './dbv0036JobComment';
export * from './dbv0036JobExitCode';
export * from './dbv0036JobExitCodeSignal';
export * from './dbv0036JobHet';
export * from './dbv0036JobInfo';
export * from './dbv0036JobMcs';
export * from './dbv0036JobRequired';
export * from './dbv0036JobReservation';
export * from './dbv0036JobState';
export * from './dbv0036JobStep';
export * from './dbv0036JobStepCPU';
export * from './dbv0036JobStepCPURequestedFrequency';
export * from './dbv0036JobStepNodes';
export * from './dbv0036JobStepStatistics';
export * from './dbv0036JobStepStatisticsCPU';
export * from './dbv0036JobStepStatisticsEnergy';
export * from './dbv0036JobStepStep';
export * from './dbv0036JobStepStepHet';
export * from './dbv0036JobStepStepTask';
export * from './dbv0036JobStepStepTres';
export * from './dbv0036JobStepStepTresRequested';
export * from './dbv0036JobStepTasks';
export * from './dbv0036JobStepTime';
export * from './dbv0036JobTime';
export * from './dbv0036JobTimeSystem';
export * from './dbv0036JobTimeTotal';
export * from './dbv0036JobTimeUser';
export * from './dbv0036JobTres';
export * from './dbv0036JobWckey';
export * from './dbv0036Qos';
export * from './dbv0036QosInfo';
export * from './dbv0036QosLimits';
export * from './dbv0036QosLimitsMax';
export * from './dbv0036QosLimitsMaxAccruing';
export * from './dbv0036QosLimitsMaxAccruingPer';
export * from './dbv0036QosLimitsMaxJobs';
export * from './dbv0036QosLimitsMaxJobsPer';
export * from './dbv0036QosLimitsMaxTres';
export * from './dbv0036QosLimitsMaxTresMinutes';
export * from './dbv0036QosLimitsMaxTresMinutesPer';
export * from './dbv0036QosLimitsMaxTresPer';
export * from './dbv0036QosLimitsMaxWallClock';
export * from './dbv0036QosLimitsMaxWallClockPer';
export * from './dbv0036QosLimitsMin';
export * from './dbv0036QosLimitsMinTres';
export * from './dbv0036QosLimitsMinTresPer';
export * from './dbv0036QosPreempt';
export * from './dbv0036ResponseAccountDelete';
export * from './dbv0036ResponseAssociationDelete';
export * from './dbv0036ResponseClusterAdd';
export * from './dbv0036ResponseClusterDelete';
export * from './dbv0036ResponseQosDelete';
export * from './dbv0036ResponseTres';
export * from './dbv0036ResponseUserDelete';
export * from './dbv0036ResponseUserUpdate';
export * from './dbv0036ResponseWckeyAdd';
export * from './dbv0036ResponseWckeyDelete';
export * from './dbv0036TresInfo';
export * from './dbv0036User';
export * from './dbv0036UserAssociations';
export * from './dbv0036UserDefault';
export * from './dbv0036UserInfo';
export * from './dbv0036Wckey';
export * from './dbv0036WckeyInfo';
export * from './dbv0037Account';
export * from './dbv0037AccountInfo';
export * from './dbv0037AccountResponse';
export * from './dbv0037Association';
export * from './dbv0037AssociationMax';
export * from './dbv0037AssociationMaxTres';
export * from './dbv0037AssociationMaxTresMinutes';
export * from './dbv0037AssociationMaxTresMinutesPer';
export * from './dbv0037AssociationMaxTresPer';
export * from './dbv0037AssociationShortInfo';
export * from './dbv0037AssociationsInfo';
export * from './dbv0037ClusterInfo';
export * from './dbv0037ClusterInfoAssociations';
export * from './dbv0037ConfigInfo';
export * from './dbv0037ConfigResponse';
export * from './dbv0037CoordinatorInfo';
export * from './dbv0037Diag';
export * from './dbv0037Error';
export * from './dbv0037Job';
export * from './dbv0037JobExitCode';
export * from './dbv0037JobInfo';
export * from './dbv0037JobState';
export * from './dbv0037JobStep';
export * from './dbv0037JobStepStep';
export * from './dbv0037JobStepStepTres';
export * from './dbv0037JobStepStepTresRequested';
export * from './dbv0037JobTres';
export * from './dbv0037Qos';
export * from './dbv0037QosInfo';
export * from './dbv0037QosLimits';
export * from './dbv0037QosLimitsMax';
export * from './dbv0037QosLimitsMaxTres';
export * from './dbv0037QosLimitsMaxTresMinutes';
export * from './dbv0037QosLimitsMaxTresMinutesPer';
export * from './dbv0037QosLimitsMaxTresPer';
export * from './dbv0037QosLimitsMin';
export * from './dbv0037QosLimitsMinTres';
export * from './dbv0037QosLimitsMinTresPer';
export * from './dbv0037ResponseAccountDelete';
export * from './dbv0037ResponseAssociationDelete';
export * from './dbv0037ResponseClusterAdd';
export * from './dbv0037ResponseClusterDelete';
export * from './dbv0037ResponseQosDelete';
export * from './dbv0037ResponseTres';
export * from './dbv0037ResponseUserDelete';
export * from './dbv0037ResponseUserUpdate';
export * from './dbv0037ResponseWckeyAdd';
export * from './dbv0037ResponseWckeyDelete';
export * from './dbv0037TresInfo';
export * from './dbv0037User';
export * from './dbv0037UserAssociations';
export * from './dbv0037UserInfo';
export * from './dbv0037Wckey';
export * from './dbv0037WckeyInfo';
export * from './jobProperties';
export * from './signal';
export * from './signalOneOf';
export * from './v0036Diag';
export * from './v0036Error';
export * from './v0036JobProperties';
export * from './v0036JobResources';
export * from './v0036JobResponseProperties';
export * from './v0036JobSubmission';
export * from './v0036JobSubmissionResponse';
export * from './v0036JobsResponse';
export * from './v0036Node';
export * from './v0036NodeAllocation';
export * from './v0036NodesResponse';
export * from './v0036Partition';
export * from './v0036PartitionsResponse';
export * from './v0036Ping';
export * from './v0036Pings';
export * from './v0036Signal';
export * from './v0037Diag';
export * from './v0037DiagStatistics';
export * from './v0037Error';
export * from './v0037JobProperties';
export * from './v0037JobResources';
export * from './v0037JobResponseProperties';
export * from './v0037JobSubmission';
export * from './v0037JobSubmissionResponse';
export * from './v0037JobsResponse';
export * from './v0037Node';
export * from './v0037NodeAllocation';
export * from './v0037NodesResponse';
export * from './v0037Partition';
export * from './v0037PartitionsResponse';
export * from './v0037Ping';
export * from './v0037Pings';
export * from './v0037Reservation';
export * from './v0037ReservationPurgeCompleted';
export * from './v0037ReservationsResponse';
export * from './v0037Signal';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Dbv0036Account } from './dbv0036Account';
import { Dbv0036AccountInfo } from './dbv0036AccountInfo';
import { Dbv0036AccountResponse } from './dbv0036AccountResponse';
import { Dbv0036Association } from './dbv0036Association';
import { Dbv0036AssociationDefault } from './dbv0036AssociationDefault';
import { Dbv0036AssociationMax } from './dbv0036AssociationMax';
import { Dbv0036AssociationMaxJobs } from './dbv0036AssociationMaxJobs';
import { Dbv0036AssociationMaxJobsPer } from './dbv0036AssociationMaxJobsPer';
import { Dbv0036AssociationMaxPer } from './dbv0036AssociationMaxPer';
import { Dbv0036AssociationMaxPerAccount } from './dbv0036AssociationMaxPerAccount';
import { Dbv0036AssociationMaxTres } from './dbv0036AssociationMaxTres';
import { Dbv0036AssociationMaxTresMinutes } from './dbv0036AssociationMaxTresMinutes';
import { Dbv0036AssociationMaxTresMinutesPer } from './dbv0036AssociationMaxTresMinutesPer';
import { Dbv0036AssociationMaxTresPer } from './dbv0036AssociationMaxTresPer';
import { Dbv0036AssociationMin } from './dbv0036AssociationMin';
import { Dbv0036AssociationShortInfo } from './dbv0036AssociationShortInfo';
import { Dbv0036AssociationUsage } from './dbv0036AssociationUsage';
import { Dbv0036AssociationsInfo } from './dbv0036AssociationsInfo';
import { Dbv0036ClusterInfo } from './dbv0036ClusterInfo';
import { Dbv0036ClusterInfoAssociations } from './dbv0036ClusterInfoAssociations';
import { Dbv0036ClusterInfoController } from './dbv0036ClusterInfoController';
import { Dbv0036ConfigInfo } from './dbv0036ConfigInfo';
import { Dbv0036ConfigResponse } from './dbv0036ConfigResponse';
import { Dbv0036CoordinatorInfo } from './dbv0036CoordinatorInfo';
import { Dbv0036Diag } from './dbv0036Diag';
import { Dbv0036DiagRPCs } from './dbv0036DiagRPCs';
import { Dbv0036DiagRollups } from './dbv0036DiagRollups';
import { Dbv0036DiagTime } from './dbv0036DiagTime';
import { Dbv0036DiagTime1 } from './dbv0036DiagTime1';
import { Dbv0036DiagUsers } from './dbv0036DiagUsers';
import { Dbv0036Error } from './dbv0036Error';
import { Dbv0036Job } from './dbv0036Job';
import { Dbv0036JobArray } from './dbv0036JobArray';
import { Dbv0036JobArrayLimits } from './dbv0036JobArrayLimits';
import { Dbv0036JobArrayLimitsMax } from './dbv0036JobArrayLimitsMax';
import { Dbv0036JobArrayLimitsMaxRunning } from './dbv0036JobArrayLimitsMaxRunning';
import { Dbv0036JobComment } from './dbv0036JobComment';
import { Dbv0036JobExitCode } from './dbv0036JobExitCode';
import { Dbv0036JobExitCodeSignal } from './dbv0036JobExitCodeSignal';
import { Dbv0036JobHet } from './dbv0036JobHet';
import { Dbv0036JobInfo } from './dbv0036JobInfo';
import { Dbv0036JobMcs } from './dbv0036JobMcs';
import { Dbv0036JobRequired } from './dbv0036JobRequired';
import { Dbv0036JobReservation } from './dbv0036JobReservation';
import { Dbv0036JobState } from './dbv0036JobState';
import { Dbv0036JobStep } from './dbv0036JobStep';
import { Dbv0036JobStepCPU } from './dbv0036JobStepCPU';
import { Dbv0036JobStepCPURequestedFrequency } from './dbv0036JobStepCPURequestedFrequency';
import { Dbv0036JobStepNodes } from './dbv0036JobStepNodes';
import { Dbv0036JobStepStatistics } from './dbv0036JobStepStatistics';
import { Dbv0036JobStepStatisticsCPU } from './dbv0036JobStepStatisticsCPU';
import { Dbv0036JobStepStatisticsEnergy } from './dbv0036JobStepStatisticsEnergy';
import { Dbv0036JobStepStep } from './dbv0036JobStepStep';
import { Dbv0036JobStepStepHet } from './dbv0036JobStepStepHet';
import { Dbv0036JobStepStepTask } from './dbv0036JobStepStepTask';
import { Dbv0036JobStepStepTres } from './dbv0036JobStepStepTres';
import { Dbv0036JobStepStepTresRequested } from './dbv0036JobStepStepTresRequested';
import { Dbv0036JobStepTasks } from './dbv0036JobStepTasks';
import { Dbv0036JobStepTime } from './dbv0036JobStepTime';
import { Dbv0036JobTime } from './dbv0036JobTime';
import { Dbv0036JobTimeSystem } from './dbv0036JobTimeSystem';
import { Dbv0036JobTimeTotal } from './dbv0036JobTimeTotal';
import { Dbv0036JobTimeUser } from './dbv0036JobTimeUser';
import { Dbv0036JobTres } from './dbv0036JobTres';
import { Dbv0036JobWckey } from './dbv0036JobWckey';
import { Dbv0036Qos } from './dbv0036Qos';
import { Dbv0036QosInfo } from './dbv0036QosInfo';
import { Dbv0036QosLimits } from './dbv0036QosLimits';
import { Dbv0036QosLimitsMax } from './dbv0036QosLimitsMax';
import { Dbv0036QosLimitsMaxAccruing } from './dbv0036QosLimitsMaxAccruing';
import { Dbv0036QosLimitsMaxAccruingPer } from './dbv0036QosLimitsMaxAccruingPer';
import { Dbv0036QosLimitsMaxJobs } from './dbv0036QosLimitsMaxJobs';
import { Dbv0036QosLimitsMaxJobsPer } from './dbv0036QosLimitsMaxJobsPer';
import { Dbv0036QosLimitsMaxTres } from './dbv0036QosLimitsMaxTres';
import { Dbv0036QosLimitsMaxTresMinutes } from './dbv0036QosLimitsMaxTresMinutes';
import { Dbv0036QosLimitsMaxTresMinutesPer } from './dbv0036QosLimitsMaxTresMinutesPer';
import { Dbv0036QosLimitsMaxTresPer } from './dbv0036QosLimitsMaxTresPer';
import { Dbv0036QosLimitsMaxWallClock } from './dbv0036QosLimitsMaxWallClock';
import { Dbv0036QosLimitsMaxWallClockPer } from './dbv0036QosLimitsMaxWallClockPer';
import { Dbv0036QosLimitsMin } from './dbv0036QosLimitsMin';
import { Dbv0036QosLimitsMinTres } from './dbv0036QosLimitsMinTres';
import { Dbv0036QosLimitsMinTresPer } from './dbv0036QosLimitsMinTresPer';
import { Dbv0036QosPreempt } from './dbv0036QosPreempt';
import { Dbv0036ResponseAccountDelete } from './dbv0036ResponseAccountDelete';
import { Dbv0036ResponseAssociationDelete } from './dbv0036ResponseAssociationDelete';
import { Dbv0036ResponseClusterAdd } from './dbv0036ResponseClusterAdd';
import { Dbv0036ResponseClusterDelete } from './dbv0036ResponseClusterDelete';
import { Dbv0036ResponseQosDelete } from './dbv0036ResponseQosDelete';
import { Dbv0036ResponseTres } from './dbv0036ResponseTres';
import { Dbv0036ResponseUserDelete } from './dbv0036ResponseUserDelete';
import { Dbv0036ResponseUserUpdate } from './dbv0036ResponseUserUpdate';
import { Dbv0036ResponseWckeyAdd } from './dbv0036ResponseWckeyAdd';
import { Dbv0036ResponseWckeyDelete } from './dbv0036ResponseWckeyDelete';
import { Dbv0036TresInfo } from './dbv0036TresInfo';
import { Dbv0036User } from './dbv0036User';
import { Dbv0036UserAssociations } from './dbv0036UserAssociations';
import { Dbv0036UserDefault } from './dbv0036UserDefault';
import { Dbv0036UserInfo } from './dbv0036UserInfo';
import { Dbv0036Wckey } from './dbv0036Wckey';
import { Dbv0036WckeyInfo } from './dbv0036WckeyInfo';
import { Dbv0037Account } from './dbv0037Account';
import { Dbv0037AccountInfo } from './dbv0037AccountInfo';
import { Dbv0037AccountResponse } from './dbv0037AccountResponse';
import { Dbv0037Association } from './dbv0037Association';
import { Dbv0037AssociationMax } from './dbv0037AssociationMax';
import { Dbv0037AssociationMaxTres } from './dbv0037AssociationMaxTres';
import { Dbv0037AssociationMaxTresMinutes } from './dbv0037AssociationMaxTresMinutes';
import { Dbv0037AssociationMaxTresMinutesPer } from './dbv0037AssociationMaxTresMinutesPer';
import { Dbv0037AssociationMaxTresPer } from './dbv0037AssociationMaxTresPer';
import { Dbv0037AssociationShortInfo } from './dbv0037AssociationShortInfo';
import { Dbv0037AssociationsInfo } from './dbv0037AssociationsInfo';
import { Dbv0037ClusterInfo } from './dbv0037ClusterInfo';
import { Dbv0037ClusterInfoAssociations } from './dbv0037ClusterInfoAssociations';
import { Dbv0037ConfigInfo } from './dbv0037ConfigInfo';
import { Dbv0037ConfigResponse } from './dbv0037ConfigResponse';
import { Dbv0037CoordinatorInfo } from './dbv0037CoordinatorInfo';
import { Dbv0037Diag } from './dbv0037Diag';
import { Dbv0037Error } from './dbv0037Error';
import { Dbv0037Job } from './dbv0037Job';
import { Dbv0037JobExitCode } from './dbv0037JobExitCode';
import { Dbv0037JobInfo } from './dbv0037JobInfo';
import { Dbv0037JobState } from './dbv0037JobState';
import { Dbv0037JobStep } from './dbv0037JobStep';
import { Dbv0037JobStepStep } from './dbv0037JobStepStep';
import { Dbv0037JobStepStepTres } from './dbv0037JobStepStepTres';
import { Dbv0037JobStepStepTresRequested } from './dbv0037JobStepStepTresRequested';
import { Dbv0037JobTres } from './dbv0037JobTres';
import { Dbv0037Qos } from './dbv0037Qos';
import { Dbv0037QosInfo } from './dbv0037QosInfo';
import { Dbv0037QosLimits } from './dbv0037QosLimits';
import { Dbv0037QosLimitsMax } from './dbv0037QosLimitsMax';
import { Dbv0037QosLimitsMaxTres } from './dbv0037QosLimitsMaxTres';
import { Dbv0037QosLimitsMaxTresMinutes } from './dbv0037QosLimitsMaxTresMinutes';
import { Dbv0037QosLimitsMaxTresMinutesPer } from './dbv0037QosLimitsMaxTresMinutesPer';
import { Dbv0037QosLimitsMaxTresPer } from './dbv0037QosLimitsMaxTresPer';
import { Dbv0037QosLimitsMin } from './dbv0037QosLimitsMin';
import { Dbv0037QosLimitsMinTres } from './dbv0037QosLimitsMinTres';
import { Dbv0037QosLimitsMinTresPer } from './dbv0037QosLimitsMinTresPer';
import { Dbv0037ResponseAccountDelete } from './dbv0037ResponseAccountDelete';
import { Dbv0037ResponseAssociationDelete } from './dbv0037ResponseAssociationDelete';
import { Dbv0037ResponseClusterAdd } from './dbv0037ResponseClusterAdd';
import { Dbv0037ResponseClusterDelete } from './dbv0037ResponseClusterDelete';
import { Dbv0037ResponseQosDelete } from './dbv0037ResponseQosDelete';
import { Dbv0037ResponseTres } from './dbv0037ResponseTres';
import { Dbv0037ResponseUserDelete } from './dbv0037ResponseUserDelete';
import { Dbv0037ResponseUserUpdate } from './dbv0037ResponseUserUpdate';
import { Dbv0037ResponseWckeyAdd } from './dbv0037ResponseWckeyAdd';
import { Dbv0037ResponseWckeyDelete } from './dbv0037ResponseWckeyDelete';
import { Dbv0037TresInfo } from './dbv0037TresInfo';
import { Dbv0037User } from './dbv0037User';
import { Dbv0037UserAssociations } from './dbv0037UserAssociations';
import { Dbv0037UserInfo } from './dbv0037UserInfo';
import { Dbv0037Wckey } from './dbv0037Wckey';
import { Dbv0037WckeyInfo } from './dbv0037WckeyInfo';
import { JobProperties } from './jobProperties';
import { Signal } from './signal';
import { SignalOneOf } from './signalOneOf';
import { V0036Diag } from './v0036Diag';
import { V0036Error } from './v0036Error';
import { V0036JobProperties } from './v0036JobProperties';
import { V0036JobResources } from './v0036JobResources';
import { V0036JobResponseProperties } from './v0036JobResponseProperties';
import { V0036JobSubmission } from './v0036JobSubmission';
import { V0036JobSubmissionResponse } from './v0036JobSubmissionResponse';
import { V0036JobsResponse } from './v0036JobsResponse';
import { V0036Node } from './v0036Node';
import { V0036NodeAllocation } from './v0036NodeAllocation';
import { V0036NodesResponse } from './v0036NodesResponse';
import { V0036Partition } from './v0036Partition';
import { V0036PartitionsResponse } from './v0036PartitionsResponse';
import { V0036Ping } from './v0036Ping';
import { V0036Pings } from './v0036Pings';
import { V0036Signal } from './v0036Signal';
import { V0037Diag } from './v0037Diag';
import { V0037DiagStatistics } from './v0037DiagStatistics';
import { V0037Error } from './v0037Error';
import { V0037JobProperties } from './v0037JobProperties';
import { V0037JobResources } from './v0037JobResources';
import { V0037JobResponseProperties } from './v0037JobResponseProperties';
import { V0037JobSubmission } from './v0037JobSubmission';
import { V0037JobSubmissionResponse } from './v0037JobSubmissionResponse';
import { V0037JobsResponse } from './v0037JobsResponse';
import { V0037Node } from './v0037Node';
import { V0037NodeAllocation } from './v0037NodeAllocation';
import { V0037NodesResponse } from './v0037NodesResponse';
import { V0037Partition } from './v0037Partition';
import { V0037PartitionsResponse } from './v0037PartitionsResponse';
import { V0037Ping } from './v0037Ping';
import { V0037Pings } from './v0037Pings';
import { V0037Reservation } from './v0037Reservation';
import { V0037ReservationPurgeCompleted } from './v0037ReservationPurgeCompleted';
import { V0037ReservationsResponse } from './v0037ReservationsResponse';
import { V0037Signal } from './v0037Signal';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "JobProperties.GresFlagsEnum": JobProperties.GresFlagsEnum,
        "JobProperties.OpenModeEnum": JobProperties.OpenModeEnum,
        "SignalOneOf": SignalOneOf,
        "V0036JobProperties.ExclusiveEnum": V0036JobProperties.ExclusiveEnum,
        "V0036JobProperties.GresFlagsEnum": V0036JobProperties.GresFlagsEnum,
        "V0036JobProperties.OpenModeEnum": V0036JobProperties.OpenModeEnum,
        "V0036Ping.PingEnum": V0036Ping.PingEnum,
        "V0036Signal": V0036Signal,
        "V0037JobProperties.ExclusiveEnum": V0037JobProperties.ExclusiveEnum,
        "V0037JobProperties.GresFlagsEnum": V0037JobProperties.GresFlagsEnum,
        "V0037JobProperties.OpenModeEnum": V0037JobProperties.OpenModeEnum,
        "V0037Ping.PingEnum": V0037Ping.PingEnum,
        "V0037Signal": V0037Signal,
}

let typeMap: {[index: string]: any} = {
    "Dbv0036Account": Dbv0036Account,
    "Dbv0036AccountInfo": Dbv0036AccountInfo,
    "Dbv0036AccountResponse": Dbv0036AccountResponse,
    "Dbv0036Association": Dbv0036Association,
    "Dbv0036AssociationDefault": Dbv0036AssociationDefault,
    "Dbv0036AssociationMax": Dbv0036AssociationMax,
    "Dbv0036AssociationMaxJobs": Dbv0036AssociationMaxJobs,
    "Dbv0036AssociationMaxJobsPer": Dbv0036AssociationMaxJobsPer,
    "Dbv0036AssociationMaxPer": Dbv0036AssociationMaxPer,
    "Dbv0036AssociationMaxPerAccount": Dbv0036AssociationMaxPerAccount,
    "Dbv0036AssociationMaxTres": Dbv0036AssociationMaxTres,
    "Dbv0036AssociationMaxTresMinutes": Dbv0036AssociationMaxTresMinutes,
    "Dbv0036AssociationMaxTresMinutesPer": Dbv0036AssociationMaxTresMinutesPer,
    "Dbv0036AssociationMaxTresPer": Dbv0036AssociationMaxTresPer,
    "Dbv0036AssociationMin": Dbv0036AssociationMin,
    "Dbv0036AssociationShortInfo": Dbv0036AssociationShortInfo,
    "Dbv0036AssociationUsage": Dbv0036AssociationUsage,
    "Dbv0036AssociationsInfo": Dbv0036AssociationsInfo,
    "Dbv0036ClusterInfo": Dbv0036ClusterInfo,
    "Dbv0036ClusterInfoAssociations": Dbv0036ClusterInfoAssociations,
    "Dbv0036ClusterInfoController": Dbv0036ClusterInfoController,
    "Dbv0036ConfigInfo": Dbv0036ConfigInfo,
    "Dbv0036ConfigResponse": Dbv0036ConfigResponse,
    "Dbv0036CoordinatorInfo": Dbv0036CoordinatorInfo,
    "Dbv0036Diag": Dbv0036Diag,
    "Dbv0036DiagRPCs": Dbv0036DiagRPCs,
    "Dbv0036DiagRollups": Dbv0036DiagRollups,
    "Dbv0036DiagTime": Dbv0036DiagTime,
    "Dbv0036DiagTime1": Dbv0036DiagTime1,
    "Dbv0036DiagUsers": Dbv0036DiagUsers,
    "Dbv0036Error": Dbv0036Error,
    "Dbv0036Job": Dbv0036Job,
    "Dbv0036JobArray": Dbv0036JobArray,
    "Dbv0036JobArrayLimits": Dbv0036JobArrayLimits,
    "Dbv0036JobArrayLimitsMax": Dbv0036JobArrayLimitsMax,
    "Dbv0036JobArrayLimitsMaxRunning": Dbv0036JobArrayLimitsMaxRunning,
    "Dbv0036JobComment": Dbv0036JobComment,
    "Dbv0036JobExitCode": Dbv0036JobExitCode,
    "Dbv0036JobExitCodeSignal": Dbv0036JobExitCodeSignal,
    "Dbv0036JobHet": Dbv0036JobHet,
    "Dbv0036JobInfo": Dbv0036JobInfo,
    "Dbv0036JobMcs": Dbv0036JobMcs,
    "Dbv0036JobRequired": Dbv0036JobRequired,
    "Dbv0036JobReservation": Dbv0036JobReservation,
    "Dbv0036JobState": Dbv0036JobState,
    "Dbv0036JobStep": Dbv0036JobStep,
    "Dbv0036JobStepCPU": Dbv0036JobStepCPU,
    "Dbv0036JobStepCPURequestedFrequency": Dbv0036JobStepCPURequestedFrequency,
    "Dbv0036JobStepNodes": Dbv0036JobStepNodes,
    "Dbv0036JobStepStatistics": Dbv0036JobStepStatistics,
    "Dbv0036JobStepStatisticsCPU": Dbv0036JobStepStatisticsCPU,
    "Dbv0036JobStepStatisticsEnergy": Dbv0036JobStepStatisticsEnergy,
    "Dbv0036JobStepStep": Dbv0036JobStepStep,
    "Dbv0036JobStepStepHet": Dbv0036JobStepStepHet,
    "Dbv0036JobStepStepTask": Dbv0036JobStepStepTask,
    "Dbv0036JobStepStepTres": Dbv0036JobStepStepTres,
    "Dbv0036JobStepStepTresRequested": Dbv0036JobStepStepTresRequested,
    "Dbv0036JobStepTasks": Dbv0036JobStepTasks,
    "Dbv0036JobStepTime": Dbv0036JobStepTime,
    "Dbv0036JobTime": Dbv0036JobTime,
    "Dbv0036JobTimeSystem": Dbv0036JobTimeSystem,
    "Dbv0036JobTimeTotal": Dbv0036JobTimeTotal,
    "Dbv0036JobTimeUser": Dbv0036JobTimeUser,
    "Dbv0036JobTres": Dbv0036JobTres,
    "Dbv0036JobWckey": Dbv0036JobWckey,
    "Dbv0036Qos": Dbv0036Qos,
    "Dbv0036QosInfo": Dbv0036QosInfo,
    "Dbv0036QosLimits": Dbv0036QosLimits,
    "Dbv0036QosLimitsMax": Dbv0036QosLimitsMax,
    "Dbv0036QosLimitsMaxAccruing": Dbv0036QosLimitsMaxAccruing,
    "Dbv0036QosLimitsMaxAccruingPer": Dbv0036QosLimitsMaxAccruingPer,
    "Dbv0036QosLimitsMaxJobs": Dbv0036QosLimitsMaxJobs,
    "Dbv0036QosLimitsMaxJobsPer": Dbv0036QosLimitsMaxJobsPer,
    "Dbv0036QosLimitsMaxTres": Dbv0036QosLimitsMaxTres,
    "Dbv0036QosLimitsMaxTresMinutes": Dbv0036QosLimitsMaxTresMinutes,
    "Dbv0036QosLimitsMaxTresMinutesPer": Dbv0036QosLimitsMaxTresMinutesPer,
    "Dbv0036QosLimitsMaxTresPer": Dbv0036QosLimitsMaxTresPer,
    "Dbv0036QosLimitsMaxWallClock": Dbv0036QosLimitsMaxWallClock,
    "Dbv0036QosLimitsMaxWallClockPer": Dbv0036QosLimitsMaxWallClockPer,
    "Dbv0036QosLimitsMin": Dbv0036QosLimitsMin,
    "Dbv0036QosLimitsMinTres": Dbv0036QosLimitsMinTres,
    "Dbv0036QosLimitsMinTresPer": Dbv0036QosLimitsMinTresPer,
    "Dbv0036QosPreempt": Dbv0036QosPreempt,
    "Dbv0036ResponseAccountDelete": Dbv0036ResponseAccountDelete,
    "Dbv0036ResponseAssociationDelete": Dbv0036ResponseAssociationDelete,
    "Dbv0036ResponseClusterAdd": Dbv0036ResponseClusterAdd,
    "Dbv0036ResponseClusterDelete": Dbv0036ResponseClusterDelete,
    "Dbv0036ResponseQosDelete": Dbv0036ResponseQosDelete,
    "Dbv0036ResponseTres": Dbv0036ResponseTres,
    "Dbv0036ResponseUserDelete": Dbv0036ResponseUserDelete,
    "Dbv0036ResponseUserUpdate": Dbv0036ResponseUserUpdate,
    "Dbv0036ResponseWckeyAdd": Dbv0036ResponseWckeyAdd,
    "Dbv0036ResponseWckeyDelete": Dbv0036ResponseWckeyDelete,
    "Dbv0036TresInfo": Dbv0036TresInfo,
    "Dbv0036User": Dbv0036User,
    "Dbv0036UserAssociations": Dbv0036UserAssociations,
    "Dbv0036UserDefault": Dbv0036UserDefault,
    "Dbv0036UserInfo": Dbv0036UserInfo,
    "Dbv0036Wckey": Dbv0036Wckey,
    "Dbv0036WckeyInfo": Dbv0036WckeyInfo,
    "Dbv0037Account": Dbv0037Account,
    "Dbv0037AccountInfo": Dbv0037AccountInfo,
    "Dbv0037AccountResponse": Dbv0037AccountResponse,
    "Dbv0037Association": Dbv0037Association,
    "Dbv0037AssociationMax": Dbv0037AssociationMax,
    "Dbv0037AssociationMaxTres": Dbv0037AssociationMaxTres,
    "Dbv0037AssociationMaxTresMinutes": Dbv0037AssociationMaxTresMinutes,
    "Dbv0037AssociationMaxTresMinutesPer": Dbv0037AssociationMaxTresMinutesPer,
    "Dbv0037AssociationMaxTresPer": Dbv0037AssociationMaxTresPer,
    "Dbv0037AssociationShortInfo": Dbv0037AssociationShortInfo,
    "Dbv0037AssociationsInfo": Dbv0037AssociationsInfo,
    "Dbv0037ClusterInfo": Dbv0037ClusterInfo,
    "Dbv0037ClusterInfoAssociations": Dbv0037ClusterInfoAssociations,
    "Dbv0037ConfigInfo": Dbv0037ConfigInfo,
    "Dbv0037ConfigResponse": Dbv0037ConfigResponse,
    "Dbv0037CoordinatorInfo": Dbv0037CoordinatorInfo,
    "Dbv0037Diag": Dbv0037Diag,
    "Dbv0037Error": Dbv0037Error,
    "Dbv0037Job": Dbv0037Job,
    "Dbv0037JobExitCode": Dbv0037JobExitCode,
    "Dbv0037JobInfo": Dbv0037JobInfo,
    "Dbv0037JobState": Dbv0037JobState,
    "Dbv0037JobStep": Dbv0037JobStep,
    "Dbv0037JobStepStep": Dbv0037JobStepStep,
    "Dbv0037JobStepStepTres": Dbv0037JobStepStepTres,
    "Dbv0037JobStepStepTresRequested": Dbv0037JobStepStepTresRequested,
    "Dbv0037JobTres": Dbv0037JobTres,
    "Dbv0037Qos": Dbv0037Qos,
    "Dbv0037QosInfo": Dbv0037QosInfo,
    "Dbv0037QosLimits": Dbv0037QosLimits,
    "Dbv0037QosLimitsMax": Dbv0037QosLimitsMax,
    "Dbv0037QosLimitsMaxTres": Dbv0037QosLimitsMaxTres,
    "Dbv0037QosLimitsMaxTresMinutes": Dbv0037QosLimitsMaxTresMinutes,
    "Dbv0037QosLimitsMaxTresMinutesPer": Dbv0037QosLimitsMaxTresMinutesPer,
    "Dbv0037QosLimitsMaxTresPer": Dbv0037QosLimitsMaxTresPer,
    "Dbv0037QosLimitsMin": Dbv0037QosLimitsMin,
    "Dbv0037QosLimitsMinTres": Dbv0037QosLimitsMinTres,
    "Dbv0037QosLimitsMinTresPer": Dbv0037QosLimitsMinTresPer,
    "Dbv0037ResponseAccountDelete": Dbv0037ResponseAccountDelete,
    "Dbv0037ResponseAssociationDelete": Dbv0037ResponseAssociationDelete,
    "Dbv0037ResponseClusterAdd": Dbv0037ResponseClusterAdd,
    "Dbv0037ResponseClusterDelete": Dbv0037ResponseClusterDelete,
    "Dbv0037ResponseQosDelete": Dbv0037ResponseQosDelete,
    "Dbv0037ResponseTres": Dbv0037ResponseTres,
    "Dbv0037ResponseUserDelete": Dbv0037ResponseUserDelete,
    "Dbv0037ResponseUserUpdate": Dbv0037ResponseUserUpdate,
    "Dbv0037ResponseWckeyAdd": Dbv0037ResponseWckeyAdd,
    "Dbv0037ResponseWckeyDelete": Dbv0037ResponseWckeyDelete,
    "Dbv0037TresInfo": Dbv0037TresInfo,
    "Dbv0037User": Dbv0037User,
    "Dbv0037UserAssociations": Dbv0037UserAssociations,
    "Dbv0037UserInfo": Dbv0037UserInfo,
    "Dbv0037Wckey": Dbv0037Wckey,
    "Dbv0037WckeyInfo": Dbv0037WckeyInfo,
    "JobProperties": JobProperties,
    "Signal": Signal,
    "V0036Diag": V0036Diag,
    "V0036Error": V0036Error,
    "V0036JobProperties": V0036JobProperties,
    "V0036JobResources": V0036JobResources,
    "V0036JobResponseProperties": V0036JobResponseProperties,
    "V0036JobSubmission": V0036JobSubmission,
    "V0036JobSubmissionResponse": V0036JobSubmissionResponse,
    "V0036JobsResponse": V0036JobsResponse,
    "V0036Node": V0036Node,
    "V0036NodeAllocation": V0036NodeAllocation,
    "V0036NodesResponse": V0036NodesResponse,
    "V0036Partition": V0036Partition,
    "V0036PartitionsResponse": V0036PartitionsResponse,
    "V0036Ping": V0036Ping,
    "V0036Pings": V0036Pings,
    "V0037Diag": V0037Diag,
    "V0037DiagStatistics": V0037DiagStatistics,
    "V0037Error": V0037Error,
    "V0037JobProperties": V0037JobProperties,
    "V0037JobResources": V0037JobResources,
    "V0037JobResponseProperties": V0037JobResponseProperties,
    "V0037JobSubmission": V0037JobSubmission,
    "V0037JobSubmissionResponse": V0037JobSubmissionResponse,
    "V0037JobsResponse": V0037JobsResponse,
    "V0037Node": V0037Node,
    "V0037NodeAllocation": V0037NodeAllocation,
    "V0037NodesResponse": V0037NodesResponse,
    "V0037Partition": V0037Partition,
    "V0037PartitionsResponse": V0037PartitionsResponse,
    "V0037Ping": V0037Ping,
    "V0037Pings": V0037Pings,
    "V0037Reservation": V0037Reservation,
    "V0037ReservationPurgeCompleted": V0037ReservationPurgeCompleted,
    "V0037ReservationsResponse": V0037ReservationsResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
