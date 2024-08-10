import {createAction, props} from "@ngrx/store";
import { opModel} from "../app/models/op.model";


export const getopList
  = createAction('[op] Get op List');
export const getopListSuccess
  = createAction('[op] Get op List Success', props<{
  opList: opModel[]
}>());
export const getopListFailure
  = createAction('[op] Get op List Failure');

// export const getop
//   = createAction('[op] Get op', props<{ name: string }>());
// export const getopSuccess
//   = createAction('[op] Get op Success', props<{
//   op: opDetailModel
// }>());
// export const getopFailure
//   = createAction('[op] Get op Failure');
