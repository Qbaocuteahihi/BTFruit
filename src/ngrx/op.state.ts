import {opModel} from "../app/models/op.model";


export interface opState {
  opList: opModel[];
  isLoadingList: boolean;
  listError: string;

  // opDetailList: opDetailModel[];
  // isLoadingDetailList: boolean;
  // detailListError: string;
}
