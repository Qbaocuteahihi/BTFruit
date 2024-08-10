import {opState} from "./op.state";
import {createReducer, on} from "@ngrx/store";
import * as opActions from "./op.actions";
import {getopList} from "./op.actions";


const initialState: opState = {
  opList: [],
  isLoadingList: false,
  listError: '',
  // opDetailList: [],
  // isLoadingDetailList: false,
  // detailListError: ''
}

export const opReducer = createReducer(
  initialState,
  on(opActions.getopList, (state, action) => {
    console.log(action.type)
    return <opState>{
      ...state,
      isLoadingList: true
    }
  }),
  on(opActions.getopListSuccess, (state, action) => {
    console.log(action.type)
    return <opState>{
      ...state,
      isLoadingList: false,
      opList: action.opList
    }
  }),
  on(opActions.getopListFailure, (state, action) => {
    console.log(action.type)
    return <opState>{
      ...state,
      isLoading: false,
      error: 'Error loading op list'
    }
  }),

  // on(opActions.getop, (state, action) => {
  //   console.log(action.type)
  //   return <opState>{
  //     ...state,
  //     isLoadingDetailList: true
  //   }
  // }),
  // on(opActions.getopSuccess, (state, action) => {
  //   console.log(action.type)
  //   return <opState>{
  //     ...state,
  //     isLoadingDetailList: false,
  //     opDetailList: [...state.detailListError, action.op]
  //   }
  // }),
  // on(opActions.getopFailure, (state, action) => {
  //   console.log(action.type)
  //   return <opState>{
  //     ...state,
  //     isLoadingDetailList: false,
  //     detailListError: 'Error loading op detail list'
  //   }
  // })
)
