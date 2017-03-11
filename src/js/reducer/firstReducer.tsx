import { addAction } from '../action/addAction';

import {rootPath} from '../common';

import Immutable = require('immutable');

let initialState:Immutable.Map<String,any>=Immutable.Map({
  number:0,
  rootPath,
});

export function firstReduce(state:any = initialState, action:any): any {
  switch (action.type) {
    case "ADD":{
      return state.set('number',state.get('number')+1);
    }
    default:
      return state;
  }
}