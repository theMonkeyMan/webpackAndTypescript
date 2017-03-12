import { addAction } from '../action/addAction';

import initialState from './initialState';

export function firstReduce(state:any = initialState, action:any): any {
  switch (action.type) {
    case "ADD":{
      return state.set('number',state.get('number')+1);
    }
    default:
      return state;
  }
}