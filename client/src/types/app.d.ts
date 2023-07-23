import { FlowModuleTypeEnum } from '@/constants/flow';
import { XYPosition } from 'reactflow';
import {
  AppModuleItemTypeEnum,
  ModulesInputItemTypeEnum,
  VariableInputEnum
} from '../constants/app';
import type { FlowInputItemType, FlowOutputItemType, FlowOutputTargetItemType } from './flow';
import type { AppSchema, kbSchema } from './mongoSchema';
import { ChatModelType } from '@/constants/model';

export type AppListItemType = {
  _id: string;
  name: string;
  avatar: string;
  intro: string;
};

export interface AppUpdateParams {
  name?: string;
  avatar?: string;
  intro?: string;
  chat?: AppSchema['chat'];
  share?: AppSchema['share'];
  modules?: AppSchema['modules'];
}

export interface ShareAppItem {
  _id: string;
  avatar: string;
  name: string;
  intro: string;
  userId: string;
  share: AppSchema['share'];
  isCollection: boolean;
}

export type ShareChatEditType = {
  name: string;
};

/* agent */
/* question classify */
export type ClassifyQuestionAgentItemType = {
  value: string;
  key: string;
};

export type VariableItemType = {
  id: string;
  key: string;
  label: string;
  type: `${VariableInputEnum}`;
  required: boolean;
  maxLen: number;
  enums: { value: string }[];
};

/* app module */
export type AppModuleInputItemType = { key: string; value?: any; connected?: boolean };
export type AppModuleOutputItemType = { key: string; targets: FlowOutputTargetItemType[] };
export type AppModuleItemType = {
  moduleId: string;
  position?: XYPosition;
  flowType: `${FlowModuleTypeEnum}`;
  inputs: AppModuleInputItemType[];
  outputs: AppModuleOutputItemType[];
};

export type AppItemType = {
  id: string;
  name: string;
  modules: AppModuleItemType[];
};

export type RunningModuleItemType = {
  moduleId: string;
  flowType: `${FlowModuleTypeEnum}`;
  inputs: {
    key: string;
    value?: any;
  }[];
  outputs: {
    key: string;
    answer?: boolean;
    response?: boolean;
    value?: any;
    targets: {
      moduleId: string;
      key: string;
    }[];
  }[];
};