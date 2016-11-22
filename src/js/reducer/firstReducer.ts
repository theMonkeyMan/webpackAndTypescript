import { addAction } from '../action/addAction';

const initialState = {
  hasBarked: false
};

export function firstReduce(state:any = initialState, action:any): any {
  switch (action.type) {
    case addAction:
      return state.hasBarked = true;
    default:
      return state;
  }
}